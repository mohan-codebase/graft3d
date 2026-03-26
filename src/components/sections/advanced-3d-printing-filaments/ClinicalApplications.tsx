"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        title: 'Craniofacial Reconstruction And Maxillofacial Surgery',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-4.png',
    },
    {
        title: 'Orthopedic Implants & Fixation Devices',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9938.png',
    },
    {
        title: 'Custom Prosthetics And Anatomical Models',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9939.png',
    },
    {
        title: 'Surgical Planning And Educational Simulation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9940.png',
    },
];

const ClinicalApplications = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                <div className="mb-12">
                    <h2 className="text-3xl lg:text-[42px] font-extrabold text-[#0a2540] mb-2">
                        Clinical Applications
                    </h2>
                    <p className="text-[#697386] text-lg font-medium">
                        Our materials are engineered for
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 max-w-5xl mx-auto">
                    {applications.map((app) => (
                        <div key={app.title} className="flex flex-col group items-center">
                            <div className="relative w-full rounded-[24px] overflow-hidden border border-[#e6e9f0] bg-white transition-all duration-300 group-hover:border-[#166AAF]/30 group-hover:shadow-lg" 
                                 style={{ aspectRatio: '1/1' }}>
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover p-3 lg:p-4"
                                />
                            </div>
                            <h3 className="mt-8 text-[#0a2540] font-bold text-[18px] lg:text-[20px] text-center leading-tight transition-colors group-hover:text-[#166AAF]">
                                {app.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClinicalApplications;
