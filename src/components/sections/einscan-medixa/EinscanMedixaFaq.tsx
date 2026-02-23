import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: 'What is the einscan medixa 3d scanner used for in clinics?',
        answer: 'The einscan medixa 3d scanner is a next-generation, all-in-one handheld system built for comfortable patient anatomy capture. It integrates scanning, processing, and export in a standalone unit, so clinics don\'t need an external computer.',
    },
    {
        question: 'How does a 3D medical scanner help create outputs for care teams?',
        answer: 'As a 3D medical scanner, it captures patient anatomy quickly and generates optimized meshes using built-in processing. The device supports clinical documentation with detailed textures, helping clinicians track fit, evaluate outcomes, and share accurate 3D records.',
    },
    {
        question: 'Why choose a 3D scanner for medical 3D printing workflows?',
        answer: 'A 3D scanner for medical 3D printing should export common formats and fit hospital speed needs. EinScan Medixa outputs STL/OBJ/PLY and can capture an area in under two minutes, supporting faster move-to-design in clinical workflows.',
    },
    {
        question: 'What makes it a 3D scan device for anatomical modelling across skin tones?',
        answer: 'As a 3D scan device for anatomical modelling, it uses dual light sources (white light and infrared VCSEL) to handle different skin tones and surfaces. High-resolution texture capture supports visualization, simulation, and accurate clinical documentation.',
    },
    {
        question: 'Is medical 3D scan India feasible with a portable, clinic-ready system?',
        answer: 'Yes—medical 3D scan India becomes easier when the scanner is compact and portable. This device is designed for use in clinics, wards, or on-site environments, with contact-free scanning that supports hygienic, non-invasive patient capture.',
    },
    {
        question: 'What qualifies it as a high-accuracy 3D scanner for medical models?',
        answer: "It's positioned as a high-accuracy 3D scanner for medical models through adjustable point distance (0.2 mm to 3.0 mm) and motion compensation that reduces movement artifacts. Automatic alignment modes improve reliable data registration for repeatable results.",
    },
    {
        question: 'How does 3D scanning for hospitals and clinics improve patient comfort?',
        answer: '3D scanning for hospitals and clinics benefits from contact-free capture, which is more hygienic and non-invasive—useful for pediatric and sensitive cases. Lightweight portability also supports scanning outside dedicated labs, reducing patient handling and wait time.',
    },
    {
        question: 'What is the patient scan to STL 3D printing workflow with this scanner?',
        answer: 'In a patient scan to STL 3D printing workflow, you scan anatomy, let the built-in processor generate and smooth meshes with hole filling, then export STL. Files transfer via USB or local network into CAD/CAM or O&P design software.',
    },
    {
        question: 'Can it convert CT/MRI scan to 3D model directly?',
        answer: 'To convert CT/MRI scan to 3D model, you typically need medical image segmentation software. EinScan Medixa focuses on external anatomy scanning and exports STL/OBJ/PLY, so it complements imaging workflows rather than replacing CT/MRI conversion tools.',
    },
    {
        question: 'Is it a 3D scan solution for prosthetics & implants and anatomical replicas?',
        answer: "Yes, it's tailored for orthotics and prosthetics—capturing sockets, limbs, feet, and more using preset clinical modes. Fast acquisition and accurate alignment support creating 3D scanner for anatomical replicas used in design, fitting evaluation, and fabrication.",
    },
];

const EinscanMedixaFaq = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Frequently Asked Questions</h2>
                </div>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default EinscanMedixaFaq;
