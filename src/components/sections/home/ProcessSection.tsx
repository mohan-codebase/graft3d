import React from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        title: "Upload DICOM Image OR 3D scan",
        image: "/images/home/process-section/step-1.png",
    },
    {
        id: 2,
        title: "Convert your DICOM image to 3D files",
        image: "/images/home/process-section/step-2.png",
    },
    {
        id: 3,
        title: "Consult Our Doctors & Bio CAD Modellers To Design Patient Specific Medical Devices",
        image: "/images/home/process-section/step-3.png",
    },
    {
        id: 4,
        title: "Get Healthcare 3D Printed Parts At Your Doorstep",
        image: "/images/home/process-section/step-4.png",
    },
];

const ProcessSection = () => {
    return (
        <section className="w-full py-4 md:py-8 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Header Content */}
                <div className="flex flex-col lg:flex-row justify-center items-center mb-16 gap-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-1 leading-tight text-black">
                        Healthcare 3D Printing Service In India <br /> <span className="text-primary">(Online Platform )</span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            {/* Connector Line (Desktop Only) */}
                            {index !== steps.length - 1 && (index + 1) % 4 !== 0 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-blue-100 -z-10" />
                            )}

                            <div className="flex flex-col items-center text-center gap-3 lg:gap-4 bg-white p-2 lg:p-4 rounded-xl transition-shadow duration-300">
                                {/* Step Number Bubble */}
                                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-blue-50 flex items-center justify-center mb-1 lg:mb-2 group-hover:bg-primary transition-colors duration-300">
                                    <span className="text-base lg:text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Image */}
                                <div className="relative w-full max-w-[120px] lg:max-w-[150px] aspect-square mb-2 lg:mb-4 rounded-lg overflow-hidden bg-gray-50">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain p-3 lg:p-4"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-primary font-bold text-sm lg:text-lg leading-tight lg:leading-normal max-w-[180px] mx-auto">{step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
