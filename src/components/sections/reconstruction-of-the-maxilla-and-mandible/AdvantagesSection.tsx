import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const AdvantagesSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/reconstruction-of-the-maxilla-and-mandible/Group-1171275184-2.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative">
                        {/* Background blob for styling if needed, keeping it clean */}
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">Advantages of a Digital Workflow</h2>
                        <p className="text-lg leading-relaxed text-gray-700 mb-6">
                            The combination of 3D printing and virtual planning provides several clinical advantages:
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Form, Symmetry, and Occlusion restored with great precision.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Minimized intraoperative timeframe with guided performance.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Consistent improvement in chewing, speaking, and appearance.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Improved patient satisfaction associated with superior functional and aesthetic results.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
