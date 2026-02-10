"use client";

import React from 'react';
import { ChevronsRight } from 'lucide-react';

const benefits = [
    "We Design Based On Patients' Scans",
    "We Can Bring Any Complex Organic Structure",
    "Direct 3D Print-Ready Files",
    "Design Can Support Any Downstream Applications",
    "No Cost Design Iterations",
    "Designed By Bio CAD Modellers And In House Doctors"
];

const BioCadBenefits = () => {
    return (
        <section id="benefits" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                BENEFITS
            </h2>

            <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0">
                            <ChevronsRight className="w-8 h-8 text-[#1e73be] group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-gray-800">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BioCadBenefits;
