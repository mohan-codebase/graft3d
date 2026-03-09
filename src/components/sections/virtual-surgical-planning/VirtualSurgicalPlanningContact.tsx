import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function VirtualSurgicalPlanningContact() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image in Blue Box */}
                <div className="flex justify-center lg:justify-start">
                    <div className="bg-[#1f5f99] w-full max-w-[500px] aspect-square relative rounded-[2rem] flex items-center justify-center p-8 shadow-2xl overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/virtual/virtual6.png"
                                alt="Virtual Surgical Planning Model"
                                fill
                                className="object-contain scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: CTA Box */}
                <div className="flex justify-center lg:justify-end w-full">
                    <div className="w-full max-w-[550px] bg-[#f0f9ff] border border-[#bae6fd] rounded-[2rem] p-10 md:p-16 flex flex-col items-start gap-8 shadow-sm">
                        <div className="space-y-4">
                            <p className="text-gray-500 font-semibold text-sm tracking-wide">
                                Contact Us & Get details for
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1f5f99] leading-tight">
                                Virtual Surgical Planning and Plates for Facial Trauma
                            </h2>
                        </div>

                        <Button
                            variant="default"
                            className="bg-[#1f5f99] hover:bg-blue-800 text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all active:scale-95"
                        >
                            Get a Quote Now
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
