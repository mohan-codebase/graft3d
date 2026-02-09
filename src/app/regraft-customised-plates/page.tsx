import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
    title: 'Regraft Customised Plates | Virtual Surgical Planning | Graft3D',
    description: 'VSP plates combine 3D imaging simulation and CAD/CAM technology for precision in jaw repositioning and facial trauma procedures.',
};

const RegraftCustomisedPlatesPage = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[400px]  overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 ">
                    <Image
                        src="/images/regraft-customised-plates/bg-image.avif"
                        alt="Background pattern"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        Regraft Customised Plates
                    </h1>

                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Call us now */}
                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary rounded-full p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Call us now</p>
                                <p className="text-lg font-bold text-primary">+91 63744 10703 | +91 98404 78347</p>
                            </div>
                        </div>

                        {/* Email Us at */}
                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary rounded-full p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Email Us at</p>
                                <p className="text-lg font-bold text-primary">sales@graft3d.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="max-w-[1400px] mx-auto px-4 py-16">
                {/* Product 1: Regraft POS */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Regraft POS - Virtual Surgical Planning in Orthognathic Surgery
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                VSP plates combine 3D imaging simulation and CAD/CAM technology to deliver precision in jaw repositioning procedures
                            </p>
                            <Link href="/contact-us">
                                <Button className="px-8 py-3 text-lg font-semibold">
                                    Know more
                                </Button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden ">
                            <Image
                                src="/images/regraft-customised-plates/image-2.png"
                                alt="Regraft POS - Virtual Surgical Planning in Orthognathic Surgery"
                                fill
                                className="object-contain bg-white p-5"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Product 2: Regraft PFT */}
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] rounded-lg overflow-hidden ">
                            <Image
                                src="/images/regraft-customised-plates/image-1.png"
                                alt="Regraft PFT - Virtual Surgical Planning & Plates for Facial Trauma"
                                fill
                                className="object-contain bg-white p-5"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Regraft PFT - Virtual Surgical Planning & Plates for Facial Trauma
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                VSP and 3D Printed titanium plates are transforming facial trauma care with digitally guided reconstruction of complex mid-face fractures with sub-millimeter accuracy
                            </p>
                            <Link href="/contact-us">
                                <Button className="px-8 py-3 text-lg font-semibold">
                                    Know more
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RegraftCustomisedPlatesPage;