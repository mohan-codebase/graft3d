import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const features = [
    {
        title: "Regraft - Artibone",
        subtitle: "Patient-Specific Bone Reconstruction Powered by Digital Precision",
        description: "Artibone represents the next generation of digitally planned, patient-specific bone regrafts designed to restore anatomy, function, and aesthetics. By integrating virtual surgical planning (VSP), advanced biomaterials, and 3D printing, Artibone enables durable and precise reconstruction across craniofacial, maxillofacial, and orthopedic applications. Manufactured using medical-grade titanium, PEEK, PMMA and PC, Artibone delivers strength, precision, and long-term biocompatibility customised for every patient.",
        image: "/images/regraft/reg-1.png",
        link: "/regraft-artibone"
    },
    {
        title: "Regraft – Customised Plates",
        subtitle: "Precision-Driven Facial Bone and Jaw Reconstruction",
        description: "Virtual Surgical Planning (VSP) plates use advanced 3D imaging and CAD/CAM technology to create patient-specific titanium plates and surgical guides for facial bone and jaw reconstruction. In orthognathic surgery and facial trauma management, customized plates ensure exact skeletal repositioning with reduced operative time. This allows surgeons to plan and execute jaw movements and facial bone reconstruction with minimal intraoperative adjustments. This approach enhances functional outcomes, facial aesthetics, and long-term stability.",
        image: "/images/regraft/reg-2.png",
        link: "/regraft-customised-plates"
    },
    {
        title: "Regraft - Bonerip",
        subtitle: "Precision Engineered Bone Replicas for Smarter Surgery",
        description: "Bonerip is a custom 3D Printed anatomical model used for training, simulation, and mock-up surgery. It is created from 3D Printing technology by segmenting patient medical scans, such as CT, CBCT, and MRI, into 3D Models, providing medical professionals with a realistic and detailed representation of human bone for a better understanding of complex anatomy.",
        image: "/images/regraft/reg-3.png",
        link: "/regraft-bonerip"
    },
    {
        title: "Regraft - Organrip",
        subtitle: "Soft Tissue Replicas for Surgical Simulation",
        description: "Regraft extends its expertise beyond bone replicas to develop soft organ replicas designed for advanced surgical simulation and preoperative planning. Created using flexible, medical grade plastic materials, these models replicate the look and feel of real organs. By offering tactile and visual accuracy, Organrip or soft organ replicas help improve surgical performance, reduce intraoperative complications, and support better clinical outcomes.",
        image: "/images/regraft/reg-4.png",
        link: "#"
    },
    {
        title: "Regraft - Digiprun",
        subtitle: "Digital Cutting Guides for Precision Bone Surgery",
        description: "Digiprun is an advanced digital cutting guide designed to bring accuracy and control to complex bone surgeries. Developed using patient-specific imaging and virtual surgical planning, Digiproon enables surgeons to define and execute bone cuts with confidence. Digiprun helps preserve healthy tissue and improve surgical outcomes by guiding surgeons to remove the affected or infected bone.",
        image: "/images/regraft/reg-5.png",
        link: "#"
    },
    {
        title: "Regraft - Digilumin",
        subtitle: "Digital Drill Guides for Optimized Implant Stability",
        description: "Digilumin is an advanced digital drill guide designed to enhance precision in implant placement and bone drilling procedures. Digilumin identifies optimal drilling locations within high-density bone regions by combining patient specific 3D imaging with virtual surgical planning. This ensures improved implant stability, greater surgical accuracy, and more predictable surgical outcomes.",
        image: "/images/regraft/reg-6.png",
        link: "/regraft-digilumin"
    },
    {
        title: "Regraft - ArtiNose & ArtiEar",
        subtitle: "Custom Esthetic Facial Prosthetics",
        description: "Artificial nose and ear grafts made of medical-grade silicone that provide a natural appearance. They are custom designed to match the patient’s facial anatomy, skin tone, and contours. These prostheses restore aesthetics following trauma, disease, or congenital loss.",
        image: "/images/regraft/reg-7.png",
        link: "/regraft-arti-nose-arti-ear"
    },
    {
        title: "Regraft - ArtiLeg",
        subtitle: "Adaptive Silicone Interface for Prosthetics",
        description: "Silicone-based artificial leg and socket grafts create a soft, adaptive interface between the limb and prosthesis. They ensure even load distribution, minimize skin irritation, and enhance stability. This leads to improved comfort, control, and long-term prosthetic performance.",
        image: "/images/regraft/reg-8.png",
        link: "#"
    }
];

const RegraftFeatures = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                                    {feature.subtitle && (
                                        <p className="text-[#0066b2] text-xl font-medium leading-tight">
                                            {feature.subtitle}
                                        </p>
                                    )}
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                    {feature.description}
                                </p>
                                <div className="pt-4">
                                    <Link href={feature.link || "/contact-us"}>
                                        <Button className="bg-[#1e73be] hover:bg-[#165b9a] text-white px-8 py-3 text-lg rounded-md font-semibold transition-all shadow-md">
                                            Know more
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image content */}
                            <div className="flex-1 relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
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

export default RegraftFeatures;
