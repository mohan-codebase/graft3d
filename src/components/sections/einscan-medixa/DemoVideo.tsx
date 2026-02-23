"use client";

import React from 'react';

const videos = [
    { id: 'rMb9n-rmar8', title: 'Complete EinScan Medixa Setup Guide' },
    { id: 'G8KTzwz5gdw', title: 'EinScan Medixa Demo' },
];

const DemoVideo = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Demo Video</h2>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-video"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
