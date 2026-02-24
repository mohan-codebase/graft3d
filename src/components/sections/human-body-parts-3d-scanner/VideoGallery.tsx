import React from 'react';

const videos = [
    { title: 'EinScan H Intro', id: 'M-Y-Y' }, // Placeholder IDs
    { title: 'Face & Body Scanning', id: 'N-X-X' },
    { title: 'Medical Applications', id: 'O-P-P' },
];

const VideoGallery = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-inner mb-4 flex items-center justify-center border border-gray-200">
                            <span className="text-gray-400 font-medium">Video Player Placeholder</span>
                        </div>
                        <h3 className="font-bold text-gray-800 text-[15px]">{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
