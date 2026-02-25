"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
    "All",
    "Healthcare 3D Scanners",
    "Medical Image Conversion",
    "Bio CAD Modeling",
    "Haptic Devices"
];

const products = [
    {
        category: "Healthcare 3D Scanners",
        title: "Human Body Scanner",
        subtitle: "Einscan H2",
        image: "/images/einscan-h2/ein14.png"
    },
    {
        category: "Medical Image Conversion",
        title: "Medical Image Conversion",
        subtitle: "D2P – Bone , Vascular , Teeth",
        image: "/images/einscan-h2/ein15.jpg"
    },
    {
        category: "Bio CAD Modeling",
        title: "Bio CAD Modeling",
        subtitle: "Geomagic Freeform",
        image: "/images/einscan-h2/ein16.jpg"
    },
    {
        category: "Haptic Devices",
        title: "Haptic Device",
        subtitle: "Geomagic Touch & Touch X",
        image: "/images/einscan-h2/ein17.jpg"
    },
    {
        category: "Haptic Devices",
        title: "Haptic Device",
        subtitle: "Phantom Premium",
        image: "/images/einscan-h2/ein18.jpg"
    }
];

const RelatedProducts = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    <span className="text-[#1D70B8]">OUR HEALTHCARE</span> 3D PRODUCTS
                </h2>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-md font-medium transition-all ${activeCategory === category ? 'bg-[#1D70B8] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#1D70B8]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products
                        .filter(product => activeCategory === "All" || product.category === activeCategory)
                        .map((product, index) => (
                            <div key={index} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100">
                                <div className="relative aspect-[4/3] w-full bg-[#E6F3FF]/30 p-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col p-6 text-center bg-gray-50/50">
                                    <h3 className="text-lg font-bold text-[#003366] mb-2">{product.title}</h3>
                                    <p className="text-gray-600">{product.subtitle}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
