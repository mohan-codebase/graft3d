"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        title: "Oncological Resection",
        description: "For oral tumors and cancers, oncologic mandibular reconstruction with PSIs permits post-resection rehabilitation immediately. The prosthesis restores continuity of bone, supports the maxilla and orbital floor, reestablishing physiological as well as cosmetic function."
    },
    {
        title: "Infective Pathologies",
        description: "There has been an increase in mucormycosis affected jaw reconstruction cases using 3D printing post-COVID-19. Patient-specific implants offer precise solutions for large defects, particularly in patients with high surgical risk of free flap surgery."
    },
    {
        title: "Trauma Reconstruction",
        description: "Patient specific implants are used to fix complex maxillary and mandibular fractures and control bone loss. They re-establish occlusion, preserve facial balance and proportions without adding to intra-operative time."
    }
];

const MaxillaClinicalApplications = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-[40px] font-bold text-[#1e5899] mb-2 leading-tight">
                        Clinical Applications of Patient-Specific<br />Implants
                    </h2>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-12">
                        {applications.map((app, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e5899] text-white flex items-center justify-center font-bold text-lg mt-1">
                                    {index + 1}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[22px] font-bold text-[#1e5899] mb-4">
                                        {app.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-medium text-[15px]">
                                        {app.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/images/reconstruction-of-resected-mandible-and-maxilla/2-1.png"
                                alt="Clinical Applications of Patient-Specific Implants"
                                fill
                                className="object-contain drop-shadow-sm"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaxillaClinicalApplications;
