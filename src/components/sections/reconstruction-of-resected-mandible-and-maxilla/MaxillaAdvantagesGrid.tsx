"use client";

import React from 'react';
import Image from 'next/image';

const advantages = [
    {
        title: "Anatomical Precision",
        description: "Precise fit through digital surgical planning and virtual mirroring.",
    },
    {
        title: "Time Efficiency",
        description: "Prefabricated implants reduce surgical time compared to traditional methods.",
    },
    {
        title: "Biomechanical Strength",
        description: "Finite element analysis in implants ensures long-term durability and resistance to functional stresses.",
    },
    {
        title: "Enhanced Functional and Aesthetic Outcomes",
        description: "Improved mastication, speech, and facial aesthetics.",
    },
    {
        title: "Reduced Morbidity",
        description: "Avoids donor site complications of free flap surgery, making it ideal for customized maxilla and mandible implants.",
    }
];

const MaxillaAdvantagesGrid = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Blue Container with Image and Card */}
                <div className="flex flex-col lg:flex-row items-stretch rounded-[30px] p-4 lg:p-6 bg-gradient-to-b from-[#cde6fd] to-[#8ebdea] mb-16 shadow-sm">

                    {/* Left: Image */}
                    <div className="w-full lg:w-[45%] relative min-h-[400px] flex items-center justify-center p-8">
                        <div className="relative w-full aspect-square max-w-[400px]">
                            <Image
                                // Substituting with 5-3, likely maps to the image in the screenshot
                                src="/images/reconstruction-of-resected-mandible-and-maxilla/5-3.png"
                                alt="Advantages of 3D-Printed Patient-Specific Implants"
                                fill
                                className="object-contain drop-shadow-md mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Right: White Card Area */}
                    <div className="w-full lg:w-[55%]">
                        <div className="bg-white rounded-[24px] p-8 lg:p-12 h-full shadow-sm">
                            <h2 className="text-3xl lg:text-[38px] font-bold text-[#1e5899] mb-10 leading-snug">
                                Advantages of 3D-Printed Patient-<br className="hidden lg:block" />Specific Implants
                            </h2>

                            <div className="flex flex-col gap-8">
                                {advantages.map((adv, index) => (
                                    <div key={index} className="flex flex-col">
                                        <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                                            {adv.title}:
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                                            {adv.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Summary Text */}
                <div className="text-center max-w-[1100px] mx-auto px-4">
                    <p className="text-gray-800 leading-relaxed text-[16px] lg:text-[18px] font-semibold text-justify lg:text-center">
                        The application of 3D-printing using patient-specific implants in mandible and maxilla reconstruction represents a turn-around in craniofacial reconstruction. The integration of 3D printing, virtual surgical planning and biomechanical optimization of implants enable accurate anatomical restoration, functional rehabilitation, and excellent cosmetic results. 3D-printed patient specific implants restore the exact anatomy of maxilla and mandible and also improves the confidence and long-term oral health of patients.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MaxillaAdvantagesGrid;
