import React, { useState, useEffect, useCallback } from 'react';
import { EditorPanel } from './components/EditorPanel.tsx';
import { PreviewPanel } from './components/PreviewPanel.tsx';
import { CsvImportModal } from './components/CsvImportModal.tsx';
import { NewsletterEvent, SpecialBlock } from './types.ts';
import { parseNewsletter, generateNewsletter, parseCsvToEvents } from './services/newsletterParser.ts';
import { INITIAL_NEWSLETTER_HTML, NEW_SPECIAL_BLOCK_TEMPLATE } from './constants.ts';

function App() {
  const [events, setEvents] = useState<NewsletterEvent[]>([]);
  const [specialBlock, setSpecialBlock] = useState<SpecialBlock | null>(null);
  const [previewHtml, setPreviewHtml] = useState<string>('');
  const [isReady, setIsReady] = useState(false);
  const [rawHtml, setRawHtml] = useState<string>(INITIAL_NEWSLETTER_HTML);
  const [globalColor, setGlobalColor] = useState<string>('#ef5b6a');

  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [importedCsvEvents, setImportedCsvEvents] = useState<NewsletterEvent[]>([]);

  useEffect(() => {
    if (rawHtml) {
      try {
        const { events: parsedEvents, specialBlock: parsedSpecialBlock } = parseNewsletter(rawHtml);
        if (parsedEvents.length === 0 && !parsedSpecialBlock) {
            alert("Aucun contenu éditable (événement ou bloc spécial) n'a été trouvé dans le code HTML fourni. Assurez-vous que le format est correct.");
        }
        setEvents(parsedEvents);
        setSpecialBlock(parsedSpecialBlock);
      } catch (error) {
        console.error("Error parsing HTML:", error);
        alert("Une erreur est survenue lors de l'analyse du code HTML. Veuillez vérifier la console pour plus de détails et vous assurer que la structure est valide.");
      }
    }
    setIsReady(true);
  }, [rawHtml]);

  useEffect(() => {
    if (isReady) {
      const newHtml = generateNewsletter(rawHtml, events, specialBlock, globalColor);
      setPreviewHtml(newHtml);
    }
  }, [events, specialBlock, isReady, rawHtml, globalColor]);

  const handleUpdateEvent = useCallback((id: string, field: keyof NewsletterEvent, value: any) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === id ? { ...event, [field]: value } : event
      )
    );
  }, []);
  
  const handleUpdateSpecialBlock = useCallback((field: keyof SpecialBlock, value: any) => {
    setSpecialBlock(prevBlock => {
        if (!prevBlock) return null;
        return { ...prevBlock, [field]: value };
    });
  }, []);

  const handleAddEvent = useCallback(() => {
    if (events.length > 0) {
      const lastEvent = events[events.length - 1];
      const newEvent: NewsletterEvent = {
        ...lastEvent,
        id: `event-${Date.now()}`,
        title: "Nouvel Événement",
        tags: ["Nouveau"],
        date: "Date à définir",
        location: "Lieu à définir",
        imageUrl: "https://picsum.photos/186/250",
        descriptionHtml: "<p>Description du nouvel événement.</p>",
        infoLinkUrl: "#",
        isEnabled: true,
      };
      setEvents(prev => [...prev, newEvent]);
    } else {
        alert("Veuillez d'abord charger un modèle HTML contenant au moins un événement pour pouvoir en ajouter de nouveaux.");
    }
  }, [events]);
  
  const handleAddSpecialBlock = useCallback(() => {
    if (specialBlock) {
        alert("Il ne peut y avoir qu'un seul bloc spécial de fin.");
        return;
    }
    setSpecialBlock(NEW_SPECIAL_BLOCK_TEMPLATE);
  }, [specialBlock]);

  const handleDeleteEvent = useCallback((id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  }, []);
  
  const handleDeleteSpecialBlock = useCallback(() => {
    setSpecialBlock(null);
  }, []);

  const handleReorderEvents = useCallback((startIndex: number, endIndex: number) => {
    setEvents(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, []);

  const handleLoadHtml = useCallback((newHtml: string) => {
    if (newHtml && newHtml.trim().length > 0) {
        setRawHtml(newHtml);
    } else {
        alert("Le code HTML ne peut pas être vide.");
    }
  }, []);
  
  const handleCsvFileLoad = async (file: File) => {
    if (events.length === 0) {
      alert("Veuillez charger un modèle HTML contenant au moins un événement avant d'importer un CSV. Le premier événement sert de modèle de style.");
      return;
    }
    const templateEvent = events[0];
    const text = await file.text();
    try {
      const parsedEvents = parseCsvToEvents(text, templateEvent);
      if (parsedEvents.length > 0) {
        setImportedCsvEvents(parsedEvents);
        setIsCsvModalOpen(true);
      } else {
        alert("Aucun événement n'a pu être trouvé dans le fichier CSV. Vérifiez le format du fichier.");
      }
    } catch (error) {
      console.error("Erreur lors de l'analyse du CSV :", error);
      alert("Une erreur est survenue lors de l'analyse du fichier CSV. Veuillez vérifier la console.");
    }
  };

  const handleAddEventsFromCsv = (eventsToAdd: NewsletterEvent[]) => {
    setEvents(prev => [...prev, ...eventsToAdd]);
    setIsCsvModalOpen(false);
    setImportedCsvEvents([]);
  };


  return (
    <>
      <div className="flex h-screen font-sans bg-gray-900 text-white">
        <div className="w-1/3 h-screen overflow-y-auto bg-gray-800 shadow-2xl">
          <EditorPanel 
              events={events} 
              specialBlock={specialBlock}
              onUpdateEvent={handleUpdateEvent} 
              onUpdateSpecialBlock={handleUpdateSpecialBlock}
              onAddEvent={handleAddEvent}
              onAddSpecialBlock={handleAddSpecialBlock}
              onDeleteEvent={handleDeleteEvent}
              onDeleteSpecialBlock={handleDeleteSpecialBlock}
              onReorderEvents={handleReorderEvents}
              generatedHtml={previewHtml}
              onLoadHtml={handleLoadHtml}
              onLoadCsv={handleCsvFileLoad}
              globalColor={globalColor}
              onGlobalColorChange={setGlobalColor}
          />
        </div>
        <div className="w-2/3 h-screen">
          <PreviewPanel htmlContent={previewHtml} />
        </div>
      </div>
      <CsvImportModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        csvEvents={importedCsvEvents}
        onAddEvents={handleAddEventsFromCsv}
      />
    </>
  );
}

export default App;