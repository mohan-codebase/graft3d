import React from 'react';
import Image from 'next/image';

const packages = [
    {
        title: "Graft3DX Prost",
        image: "/images/home/our-3d-printed-products/image-1.png" // Placeholder - Replace with actual image
    },
    {
        title: "Asthi Anatomical Models",
        image: "/images/home/our-3d-printed-products/image-2.png" // Placeholder - Replace with actual image
    },
    {
        title: "Patient Specific Implant",
        image: "/images/home/our-3d-printed-products/image-3.png" // Placeholder - Replace with actual image
    }
];

const ProductsSection = () => {
    return (
        <section className="w-full py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1660cf] mb-12">
                    Our 3D Printed Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="bg-white rounded-[20px] p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full aspect-[4/3] bg-[#D9EFFF]/50 rounded-[12px] overflow-hidden relative mb-6">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-[#1660cf] text-center mb-2">
                                {pkg.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
