import React, { useState } from "react";
import "./asked.scss";

const faqs = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer:
      "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
  },
  {
    question: "Can I use the materials for community teaching?",
    answer: "Yes, our resources are designed to support community education.",
  },
  {
    question: "Is there a free trial for the courses?",
    answer:
      "We offer a 7-day free trial for you to explore the course content.",
  },
  {
    question: "Who can benefit from these courses?",
    answer:
      "Our courses are designed for students, teachers, and community leaders.",
  },
];

const Asked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="asked">
      <div className="asked__header">
        <h2 className="asked__title">Frequently asked questions</h2>
        <p className="asked__subtitle">
          If you have any further questions, please contact us
        </p>
      </div>
      <div className="asked__grid">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`asked__item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="asked__question">
              {faq.question}
              <span className="asked__icon">
                {activeIndex === index ? "×" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="asked__answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asked;
