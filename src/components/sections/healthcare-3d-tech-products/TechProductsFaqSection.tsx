"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What are Healthcare 3D Tech products?",
        answer: "Healthcare 3D Tech Products Integrate Scanning, Medical Image Conversion, And Bio-CAD Tools That Help Hospitals Plan Complex Surgeries And Produce Accurate Anatomical References. Graft3D’s Portfolio Includes Medical Scanners, CT/MRI Conversion Solutions, And Advanced Modeling Software That Streamline Digital Workflows From Imaging To Clinical Application."
    },
    {
        question: "What are common 3D printing materials for medical use?",
        answer: "Common 3D Printing Materials For Medical Use Include PEEK, PMMA, And PC Filaments Used For Specialized Healthcare Workflows. Material Choice Depends On Strength, Sterilization Needs, And Intended Use Of Training Models, Guides, Or Device Components."
    },
    {
        question: "What is the workflow in Healthcare 3D printing?",
        answer: "In Healthcare 3D Printing, Teams Capture Anatomy With A Human Body 3D Scanner Or CT/MRI Data, Convert Scan Data Into Usable 3D Files, Then Refine Designs In Bio-CAD Before Printing. Graft3D Highlights D2P For Conversion And Geomagic Freeform For Modeling."
    },
    {
        question: "What is a human body scanner?",
        answer: "A Human Body Scanner Captures The Geometry Of Patient Body Parts Quickly To Create Accurate Digital References For Orthotics, Prosthetics, And Surgical Planning. Graft3D Offers Einscan Medixa With A Footstation As A Healthcare 3D Scanner Option."
    }
];

const TechProductsFaqSection = () => {
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

export default TechProductsFaqSection;
