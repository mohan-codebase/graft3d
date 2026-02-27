"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const products = [
    {
        name: "Regraft",
        image: "/images/healthcare-3d-printed-products/regraft.jpg",
        isComingSoon: false,
        link: "/regraft-product"
    },
    {
        name: "Graft3DX Prost",
        image: "/images/healthcare-3d-printed-products/graft3dx-prost.png",
        isComingSoon: false,
        link: "/3D-printed-facial-prosthetics-in-India"
    },
    {
        name: "Dental Surgical Guide",
        image: "/images/healthcare-3d-printed-products/dental-surgical-guide.png",
        isComingSoon: false,
        link: "/dental-surgical-guide"
    },
    {
        name: "Patient Specific Implant",
        image: "/images/healthcare-3d-printed-products/patient-specific-implant.png",
        isComingSoon: false,
        link: "/3d-printed-patient-specific-implant"
    },
    {
        name: "Anatomical Model",
        image: "/images/healthcare-3d-printed-products/anatomical-model.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Ankle Foot Orthosis",
        image: "/images/healthcare-3d-printed-products/ankle-foot-orthosis.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Amb Limbs",
        image: "/images/healthcare-3d-printed-products/amb-limbs.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Crown and Bridges",
        image: "/images/healthcare-3d-printed-products/crown-and-bridges.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Gingival Mask",
        image: "/images/healthcare-3d-printed-products/gingival-mask.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Head Splints",
        image: "/images/healthcare-3d-printed-products/head-splints.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Aligner",
        image: "/images/healthcare-3d-printed-products/aligner.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Longterm Denture",
        image: "/images/healthcare-3d-printed-products/longterm-denture.png",
        isComingSoon: false,
        link: "#"
    },
    {
        name: "Orthodontics",
        image: "/images/healthcare-3d-printed-products/orthodontics.png",
        isComingSoon: false,
        link: "#"
    }
];

const PrintedProductsGrid = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {products.map((product, index) => {
                        const content = (
                            <>
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
                            </>
                        );

                        return product.link ? (
                            <Link href={product.link} key={index} className="flex flex-col items-center group text-center">
                                {content}
                            </Link>
                        ) : (
                            <div key={index} className="flex flex-col items-center group text-center">
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PrintedProductsGrid;
