import React from 'react';
import Image from 'next/image';

const Overview = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-8 uppercase tracking-tight">
                Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="text-gray-700 space-y-6 leading-relaxed">
                    <p className="text-lg font-medium text-gray-800">
                        Hybrid Structure Light Sources (LED and Invisible Infrared)
                    </p>
                    <p>
                        EinScan H series pioneers a hybrid light source technology, integrating LED light and invisible infrared light into one device. The addition of the invisible infrared light source allows for easy scanning of dark objects and human hair, overcoming the limitations of traditional 3D scanners.
                    </p>
                    <p>
                        Preset scanning modes for common applications like face scanning, body scanning, and standard scanning ensure high-quality data acquisition with minimal effort. The intuitive software guides the user through the scanning process, from data capture to model generation.
                    </p>
                    <div className="bg-[#f8fbff] p-6 rounded-xl border border-blue-50">
                        <p className="font-semibold text-[#1e73be]">
                            The built-in color camera and large field of view allow the EinScan H to deliver high-quality 3D data with full color in minutes.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-[4/3]">
                        <Image
                            src="https://graft3d.com/wp-content/uploads/2021/12/einscan-hx-02.png"
                            alt="EinScan H Scanner"
                            fill
                            className="object-contain p-4"
                            unoptimized
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-[4/3]">
                        <Image
                            src="https://graft3d.com/wp-content/uploads/2021/12/einscan-hx-03.png"
                            alt="EinScan H Scanning Process"
                            fill
                            className="object-contain p-4"
                            unoptimized
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-[4/3] col-span-2">
                        <Image
                            src="https://graft3d.com/wp-content/uploads/2021/12/KF-3-A-1.png"
                            alt="3D Scanned Human Head"
                            fill
                            className="object-contain p-4"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
