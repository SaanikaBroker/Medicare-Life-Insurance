
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full flex justify-between items-center p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="text-tn-accent mr-4">{icon}</div>
          <h3 className="text-2xl font-semibold text-tn-primary">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="text-tn-primary" size={28} /> : <ChevronDown className="text-tn-primary" size={28} />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
