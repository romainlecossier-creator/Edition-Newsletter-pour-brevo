
import React, { useState, useEffect } from 'react';
import { NewsletterEvent } from '../types';
import RichTextEditor from './RichTextEditor';
import { ChevronDownIcon, ChevronUpIcon, TrashIcon, EyeIcon, EyeOffIcon, DragHandleIcon } from './icons';

interface EventEditorProps {
  event: NewsletterEvent;
  onUpdate: (id: string, field: keyof NewsletterEvent, value: any) => void;
  onDelete: (id: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const EventEditor: React.FC<EventEditorProps> = ({ event, onUpdate, onDelete, onDragStart, onDragEnd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagsValue, setTagsValue] = useState(event.tags.join(', '));

  useEffect(() => {
    setTagsValue(event.tags.join(', '));
  }, [event.tags]);

  const handleChange = (field: keyof NewsletterEvent, value: any) => {
    onUpdate(event.id, field, value);
  };
  
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsValue(e.target.value);
  };

  const handleTagsBlur = () => {
    const newTags = tagsValue.split(',').map(t => t.trim()).filter(Boolean);
    if (JSON.stringify(newTags) !== JSON.stringify(event.tags)) {
      onUpdate(event.id, 'tags', newTags);
    }
  };


  return (
    <div className="bg-gray-700 rounded-lg shadow-md transition-all duration-300">
      <div 
        className="flex justify-between items-center p-4"
      >
        <div 
          className="flex items-center space-x-3 flex-1 cursor-grab"
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onMouseDown={(e) => e.stopPropagation()}
        >
            <DragHandleIcon />
            <h2 
              className="font-semibold text-lg truncate flex-1 pr-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              dangerouslySetInnerHTML={{ __html: event.title || "Événement sans titre" }}>
            </h2>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={(e) => { e.stopPropagation(); handleChange('isEnabled', !event.isEnabled); }} className="p-1 text-gray-400 hover:text-white" title={event.isEnabled ? "Masquer" : "Afficher"}>
            {event.isEnabled ? <EyeIcon /> : <EyeOffIcon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-600">
          <div className="space-y-4">
            <RichTextEditor label="Titre" value={event.title} onChange={val => handleChange('title', val)} minHeight={40} />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tags (séparés par des virgules)</label>
              <input
                type="text"
                value={tagsValue}
                onChange={handleTagsChange}
                onBlur={handleTagsBlur}
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>
            <RichTextEditor label="Date" value={event.date} onChange={val => handleChange('date', val)} minHeight={40} />
            <RichTextEditor label="Lieu" value={event.location} onChange={val => handleChange('location', val)} minHeight={80} />
            <InputField label="URL de l'image" value={event.imageUrl} onChange={val => handleChange('imageUrl', val)} />
            <RichTextEditor label="Description" value={event.descriptionHtml} onChange={val => handleChange('descriptionHtml', val)} />
            <InputField label="URL du lien d'information" value={event.infoLinkUrl} onChange={val => handleChange('infoLinkUrl', val)} />
          </div>
          <div className="mt-6 flex justify-end items-center">
            <button onClick={() => onDelete(event.id)} className="p-2 rounded-md bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
              <TrashIcon />
              <span>Supprimer</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
    />
  </div>
);
