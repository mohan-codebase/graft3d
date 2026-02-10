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
        image: "/images/healthcare-3d-products/3d-scanner.jpg"
    },
    {
        id: 2,
        name: "Funmat pro 410",
        title: "Medical 3D Printer",
        category: "Healthcare 3D Scanners",
        image: "/images/healthcare-3d-products/3d-printer.webp"
    },
    {
        id: 3,
        name: "Einscan HX",
        title: "Human Body Scanner",
        category: "Healthcare 3D Scanners",
        image: "/images/healthcare-3d-products/3d-scanner.jpg" // Reusing scanner image as placeholder if HX specific not found
    },
    {
        id: 4,
        name: "D2P – Bone, Vascular, Teeth",
        title: "Medical Image Conversion",
        category: "Medical Image Conversion",
        image: "/images/healthcare-3d-products/d2p-01-1.jpg"
    },
    {
        id: 5,
        name: "Geomagic Freeform",
        title: "Bio CAD Modeling",
        category: "Bio CAD Modeling",
        image: "/images/healthcare-3d-products/3d-software.jpg"
    },
    {
        id: 6,
        name: "Geomagic Touch & Touch X",
        title: "Haptic Devices",
        category: "Haptic Devices",
        image: "/images/healthcare-3d-products/3d-software.jpg" // Placeholder
    }
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(product => product.category === activeTab);

    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Tabs Header */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === category
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#f0f4f9] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-[16/10] relative bg-white">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-primary font-bold text-lg mb-1">{product.title}</p>
                                <h3 className="text-gray-700 text-sm font-medium">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductTabs;
