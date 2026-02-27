import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
    {
        title: "Graft3DX Prost",
        image: "/images/home/our-3d-printed-products/image-1.png", // Placeholder - Replace with actual image
        link: "/3d-printed-facial-prosthetics-in-india"
    },
    {
        title: "Asthi Anatomical Models",
        image: "/images/home/our-3d-printed-products/image-2.png", // Placeholder - Replace with actual image
        link: "/asthi-bone-like-3d-printed-training-models"
    },
    {
        title: "Patient Specific Implant",
        image: "/images/home/our-3d-printed-products/image-3.png", // Placeholder - Replace with actual image
        link: "/3d-printed-patient-specific-implant"
    }
];

const ProductsSection = () => {
    return (
        <section className="w-full py-8 md:py-16 ">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-black">
                    Our 3D Printed <span className="text-primary">Products</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <Link
                            key={index}
                            href={pkg.link}
                            className="bg-white rounded-[20px] p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-full aspect-[4/3] bg-[#D9EFFF]/50 rounded-[12px] overflow-hidden relative mb-6">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-primary text-center mb-2 ">
                                {pkg.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
