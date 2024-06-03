import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left py-4 focus:outline-none flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-medium">{question}</h3>
          <span>+</span>
        </button>
        {isOpen && <p className="py-2">{answer}</p>}
      </div>
    </div>
  );
};

export default Accordion;
