"use client";

import React from 'react';

const materials = [
    {
        title: "PEEK",
        points: [
            "High strength (Flexural Strength: 151 MPa)",
            "Biocompatible, non-toxic, and sterilization-stable",
            "Ideal for spinal, orthopedic, dental, and craniofacial implants"
        ]
    },
    {
        title: "PMMA",
        points: [
            "Exceptional transparency (92–93% light transmission)",
            "Widely used in cranioplasty, dental prosthetics, and medical devices",
            "Compatible with ethylene oxide, plasma, and gamma sterilization"
        ]
    },
    {
        title: "Polycarbonate (PC)",
        points: [
            "High impact resistance and rigidity",
            "Excellent chemical and heat resistance",
            "Ideal for surgical guides, instruments, microfluidic chips, and training models"
        ]
    },
    {
        title: "Titanium",
        points: [
            "Exceptional strength-to-weight ratio and corrosion resistance",
            "Superior biocompatibility and design accuracy",
            "Ideal for custom orthopedic implants, cranial and maxillofacial reconstructions, dental implants, and abutments"
        ]
    }
];

const ArtiboneMaterials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-[1400px] mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                    Medical Grade Materials In Our Regrafts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {materials.map((material, index) => (
                        <div
                            key={index}
                            className={`${index % 2 !== 0 ? 'bg-gray-100 border-gray-300' : 'bg-[#d9edff] border-[#1e73be]/30'
                                } border-2 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
                        >
                            <h3 className={`text-3xl font-bold mb-6 pb-4 border-b ${index % 2 !== 0 ? 'text-gray-800 border-gray-400/20' : 'text-[#1e73be] border-[#1e73be]/20'
                                }`}>
                                {material.title}
                            </h3>
                            <ul className="space-y-4">
                                {material.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-start gap-3">
                                        <span className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 ${index % 2 !== 0 ? 'bg-gray-500' : 'bg-[#1e73be]'
                                            }`} />
                                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                                            {point}
                                        </p>
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

export default ArtiboneMaterials;
