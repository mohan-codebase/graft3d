import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What are Asthi 3D Printed Anatomical Models used for?",
        answer: "Asthi 3D Printed Anatomical Models are designed for training, simulation, and mock-up surgery, giving medical professionals a detailed, realistic representation of human bone. They help teams practice techniques safely and understand complex anatomy more clearly."
    },
    {
        question: "What types of 3D Printed Anatomical Models are available in Asthi?",
        answer: "Asthi offers four types of 3D Printed Anatomical Models—coloured, transparent, bone-like, and patient-specific models. Each type is built for different training and surgical planning needs, supporting better visualization, teaching, and procedure practice."
    },
    {
        question: "How does anatomical 3D model printing help doctors and students?",
        answer: "Anatomical 3D model printing helps doctors, students, and researchers by providing physical models that improve visualization and understanding. Asthi models are built to support surgical planning and training, enabling safer practice before real procedures."
    },
    {
        question: "What is a medical bone model 3D print and why is “bone-like” important?",
        answer: "A medical bone model 3D print recreates bone anatomy as a physical model for learning and surgical practice. Asthi’s bone-like models use durable material that mimics real bone texture, making drilling and cutting practice feel more realistic."
    },
    {
        question: "Do you provide organ model 3D printing options like transparent models?",
        answer: "Yes—Asthi includes transparent 3D printed models made from clear resin to help users view internal structures. These models are useful for studying finer anatomical details and improving depth perception during teaching and detailed anatomical learning."
    },
    {
        question: "What are 3D printed surgical planning models and when are they needed?",
        answer: "3D printed surgical planning models are used to visualize anatomy before operating, supporting clearer planning and rehearsal. Asthi positions its models for surgical planning and training, helping teams practice steps safely and refine approaches before surgery."
    },
    {
        question: "How do you create a CT/MRI based anatomical replica?",
        answer: "A CT/MRI based anatomical replica is created by using patient medical scans to generate a patient-specific 3D model. Asthi notes you can upload patient scans to receive customized models, supporting realistic planning and training for actual anatomy."
    },
    {
        question: "Can you make 3D printed heart/bone/brain models for education and planning?",
        answer: "Asthi focuses on 3D-printed anatomical models for training and planning, including realistic bone representations and model types like coloured and transparent formats. For specific heart/bone/brain model needs, the workflow depends on scan inputs and model type selection."
    },
    {
        question: "How does an orthopaedic planning 3D model improve procedure preparation?",
        answer: "An orthopaedic planning 3D model helps clinicians study bone geometry and rehearse technique steps before surgery. Asthi’s patient-specific bone models are described as accurate and highly detailed, supporting surgical planning and practice in a controlled setting."
    },
    {
        question: "What is a pathological model 3D print used for in training?",
        answer: "A pathological model 3D print helps learners understand abnormal anatomy and practice planning for complex cases. Asthi highlights that its training models support understanding complex anatomical structures and pathologies, improving visualization and hands-on learning for medical education."
    }
];

const ProductFAQ = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12">
                    FAQ
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default ProductFAQ;
