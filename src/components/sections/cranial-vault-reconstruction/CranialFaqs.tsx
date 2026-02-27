"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is cranial vault reconstruction performed for?",
        answer: "Cranial vault reconstruction is performed to restore skull defects caused by trauma, tumour resection, infection, or decompressive craniectomy. The procedure protects intracranial structures and restores anatomical contour and symmetry."
    },
    {
        question: "How does medical 3D printing support cranial reconstruction?",
        answer: "Medical 3D printing for cranial vault reconstruction enables the creation of accurate 3D printed cranial bone models and patient-specific cranial implants, allowing surgeons to plan defect coverage, fixation strategy, and implant thickness preoperatively."
    },
    {
        question: "Why is PMMA used for cranial reconstruction?",
        answer: "PMMA is commonly used for cranial defect reconstruction due to its long clinical history, ease of intraoperative handling, and cost-effectiveness. It is suitable for cases where intraoperative contouring or rapid fabrication is preferred."
    },
    {
        question: "What are the clinical advantages of PEEK implants in cranial reconstruction?",
        answer: "PEEK implants offer excellent biocompatibility, radiolucency, and an elastic modulus closer to bone. Patient-specific PEEK cranial implants provide precise fit, improved cosmetic outcomes, and reduced intraoperative adjustments."
    },
    {
        question: "How do titanium cranial implants compare with PMMA and PEEK?",
        answer: "Titanium cranial implants provide high mechanical strength and long-term durability, making them suitable for large or complex defects. The choice between titanium, PMMA, and PEEK depends on defect size, location, soft-tissue condition, and surgeon preference."
    },
    {
        question: "What should hospitals look for in 3D printed cranial prosthesis solutions?",
        answer: "Hospitals should choose cranial defect reconstruction providers that offer validated design workflows, custom 3D cranial implants for hospitals, multiple material options (PMMA, PEEK, titanium), and regulatory-compliant 3D printed cranial prosthesis solutions."
    }
];

const CranialFaqs = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[900px]">

                <h2 className="text-center text-3xl lg:text-[36px] font-bold text-[#1a5b9e] mb-12">
                    FAQs
                </h2>

                <FaqAccordion items={faqs} />

            </div>
        </section>
    );
};

export default CranialFaqs;
