
import React from 'react';

interface PreviewPanelProps {
  htmlContent: string;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ htmlContent }) => {
  return (
    <div className="w-full h-full bg-white flex flex-col">
       <div className="p-4 bg-gray-200 text-gray-800 font-semibold border-b border-gray-300">
            Aperçu en direct
       </div>
       <iframe
        srcDoc={htmlContent}
        title="Newsletter Preview"
        className="w-full flex-grow border-none"
        sandbox="allow-same-origin"
      />
    </div>
  );
};
