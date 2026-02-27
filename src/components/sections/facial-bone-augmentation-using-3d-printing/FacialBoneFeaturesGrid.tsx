"use client";

import React from 'react';
import { Activity, Droplets, Shield, Eye, Square, Triangle, Hexagon } from 'lucide-react';

const advantages = [
    {
        title: "Increased Osseointegration",
        description: "The growth of new bone cells into the implant surface.",
        icon: <Activity className="w-6 h-6 text-white" />
    },
    {
        title: "Improved Vascularization",
        description: "Long-term stability and natural healing.",
        icon: <Droplets className="w-6 h-6 text-white" />
    },
    {
        title: "Mechanical Reliability",
        description: "Maintaining structural integrity and facilitation of biological integration.",
        icon: <Shield className="w-6 h-6 text-white" />
    }
];

const clinicalApps = [
    {
        title: "Orbit Augmentation",
        description: "Correcting enophthalmos and replacing atrophied orbital volume following trauma or disease.",
        icon: <Eye className="w-6 h-6 text-white" />
    },
    {
        title: "Zygomatic and Malar Enhancement",
        description: "Restoring symmetry in the case of fractures, congenital underdevelopment or post traumatic deformities.",
        icon: <Triangle className="w-6 h-6 text-white" />
    },
    {
        title: "Mandibular and Maxillary Contouring",
        description: "Enhancing appearance and function for those with congenital jaw abnormalities or injury.",
        icon: <Square className="w-6 h-6 text-white" />
    },
    {
        title: "Reconstruction of the Skull and Frontal Bone",
        description: "Aesthetic and reconstructive aspects in injuries after cerebral and cranial trauma, oncologic surgery, radiotherapy or other congenital conditions.",
        icon: <Hexagon className="w-6 h-6 text-white" />
    }
];

const FacialBoneFeaturesGrid = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Advantages Section */}
                <div className="mb-20">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                            Advantages of 3D printed facial implants
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-[16px] font-medium">
                            Scaffold-like structures can be introduced in 3D printed facial implants, which is one of the biggest advantages. This porous, open latticework that mirrors the natural trabecular structure of cancellous bone results in:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {advantages.map((adv, index) => (
                            <div key={index} className="bg-[#f2f8fc] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-full bg-[#1a5b9e] flex items-center justify-center mb-6">
                                    {adv.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1a5b9e] mb-4">{adv.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                                    {adv.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 mb-20"></div>

                {/* Clinical Apps Section */}
                <div>
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                            Clinical Applications of 3D Printed Facial Bone Augmentation
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-[16px] font-medium">
                            This novel technology has now been implemented in various aspects of craniofacial reconstruction:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                        {clinicalApps.map((app, index) => (
                            <div key={index} className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a5b9e] flex items-center justify-center mt-1">
                                    {app.icon}
                                </div>
                                <div>
                                    <h3 className="text-[19px] font-bold text-[#1a5b9e] mb-2">{app.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                                        {app.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Concluding paragraph */}
                    <div className="bg-[#1a5b9e] text-white rounded-2xl p-8 lg:p-12 text-center text-[16px] lg:text-[18px] leading-relaxed font-medium">
                        Through combining medical imaging, CAD CAM software and additive manufacturing, 3D printing has changed how maxillofacial surgery is performed today. The outcome is patient specific implants which not only restore facial anatomy, but also facilitate durable biological integration and natural appearance. This technology has the potential to simplify surgery, shorten postoperative recovery, and achieve long-lasting and anatomic results.
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FacialBoneFeaturesGrid;
