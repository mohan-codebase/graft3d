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
                                    src="/images/reconstruction-of-the-maxilla-and-mandible/Group-1171275185-1.png"
                                    alt="Overview of Mandible Reconstruction"
                                    fill
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#005696] mb-6">Overview</h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Reconstruction of the maxilla and mandible after oncologic or traumatic resection is necessary not only to restore oral function and facial harmony but also to improve the general well being of patients. Advanced microvascular techniques integrated with digital planning and 3D printing have redefined the landscape of maxillofacial reconstructive surgery, empowering the surgeon to create patient specific, accurate results.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
