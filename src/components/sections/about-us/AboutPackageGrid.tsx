import React from 'react';
import Image from 'next/image';

const packages = [
    {
        name: "Anatomical model+message (AMT)",
        image: "/images/home/our-3d-packages/image-1.png"
    },
    {
        name: "R&D Device Package",
        image: "/images/home/our-3d-packages/image-2.png"
    },
    {
        name: "P&O Package",
        image: "/images/home/our-3d-packages/image-3.png"
    }
];

const AboutPackageGrid = () => {
    return (
        <section className="w-full py-16 bg-[#f8fbff]">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#166AAF] mb-12">
                    Our 3D Packages
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white p-4">
                                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-[#166AAF] group-hover:text-primary transition-colors">
                                    {pkg.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPackageGrid;
