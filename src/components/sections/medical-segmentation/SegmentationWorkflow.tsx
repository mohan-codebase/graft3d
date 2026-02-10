"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        title: "Step 1: Upload Medical Scans",
        description: "The first step is to upload the medical scan, such as CT, CBCT, or MRI images or give us the link on our webpage for the medical scans you want to get segmented. Ensure to fill in all necessary details, such as region of interest and texture requirement.",
        icon: "/images/medical-segmentation/seg1.png" // Dummy image
    },
    {
        id: 2,
        title: "Step 2: Medical Image Preprocessing",
        description: "We use advanced software to preprocess images, such as noise reduction or contrast enhancement. This step ensures the input image is of the best quality for segmentation.",
        icon: "/images/medical-segmentation/seg2.png"
    },
    {
        id: 3,
        title: "Step 3: Select Medical Image Segmentation Type",
        description: "We understand the specific type of Segmentation customers need, whether organ, bone or tooth segmentation, tumor detection, or any other medical image analysis.",
        icon: "/images/medical-segmentation/seg3.png"
    },
    {
        id: 4,
        title: "Step 4: Conversion To 3D Model",
        description: "The segmented data is used to create a detailed 3D model with or without texture after segmentation. This model accurately represents the structures within the original medical scans.",
        icon: "/images/medical-segmentation/seg4.png"
    },
    {
        id: 5,
        title: "Step 5: Export As 3D Print-Ready STL Model",
        description: "We export the resulting 3D model in STL format, which is a standard file format compatible with 3D printing.",
        icon: "/images/medical-segmentation/seg5.png"
    },
    {
        id: 6,
        title: "Step 6: Review Your 3D Models.",
        description: "Once the 3D models are ready, you can review them instantly. Take your time to explore and ensure they meet your expectations.",
        icon: "/images/medical-segmentation/seg6.png"
    },
    {
        id: 7,
        title: "Step 7: Payment Options",
        description: "Once you are satisfied with the 3D models, you have two convenient payment options: A. Monthly Subscription B. Instant Payment",
        icon: "/images/medical-segmentation/seg7.png"
    }
];

const SegmentationWorkflow = () => {
    return (
        <section className="w-full py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-20">
                    Workflow For Your <span className="text-[#1e73be]">3D Medical Image Segmentation</span>
                </h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Center Line (Desktop) */}
                    {/* Vertical Center Line (Desktop) & Left Line (Mobile) */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                    <div className="md:space-y-20 space-y-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between w-full">

                                {/* Center Number Circle (Desktop) */}
                                {/* Center Number Circle (Desktop) & Left Circle (Mobile) */}
                                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-[#6ebbf7] flex items-center justify-center z-10 text-[#0f6cbd] font-bold shadow-sm">
                                    {step.id}
                                </div>

                                {/* Content Logic: 
                                    Odd Steps (1, 3, ...): Icon Left, Text Right 
                                    Even Steps (2, 4, ...): Text Left, Icon Right
                                */}

                                {/* Left Side Block */}
                                <div className={`w-full md:w-1/2 flex ${step.id % 2 !== 0 ? 'justify-center md:items-center md:pr-16 order-1' : 'justify-center md:items-start md:pr-16 order-2 md:order-1'}`}>
                                    {step.id % 2 !== 0 ? (
                                        // Odd Step: Icon on Left
                                        <div className="hidden md:block relative w-16 h-16 md:w-38 md:h-38 mb-6 md:mb-0">
                                            <Image
                                                src={step.icon}
                                                alt={`Step ${step.id}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        // Even Step: Text on Left
                                        <div className="text-left md:text-right w-full pl-12 md:pl-0">
                                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                                <span className="text-[#0f6cbd]">{step.title.split(':')[0]}:</span>
                                                {step.title.split(':')[1]}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Block */}
                                <div className={`w-full md:w-1/2 flex ${step.id % 2 !== 0 ? 'justify-center md:items-start md:pl-16 order-2' : 'justify-center md:items-center md:pl-16 order-1 md:order-2'}`}>
                                    {step.id % 2 !== 0 ? (
                                        // Odd Step: Text on Right
                                        <div className="text-left md:text-left w-full pl-12 md:pl-0">
                                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                                <span className="text-[#0f6cbd]">{step.title.split(':')[0]}:</span>
                                                {step.title.split(':')[1]}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        // Even Step: Icon on Right
                                        <div className="hidden md:block relative w-16 h-16 md:w-38 md:h-38 mb-6 md:mb-0">
                                            <Image
                                                src={step.icon}
                                                alt={`Step ${step.id}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Step Number */}


                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SegmentationWorkflow;
