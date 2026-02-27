import React from 'react';

const videos = [
    { title: 'Facial Prosthesis Video 1', id: 'DSEMWV_QQm8' },
    { title: 'Facial Prosthesis Video 2', id: 'DSEMWV_QQm8' },
];

const ArtiNoseVideoGallery = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <h2 className="text-[28px] font-bold text-[#5bc0de] mb-10">
                    Video Gallery
                </h2>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videos.map((video, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="aspect-video bg-black overflow-hidden shadow-sm">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArtiNoseVideoGallery;
