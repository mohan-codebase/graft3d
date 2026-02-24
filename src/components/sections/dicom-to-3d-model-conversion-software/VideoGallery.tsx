import React from 'react';

const videos = [
    { id: 'vOk_-i5mLpY', title: 'Introduction to D2P Software' },
    { id: 'YxGnRnkqnfE', title: 'Orthopedic Segmentation Demo' },
    { id: 'CHpDVHs9Oms', title: 'Mandible Reconstruction Planning' },
];

const VideoGallery = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tightLine">
                Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div key={video.id} className="space-y-3">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <p className="text-[13px] font-bold text-[#1a365d] text-center px-2">
                            {video.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
