"use client";
import React from "react";
import Image from "next/image";

const Specifications = () => {
    return (
        <section className="py-12 md:py-20 bg-[#E6F3FF]">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#1D70B8] md:text-4xl">
                    Specification
                </h2>
                <div className="mx-auto max-w-5xl">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                            src="/images/einscan-h2-human-body-bodyparts-3d-scanner/Table.png"
                            alt="Einscan H2 Specifications"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specifications;
