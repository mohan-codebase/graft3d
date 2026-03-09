import React from "react";
import Image from "next/image";

export default function VirtualSurgicalPlanningOverview() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image */}
                <div className="flex justify-center md:justify-start">
                    {/* Background shape mimicking the design: light blue rounded rectangle */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#e3f4fd] to-[#519fdb] p-4 w-full max-w-[400px]">
                        <div className="relative h-[300px] w-full">
                            <Image
                                src="/images/virtual/virtual2.png"
                                alt="Virtual Surgical Planning Overview"
                                fill
                                className="object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text */}
                <div className="space-y-6 text-[#1a1a1a]">
                    <h2 className="text-3xl font-bold text-[#1f5f99]">Overview</h2>
                    <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                        <p>
                            The treatment of complex facial bone fractures is challenging because of the three-
                            dimensional anatomy of the craniofacial skeleton. The traditional methods involve
                            intraoperative reduction and manual contouring of standard fixation plates. This extends the
                            operation time, enhances technical challenge as well as compromises anatomical
                            reconstruction. The adoption of Virtual Surgical Planning (VSP) and 3D printing in
                            maxillofacial trauma care has changed the modality of patient management.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
