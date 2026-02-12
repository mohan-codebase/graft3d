"use client";

import React from 'react';
import Image from 'next/image';

const branches = [
    {
        title: "Dentistry",
        image: "/images/regraft-bonerip/bone-img1.jpg",
    },
    {
        title: "Oral And Maxillofacial",
        image: "/images/regraft-bonerip/bone-img2.jpg",
    },
    {
        title: "Orthopedics",
        image: "/images/regraft-bonerip/bone-img3.jpg",
    },
    {
        title: "Urology",
        image: "/images/regraft-bonerip/bone-img4.jpg",
    },
    {
        title: "Neurosurgery",
        image: "/images/regraft-bonerip/bone-img5.jpg",
    },
    {
        title: "Cardiology",
        image: "/images/regraft-bonerip/bone-img6.jpg",
    }
];

const BoneripHealthcareBranches = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-[1400px] mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1e73be] mb-16">
                    Targeted Healthcare Branches
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-3xl aspect-[1.5/1] shadow-lg"
                        >
                            {/* Background Image */}
                            <Image
                                src={branch.image}
                                alt={branch.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Centered Text */}
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <h3 className="text-white text-2xl md:text-3xl font-bold text-center drop-shadow-lg">
                                    {branch.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoneripHealthcareBranches;
