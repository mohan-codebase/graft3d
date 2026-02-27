import React from "react";
import { Hexagon } from "lucide-react";

const MaterialsSection = () => {
    const materials = [
        {
            title: "PEEK",
            features: [
                "High strength (Flexural Strength: 151 MPa)",
                "Biocompatible, non-toxic, and sterilization-stable",
                "Ideal for spinal, orthopedic, dental, and craniofacial implants"
            ]
        },
        {
            title: "PMMA",
            features: [
                "Exceptional transparency (92–93% light transmission)",
                "Widely used in cranioplasty, dental prosthetics, and medical devices",
                "Compatible with ethylene oxide, plasma, and gamma sterilization"
            ]
        },
        {
            title: "Polycarbonate (PC)",
            features: [
                "High impact resistance and rigidity",
                "Excellent chemical and heat resistance",
                "Ideal for surgical guides, instruments, microfluidic chips, and training models"
            ]
        },
        {
            title: "Titanium",
            features: [
                "Exceptional strength-to-weight ratio and corrosion resistance",
                "Superior biocompatibility and design accuracy",
                "Ideal for custom orthopedic implants, cranial and maxillofacial reconstructions, dental implants, and abutments"
            ]
        }
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12">
                    Medical Grade Materials In Our Regrafts
                </h2>

                <div className="flex flex-col space-y-6">
                    {materials.map((material, index) => {
                        const isEven = index % 2 === 0;
                        const bgClass = isEven ? "bg-[#d1e6f7]" : "bg-[#f4f4f4]";
                        const borderClass = "border border-[#4A8ACA]";

                        return (
                            <div
                                key={index}
                                className={`w-full rounded-xl ${bgClass} ${borderClass} px-8 py-6 shadow-sm`}
                            >
                                <h3 className="text-3xl font-bold text-[#1a6ebd] mb-3">
                                    {material.title}
                                </h3>

                                <div className="w-full h-[1px] bg-gray-400 mb-5"></div>

                                <ul className="space-y-3">
                                    {material.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="mr-3 flex size-2 shrink-0 rounded-full bg-[#1a6ebd]"></span>
                                            <span className="text-black font-semibold tracking-wide text-[15px] lg:text-[17px]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
