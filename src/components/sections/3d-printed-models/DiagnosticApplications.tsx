"use client";

import React from 'react';
import Image from 'next/image';

type AppItem = {
    title: string;
    bullets: string[];
    image: string;
    imageAlt: string;
    imageRight: boolean; // if true: card left, image right. if false: image left, card right
};

const diagnosticApps: AppItem[] = [
    {
        title: 'Orthopedics',
        bullets: [
            'Thorough assessment of complex fractures, congenital deformities and skeletal deformities.',
            'Enhanced appreciation of joint pathology before arthroplasty.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/3.png',
        imageAlt: 'Orthopedic 3D Model',
        imageRight: true,
    },
    {
        title: 'Maxillofacial & Dental',
        bullets: [
            'Visualization of craniofacial deformities, malocclusion or tumours of the jaw.',
            'Improved patient understanding for orthognathic surgery and dental implant treatment planning.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/4.png',
        imageAlt: 'Maxillofacial 3D Model',
        imageRight: false,
    },
    {
        title: 'Neurosurgery',
        bullets: [
            'Evaluation of the skull base tumors, aneurysms and congenital malformations of the brain.',
            'Multiple intricate vascular structures are mapped for accurate diagnosis.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/1-1.png',
        imageAlt: 'Neurosurgery Skull Model',
        imageRight: true,
    },
    {
        title: 'Cardiology',
        bullets: [
            'Pediatric heart defects are demonstrated by patient-specific 3D heart models.',
            'Increased diagnostic refinement in congenital heart diseases for therapeutic decisions.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/2.png',
        imageAlt: 'Cardiology 3D Model',
        imageRight: false,
    },
    {
        title: 'Oncology',
        bullets: [
            'Proper documentation of the size, margins and tumoral extent in relation to adjacent structures.',
            'Useful in the multidisciplinary tumor board review and for assessing surgical feasibility.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/6.png',
        imageAlt: 'Oncology 3D Model',
        imageRight: true,
    },
    {
        title: 'ENT & Head-Neck',
        bullets: [
            'Excellent visualization of complicated sinus and skull base anatomy.',
            'Diagnostic aid for congenital tracheobronchial anomalies and structural abnormalities.',
        ],
        image: '/images/3d-printed-models-in-the-medical-field/7-1.png',
        imageAlt: 'ENT Head Neck 3D Model',
        imageRight: false,
    },
];

const DiagnosticApplications = () => {
    return (
        <section className="w-full py-16" style={{ background: '#f0f4f8' }}>
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                {/* Section Header */}
                <h2 className="text-3xl lg:text-[34px] font-extrabold text-[#166AAF] text-center mb-12">
                    Diagnostic Applications
                </h2>

                {/* Alternating rows */}
                <div className="flex flex-col gap-10">
                    {diagnosticApps.map((app) => (
                        <div
                            key={app.title}
                            className={`flex flex-col lg:flex-row items-center gap-6 ${!app.imageRight ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Card / Text Block */}
                            <div
                                className="w-full lg:w-1/2 rounded-2xl p-8"
                                style={{ background: '#dce8f3' }}
                            >
                                <h3 className="text-[22px] font-bold text-[#166AAF] mb-5">
                                    {app.title}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {app.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#222] text-[15px] leading-relaxed font-semibold">
                                            <span className="mt-1.5 h-3 w-3 rounded-full bg-[#166AAF] shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="w-full lg:w-1/2 flex items-center justify-center">
                                <Image
                                    src={app.image}
                                    alt={app.imageAlt}
                                    width={560}
                                    height={540}
                                    className="object-contain drop-shadow-lg max-h-[520px] w-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiagnosticApplications;
