import { NewsletterEvent, SpecialBlock } from '../types.ts';

const isHeaderTable = (element: Element): boolean => {
    return element.classList.contains('r33-o') && element.querySelector('h3') !== null;
};

const findAndParseSpecialBlock = (doc: Document): { block: SpecialBlock | null, element: Element | null } => {
    const specialBlockEl = doc.querySelector('table.r32-o .r4-c[style*="background-color: #bc4653;"]')?.closest('table.r32-o');
    if (!specialBlockEl) return { block: null, element: null };

    const imageUrl = specialBlockEl.querySelector('td.r36-i img')?.getAttribute('src') || '';
    const title = specialBlockEl.querySelector('h3 span')?.textContent?.trim() || '';
    const description = specialBlockEl.querySelector('p#isPasted span')?.textContent?.trim() || '';
    
    const scheduleAndLocationStrongElements = Array.from(specialBlockEl.querySelectorAll('p > span > strong'));
    const schedule = scheduleAndLocationStrongElements[0]?.textContent?.trim() || '';
    const location = scheduleAndLocationStrongElements[1]?.textContent?.trim() || '';

    const age = specialBlockEl.querySelector('p > span[style*="font-size: 14px"]')?.textContent?.trim() || '';

    const block: SpecialBlock = {
        id: 'special-block-cle-des-mots',
        originalHtml: specialBlockEl.outerHTML,
        imageUrl,
        title,
        description,
        schedule,
        location,
        age,
        isEnabled: true,
    };
    
    return { block, element: specialBlockEl };
}

export const parseNewsletter = (html: string): { events: NewsletterEvent[], specialBlock: SpecialBlock | null } => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const { block: specialBlock, element: specialBlockElement } = findAndParseSpecialBlock(doc);
    
    // Temporarily remove the special block to avoid it being parsed as an event
    if (specialBlockElement) {
        specialBlockElement.remove();
    }

    const allTables = Array.from(doc.body.children).filter(el => el.tagName === 'TABLE') as HTMLTableElement[];
    const events: NewsletterEvent[] = [];
    let i = 0;

    while (i < allTables.length) {
        const currentTable = allTables[i];
        if (isHeaderTable(currentTable)) {
            const headerTable = currentTable;
            const descriptionTable = allTables[i + 1];
            const infoLinkTable = allTables[i + 2];
            const separatorTable = allTables[i + 3];

            if (descriptionTable && infoLinkTable && separatorTable) {
                const tags = Array.from(headerTable.querySelectorAll('span[style*="background-color"]')).map(span => span.textContent?.trim() || '').filter(Boolean);
                const title = headerTable.querySelector('h3')?.innerHTML.trim() || '';
                const date = headerTable.querySelector('p > strong')?.innerHTML.trim() || '';
                const location = headerTable.querySelector('td.r42-c div')?.innerHTML.trim() || '';
                const imageUrl = headerTable.querySelector('img')?.getAttribute('src') || '';
                const descriptionContainer = descriptionTable.querySelector('.r44-c div, .r44-c');
                const descriptionHtml = descriptionContainer?.innerHTML.trim() || '';
                const infoLinkAnchor = infoLinkTable.querySelector('a');
                const infoLinkUrl = infoLinkAnchor?.getAttribute('href') || '#';

                events.push({
                    id: `event-${Date.now()}-${events.length}`,
                    originalHeaderTable: headerTable.outerHTML,
                    originalDescriptionTable: descriptionTable.outerHTML,
                    originalInfoLinkTable: infoLinkTable.outerHTML,
                    originalSeparatorTable: separatorTable.outerHTML,
                    tags,
                    title,
                    date,
                    location,
                    imageUrl,
                    descriptionHtml,
                    infoLinkUrl,
                    isEnabled: true,
                });
                i += 4;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    return { events, specialBlock };
};

export const generateNewsletter = (originalHtml: string, events: NewsletterEvent[], specialBlock: SpecialBlock | null, globalColor: string): string => {
    const initialParser = new DOMParser();
    const initialDoc = initialParser.parseFromString(originalHtml, 'text/html');
    const styleTag = initialDoc.head.querySelector('style');
    const styleHtml = styleTag ? styleTag.outerHTML : '';
    
    const eventsHtml = events
        .filter(event => event.isEnabled)
        .map(event => {
            const parser = new DOMParser();

            const headerDoc = parser.parseFromString(event.originalHeaderTable, 'text/html');
            const headerBody = headerDoc.body;
            
            const tagContainer = headerBody.querySelector('.r39-c table > tbody > tr');
            if (tagContainer) {
                const firstTagTd = tagContainer.querySelector('td');
                tagContainer.innerHTML = '';
                if (firstTagTd) {
                    event.tags.forEach(tagText => {
                        if (tagText) {
                            const newTagTd = firstTagTd.cloneNode(true) as HTMLElement;
                            const newTagSpan = newTagTd.querySelector('span');
                            if (newTagSpan) {
                                newTagSpan.textContent = tagText;
                                newTagSpan.style.backgroundColor = globalColor;
                            }
                            tagContainer.appendChild(newTagTd);
                        }
                    });
                }
            }

            const titleEl = headerBody.querySelector('h3');
            if (titleEl) titleEl.innerHTML = event.title;
            const dateEl = headerBody.querySelector('p > strong');
            if (dateEl) dateEl.innerHTML = event.date;
            
            const locationContainer = headerBody.querySelector('td.r42-c div');
            if(locationContainer) {
                locationContainer.innerHTML = event.location;
            }
            
            const imgEl = headerBody.querySelector('img');
            if (imgEl) {
                imgEl.setAttribute('src', event.imageUrl);
            }
            const finalHeaderHtml = headerBody.firstElementChild?.outerHTML || '';

            const descDoc = parser.parseFromString(event.originalDescriptionTable, 'text/html');
            const descBody = descDoc.body;
            const descContainer = descBody.querySelector('.r44-c div, .r44-c');
            if (descContainer) descContainer.innerHTML = event.descriptionHtml;
            const finalDescHtml = descBody.firstElementChild?.outerHTML || '';

            const infoDoc = parser.parseFromString(event.originalInfoLinkTable, 'text/html');
            const infoBody = infoDoc.body;
            const infoLinkEl = infoBody.querySelector('a');
            if (infoLinkEl) {
                infoLinkEl.setAttribute('href', event.infoLinkUrl);
                infoLinkEl.style.color = globalColor;
                const parentSpan = infoLinkEl.closest('span');
                if (parentSpan) {
                    parentSpan.style.color = globalColor;
                }
            }
            const finalInfoHtml = infoBody.firstElementChild?.outerHTML || '';

            return finalHeaderHtml + finalDescHtml + finalInfoHtml + event.originalSeparatorTable;
        })
        .join('\n');

    let specialBlockHtml = '';
    if (specialBlock && specialBlock.isEnabled) {
        const parser = new DOMParser();
        const blockDoc = parser.parseFromString(specialBlock.originalHtml, 'text/html');
        const blockBody = blockDoc.body;
        
        const imgEl = blockBody.querySelector('td.r36-i img');
        if (imgEl) imgEl.setAttribute('src', specialBlock.imageUrl);

        const titleEl = blockBody.querySelector('h3 span');
        if (titleEl) titleEl.textContent = specialBlock.title;

        const descEl = blockBody.querySelector('p#isPasted span');
        if (descEl) descEl.textContent = specialBlock.description;

        const scheduleAndLocationPElements = blockBody.querySelectorAll('p > span > strong');
        if (scheduleAndLocationPElements[0]) {
            scheduleAndLocationPElements[0].textContent = `${specialBlock.schedule}\u00A0`; // \u00A0 is a non-breaking space
        }
        if (scheduleAndLocationPElements[1]) {
            scheduleAndLocationPElements[1].textContent = `${specialBlock.location}\u00A0`;
        }

        const ageEl = blockBody.querySelector('p > span[style*="font-size: 14px"]');
        if (ageEl) ageEl.textContent = specialBlock.age;

        specialBlockHtml = blockBody.firstElementChild?.outerHTML || '';
    }
    
    return styleHtml + '\n' + eventsHtml + '\n' + specialBlockHtml;
};

const parseCsvLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++; 
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

const formatDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const parts = dateStr.split('/');
    if (parts.length !== 3) return dateStr;
    const [day, month, year] = parts;
    const date = new Date(parseInt(`20${year}`), parseInt(month) - 1, parseInt(day));
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });
};

export const parseCsvToEvents = (csvString: string, templateEvent: NewsletterEvent): NewsletterEvent[] => {
    const lines = csvString.trim().replace(/\r\n/g, '\n').split('\n');
    if (lines.length < 2) return [];

    const headers = parseCsvLine(lines[0]).map(h => h.trim());
    const events: NewsletterEvent[] = [];

    const headerMap = {
        title: headers.indexOf('Titre'),
        tag: headers.indexOf('Tag'),
        location: headers.indexOf('Lieu'),
        startDate: headers.indexOf('Date de début'),
        endDate: headers.indexOf('Date de fin'),
        description: headers.indexOf('Description'),
        info: headers.indexOf('Informations Horaire/Âge'),
        address1: headers.indexOf('Adresse (ligne 1)'),
        address2: headers.indexOf('Adresse (ligne 2)'),
        imageUrl: headers.indexOf("URL de l'image"),
    };
    
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = parseCsvLine(lines[i]);
        if (values.every(v => !v)) continue;

        const newEvent: NewsletterEvent = JSON.parse(JSON.stringify(templateEvent));

        newEvent.id = `event-csv-${Date.now()}-${i}`;
        newEvent.isEnabled = true;
        newEvent.title = values[headerMap.title] || 'Événement sans titre';
        newEvent.tags = values[headerMap.tag] ? [values[headerMap.tag]] : [];
        newEvent.imageUrl = values[headerMap.imageUrl] || 'https://picsum.photos/186/250';
        newEvent.infoLinkUrl = '#';
        
        const startDateStr = values[headerMap.startDate];
        const endDateStr = values[headerMap.endDate];
        const infoStr = values[headerMap.info] || '';
        const timeMatch = infoStr.match(/(\d{1,2}h(\d{2})?)/);
        const time = timeMatch ? `à ${timeMatch[0]}` : '';

        let dateText = '';
        if (startDateStr && (!endDateStr || startDateStr === endDateStr)) {
            dateText = `Le ${formatDate(startDateStr)} ${time}`.trim();
        } else if (startDateStr && endDateStr) {
            dateText = `Du ${formatDate(startDateStr)} au ${formatDate(endDateStr)}`.trim();
        }
        newEvent.date = dateText;

        const locationParts = [
            values[headerMap.location],
            values[headerMap.address1],
            values[headerMap.address2]
        ].filter(Boolean);
        newEvent.location = locationParts.join('<br>');

        const descriptionText = values[headerMap.description] || '';
        const restOfInfo = infoStr.replace(timeMatch ? timeMatch[0] : '', '').trim();
        let descriptionHtml = `<p>${descriptionText}</p>`;
        if(restOfInfo) {
            descriptionHtml += `<p><em>${restOfInfo}</em></p>`;
        }
        newEvent.descriptionHtml = descriptionHtml;

        events.push(newEvent);
    }
    return events;
}