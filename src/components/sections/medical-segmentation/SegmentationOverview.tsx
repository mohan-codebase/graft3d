"use client";

import React from 'react';

const SegmentationOverview = () => {
    return (
        <section className="w-full py-16 bg-[#e6f4ff]">
            <div className="container mx-auto px-4 text-center max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f6cbd] mb-8 uppercase">
                    Overview
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Graft3D medical image processing service makes it easy for doctors, surgeons, and healthcare service providers to convert Dicom files from
                    medical scanners into accurate, true-size 3D models of human anatomy, such as soft tissues, hard tissues, and any part of the human
                    body. The resulting high-quality models can be used by anyone Who needs human anatomy 3D models for virtual surgical planning,
                    healthcare 3D Printing, and Bio-cad modeling applications.
                </p>
            </div>
        </section>
    );
};

export default SegmentationOverview;
