"use client";
import React from "react";
import Image from "next/image";

const features = [
    {
        id: "01",
        title: "Quick Scan",
        description: "Let you scan the entire human body in just 10mins.",
        image: "/images/einscan-h2/ein2.png",
    },
    {
        id: "02",
        title: "Portability",
        description: "The patient doesn't need to go to the center. We'll scan at your place.",
        image: "/images/einscan-h2/ein3.png",
    },
    {
        id: "03",
        title: "Texture Scanning",
        description: "It helps you 3d scan any color, exact color of the human skin.",
        image: "/images/einscan-h2/ein4.png",
    },
    {
        id: "04",
        title: "In-Built Software",
        description: "Einscan H2 Scan helps you to patch up the entire mesh file of the human body and Creates Water type mesh.",
        image: "/images/einscan-h2/ein5.png",
    },
    {
        id: "05",
        title: "Export to Printable Files",
        description: "The files from the scanner can be exported directly for 3d printing, bio cad modeling, and downstream application.",
        image: "/images/einscan-h2/ein6.png",
    },
    {
        id: "06",
        title: "Scanner Accuracy",
        description: "It is a high accuracy human body scanner, detailed, and outputs up to 50 micron.",
        image: "/images/einscan-h2/ein7.png",
    },
];

const Features = () => {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#1D70B8] md:text-4xl">
                    FEATURES & BENEFITS
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col overflow-hidden rounded-2xl bg-[#E6F3FF] shadow-sm transition-all hover:shadow-md">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col p-6 space-y-4">
                                <span className="text-3xl font-bold text-[#1D70B8]">{feature.id}</span>
                                <p className="text-lg font-medium text-gray-700">
                                    <span className="font-bold">{feature.title}</span> – {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
