"use client";

import React from 'react';
import Image from 'next/image';

const materials = [
    {
        title: "PEEK (Polyetheretherketone)",
        description: "Lightweight, strong and radiolucent allowing for easier post-operative imaging."
    },
    {
        title: "Porous Titanium",
        description: "Offers excellent mechanical strength and a surface that encourages bone ingrowth."
    },
    {
        title: "Biocompatible Polymers",
        description: "Flexible, safe and appropriate for long-term patient-specific use."
    }
];

const FacialBoneMaterials = () => {
    return (
        <section className="w-full py-16 bg-[#f7fbfd]">
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Intro Area */}
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                        Why 3D Printing in Facial Bone Reconstruction?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-[16px] font-medium">
                        Unlike standard fixation plates or grafting techniques, 3D printed facial implants are tailored to each patient’s individual anatomy. Surgeons and biomedical engineers generate a digital image of the facial deformity, using high resolution images of CT scan, which is then processed through a computer-aided design (CAD) software. The facial implant is fabricated with exact dimensions for accurate fit, reducing the procedure time and eliminating trial and error during surgery.
                    </p>
                </div>

                {/* Materials Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Image Left */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-[4/3]">
                            <Image
                                src="/images/acial-bone-augmentation-using-3d-printing/Group-1171275183-1.png"
                                alt="3D Printed Facial Implants Materials"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#1a5b9e] mb-2">
                            Materials Used in 3D Printing
                        </h3>
                        <p className="text-gray-700 mb-8 font-medium">
                            Several biocompatible materials are used in 3D printed facial bone reconstruction, which provide advantages in terms of their clinical application:
                        </p>

                        <div className="flex flex-col gap-6">
                            {materials.map((mat, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#1a5b9e]">
                                    <h4 className="text-xl font-bold text-[#1a5b9e] mb-2">{mat.title}</h4>
                                    <p className="text-gray-600 font-medium text-[15px]">{mat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FacialBoneMaterials;
