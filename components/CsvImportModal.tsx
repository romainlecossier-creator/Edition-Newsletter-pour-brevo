import React, { useState, useMemo, useEffect } from 'react';
import { NewsletterEvent } from '../types.ts';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  csvEvents: NewsletterEvent[];
  onAddEvents: (selectedEvents: NewsletterEvent[]) => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({ isOpen, onClose, csvEvents, onAddEvents }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Select all by default when modal opens with new events
    if (csvEvents.length > 0) {
      setSelectedIds(new Set(csvEvents.map(e => e.id)));
    }
  }, [csvEvents]);

  const handleToggleSelect = (eventId: string) => {
    setSelectedIds(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(eventId)) {
        newSelected.delete(eventId);
      } else {
        newSelected.add(eventId);
      }
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === csvEvents.length) {
      setSelectedIds(new Set()); // Deselect all
    } else {
      setSelectedIds(new Set(csvEvents.map(e => e.id))); // Select all
    }
  };

  const handleAdd = () => {
    const eventsToAdd = csvEvents.filter(event => selectedIds.has(event.id));
    onAddEvents(eventsToAdd);
    onClose();
  };

  if (!isOpen) return null;

  const isAllSelected = selectedIds.size === csvEvents.length && csvEvents.length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
        <h3 className="text-xl font-bold p-4 border-b border-gray-700 text-purple-400">Importer des événements depuis un CSV</h3>
        
        <div className="p-4 border-b border-gray-700 flex items-center">
            <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="h-5 w-5 rounded bg-gray-700 border-gray-500 text-purple-600 focus:ring-purple-500"
            />
            <label className="ml-3 text-white">
                {isAllSelected ? "Désélectionner tout" : "Sélectionner tout"} ({selectedIds.size} / {csvEvents.length})
            </label>
        </div>

        <div className="p-4 flex-grow overflow-y-auto space-y-3">
            {csvEvents.map(event => (
                <div key={event.id} className="flex items-start bg-gray-700 p-3 rounded-md">
                    <input
                        type="checkbox"
                        checked={selectedIds.has(event.id)}
                        onChange={() => handleToggleSelect(event.id)}
                        className="h-5 w-5 rounded bg-gray-900 border-gray-600 text-purple-600 focus:ring-purple-500 mt-1"
                    />
                    <div className="ml-4 text-sm text-gray-300">
                        <div className="font-bold text-base text-white" dangerouslySetInnerHTML={{ __html: event.title }}></div>
                        <div className="mt-1" dangerouslySetInnerHTML={{ __html: event.date }}></div>
                        <div className="mt-1 italic" dangerouslySetInnerHTML={{ __html: event.location }}></div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="p-4 flex justify-end space-x-4 border-t border-gray-700">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors">Annuler</button>
          <button 
            onClick={handleAdd} 
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedIds.size === 0}
            >
            Ajouter les {selectedIds.size} événements
          </button>
        </div>
      </div>
    </div>
  );
};