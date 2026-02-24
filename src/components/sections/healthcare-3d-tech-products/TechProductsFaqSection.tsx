"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What healthcare 3D tech products are used by hospitals and surgeons?",
        answer: "Healthcare 3D Tech Products Integrate Scanning, Medical Image Conversion, And Bio-CAD Tools That Help Hospitals Plan Complex Surgeries And Produce Accurate Anatomical References. Graft3D’s Portfolio Includes Medical Scanners, CT/MRI Conversion Solutions, And Advanced Modeling Software That Streamline Digital Workflows From Imaging To Clinical Application."
    },
    {
        question: "Which 3D printing materials for medical applications are commonly used?",
        answer: "Common 3D Printing Materials For Medical Use Include PEEK, PMMA, And PC Filaments Used For Specialized Healthcare Workflows. Material Choice Depends On Strength, Sterilization Needs, And Intended Use Of Training Models, Guides, Or Device Components."
    },
    {
        question: "How does a healthcare 3D printing workflow begin from medical scans?",
        answer: "In Healthcare 3D Printing, Teams Capture Anatomy With A Human Body 3D Scanner Or CT/MRI Data, Convert Scan Data Into Usable 3D Files, Then Refine Designs In Bio-CAD Before Printing. Graft3D Highlights D2P For Conversion And Geomagic Freeform For Modeling."
    },
    {
        question: "What is a human body 3D scanner and what is its clinical use?",
        answer: "A Human Body Scanner Captures The Geometry Of Patient Body Parts Quickly To Create Accurate Digital References For Orthotics, Prosthetics, And Surgical Planning. Graft3D Offers Einscan Medixa With A Footstation As A Healthcare 3D Scanner Option."
    },
    {
        question: "Do you offer a 3D Human body scanner for clinical use?",
        answer: "If you need a 3d Human body scanner, start by defining whether you’re scanning whole posture or specific limbs for O&P. Graft3D’s products focus on human body scanning and medical workflows, so suitability depends on use case."
    },
    {
        question: "How is a human body 3D scanner and printer setup used in hospitals?",
        answer: "A 3d full body scanner and printer setup is used to digitize patient anatomy, build printable models or device designs, and support faster customization. Typical hospital uses include prosthetics/orthotics fitting, pre-op visualization, and education models."
    },
    {
        question: "How do clinicians choose the right 3D body scanner for their application?",
        answer: "Choose a 3d body scanner machine based on required accuracy, scanning speed, and how easily data flows into medical image conversion and bio-CAD tools. Graft3D showcases scanners alongside D2P conversion, Freeform modeling, and haptic devices. "
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
