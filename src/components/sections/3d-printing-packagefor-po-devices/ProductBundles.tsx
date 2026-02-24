import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: 1,
        title: 'Einscan-Human Body 3D Scanner',
        image: '/images/3d-printing-packagefor-po-devices/Image-1.png',
        imageLeft: true,
        features: [
            '3D Scan human body parts with Eye-safe & Human skin friendly Hybrid LED & Infrared Light Source Handheld Color 3D Scanner.',
            'The built-in color camera supports capturing full-color texture and skin tone.',
            'Scan P&O Devices to compare with the original CAD design.',
        ],
        link: '#',
    },
    {
        id: 2,
        title: 'Geomagic Freeform Software with Haptic Touch Device- Prosthetic & Orthotic Device Design Software',
        image: '/images/3d-printing-packagefor-po-devices/Image-2.png',
        imageLeft: false,
        features: [
            '3D Scan human body parts with Eye-safe & Human skin friendly Hybrid LED & Infrared Light Source Handheld Color 3D Scanner.',
            'The built-in color camera supports capturing full-color texture and skin tone.',
            'Scan P&O Devices to compare with the original CAD design.',
        ],
        link: '#',
    },
    {
        id: 3,
        title: 'EXT 1070 Tital Pellet LT* (ATLAS 2.5) – Prosthetic 3D Printer',
        image: '/images/3d-printing-packagefor-po-devices/Group-85.png',
        imageLeft: true,
        features: [
            '3D Print P&O devices with PEBA Flexible nylon pellets and mineral-filled polypropylene pellets.',
            'Produce up to 200 to 300 devices in a month.',
            'Fast printing for multiple iterations and customization.',
            'Test the fit and customize further for optimized design for best fit and performance.',
        ],
        link: '#',
    },
    {
        id: 4,
        title: 'Geomagic CX: Quality Control & Inspection of Medical Devices.',
        image: 'https://graft3d.com/wp-content/uploads/2023/08/image-6.png',
        imageLeft: false,
        features: [
            '3D inspect the final P&O devices after production.',
            'Precisely measure, analyze, and verify critical dimensions and geometries.',
            'Report & document the result of a patient\'s medical condition, before and after surgery, and the inspection results of the devices.',
        ],
        link: '#',
    },
];

const ProductBundles = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-[28px] font-extrabold text-gray-900 text-center uppercase tracking-widest mb-12">
                    Products Bundles
                </h2>

                <div className="flex flex-col gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#ddeef9] p-5 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-blue-100"
                            style={{ flexDirection: product.imageLeft ? 'row' : 'row-reverse' }}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-[360px] flex-shrink-0 min-h-[220px]">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 gap-4 flex-1">
                                <h3 className="text-[16px] font-bold text-[#166aaf] leading-snug">
                                    {product.title}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 text-[18px] leading-relaxed">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#4db6f5] flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={product.link}
                                    className="text-[#166aaf] font-semibold text-[13px] hover:underline inline-flex items-center gap-1 mt-1"
                                >
                                    Know More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductBundles;
