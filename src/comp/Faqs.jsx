import Accordion from "./Accordion";
import line from "../assets/faq/line.svg";
import arrow from "../assets/faq/arrow.svg";
import { useState } from "react";

const faqData = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "You can use React with Tailwind CSS by installing Tailwind CSS in your React project and using its utility classes in your components.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#1E3A2B]">
      <h2 className="z-[100] relative text-[36px] md:text-[68px] font-bold text-center text-white pt-[60px] md:pt-[112px] mb-[40px] md:mb-[122px]">
        FAQs
      </h2>

      <div className="flex flex-col gap-[8px] w-[90%] md:w-[80%] mx-auto">
        {faqData.map((item, index) => (
          <div
            className="bg-[#264836] cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-between p-[18px] md:px-[40px] md:pt-[40px] md:pb-[40px]">
              <h1 className="text-[16px] md:text-[40px] text-white italic">{item.question}</h1>
              {open ? (
                <img src={arrow} alt="arrow" className="w-[13px] md:w-[44px] h-[6px] md:h-[21px]"/>
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
            {openIndex === index && (
              <div className="px-[18px] pb-[18px] md:px-[40px] md:pb-[40px] text-white">
                - {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[16px] md:gap-[24px] sm:flex-row overflow-hidden mt-[40px] md:mt-[182px] pb-[45px] md:pb-[122px]">
        <button className="font-centra-extrabold text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] hover:border-black btn btn23 text-lg font-montserrat text-black cursor-pointer transition duration-800 relative overflow-hidden rounded-full">
          View Proposal
        </button>
      </div>
    </div>
  );
};

export default Faqs;
