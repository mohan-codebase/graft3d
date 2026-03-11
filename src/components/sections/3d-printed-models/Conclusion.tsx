"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: '1) What are 3D printed anatomical models in the medical field?',
        a: '3D printed anatomical models in the medical field are physical replicas of patient anatomy used for surgical planning, training, and communication. They improve understanding of complex structures and help clinicians rehearse procedures before operating.',
    },
    {
        q: '2) What do 3D printing services for medical professionals typically offer?',
        a: '3D printing services for medical professionals usually include scanning, image-to-CAD conversion, and production of patient-specific models or guides. These services help hospitals and clinics visualize anatomy and reduce uncertainty before clinical interventions.',
    },
    {
        q: '3) Why are patient-specific 3D medical models beneficial?',
        a: 'Patient-specific 3D medical models are tailored to an individual\'s CT/MRI data, offering precise geometry for planning complex cases. This personalization enhances surgeon confidence, supports patient education, and aids multidisciplinary case discussions.',
    },
    {
        q: '4) How can I order custom surgical 3D models for hospitals?',
        a: 'To order custom surgical 3D models for hospitals, you typically provide imaging data (like CT/MRI scans), clinical indications, and timelines. Providers convert these scans into printable files, review with clinicians, and then print models for planned procedures.',
    },
    {
        q: '5) What do medical 3D printing services for hospitals include?',
        a: 'Medical 3D printing services for hospitals include converting imaging into 3D models, printing anatomical parts, and sometimes post-processing and packaging. Some providers also assist in digital planning, training, and materials tailored to clinical needs.',
    },
    {
        q: '6) How can a 3D printed surgical models provider support operating teams?',
        a: 'A 3D printed surgical models provider supports operating teams by delivering accurate physical replicas that help visualize anatomy, plan cuts or resections, and simulate implant fit. These models help reduce surprises and improve confidence in complex surgeries.',
    },
    {
        q: '7) What is 3D printing for diagnostic models used for?',
        a: '3D printing for diagnostic models produces physical anatomy representations that help radiologists, surgeons, and care teams better assess disease extent. They add tactile insight to imaging data, supporting more informed decisions before interventions.',
    },
    {
        q: '8) Why is 3D printing in healthcare becoming more common?',
        a: '3D printing in healthcare is becoming more common because it supports precision medicine, personalized treatment planning, and patient education. It also reduces lead times for custom parts and enhances collaborative decision-making across care teams.',
    },
    {
        q: '9) What are medical 3D printed prototypes and how are they used?',
        a: 'Medical 3D printed prototypes are early physical models of implants, guides, or devices used for fit checking and iterative design. They help engineers and surgeons validate concepts before final production and clinical use.',
    },
    {
        q: '10) What does 3D printed patient anatomy help clinicians understand?',
        a: '3D printed patient anatomy gives surgeons and care teams a tangible reference of internal structures, improving spatial understanding beyond flat imaging. This aids surgical planning, enhances teaching, and improves patient communication about procedures.',
    },
];

const Conclusion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-16" style={{ background: '#f0f4f8' }}>
            <div className="container mx-auto px-4 lg:px-20 max-w-[1100px]">
                {/* Conclusion paragraph */}
                <p className="text-[#333] text-[16px] leading-relaxed text-center mb-16">
                    3D printed anatomical models showcase their broad utility across all disciplines within healthcare. In diagnostic imaging, they enhance insight, communication and patient involvement. For surgeons, they allow personalized preoperative planning and rehearsal as well as increased accuracy during surgical procedures. 3D printing along with developments such as artificial intelligence, augmented reality, virtual reality and bioprinting, improved the opportunities to provide personalized treatments. These methods improve diagnosis and treatment, but also lay the groundwork for the next generation of patient-centered care.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl lg:text-[28px] font-bold text-[#166AAF] mb-8">
                    Contact Us &amp; Get details for
                </h2>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden border border-[#c8dff0]"
                            style={{ background: '#fff' }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="font-semibold text-[#166AAF] text-[15px]">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#166AAF] shrink-0 ml-4 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-5 text-[#333] text-[14px] leading-relaxed border-t border-[#dce8f3] pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conclusion;
