"use client";

import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string | React.ReactNode;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default first open? Image shows first open.

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {items.map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-sm">
                    {/* Header */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full flex items-center justify-between p-5 lg:p-7 text-left transition-colors duration-300 ${activeIndex === index
                            ? 'bg-primary text-white'
                            : 'bg-[#f3f4f6] text-black hover:bg-gray-200'
                            }`}
                    >
                        <span className="font-bold text-base lg:text-xl pr-4">
                            {activeIndex === index ? '- ' : '+ '} {item.question}
                        </span>
                    </button>

                    {/* Content */}
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="bg-[#f9fafb] p-6 lg:p-8 text-gray-700 text-base lg:text-lg leading-relaxed border-t border-gray-100">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
