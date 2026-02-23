"use client";

import React from 'react';

const specs = [
    { label: 'Light Source', value: 'White Light + Infrared VCSEL' },
    { label: 'Texture Camera Resolution', value: '5 MP' },
    { label: 'Point Distance', value: '0.2 mm to 3.0 mm (adjustable by scanning mode)' },
    { label: 'Field of View (FOV)', value: 'White Light: 475 × 360 mm | Infrared VCSEL: 1090 × 1260 mm' },
    { label: 'Alignment Modes', value: 'Feature / Texture / Hybrid / Marker / Global Marker' },
    { label: 'Scanning Modes', value: 'Face, Cranial, Torso, Upper Limb, Lower Limb, Feet, Socket' },
    { label: 'Operating Mode', value: 'Standalone system with built in computing and touchscreen interface' },
    { label: 'Output File Formats', value: 'STL, OBJ, PLY' },
    { label: 'Data Transfer', value: 'USB or Local Network' },
    { label: 'Power Supply', value: 'AC 100 – 240 V | 50–60 Hz' },
    { label: 'Operating Temperature', value: '10 – 35 °C' },
    { label: 'Weight', value: 'Approximately < 2 kg (device only)' },
];

const TechnicalSpecifications = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-[1000px]">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-[#0066b2] mb-4">Technical Specifications</h2>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="flex flex-col">
                        {specs.map((spec, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row p-6 md:p-8 ${index !== specs.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                                <div className="w-full md:w-1/3 text-[17px] font-bold text-gray-900 pr-4 mb-2 md:mb-0">
                                    {spec.label}
                                </div>
                                <div className="w-full md:w-2/3 text-[15px] font-medium text-gray-800">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download Brochure Button */}
                <div className="flex justify-center mt-10">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-[#1b4e8e] hover:bg-[#153d72] text-white font-semibold text-[15px] px-8 py-3 rounded-full transition-colors duration-200 shadow-md"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecifications;
