"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Video } from "lucide-react";

const Gallery = () => {
    const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#1D70B8] md:text-4xl text-center">
                    Gallery
                </h2>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-100 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'photos' ? 'bg-[#1D70B8] text-white shadow-md' : 'text-gray-500 hover:text-[#1D70B8]'}`}
                        >
                            <ImageIcon className="size-5" /> PHOTOS
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'videos' ? 'bg-[#1D70B8] text-white shadow-md' : 'text-gray-500 hover:text-[#1D70B8]'}`}
                        >
                            <Video className="size-5" /> VIDEOS
                        </button>
                    </div>
                </div>

                {/* Gallery Content */}
                <div className="transition-all duration-300">
                    {activeTab === 'photos' ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Large Photo Left */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                                <Image
                                    src="/images/einscan-h2/ein9.png"
                                    alt="Gallery Photo 1"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            {/* 2x2 Grid Right */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                                    <Image src="/images/einscan-h2/ein10.png" alt="Gallery Photo 2" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                                    <Image src="/images/einscan-h2/ein11.png" alt="Gallery Photo 3" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                                    <Image src="/images/einscan-h2/ein12.png" alt="Gallery Photo 4" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                                    <Image src="/images/einscan-h2/ein13.png" alt="Gallery Photo 5" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Large Video Left */}
                            <div className="lg:col-span-8 relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                                <iframe
                                    className="absolute inset-0 size-full"
                                    src="https://www.youtube.com/embed/TtnMglVKB6Y"
                                    title="Introducing Einscan - H2 for Medical Applications"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Two Smaller Videos Right */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-md">
                                    <iframe
                                        className="absolute inset-0 size-full"
                                        src="https://www.youtube.com/embed/VkASEXK5SKA"
                                        title="Mastering Scanning Techniques"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-md">
                                    <iframe
                                        className="absolute inset-0 size-full"
                                        src="https://www.youtube.com/embed/vGPX43dQ9AY"
                                        title="Unboxing EINSCAN H2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
