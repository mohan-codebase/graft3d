"use client";

import React from 'react';

const sampleFiles = [
    {
        id: "spine",
        title: "Spine",
        embedUrl: "https://sketchfab.com/models/e218499e89d143d9b6aca26890718727/embed",
        modelUrl: "https://sketchfab.com/3d-models/spine-e218499e89d143d9b6aca26890718727?utm_medium=embed&utm_campaign=share-popup&utm_content=e218499e89d143d9b6aca26890718727"
    },
    {
        id: "maxillazygoma-1",
        title: "Maxillazygoma Implant (1)",
        embedUrl: "https://sketchfab.com/models/402a11f4a57640079742dd88e8b3ce20/embed",
        modelUrl: "https://sketchfab.com/3d-models/maxillazygoma-implant-1-402a11f4a57640079742dd88e8b3ce20?utm_medium=embed&utm_campaign=share-popup&utm_content=402a11f4a57640079742dd88e8b3ce20"
    },
    {
        id: "maxillazygoma",
        title: "Maxillazygoma Implant",
        embedUrl: "https://sketchfab.com/models/04699e160aba48afb4097cd944171590/embed",
        modelUrl: "https://sketchfab.com/3d-models/maxillazygoma-implant-04699e160aba48afb4097cd944171590?utm_medium=embed&utm_campaign=share-popup&utm_content=04699e160aba48afb4097cd944171590"
    },
    {
        id: "implant",
        title: "Implant",
        embedUrl: "https://sketchfab.com/models/bdcaa3a5489648339fb547622c9baf22/embed",
        modelUrl: "https://sketchfab.com/3d-models/implant-bdcaa3a5489648339fb547622c9baf22?utm_medium=embed&utm_campaign=share-popup&utm_content=bdcaa3a5489648339fb547622c9baf22"
    },
    {
        id: "hand-splint",
        title: "Hand Splint",
        embedUrl: "https://sketchfab.com/models/f2d4a278792c4bfea940874e81949bef/embed",
        modelUrl: "https://sketchfab.com/3d-models/hand-splint-f2d4a278792c4bfea940874e81949bef?utm_medium=embed&utm_campaign=share-popup&utm_content=f2d4a278792c4bfea940874e81949bef"
    },
    {
        id: "drill-guide",
        title: "Drill Guide",
        embedUrl: "https://sketchfab.com/models/f92eb0973ed64d7793088996a3fda1cd/embed",
        modelUrl: "https://sketchfab.com/3d-models/drill-guide-f92eb0973ed64d7793088996a3fda1cd?utm_medium=embed&utm_campaign=share-popup&utm_content=f92eb0973ed64d7793088996a3fda1cd"
    }
];

const BioCadSampleFiles = () => {
    return (
        <section id="sample-files" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                SAMPLE 3D FILES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleFiles.map((file) => (
                    <div key={file.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                        {/* Sketchfab Embed Container */}
                        <div className="relative w-full aspect-video">
                            <iframe
                                title={file.title}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                {...({
                                    mozallowfullscreen: "true",
                                    webkitallowfullscreen: "true",
                                    "xr-spatial-tracking": "true",
                                    "execution-while-out-of-viewport": "true",
                                    "execution-while-not-rendered": "true",
                                    "web-share": "true"
                                } as any)}
                                src={file.embedUrl}
                            ></iframe>
                        </div>

                        {/* Caption */}
                        <div className="p-4 text-center text-sm text-gray-500">
                            <a
                                href={file.modelUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                {file.title}
                            </a>
                            {' '}by{' '}
                            <a
                                href="https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                Graft3D
                            </a>
                            {' '}on{' '}
                            <a
                                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#1CAAD9] hover:underline"
                            >
                                Sketchfab
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BioCadSampleFiles;
