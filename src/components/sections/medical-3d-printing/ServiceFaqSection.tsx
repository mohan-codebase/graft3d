"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is Healthcare 3D Printing?",
        answer: "Healthcare 3d printing is an advanced technic of additive manufacturing. It uses Healthcare 3D printers to make live medical devices and replicas of human body parts from 3D files, which doctors and bio cad modelers usually design. As it advances, experts are in the process of developing direct human organs."
    },
    {
        question: "Do I need to register an account to avail Graft3d online healthcare 3D service?",
        answer: "We don’t require any registration. You can directly upload the files to avail any of our online services."
    },
    {
        question: "How do you collect payment after the service?",
        answer: "You can pay for the services using our payment link or directly transfer the bank to our account."
    },
    {
        question: "How do I review the files before 3d printing?",
        answer: "We will schedule an online meeting with you before we send the files. We will upload the files for you to review on our platform"
    },
    {
        question: "I am an individual. Can I still avail myself of your online 3d services?",
        answer: "Graft3D online Healthcare 3D service is for doctors, surgeons, hospitals, or individuals and students who need to avail of any of our healthcare 3d services."
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
