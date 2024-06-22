import Accordion from "./Accordion";

const Faqs = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question: "How do I use React with Tailwind CSS?",
      answer:
        "You can use React with Tailwind CSS by installing Tailwind CSS in your React project and using its utility classes in your components.",
    },
  ];
  return (
    <div className="  bg-[#1E3A2B] min-h-screen flex items-center justify-center">
      <div className=" w-[1644px] mx-auto p-4 bg-[#264836]">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">FAQs</h2>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
