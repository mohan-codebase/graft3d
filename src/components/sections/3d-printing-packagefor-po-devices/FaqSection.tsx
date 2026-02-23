import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: 'What is a 3D printing lab for prosthetic and orthotic devices?',
        answer: 'A 3D printing lab for prosthetic and orthotic devices is a specialized facility for hospitals and educational institutions that utilizes 3D scans, medical 3D design and 3D printing technology to create customized and personalized prosthetics and orthotics for patients with specific needs.',
    },
    {
        question: 'How can setting up a 3D printing lab for P&O devices benefit hospitals?',
        answer: 'Hospitals can have the ability to design P&O devices that are custom-made for each patient, perfectly suiting their individual needs. This not only reduces the time but also ensures faster and more efficient service for our valued patients. Moreover, by adopting advanced 3D printing technology, we can cut down on expenses linked to traditional manufacturing techniques like casting, moulding, and manual fabrication, making it cost-effective and accessible to all.',
    },
    {
        question: 'What types of prosthetic and orthotic devices can be 3D printed in the lab?',
        answer: 'Our 3D printing lab can produce a wide range of prosthetic and orthotic devices, such as Prosthetic sockets for amputees, Custom orthotic insoles for foot support and correction, Ankle-foot orthoses (AFOs) for gait improvement, Knee orthoses for stability and support, Upper limb prosthetics for arm amputees.',
    },
    {
        question: 'What 3D printing technologies are used in the lab?',
        answer: 'Our 3D printing lab utilizes advanced pellet extrusion 3D printing to enable fast prnting P&O devices.',
    },
    {
        question: 'How accurate are the 3D-printed prosthetic and orthotic devices?',
        answer: '3D printed devices that are printed in our lab are designed and printed based on the patient\'s 3D scan so we will ensure the highest level of accuracy that fits the patient\'s body parts.',
    },
    {
        question: 'Are the 3D-printed prosthetic and orthotic devices durable and long-lasting?',
        answer: 'Yes, our 3D-printed prosthetic and orthotic devices are designed to be durable and long-lasting. We use high-quality materials and follow industry best practices to ensure that the devices can withstand daily wear and tear, providing lasting support and comfort to patients.',
    },
    {
        question: 'How can hospitals get started with setting up a 3D printing lab?',
        answer: 'To get started with setting up a 3D printing lab for prosthetic and orthotic devices, hospitals can reach out to our team at sales@graft3d.com, We offer comprehensive consulting and support services, guiding hospitals through the entire process, from selecting the right 3D printing technologies to training staff and implementing the lab.',
    },
];

const FaqSection = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-[900px] mx-auto px-4">
                <h2 className="text-[32px] font-bold text-gray-900 text-center mb-10">
                    FAQs
                </h2>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default FaqSection;
