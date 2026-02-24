"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'What are the applications of EINSCAN HUMAN?',
        answer: 'By integrating LED structured light and invisible infrared light into one device, EinScan-H can be used in a wide range of applications. The invisible infrared light source provides a reliable solution to the problem of acquiring dark-coloured objects and enables an easy acquisition of human hair. It is widely used in medical aesthetics, orthotics & prosthetics, and virtual surgical planning.'
    },
    {
        question: 'Can I scan a human face with the EinScan H?',
        answer: 'Yes, the EinScan H is specifically designed for human scanning. It features a "Face Scan" mode that uses invisible infrared light to scan the face comfortably without blinding the patient, capturing high-quality data and textures.'
    },
    {
        question: 'How fast can I scan a full body?',
        answer: 'With a scan speed of up to 1,200,000 points/s and a large field of view (420*440mm in standard mode, and even larger in body mode), you can scan an entire human body in approximately 10 minutes.'
    },
    {
        question: 'What output formats does the scanner support?',
        answer: 'The scanner supports industry-standard formats including OBJ, STL, PLY, P3, and 3MF, making it compatible with most 3D printing and CAD software.'
    },
    {
        question: 'Is the scanning process safe for eyes?',
        answer: 'Yes, both the LED light and the invisible infrared light sources are eye-safe (Class I), ensuring patient comfort and safety during medical and cosmetic scanning procedures.'
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-[#1171bd] mb-12 uppercase tracking-tight text-center">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-[#1a365d] pr-4">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-[#1e73be] shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm animate-in fade-in slide-in-from-top-1 duration-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
