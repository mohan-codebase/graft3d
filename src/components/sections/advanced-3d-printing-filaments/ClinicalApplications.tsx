"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        title: 'Craniofacial reconstruction and maxillofacial surgery',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-4.png',
    },
    {
        title: 'Orthopedic implants & fixation devices',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9938.png',
    },
    {
        title: 'Custom prosthetics and anatomical models',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9939.png',
    },
    {
        title: 'Surgical planning and educational simulation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9940.png',
    },
];

const ClinicalApplications = () => {
    return (
        <section className="w-full bg-[#f5f5f5] py-16">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                <div className="mb-8">
                    <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-2">
                        Clinical Applications
                    </h2>
                    <p className="text-[#555] text-[15px]">
                        Our materials are engineered for
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {applications.map((app) => (
                        <div key={app.title} className="flex flex-col items-center text-center">
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="mt-4 text-[#1a1a1a] font-bold text-[15px] text-center">{app.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClinicalApplications;
