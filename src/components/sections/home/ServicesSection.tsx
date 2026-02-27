"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const services = [
    {
        id: 0,
        title: "DICOM to 3D conversion service",
        description: [
            "Do you have the medical scans in hand and are looking for a reliable vendor to convert medical images, such as CT, CBCT or MRI scans, into high-quality 3D models? Graft3D can help you with high-quality image segmentation services using advanced Dicom to 3D conversion software.",
            "Medical professionals can use our segmented models for 3D printing, visualization, pre-surgical planning, and patient education. Our 3D models can also be used as a source to design Custom Implants or Medical Devices in any medical design software."
        ],
        image: "/images/home/services-section/image-1.png",
        link: "/dicom-to-3d-model-conversion-software"
    },
    {
        id: 1,
        title: "Custom Medical Design Service",
        description: [
            "Our expert design team creates custom medical devices tailored to specific patient needs. From patient-specific implants to surgical guides, we ensure precision and compatibility.",
            "We work closely with surgeons to develop solutions that improve surgical outcomes and reduce recovery times. Our design process integrates seamlessly with clinical workflows."
        ],
        image: "/images/home/services-section/image-2.png",
        link: "/medical-image-segmentation-service"
    },
    {
        id: 2,
        title: "Medical 3D Printing",
        description: [
            "State-of-the-art 3D printing services for healthcare. We utilize biocompatible materials and high-precision printers to manufacture anatomical models, guides, and implants.",
            "Our facility is equipped to handle various printing technologies including SLA, SLS, and FDM, ensuring the right material properties for every medical application."
        ],
        image: "/images/home/services-section/image-3.png",
        link: "/bio-cad-modeling-service"
    }
];

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center">

                {/* Header */}
                <div className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                    Services
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-1 leading-tight text-black">
                    Exclusive Online Platform For
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12 leading-tight">
                    Healthcare 3D Services
                </h2>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 w-full max-w-5xl">
                    {services.map((service, index) => (
                        <Button
                            key={service.id}
                            onClick={() => setActiveTab(index)}
                            variant={activeTab === index ? "default" : "ghost"}
                            className={`rounded-lg px-6 py-3 h-auto font-medium text-sm lg:text-base transition-all duration-300 ${activeTab === index
                                ? 'shadow-lg scale-105'
                                : 'bg-[#f3f3f3] text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {service.title}
                        </Button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">

                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        {services[activeTab].description.map((paragraph, idx) => (
                            <p key={idx} className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        <Link href={services[activeTab].link} className="mt-2">
                            <Button variant="ghost" className="text-primary font-bold text-lg hover:underline p-0 flex items-center gap-1 h-auto">
                                Know More &rsaquo;
                            </Button>
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 w-full">
                        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-xl bg-gray-100">
                            <Image
                                key={activeTab} // Force re-render on tab change for animation if needed
                                src={services[activeTab].image}
                                alt={services[activeTab].title}
                                fill
                                className="object-cover transition-opacity duration-500"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
