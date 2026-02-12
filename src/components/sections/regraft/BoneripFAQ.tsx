"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "Do you deliver the GRAFT3D Asthi all over India?",
        answer: "Yes, we doorstep deliver GRAFT3D Asthi throughout India."
    },
    {
        question: "What is the delivery time of the Graft3D Asthi to our hospital?",
        answer: "It depends on the location of your institutes; it will take a minimum of 2 to 3 working days of delivery time to receive the Asthi."
    },
    {
        question: "How do you make Asthi?",
        answer: "Asthi’s range of products are made using 3D printing technology to create highly detailed and realistic representations of human bone, making it easier for medical professionals to understand the structure of human bone."
    },
    {
        question: "Is it possible to purchase Asthi products online?",
        answer: "Yes, you can purchase Asthi products online by clicking on the provided link. You can either upload a patient medical scan to receive a patient-specific model or buy a standard bone-like model."
    },
    {
        question: "What types of models does Asthi offer?",
        answer: "Asthi offers four types of 3D-printed anatomical models: coloured models, transparent models, bone-like models, and patient-specific models. Each type of model is designed for specific surgical applications and training needs."
    },
    {
        question: "What are Asthi's bone-like 3D-printed training models?",
        answer: "Asthi’s bone-like training models are made from a durable, bone-like material that closely mimics the texture and feel of real bone. These models are ideal for practising surgical techniques and procedures, providing a realistic simulation of human bone structure."
    },
    {
        question: "What are Asthi's patient-specific 3D-printed bone models?",
        answer: "Asthi’s patient-specific 3D printed bone models are created from human bone-like material and provide an accurate and highly detailed representation of a patient’s bone structure. These models are ideal for surgical planning and training, allowing medical professionals to practice and perfect their skills before performing surgeries on real patients."
    },
    {
        question: "How can Asthi's 3D-printed anatomical models benefit medical professionals?",
        answer: "Asthi’s 3D-printed anatomical models provide medical professionals with a comprehensive solution for surgical planning and training, allowing them to practice and perfect their skills before performing surgeries on real patients. These models provide a realistic simulation of human bone structure, making it easier to study and understand complex medical concepts."
    }
];

const BoneripFAQ = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12">
                    FAQs
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default BoneripFAQ;
