"use client";

import { useState } from 'react';
import Image from 'next/image';

const photos = [
    { src: 'https://graft3d.com/wp-content/uploads/2023/08/Rectangle-33.png', alt: '3D scanning patient', rowSpan: true },
    { src: 'https://graft3d.com/wp-content/uploads/2023/08/Rectangle-34.png', alt: 'Patient standing' },
    { src: 'https://graft3d.com/wp-content/uploads/2023/08/image-6.png', alt: '3D prosthetic design' },
    { src: 'https://graft3d.com/wp-content/uploads/2023/08/Rectangle-35.png', alt: 'Design software demo' },
    { src: 'https://graft3d.com/wp-content/uploads/2023/08/image-7.png', alt: 'Researcher reviewing 3D skull' },
];

const videos = [
    { id: 'keRZePyII0w', title: 'Graft3D 3D Printing for P&O Devices - Video 1' },
    { id: 'qrBmFeff78g', title: 'Graft3D 3D Printing for P&O Devices - Video 2' },
    { id: '_5iJ8hPhHkQ', title: 'Graft3D 3D Printing for P&O Devices - Video 3' },
];

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

    return (
        <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* Tabs */}
                <div className="flex justify-center gap-0 mb-10">
                    <button
                        onClick={() => setActiveTab('photos')}
                        className={`flex items-center gap-2 px-16 py-3 text-[14px] font-semibold transition-all ${activeTab === 'photos'
                            ? 'bg-[#166aaf] text-white'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        🖼 PHOTOS
                    </button>
                    <button
                        onClick={() => setActiveTab('videos')}
                        className={`flex items-center gap-2 px-16 py-3 text-[14px] font-semibold transition-all ${activeTab === 'videos'
                            ? 'bg-[#166aaf] text-white'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        ▶ VIDEOS
                    </button>
                </div>

                {activeTab === 'photos' && (
                    /* Mosaic grid layout matching screenshot */
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[460px]">
                        {/* Left: big image spanning 2 rows */}
                        <div className="relative row-span-2 rounded-lg overflow-hidden">
                            <Image
                                src={photos[0].src}
                                alt={photos[0].alt}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Top-center */}
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src={photos[1].src}
                                alt={photos[1].alt}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Top-right */}
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src={photos[2].src}
                                alt={photos[2].alt}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Bottom-center */}
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src={photos[3].src}
                                alt={photos[3].alt}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Bottom-right */}
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src={photos[4].src}
                                alt={photos[4].alt}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'videos' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {videos.map((video) => (
                            <div key={video.id} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
