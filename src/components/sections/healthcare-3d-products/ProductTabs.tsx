"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
    "All",
    "Healthcare 3D Scanners",
    "Medical Image Conversion",
    "Bio CAD Modeling",
    "Haptic Devices"
];

const products = [
    {
        id: 1,
        name: "Einscan Medixa",
        title: "Human Body Scanner",
        category: "Healthcare 3D Scanners",
        image: "/images/healthcare-3d-products/einscan-medixa.png"
    },
    {
        id: 2,
        name: "Funmat pro 410",
        title: "Medical 3D Printer",
        category: "All",
        image: "/images/healthcare-3d-products/funmat-pro-410.webp"
    },
    {
        id: 3,
        name: "Einscan HX",
        title: "Human Body Scanner",
        category: "Healthcare 3D Scanners",
        image: "/images/healthcare-3d-products/einscan-hx.jpg"
    },
    {
        id: 4,
        name: "D2P – Bone, Vascular, Teeth",
        title: "Medical Image Conversion",
        category: "Medical Image Conversion",
        image: "/images/healthcare-3d-products/d2p-medical-conversion.jpg"
    },
    {
        id: 5,
        name: "Geomagic Freeform",
        title: "Bio CAD Modeling",
        category: "Bio CAD Modeling",
        image: "/images/healthcare-3d-products/geomagic-freeform.jpg"
    },
    {
        id: 6,
        name: "Geomagic Touch & Touch X",
        title: "Haptic Devices",
        category: "Haptic Devices",
        image: "/images/healthcare-3d-products/geomagic-touch-02.jpg"
    },
    {
        id: 7,
        name: "Phantom Premium",
        title: "Haptic Device",
        category: "Haptic Devices",
        image: "/images/healthcare-3d-products/phantom-premium-01.jpg"
    }
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(product => product.category === activeTab);

    return (
        <section className="w-full py-12 md:py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Tabs Header */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 md:px-8 py-3 rounded-sm font-semibold transition-all text-sm uppercase tracking-wide shadow-sm ${activeTab === category
                                ? "bg-[#3b71ca] text-white"
                                : "bg-[#f2f2f2] text-[#333] "
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden group border border-[#eee] transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="aspect-[4/3] relative bg-[#f8f9fb] group-hover:bg-white transition-colors overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 text-center bg-[#eff4fb]">
                                <h3 className="text-[#0a2357] font-extrabold text-lg md:text-xl mb-1 tracking-tight">
                                    {product.title}
                                </h3>
                                <p className="text-[#444] text-sm md:text-base font-medium opacity-80">
                                    {product.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductTabs;
