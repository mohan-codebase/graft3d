"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is the cost of a 3D Printed facial prosthesis?",
        answer: "It depends on the patient's exciting condition post-surgery, the weight of the prosthesis, and skin color; however, to give an idea, it starts from 25 k to 80K."
    },
    {
        question: "Are facial Prostheses and Prosthetics the same?",
        answer: "Prosthesis indicates the end devices, whereas prosthetic states the entire process of making the artificial organ and fitting them into the human body."
    },
    {
        question: "What is a 3D Printed Prosthesis?",
        answer: "3D Printed prosthesis is made of medical and healthcare 3Dprinting technology, whereas a Prosthesis is made from a custom cast based on a patient's 3D scan which is 3D Printed."
    },
    {
        question: "Can I place the ''Regraft Artificial nose'' myself without a doctor?",
        answer: "In Most of the cases, the patient will be able to fit; still, we recommend we ask the patient to visit our client in the hospital and do the fitment."
    },
    {
        question: "Can the doctor visit my place and do the prosthesis fitment?",
        answer: "We have an option if the patient is unable to travel to the doctor’s clinic. Our senior doctor and Implantology Prosthodontist can visit your place to place an implant."
    }
];

const ArtiNoseFAQ = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e73be] mb-4">
                            FAQs
                        </h2>
                        <div className="w-24 h-1 bg-[#1e73be] mx-auto rounded-full"></div>
                    </div>

                    <FaqAccordion items={faqItems} />

                </div>
            </div>
        </section>
    );
};

export default ArtiNoseFAQ;
