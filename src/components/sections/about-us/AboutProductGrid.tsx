import React from 'react';
import Image from 'next/image';

const products = [
    {
        name: "Graft3DX Prost",
        image: "/images/home/our-3d-printed-products/image-1.png"
    },
    {
        name: "Arti Bone and Arti ear",
        image: "/images/home/our-3d-printed-products/image-2.png"
    },
    {
        name: "Patient Specific Implant",
        image: "/images/home/our-3d-printed-products/image-3.png"
    }
];

const AboutProductGrid = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#166AAF] mb-12">
                    Our 3D Printed Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#f8fbff] p-4">
                                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#166AAF] transition-colors">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProductGrid;
