import React, { useState, useRef } from 'react';
import { NewsletterEvent, SpecialBlock } from '../types';
import { EventEditor } from './EventEditor';
import { SpecialBlockEditor } from './SpecialBlockEditor';
import { PlusIcon, ClipboardIcon, CheckIcon, CodeIcon, UploadIcon, PaintBrushIcon } from './icons';

interface EditorPanelProps {
  events: NewsletterEvent[];
  specialBlock: SpecialBlock | null;
  onUpdateEvent: (id: string, field: keyof NewsletterEvent, value: any) => void;
  onUpdateSpecialBlock: (field: keyof SpecialBlock, value: any) => void;
  onAddEvent: () => void;
  onAddSpecialBlock: () => void;
  onDeleteEvent: (id: string) => void;
  onDeleteSpecialBlock: () => void;
  onReorderEvents: (startIndex: number, endIndex: number) => void;
  generatedHtml: string;
  onLoadHtml: (html: string) => void;
  onLoadCsv: (file: File) => void;
  globalColor: string;
  onGlobalColorChange: (color: string) => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({ 
  events, 
  specialBlock, 
  onUpdateEvent, 
  onUpdateSpecialBlock,
  onAddEvent, 
  onAddSpecialBlock,
  onDeleteEvent, 
  onDeleteSpecialBlock,
  onReorderEvents, 
  generatedHtml, 
  onLoadHtml,
  onLoadCsv,
  globalColor,
  onGlobalColorChange
}) => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [htmlInput, setHtmlInput] = useState('');
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const csvInputRef = useRef<HTMLInputElement>(null);
  
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const dragItemIndex = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dragItemIndex.current = index;
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (dragItemIndex.current !== null && dragItemIndex.current !== dropIndex) {
      onReorderEvents(dragItemIndex.current, dropIndex);
    }
    dragItemIndex.current = null;
    setDraggingIndex(null);
  };
  
  const handleDragEnd = () => {
      setDraggingIndex(null);
      dragItemIndex.current = null;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLoad = () => {
    onLoadHtml(htmlInput);
    setIsModalOpen(false);
    setHtmlInput('');
  };

  const handleCsvButtonClick = () => {
    csvInputRef.current?.click();
  };

  const handleCsvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onLoadCsv(file);
    }
    e.target.value = ''; // Reset for re-uploading the same file
  };
    
  return (
    <div className="p-4 space-y-4">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <h3 className="text-xl font-bold p-4 border-b border-gray-700 text-purple-400">Charger un modèle HTML</h3>
            <div className="p-4 flex-grow">
              <textarea
                value={htmlInput}
                onChange={(e) => setHtmlInput(e.target.value)}
                placeholder="Collez le code HTML de votre newsletter ici..."
                className="w-full h-full bg-gray-900 border border-gray-600 rounded-md p-3 text-white font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none"
              />
            </div>
            <div className="p-4 flex justify-end space-x-4 border-t border-gray-700">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors">Annuler</button>
              <button onClick={handleLoad} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">Charger le modèle</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-purple-400">Éditeur</h1>
        <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-700 rounded-full h-10 px-3 space-x-2" title="Couleur principale des badges et liens">
                <label htmlFor="global-color-picker" className="cursor-pointer">
                    <PaintBrushIcon />
                </label>
                <input 
                    id="global-color-picker"
                    type="color" 
                    value={globalColor} 
                    onChange={(e) => onGlobalColorChange(e.target.value)}
                    className="w-6 h-6 p-0 border-none bg-transparent cursor-pointer appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full"
                    aria-label="Choisir une couleur"
                />
                <div className="w-[1px] h-5 bg-gray-500"></div>
                <input
                    type="text"
                    value={globalColor}
                    onChange={(e) => onGlobalColorChange(e.target.value)}
                    className="w-24 bg-transparent text-white font-mono text-sm focus:outline-none"
                    placeholder="#ef5b6a"
                    aria-label="Couleur globale en format hexadécimal"
                />
            </div>

           <input type="file" accept=".csv" ref={csvInputRef} onChange={handleCsvFileChange} className="hidden" />
           <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-transform transform hover:scale-110"
            title="Charger un modèle HTML"
           >
            <CodeIcon />
           </button>
            <button
              onClick={handleCsvButtonClick}
              className="p-2 bg-teal-600 hover:bg-teal-700 rounded-full text-white transition-transform transform hover:scale-110"
              title="Importer depuis un CSV"
            >
              <UploadIcon />
            </button>
           <div className="relative">
             <button
              onClick={() => setIsAddMenuOpen(prev => !prev)}
              className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-transform transform hover:scale-110"
              title="Ajouter un élément"
             >
              <PlusIcon />
             </button>
             {isAddMenuOpen && (
                <div 
                    className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-20"
                    onMouseLeave={() => setIsAddMenuOpen(false)}
                >
                    <button 
                        onClick={() => { onAddEvent(); setIsAddMenuOpen(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-purple-600"
                    >
                        Ajouter un événement
                    </button>
                    <button 
                        onClick={() => { onAddSpecialBlock(); setIsAddMenuOpen(false); }}
                        disabled={specialBlock !== null}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Ajouter le bloc de fin
                    </button>
                </div>
             )}
           </div>
           <button
            onClick={handleCopy}
            className="p-2 bg-green-600 hover:bg-green-700 rounded-full text-white transition-transform transform hover:scale-110"
            title="Copier le code HTML"
           >
            {copied ? <CheckIcon /> : <ClipboardIcon />}
           </button>
        </div>
      </div>

      <div className="space-y-2">
        {events.map((event, index) => (
           <div
            key={event.id}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            style={{ opacity: draggingIndex === index ? 0.5 : 1 }}
          >
            <EventEditor 
              event={event} 
              onUpdate={onUpdateEvent}
              onDelete={onDeleteEvent}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
            />
          </div>
        ))}
      </div>

      {specialBlock && (
        <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-600">
            <h2 className="text-xl font-semibold text-purple-300 mb-2 px-2">Bloc Spécial de Fin</h2>
            <SpecialBlockEditor 
                block={specialBlock}
                onUpdate={onUpdateSpecialBlock}
                onDelete={onDeleteSpecialBlock}
            />
        </div>
      )}
    </div>
  );
};