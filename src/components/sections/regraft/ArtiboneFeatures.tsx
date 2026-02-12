import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const features = [
    {
        title: "Regraft TMJ - Temporomandibular Joint",
        description: "Our custom TMJ solutions combine 3D-printed titanium condylar components with UHMWPE fossa units, engineered to replicate natural joint biomechanics. This ensures smooth articulation, durability, and long-term functional outcomes, even in complex TMJ disorders and revisions.",
        image: "/images/regraft-artibone/arti-1.png", // Dummy image
    },
    {
        title: "Regraft RRTC - Resection & Reconstruction Planning for Tumors",
        description: "Through advanced VSP and 3D printing, Regraft enables precise tumor resection planning with immediate reconstruction. Patient-specific solutions support fibula free flap reconstructions or titanium fixation units, helping surgeons achieve accurate margins, reduced operative time, and predictable anatomical restoration.",
        image: "/images/regraft-artibone/arti-2.png", // Dummy image
    },
    {
        title: "Regraft OBR - Orbital Reconstruction",
        description: "Using high-resolution imaging, digital planning, and 3D printing, Regraft orbital solutions allow surgeons to restore orbital volume, symmetry, and function following trauma, tumors, or congenital anomalies.",
        image: "/images/regraft-artibone/arti-3.png", // Dummy image
    },
    {
        title: "Regraft CVR - Cranial Vault Reconstruction",
        description: "Our patient-specific cranial implants offer high-precision reconstruction for defects caused by trauma, tumor resection, congenital deformities, or infection. Designed for optimal fit and stability, cranial implants restore protection, contour, and aesthetics.",
        image: "/images/regraft-artibone/arti-4.png", // Dummy image
    },
    {
        title: "Regraft RR-MM - Reconstruction of Resected Maxilla & Mandible",
        description: "Regraft transforms maxillomandibular reconstruction through 3D-printed patient-specific implants (PSIs). Digital planning and biomechanical optimization ensure accurate occlusion, structural stability, and long-term functional success in complex resections.",
        image: "/images/regraft-artibone/arti-5.png", // Dummy image
    },
    {
        title: "Regraft BA - Facial Bone Augmentation",
        description: "With digital design and biocompatible materials such as PEEK and porous titanium, surgeons can achieve precise augmentation, natural facial contours, and long-term stability customized for each patient’s anatomy.",
        image: "/images/regraft-artibone/arti-6.png", // Dummy image
    },
    {
        title: "Regraft FD - Facial Deformities",
        description: "By combining VSP with 3D printing, Regraft enables accurate evaluation, simulation, and correction of complex craniofacial deformities, supporting predictable surgical outcomes and improved facial harmony.",
        image: "/images/regraft-artibone/arti-7.png", // Dummy image
    }
];

const ArtiboneFeatures = () => {
    return (
        <section className="pt-20 pb-10 bg-white overflow-hidden">
            <div className="container max-w-[1400px] mx-auto px-4">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed text-left">
                                    {feature.description}
                                </p>
                                <div className="pt-2 text-left">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#1e73be] hover:bg-[#155a96] text-white px-8 py-3 text-lg rounded-md font-semibold transition-all shadow-md">
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

export default ArtiboneFeatures;
