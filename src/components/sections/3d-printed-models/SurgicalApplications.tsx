"use client";

import React from 'react';

type SurgicalApp = {
    title: string;
    bullets: string[];
};

const surgicalApps: SurgicalApp[] = [
    {
        title: 'Orthopedics',
        bullets: [
            'Preoperative practice for fracture reduction and deformity correction.',
            'Personalized surgical guides for joint replacement, spinal deformity correction and bone lengthening.',
        ],
    },
    {
        title: 'Maxillofacial & Dental',
        bullets: [
            'Resection of maxilla and mandible with free fibula flap reconstruction.',
            'Patient-specific implant and fixative plate design and manufacturing.',
            'Accurate aids for dental implant positioning and orthognathic surgery.',
        ],
    },
    {
        title: 'Neurosurgery',
        bullets: [
            'Preoperative mapping for skull base and intracranial tumors.',
            'Customised cranial implants for cranioplasty.',
        ],
    },
    {
        title: 'Cardiac & Vascular Surgery',
        bullets: [
            'Predictive modelling for surgical rehearsal in congenital heart defect and valve repair.',
            'Pre-operative evaluation for intricate vascular grafting, stent deployment and bypass surgery.',
        ],
    },
    {
        title: 'Plastic & Reconstructive Surgery',
        bullets: [
            'Personalized planning of craniofacial repair after trauma or congenital malformations.',
            'Surgical template design for sculpting deformities, flaps and soft tissue.',
        ],
    },
    {
        title: 'ENT & Head-Neck',
        bullets: [
            'Planning for resection and reconstruction in head and neck cancer surgery.',
            'Individual templates for reconstruction of the trachea and larynx.',
        ],
    },
    {
        title: 'General & Oncologic Surgery',
        bullets: [
            'Anatomic models for planning hepatic and renal tumor resections.',
            'Donor recipient mapping in complex organ transplant procedures.',
        ],
    },
];

const SurgicalApplications = () => {
    return (
        <section className="w-full py-16" style={{ background: '#f0f4f8' }}>
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                {/* Section Header */}
                <h2 className="text-3xl lg:text-[34px] font-extrabold text-[#166AAF] text-center mb-12">
                    Surgical Applications
                </h2>

                {/* 2-column grid of cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {surgicalApps.map((app) => (
                        <div
                            key={app.title}
                            className="rounded-2xl p-8"
                            style={{ background: '#dce8f3' }}
                        >
                            <h3 className="text-[20px] font-bold text-[#166AAF] mb-4">
                                {app.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {app.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-[#222] text-[15px] leading-relaxed font-semibold"
                                    >
                                        <span className="mt-1.5 h-3 w-3 rounded-full bg-[#166AAF] shrink-0" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SurgicalApplications;
