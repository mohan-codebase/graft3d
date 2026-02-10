"use client";

import React from 'react';

const models = [
    {
        title: "Spine",
        src: "https://sketchfab.com/models/e218499e89d143d9b6aca26890718727/embed",
        url: "https://sketchfab.com/3d-models/spine-e218499e89d143d9b6aca26890718727?utm_medium=embed&utm_campaign=share-popup&utm_content=e218499e89d143d9b6aca26890718727",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=e218499e89d143d9b6aca26890718727"
    },
    {
        title: "Shoulder",
        src: "https://sketchfab.com/models/84d146e21c0e4173988a2539611e875c/embed",
        url: "https://sketchfab.com/3d-models/shoulder-84d146e21c0e4173988a2539611e875c?utm_medium=embed&utm_campaign=share-popup&utm_content=84d146e21c0e4173988a2539611e875c",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=84d146e21c0e4173988a2539611e875c"
    },
    {
        title: "Knee",
        src: "https://sketchfab.com/models/63a81789e2144ed7bd6c7a8eff56e943/embed",
        url: "https://sketchfab.com/3d-models/knee-63a81789e2144ed7bd6c7a8eff56e943?utm_medium=embed&utm_campaign=share-popup&utm_content=63a81789e2144ed7bd6c7a8eff56e943",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=63a81789e2144ed7bd6c7a8eff56e943"
    },
    {
        title: "Heart",
        src: "https://sketchfab.com/models/f4a2f373963b44789ebf6de63ddc0884/embed",
        url: "https://sketchfab.com/3d-models/heart-f4a2f373963b44789ebf6de63ddc0884?utm_medium=embed&utm_campaign=share-popup&utm_content=f4a2f373963b44789ebf6de63ddc0884",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=f4a2f373963b44789ebf6de63ddc0884"
    },
    {
        title: "Basilar Tip Aneursym",
        src: "https://sketchfab.com/models/fd8c73e6f4aa4bc4bb75e1f6d177a871/embed",
        url: "https://sketchfab.com/3d-models/basilar-tip-aneursym-fd8c73e6f4aa4bc4bb75e1f6d177a871?utm_medium=embed&utm_campaign=share-popup&utm_content=fd8c73e6f4aa4bc4bb75e1f6d177a871",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=fd8c73e6f4aa4bc4bb75e1f6d177a871"
    },
    {
        title: "Blood Vessel",
        src: "https://sketchfab.com/models/43bf86b80aef437e9f1ca05cb93ca5ab/embed",
        url: "https://sketchfab.com/3d-models/blood-vessel-43bf86b80aef437e9f1ca05cb93ca5ab?utm_medium=embed&utm_campaign=share-popup&utm_content=43bf86b80aef437e9f1ca05cb93ca5ab",
        authorUrl: "https://sketchfab.com/Graft3D?utm_medium=embed&utm_campaign=share-popup&utm_content=43bf86b80aef437e9f1ca05cb93ca5ab"
    }
];

const SampleFilesSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e73be] mb-12">
                    Sample Files
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="sketchfab-embed-wrapper h-[300px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <iframe
                                    title={model.title}
                                    frameBorder="0"
                                    allowFullScreen
                                    src={model.src}
                                    className="w-full h-full"
                                >
                                </iframe>
                            </div>
                            <p className="text-[13px] font-normal mt-2 text-[#4A4A4A] text-center">
                                <a href={model.url} target="_blank" rel="noopener" className="font-bold text-[#1CAAD9] hover:underline">
                                    {model.title}
                                </a>
                                <span className="mx-1">by</span>
                                <a href={model.authorUrl} target="_blank" rel="noopener" className="font-bold text-[#1CAAD9] hover:underline">
                                    Graft3D
                                </a>
                                <span className="mx-1">on</span>
                                <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e218499e89d143d9b6aca26890718727" target="_blank" rel="noopener" className="font-bold text-[#1CAAD9] hover:underline">
                                    Sketchfab
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SampleFilesSection;
