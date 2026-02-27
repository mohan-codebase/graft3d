import React from 'react';

const videos = [
    { title: 'EinScan H Intro', id: 'gSSbtVjQ1gY' },
    { title: 'Face & Body Scanning', id: 'yXABL0XoicI' },
    { title: 'Medical Applications', id: 'E5VhABS2rPY' },
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
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm mb-4 border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h3 className="font-bold text-gray-800 text-[15px]">{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default VideoGallery;
