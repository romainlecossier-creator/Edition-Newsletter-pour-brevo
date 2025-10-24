import React, { useState } from 'react';
import { SpecialBlock } from '../types';
import { ChevronDownIcon, ChevronUpIcon, EyeIcon, EyeOffIcon, TrashIcon } from './icons';

interface SpecialBlockEditorProps {
  block: SpecialBlock;
  onUpdate: (field: keyof SpecialBlock, value: any) => void;
  onDelete: () => void;
}

export const SpecialBlockEditor: React.FC<SpecialBlockEditorProps> = ({ block, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (field: keyof SpecialBlock, value: any) => {
    onUpdate(field, value);
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-md transition-all duration-300">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold text-lg truncate flex-1 pr-4">{block.title || "Bloc spécial sans titre"}</h2>
        <div className="flex items-center space-x-2">
          <button onClick={(e) => { e.stopPropagation(); handleChange('isEnabled', !block.isEnabled); }} className="p-1 text-gray-400 hover:text-white" title={block.isEnabled ? "Masquer" : "Afficher"}>
            {block.isEnabled ? <EyeIcon /> : <EyeOffIcon />}
          </button>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-600">
          <div className="space-y-4">
            <InputField label="Titre" value={block.title} onChange={val => handleChange('title', val)} />
            <InputField label="URL de l'image" value={block.imageUrl} onChange={val => handleChange('imageUrl', val)} />
            <TextAreaField label="Description" value={block.description} onChange={val => handleChange('description', val)} rows={4} />
            <InputField label="Horaire" value={block.schedule} onChange={val => handleChange('schedule', val)} />
            <InputField label="Lieu" value={block.location} onChange={val => handleChange('location', val)} />
            <InputField label="Âge" value={block.age} onChange={val => handleChange('age', val)} />
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={onDelete} className="p-2 rounded-md bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
              <TrashIcon />
              <span>Supprimer le bloc</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper components (can be moved to a shared file later)
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

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, value, onChange, rows = 5 }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      rows={rows}
      className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white font-sans text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
    />
  </div>
);