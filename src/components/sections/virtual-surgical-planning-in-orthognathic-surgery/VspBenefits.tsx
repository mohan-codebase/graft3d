"use client";

import React from 'react';
import { Settings, Clock, CheckCircle, Search } from 'lucide-react';

const benefits = [
    {
        title: "Enhanced Accuracy and Precision",
        description: "VSP allows for accurate transfer of the virtual plan to the operating room leading to accurate skeletal repositioning.",
        icon: <Settings className="w-6 h-6 text-white" />
    },
    {
        title: "Reduced Surgical Time",
        description: "As plates are pre-bent, and guides are customised, intra-operative modification is kept to a minimum, thus decreasing both the complexity of procedure and surgeon fatigue.",
        icon: <Clock className="w-6 h-6 text-white" />
    },
    {
        title: "Improved Functional and Aesthetic Outcomes",
        description: "More precise adjustability of jaw position results in improved bite relationship, facial balance and long-term stability of the effects.",
        icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
        title: "Comprehensive Preoperative Planning",
        description: "They allow surgeons to rehearse different treatment options, anticipate potential complications, and improve the surgical outcome prior to the procedure.",
        icon: <Search className="w-6 h-6 text-white" />
    }
];

const VspBenefits = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <h2 className="text-center text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-16">
                    How VSP Plates Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a5b9e] flex items-center justify-center mt-1">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-[19px] font-bold text-[#1a5b9e] mb-2">{benefit.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VspBenefits;
