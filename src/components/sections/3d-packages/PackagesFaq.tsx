"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is a Medical 3D Printing Service and who should use it?",
        answer: "A Medical 3D Printing Service adds flexibility and facilitates clinical practice with accurate 3D medical or dental models, guides, or devices via parametric data-assisted accuracy, rapid prototyping, and quality production—either fiber-reinforced, metal-based, and/or biocompatible. It also enables existing better resolution, faster turnaround, and improved patient outcomes for surgeons, users."
    },
    {
        question: "How does Medical 3D Printing Service improve patient outcomes?",
        answer: "A healthcare 3D Printing Service offers medical and/or biocompatible materials (bio-CAD design, rapid prototyping, and quality production—either fiber-reinforced, metal-based, and/or biocompatible). It focuses on clinical accuracy, repeatability, and predictable turnaround, supporting surgeons and healthcare teams globally."
    },
    {
        question: "What are Medical 3D Printing Solutions usually include and cover?",
        answer: "Medical 3D Printing Solutions typically include implants or anatomical 3D models, medical image segmentation, 3D CAD modeling services, and suitable medical 3D printing. Dental 3D printing includes dental models, surgical guides, and 3D's surgical, restorative, and orthodontic applications."
    },
    {
        question: "How do I select Medical 3D Printer for hospital or lab needs?",
        answer: "Choose Medical 3D Printer based on intended output—biocompatible models, guides, or devices via parametric data-assisted accuracy, rapid prototyping, and quality production—either fiber-reinforced, metal-based, and/or biocompatible. Hospitals should also consider turnaround, training, and user-friendliness for planning and/or intra-operative use. Dental labs should also consider turnaround, training, and user-friendliness for planning and/or intra-operative use."
    },
    {
        question: "Why are the CAD Modeling Services critical in medical workflows?",
        answer: "The CAD Modeling Services convert medical imaging (CT/MRI/CBCT) into accurate 3D models for surgical planning and quality production—either fiber-reinforced, metal-based, and/or biocompatible. It also enables clinical accuracy, repeatability, and predictable turnaround, supporting surgeons and healthcare teams globally."
    },
    {
        question: "How can I get started with a Medical 3D Printing Service for hospital operations?",
        answer: "Start with a defined workflow, trained staff, imaging (your standard CT, MRI, CBCT, or devices via parametric data-assisted accuracy, rapid prototyping, and quality production—either fiber-reinforced, metal-based, and/or biocompatible). Begin with high-impact use cases like planning models, then scale with CAD, training, and user-friendliness for planning and/or intra-operative use. Dental labs should also consider turnaround, training, and user-friendliness for planning and/or intra-operative use."
    }
];

const PackagesFaq = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-[#eaf6ff]">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
                    FAQs
                </h2>

                <div className="max-w-5xl mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default PackagesFaq;
