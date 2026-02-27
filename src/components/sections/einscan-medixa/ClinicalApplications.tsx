"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        title: 'Orthotics',
        description: 'Design and fabrication of foot orthosis, spinal braces, seating systems, and cranial helmets.',
        image: '/images/einscan-medixa/clinical-orthotics.png',
    },
    {
        title: 'Prosthetics',
        description: 'Precise 3D scanning for upper and lower limb sockets, cosmetic covers, and custom interface fittings.',
        image: '/images/einscan-medixa/clinical-prosthetics.png',
    },
    {
        title: 'Rehabilitation',
        description: 'Development of adaptive supports, mobility aids, and posture correction devices.',
        image: '/images/einscan-medixa/clinical-rehab.png',
    },
    {
        title: 'Maxillofacial & Cranial Reconstruction',
        description: 'Development of adaptive supports, mobility aids, and posture correction devices.',
        image: '/images/einscan-medixa/clinical-maxillofacial.png',
    },
    {
        title: 'Clinical Research & Education',
        description: '3D data capture for biomechanical studies, ergonomic assessments, and training purposes.',
        image: '/images/einscan-medixa/clinical-research.png',
    },
];

const ClinicalApplications = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Clinical Applications</h2>
                </div>

                {/* Stacked Banner Cards */}
                <div className="flex flex-col gap-4">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[400px] rounded-2xl overflow-hidden group"
                        >
                            {/* Background Image */}
                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Dark gradient overlay on bottom-left */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                            {/* Text overlaid on bottom-left */}
                            <div className="absolute bottom-0 left-0 p-6 text-white max-w-xs">
                                <h3 className="text-[18px] font-bold mb-1 drop-shadow">{app.title}</h3>
                                <p className="text-[13px] leading-snug text-white/90 drop-shadow">{app.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicalApplications;
