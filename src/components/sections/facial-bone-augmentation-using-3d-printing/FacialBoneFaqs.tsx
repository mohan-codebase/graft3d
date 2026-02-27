"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is facial bone augmentation using 3D printing?",
        answer: "Facial bone augmentation using 3D printing creates custom-fit implants or models to rebuild or reshape bone structures. It supports reconstructive and aesthetic goals by tailoring implants to a patient’s unique anatomy."
    },
    {
        question: "How does 3D printing facial bone reconstruction work?",
        answer: "3D printing facial bone reconstruction begins with imaging (CT/CBCT), then converts that data into a digital 3D design. Personalized implants or guides are printed to help surgeons restore bone volume and contour precisely."
    },
    {
        question: "What are the benefits of 3D printed facial implants?",
        answer: "3D printed facial implants offer a precise anatomical match, which can improve symmetry, reduce surgical adjustments, and support predictable outcomes. They also help clinicians plan and rehearse procedures before the actual surgery."
    },
    {
        question: "When is facial bone augmentation with 3D printing recommended?",
        answer: "Facial bone augmentation with 3D printing is recommended after trauma, bone loss, congenital asymmetry, or tumor resection when standard implants aren't adequate. Custom approaches help restore form, function, and facial balance."
    },
    {
        question: "Are 3D printed facial implants safe for reconstructive use?",
        answer: "Yes, when designed and fabricated under validated clinical protocols with appropriate materials, 3D printed facial implants can be safe and effective. Surgeon review and fit verification are essential before implanting."
    }
];

const FacialBoneFaqs = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[900px]">

                <h2 className="text-center text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-12">
                    FAQs
                </h2>

                <FaqAccordion items={faqs} />

            </div>
        </section>
    );
};

export default FacialBoneFaqs;
