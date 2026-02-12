"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const products = [
    {
        name: "Regraft",
        image: "/images/healthcare-3d-printed-products/regraft.jpg",
        isComingSoon: false
    },
    {
        name: "Graft3DX Prost",
        image: "/images/healthcare-3d-printed-products/graft3dx-prost.png",
        isComingSoon: false
    },
    {
        name: "Dental Surgical Guide",
        image: "/images/healthcare-3d-printed-products/dental-surgical-guide.png",
        isComingSoon: false
    },
    {
        name: "Patient Specific Implant",
        image: "/images/healthcare-3d-printed-products/patient-specific-implant.png",
        isComingSoon: false
    },
    {
        name: "Anatomical Model",
        image: "/images/healthcare-3d-printed-products/anatomical-model.png",
        isComingSoon: false
    },
    {
        name: "Ankle Foot Orthosis",
        image: "/images/healthcare-3d-printed-products/ankle-foot-orthosis.png",
        isComingSoon: false
    },
    {
        name: "Amb Limbs",
        image: "/images/healthcare-3d-printed-products/amb-limbs.png",
        isComingSoon: false
    },
    {
        name: "Crown and Bridges",
        image: "/images/healthcare-3d-printed-products/crown-and-bridges.png",
        isComingSoon: false
    },
    {
        name: "Gingival Mask",
        image: "/images/healthcare-3d-printed-products/gingival-mask.png",
        isComingSoon: false
    },
    {
        name: "Head Splints",
        image: "/images/healthcare-3d-printed-products/head-splints.png",
        isComingSoon: false
    },
    {
        name: "Aligner",
        image: "/images/healthcare-3d-printed-products/aligner.png",
        isComingSoon: false
    },
    {
        name: "Longterm Denture",
        image: "/images/healthcare-3d-printed-products/longterm-denture.png",
        isComingSoon: false
    },
    {
        name: "Orthodontics",
        image: "/images/healthcare-3d-printed-products/orthodontics.png",
        isComingSoon: false
    }
];

const PrintedProductsGrid = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group"
                        >
                            {/* Product Image Container */}
                            <div className="w-full aspect-video relative rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${product.isComingSoon ? 'opacity-60 grayscale-[50%]' : ''}`}
                                />

                                {product.isComingSoon && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm md:text-base tracking-widest uppercase py-2 px-4 border border-white/50 backdrop-blur-sm">
                                            Coming Soon
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Product Button */}
                            <div className="mt-6 w-full flex justify-center">
                                <Button
                                    variant="default"
                                    className=""
                                >
                                    {product.name}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrintedProductsGrid;
