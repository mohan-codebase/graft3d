"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Are training 3D printed models expensive?",
    answer: (
      <span>
        The cost of training 3D-printed models varies depending on the no of the bone model, types
        of bone etc ..you can email{" "}
        <a href="mailto:sales@graft3d.com" className="text-primary underline">
          sales@graft3d.com
        </a>
      </span>
    ),
  },
  {
    question: "Where can I purchase training 3D printed models?",
    answer: (
      <span>
        You can buy them directly by placing an order with us at{" "}
        <a href="mailto:sales@graft3d.com" className="text-primary underline">
          sales@graft3d.com
        </a>{" "}
        or buy them online from our website.
      </span>
    ),
  },
  {
    question: "How long does it take to receive an Aasthi 3D Printed Anatomical Model?",
    answer: "It typically takes 2-3 weeks to receive your custom-made model.",
  },
  {
    question: "Are Asthi models reusable?",
    answer:
      "Asthi models are not intended to be reused as they are used through models made for drilling and cutting the bone, which will not make the anatomical model reusable..",
  },
  {
    question: "What are Graft3D Aasthi 3D printed Training models?",
    answer:
      "Asthi's 3D Printed Anatomical Model is a game-changing product that offers unparalleled benefits to medical colleges and professionals. With its advanced technology, customisable design, and affordability, Asthi is the ideal solution for surgical practice and medical training. Invest in Asthi today and elevate your institution to the next level.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center text-[30px] font-bold text-[#1B6DB1] mb-6"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          FAQs
        </h2>
        <div className="w-full">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left py-[15px] px-[15px] border-b border-[#d5d8dc] text-[#1B6DB1] text-[16px] font-semibold"
                >
                  <span>{item.question}</span>
                  <span className="text-[#1B6DB1] text-lg font-semibold">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-b border-[#d5d8dc] px-[15px] py-[15px] text-[16px] text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
