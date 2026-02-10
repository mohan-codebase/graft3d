"use client";

import React from 'react';
import Image from 'next/image';

const productCategories = [
    {
        name: "3D Scanner",
        image: "/images/healthcare-3d-products/3d-scanner.jpg",
        alt: "Medical 3D Scanner"
    },
    {
        name: "3D Printer",
        image: "/images/healthcare-3d-products/3d-printer.webp",
        alt: "Medical 3D Printer"
    },
    {
        name: "3D Software",
        image: "/images/healthcare-3d-products/3d-software.jpg",
        alt: "Medical 3D Software"
    }
];

const ProductCategories = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    fill
                                    className="object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
