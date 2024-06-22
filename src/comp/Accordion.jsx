import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-4 focus:outline-none  text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="bg-white text-black py-2 px-4">{answer}</div>}
    </div>
  );
};

export default Accordion;
