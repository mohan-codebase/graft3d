import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: 'What is the Funmat Pro 410 3D printer and who is it for?',
        answer: 'The Funmat Pro 410 3D printer is an FFF system positioned for hospitals, biomedical engineers, and surgical specialists. It\'s built for medical-grade additive manufacturing, combining good build volume with controlled high-temperature printing for advanced polymers.',
    },
    {
        question: 'Why is the Funmat Pro 410 considered an industrial 3D printer?',
        answer: 'It\'s presented as an industrial 3D printer because it offers a fully enclosed chamber, dual nozzles, smart monitoring, and robust technical specs (large build volume and high speeds). These features improve repeatability for demanding production workflows.',
    },
    {
        question: 'How is it a high-temperature 3D printer for engineering applications?',
        answer: 'As a high-temperature 3D printer, it supports dual nozzles up to 500°C, a heated build chamber up to 90°C, and a bed up to 160°C. This enables stable printing of high-performance engineering polymers.',
    },
    {
        question: 'Is it a 3D printer for engineering materials like PEEK, PC, and ABS?',
        answer: 'Yes. The page lists materials including PEEK, PEKK, PPS, PC, PC-ABS, ABS, ASA, PA12, and reinforced variants (CF/GF). That makes it a strong 3D printer for engineering materials and specialty plastics.',
    },
    {
        question: 'What does FFF 3D printer high temp mean for the Funmat Pro 410?',
        answer: 'FFF 3D printer high temp means it uses fused filament fabrication while maintaining controlled temperatures for difficult polymers. With a heated chamber and very hot nozzles, it reduces warping and improves dimensional stability on engineering-grade prints.',
    },
    {
        question: 'How does a dual nozzle industrial 3D printer help medical printing?',
        answer: 'A dual nozzle industrial 3D printer supports complex geometries using dedicated support strategies. The Funmat Pro 410 highlights dual extrusion for support structures and emphasizes cleaner surfaces for complex parts—useful when printing detailed medical components.',
    },
    {
        question: 'Can it be a 3D printer for medical-grade parts in hospitals?',
        answer: 'It\'s positioned as a 3D printer for medical-grade parts by focusing on healthcare applications like patient-specific implants, surgical guides, and anatomical models. The page also highlights compliance readiness and sterilization compatibility for surgical settings.',
    },
    {
        question: 'Why is it called a 500°C nozzle 3D printer for high-performance filaments?',
        answer: 'It\'s called a 500°C nozzle 3D printer because the maximum nozzle temperature is listed as 500°C (932°F). This capability supports high-performance filaments such as PEEK and reinforced composites that require elevated processing temperatures.',
    },
    {
        question: 'How does it support a 3D printing solution for custom implants & prosthetics?',
        answer: 'The page frames it as a 3D printing solution for custom implants & prosthetics by enabling printing of patient-specific implants, surgical guides, and customized prosthetics. High-temperature control and enclosed heating help maintain accuracy for patient-matched parts.',
    },
    {
        question: 'Is the Funmat Pro 410 an FDM 3D printer for medical & industrial use with large build size?',
        answer: 'Yes—this FDM/FFF-style system is described for both healthcare and industrial needs, with a 305 × 305 × 406 mm build volume and features like remote monitoring and runout sensors. It\'s built for reliable production workflows.',
    },
];

const FunmatFaq = () => {
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

export default FunmatFaq;
