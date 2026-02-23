"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is Healthcare 3D Printing?",
        answer: "Healthcare 3d Printing Is An Advanced Technic Of Additive Manufacturing. It Uses Healthcare 3D Printers To Make Live Medical Devices And Replicas Of Human Body Parts From 3D Files, Which Doctors And Bio Cad Modelers Usually Design. As It Advances, Experts Are In The Process Of Developing Direct Human Organs."
    },
    {
        question: "Do I need to register an account to avail Graft3d online healthcare 3D service?",
        answer: "We Don't Require Any Registration. You Can Directly Upload The Files To Avail Any Of Our Online Services."
    },
    {
        question: "How do you collect payment after the service?",
        answer: "You Can Pay For The Services Using Our Payment Link Or Directly Transfer The Bank To Our Account."
    },
    {
        question: "How do I review the files before 3d printing?",
        answer: "We Will Schedule An Online Meeting With You Before We Send The Files. We Will Upload The Files For You To Review On Our Platform"
    },
    {
        question: "I am an individual. Can I still avail myself of your online 3d services?",
        answer: "Graft3D Online Healthcare 3D Service Is For Doctors, Surgeons, Hospitals, Or Individuals And Students Who Need To Avail Of Any Of Our Healthcare 3d Services."
    }
];

const ServiceFaqSection = () => {
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

export default ServiceFaqSection;
