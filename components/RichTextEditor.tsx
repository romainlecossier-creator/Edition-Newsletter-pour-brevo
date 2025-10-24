import React, { useRef, useEffect } from 'react';
import { BoldIcon, ItalicIcon, UnderlineIcon, ListBulletedIcon, ListNumberedIcon, EnterKeyIcon } from './icons';

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  minHeight?: number;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, value, onChange, minHeight = 120 }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Synchronise le contenu de l'éditeur avec la prop `value` si elle change
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCmd = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput(); // Réfléchit immédiatement les changements dans l'état
  };
  
  const ToolbarButton: React.FC<{ onClick: () => void, title: string, children: React.ReactNode }> = ({ onClick, title, children }) => (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className="p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
      title={title}
    >
      {children}
    </button>
  );

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <div className="bg-gray-800 border border-gray-600 rounded-md focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
        <div className="flex items-center flex-wrap space-x-1 p-1 border-b border-gray-600">
          <ToolbarButton onClick={() => execCmd('bold')} title="Gras">
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCmd('italic')} title="Italique">
            <ItalicIcon />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCmd('underline')} title="Souligné">
            <UnderlineIcon />
          </ToolbarButton>
          <div className="w-[1px] h-5 bg-gray-600 mx-1"></div>
          <ToolbarButton onClick={() => execCmd('insertUnorderedList')} title="Liste à puces">
            <ListBulletedIcon />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCmd('insertOrderedList')} title="Liste numérotée">
            <ListNumberedIcon />
          </ToolbarButton>
          <div className="w-[1px] h-5 bg-gray-600 mx-1"></div>
          <ToolbarButton onClick={() => execCmd('insertHTML', '<br>')} title="Saut de ligne">
            <EnterKeyIcon />
          </ToolbarButton>
        </div>
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          style={{ minHeight: `${minHeight}px` }}
          className="w-full p-2 text-white font-sans text-base outline-none"
          dangerouslySetInnerHTML={{ __html: value }} // Contenu initial
        />
      </div>
    </div>
  );
};

export default RichTextEditor;