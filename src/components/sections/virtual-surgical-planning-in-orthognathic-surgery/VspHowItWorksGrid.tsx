"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        title: "Virtual Planning",
        description: "The craniofacial structure of the patient is rendered in 3D high definition image and a model is generated over it virtually. Using specialized software, the surgeon can simulate desired jaw movements, evaluate the skeletal discrepancies, and predict both the functional and esthetic results",
        image: "/images/virtual-surgical-planning-in-orthognathic-surgery/Group-1171275181.png"
    },
    {
        title: "Custom Plate Design",
        description: "After the surgical plan is determined, a custom fit plate is designed and constructed using CAD/CAM technology, replicating the patient’s anatomy and the planned skeletal repositioning.",
        image: "/images/virtual-surgical-planning-in-orthognathic-surgery/Group-1171275182.png"
    },
    {
        title: "Patient Specific Surgical Guides",
        description: "In addition to plates, cutting and drilling guides are produced based on the digital plan. These guides help surgeons perform osteotomies and place fixation plates with exceptional precision.",
        image: "/images/virtual-surgical-planning-in-orthognathic-surgery/Group-1171275183.png"
    },
    {
        title: "Precise Fixation",
        description: "During the surgery, the patient specific plate is placed and fixed to retain the segments of the jaw in their predetermined position exactly. This results in predictable outcomes and achieves surgical accuracy.",
        image: "/images/virtual-surgical-planning-in-orthognathic-surgery/Group-1171275184-e1759564350833.png"
    }
];

const VspHowItWorksGrid = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <h2 className="text-center text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-12">
                    How VSP Plates Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[#f2f8fc] rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold text-[#1a5b9e] mb-4">{step.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-[15px] font-medium mb-8">
                                    {step.description}
                                </p>
                            </div>
                            <div className="flex justify-end mt-auto h-[120px] relative">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain object-right-bottom"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VspHowItWorksGrid;
