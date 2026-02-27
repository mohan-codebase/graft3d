"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const featuredProducts = [
    {
        name: "Regraft",
        image: "/images/healthcare-3d-products/regraft.jpg",
        buttonText: "Regraft",
        description: "Custom orthotic solutions",
        link: "/regraft-product"
    },
    {
        name: "Graft3DX Prost",
        image: "/images/healthcare-3d-products/graft3dx-prost.png",
        buttonText: "Graft3DX Prost",
        description: "Prosthetic ear and nose solutions",
        link: "#"
    },
    {
        name: "Dental Surgical Guide",
        image: "/images/healthcare-3d-products/dental-surgical-guide.png",
        buttonText: "Dental Surgical Guide",
        description: "Precision dental surgical guides",
        link: "#"
    },
    {
        name: "Patient Specific Implant",
        image: "/images/healthcare-3d-products/patient-specific-implant.png",
        buttonText: "Patient Specific Implant",
        description: "Custom metal implants",
        link: "/3d-printed-patient-specific-implant/"
    }
];

const FeaturedProducts = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {featuredProducts.map((product, index) => (
                        <Link
                            href={product.link}
                            key={index}
                            className="bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 block"
                        >
                            {/* Product Image */}
                            <div className="aspect-square relative bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Product Button */}
                            <div className="p-6 flex justify-center">
                                <Button
                                    asChild
                                    variant="default"
                                    size="lg"
                                    className="rounded-lg font-semibold w-full"
                                >
                                    <span>{product.buttonText}</span>
                                </Button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
