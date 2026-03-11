import React from "react";
import Image from "next/image";

const applications = [
    {
        title: "Oncological Resection",
        description: "For oral tumors and cancers, oncologic mandibular reconstruction with PSIs permits post-resection rehabilitation immediately. The prosthesis restores continuity of bone, supports the maxilla and orbital floor, reestablishing physiological as well as cosmetic function.",
        image: "/images/reconstruction-of-resected-mandible-and-maxilla/8-1.png",
        imageAlt: "Oncological Resection Mandible PSI"
    },
    {
        title: "Infective Pathologies",
        description: "There has been an increase in mucormycosis affected jaw reconstruction cases using 3D printing post-COVID-19. Patient-specific implants offer precise solutions for large defects, particularly in patients with high surgical risk of free flap surgery.",
        image: "/images/reconstruction-of-resected-mandible-and-maxilla/5-3.png",
        imageAlt: "Infective Pathologies Maxilla PSI"
    },
    {
        title: "Trauma Reconstruction",
        description: "Patient specific implants are used to fix complex maxillary and mandibular fractures and control bone loss. They re-establish occlusion, preserve facial balance and proportions without adding to intra-operative time.",
        image: "/images/reconstruction-of-resected-mandible-and-maxilla/1-3.png",
        imageAlt: "Trauma Reconstruction PSI"
    }
];

const MaxillaClinicalApplications = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#005696]">
                        Clinical Applications of<br />Patient-Specific Implants
                    </h2>
                </div>

                <div className="space-y-12 md:space-y-8">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text content block */}
                            <div className="w-full md:w-1/2 p-10 md:p-12 bg-[#eff7ff] rounded-[32px] md:rounded-[48px]">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#005696] mb-6">
                                    {app.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    {app.description}
                                </p>
                            </div>

                            {/* Image block */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-[500px] aspect-square transform transition-transform hover:scale-105 duration-300">
                                    <Image
                                        src={app.image}
                                        alt={app.imageAlt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaxillaClinicalApplications;
