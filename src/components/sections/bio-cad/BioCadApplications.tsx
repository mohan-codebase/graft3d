"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        id: 1,
        title: "Any Patient-Specific Implant Designing",
        image: "/images/bio-cad/one.png"
    },
    {
        id: 2,
        title: "A Surgical Cutting Guide Designing",
        image: "/images/bio-cad/two.png"
    },
    {
        id: 3,
        title: "Custom Medical Device",
        image: "/images/bio-cad/three.png"
    },
    {
        id: 4,
        title: "Facial Reconstruction Surgery Planning",
        image: "/images/bio-cad/four.png"
    },
    {
        id: 5,
        title: "Infra Orbital Implant",
        image: "/images/bio-cad/five.png"
    },
    {
        id: 6,
        title: "Orthotic Device Designing",
        image: "/images/bio-cad/six.png"
    },
    {
        id: 7,
        title: "Facial Prosthesis Design",
        image: "/images/bio-cad/seven.png"
    },
    {
        id: 8,
        title: "Prosthetic Designing",
        image: "/images/bio-cad/eight.png"
    },
    {
        id: 9,
        title: "Anatomy Reconstruction",
        image: "/images/bio-cad/nine.png"
    }
];

const BioCadApplications = () => {
    return (
        <section id="applications" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                APPLICATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app) => (
                    <div key={app.id} className="group cursor-pointer">
                        <div className="bg-white p-4 rounded-b-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Image Container */}
                            <div className="relative w-full h-64 mb-4 overflow-hidden rounded bg-gray-100">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-center font-bold text-gray-800 text-sm md:text-base min-h-[48px] flex items-center justify-center">
                                {app.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BioCadApplications;
