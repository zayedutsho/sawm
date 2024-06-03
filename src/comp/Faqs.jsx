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
    <div className="  w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div>
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
