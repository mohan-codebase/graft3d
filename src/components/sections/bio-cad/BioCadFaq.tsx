"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "How Can I Send You The Patient Scan File For Bio Cad Modeling?",
        answer: "You Can Upload The Data On Our Portal Or Courier The CD To The Given Address."
    },
    {
        question: "What Type Of File Format Is Required To Design Medical Devices?",
        answer: "We Require DICOM (.Dcm) Files From Medical Scanners Or STL Files From 3d Scanners."
    },
    {
        question: "What Will Be The Format Of The Output File?",
        answer: "Our Bio Cad Modeled Output Files Are .Stl, 3d Pdf, Ply, Obj, Iges STEP Files."
    },
    {
        question: "Can We Directly Print The Segmented Part?",
        answer: "Yes, We Can Send You Segmented Parts As 3d Files In .Stl, Ply, Obj So You Can Direct Medical 3D Print In Various Technologies."
    },
    {
        question: "Can I 3D Print A CAD Model That Graft3d Designs?",
        answer: "Yes, Our Bio Cad Modeled Output Is 3d Print-Ready Mesh Files. You Can Directly 3d Print Them."
    },
    {
        question: "Which Software Do You Use For Bio CAD Modeling?",
        answer: "We Use FDA 510 (K) Cleared Software D2P And Geomagic Freeform With Haptic Device From 3D Systems."
    },
    {
        question: "When Can We Expect The Data To Be Delivered?",
        answer: "As Early As Possible, Depending Upon The Complexity Of The Design."
    }
];

const BioCadFaq = () => {
    return (
        <section id="faq" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-center text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="max-w-6xl mx-auto">
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default BioCadFaq;
