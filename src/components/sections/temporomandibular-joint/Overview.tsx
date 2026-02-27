import React from "react";
import Image from "next/image";

const Overview = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="rounded-3xl border-2 border-[#e6f3ff] bg-[#f8fbff] p-8 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                        {/* Left Image */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="relative aspect-square w-full max-w-[300px]">
                                <Image
                                    src="/images/temporomandibular-joint-imgs/overview.png"
                                    alt="Overview of Temporomandibular Joint"
                                    fill
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#005696] mb-6">Overview</h2>
                            <p className="text-lg leading-relaxed text-gray-700">
Temporomandibular joint replacement (TJR) is a surgical treatment to restore function and alleviate pain in patients with a chronically deranged TMJ. It is indicated in cases of bony ankylosis, failed autogenous grafting, destructive tumours, post traumatic deformities, or degenerative arthritis of the temporomandibular joint. Traditional methods of reconstruction, like costochondral grafting, are frequently associated with donor site morbidity, resorption and unpredictable long term results.
Advanced digital technology and additive manufacturing have further paved the way for the era of 3D-printed personalized TMJ prosthesis. These custom made implants provide more accurate anatomical fit, superior functionality, and improved patient satisfaction when compared to traditional, stock type prosthetic systems.                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
