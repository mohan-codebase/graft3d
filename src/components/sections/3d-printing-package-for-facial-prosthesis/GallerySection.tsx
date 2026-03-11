"use client";

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: "/images/3d-printing-package-for-facial-prosthesis/Mask-group.png",
    alt: "Facial prosthesis treatment progression collage",
    rowSpan: true,
  },
  {
    src: "/images/3d-printing-package-for-facial-prosthesis/WhatsApp-Image-2023-07-25-at-15.13-2.png",
    alt: "Patient with facial prosthesis front view",
  },
  {
    src: "/images/3d-printing-package-for-facial-prosthesis/WhatsApp-Image-2023-07-25-at-15.13-3.png",
    alt: "Facial prosthesis silicone parts",
  },
  {
    src: "/images/3d-printing-package-for-facial-prosthesis/WhatsApp-Image-2023-07-25-at-15.13-1.png",
    alt: "Patient side view with prosthesis",
  },
  {
    src: "/images/3d-printing-package-for-facial-prosthesis/Mask-group-1.png",
    alt: "Close-up of 3D designed nasal prosthesis",
  },
];

const videos = [
    { id: 'keRZePyII0w', title: 'Graft3D 3D Printing for Facial Prosthesis - Video 1' },
    { id: 'qrBmFeff78g', title: 'Graft3D 3D Printing for Facial Prosthesis - Video 2' },
    { id: '_5iJ8hPhHkQ', title: 'Graft3D 3D Printing for Facial Prosthesis - Video 3' },
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {photos.map((photo, idx) => (
                      <div
                        key={idx}
                        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          unoptimized
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
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
