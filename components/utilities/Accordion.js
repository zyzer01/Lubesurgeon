'use client';

import React, { useState } from 'react';
import '/styles/accordionItem.css';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div
        className="accordion-header flex justify-between bg-light mb-2 p-4 rounded-lg"
        onClick={toggleAccordion}>
        <h3 className="text-base text-secondary">{title}</h3>
        <svg className={`icon ${isOpen ? 'open' : 'closed'}`} viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : 'closed'}`}
        style={{ maxHeight: isOpen ? 'none' : 0 }}>
        <p className="px-5 py-6 text-white bg-balablue rounded">{content}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
