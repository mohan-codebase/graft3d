"use client";
import React from "react";

const Overview = () => {
    return (
        <section className="bg-[#E6F3FF] py-2 md:py-4">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#1D70B8] md:text-4xl">
                        OVERVIEW
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                        <p>
                            The Einscan H2 is a human body handheld 3D scanner designed to capture detailed external features of the human body. It serves various applications, including Human body 3d scanning for medical device development, body measurements, and pre and post-injury diagnosis.
                        </p>
                        <p>
                            With two distinct modes, the Hybrid LED and Infrared VCSEL Light Source, Einscan H2 also has a 5MP resolution texture camera for scanning a human body with colours and better data quality. The inbuilt 3 VCSEL infrared projector provides superior material and lighting adaptability to various surface types and scanning environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
