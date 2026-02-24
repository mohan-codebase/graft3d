"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "1) What are Healthcare 3D Products used for in medical settings?",
        answer: "Healthcare 3D Products include scanners, printers, and software that support accurate digital capture, model building, and fabrication of anatomical models or device components, helping clinicians improve planning and patient outcomes. "
    },
    {
        question: "2) How does a body scanner machine for health support medical workflows?",
        answer: "A body scanner machine for health captures detailed surface anatomy quickly and non‑invasively, allowing exported 3D files to be used for diagnostic references, prosthetic design, or 3D printing workflows. "
    },
    {
        question: "3) What should I look for when selecting medical 3D printing companies?",
        answer: "Choose medical 3D printing companies that offer clinical expertise, image conversion workflows, validated processes, and reliable output formats tailored to healthcare needs for predictable and consistent results. "
    },
    {
        question: "4) What is medical image conversion and why is it important?",
        answer: "Medical image conversion turns CT/MRI scans into usable 3D surface models. These converted files support surgical planning, anatomical visualization, and can be prepared for printing or custom device design. "
    },
    {
        question: "5) How do medical image processing companies help hospitals and clinics?",
        answer: "Medical image processing companies help hospitals extract anatomical structures from imaging data, refine surfaces, and prepare files for modelling or printing, improving accuracy in planning, diagnostics, and custom fabrication. "
    },

];

const Products3DFaqSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
                    FAQ
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default Products3DFaqSection;