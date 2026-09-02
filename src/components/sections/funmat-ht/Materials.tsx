import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Materials() {
    return (
        <section className="w-full bg-white pb-8 lg:pb-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                
                <div 
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-6 lg:p-8 xl:p-10"
                    style={{ boxShadow: '0px 1px 2px 0px #0000000D' }}
                >
                    <h2 className="text-[#1D4ED8] font-bold text-[1.25rem] lg:text-[1.5rem] uppercase">
                        COMPATIBLE ENGINEERING &amp; MEDICAL GRADE MATERIALS
                    </h2>

                    <div className="flex flex-col xl:flex-row mt-6 lg:mt-8 gap-10 xl:gap-0 items-center xl:items-stretch">
                        
                        {/* Left Image */}
                        <div className="w-full sm:w-[80%] md:w-[70%] xl:w-137.5 shrink-0 relative aspect-2/1 xl:aspect-auto xl:h-55 my-auto">
                            <Image 
                                src="/images/funmat-ht/materials-image.png"
                                alt="Filament Spools"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Middle List */}
                        <div className="flex-1 w-full xl:border-l border-[#F3F4F6] xl:px-10 flex flex-col justify-center gap-y-6 my-auto">
                            {/* Row 1 */}
                            <div className="flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center gap-4 xl:gap-2 w-full">
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PEEK</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PEEK CF / GF</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PEKK</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PPS</span></div>
                            </div>
                            
                            {/* Row 2 */}
                            <div className="flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center gap-4 xl:gap-2 w-full">
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">ULTEM™ (PEI)</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PC CF / GF</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PC</span></div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center gap-4 xl:gap-2 w-full">
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PA CF / PA GF</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">ASA</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">ABS</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PETG</span></div>
                            </div>

                            {/* Row 4 */}
                            <div className="flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center gap-4 xl:gap-2 w-full">
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">PPSU</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">TPU</span></div>
                                <div className="flex items-center gap-2 xl:gap-3"><CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] shrink-0" /><span className="text-[#374151] font-medium text-[0.875rem] xl:text-[1rem] whitespace-nowrap">And more</span></div>
                            </div>
                        </div>

                        {/* Right Info Box */}
                        <div className="w-full md:w-[80%] xl:w-105 shrink-0 bg-[#F9FAFB80] border border-[#E5E7EB] rounded-lg p-6 lg:p-8 my-auto h-fit">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-6 h-6 relative shrink-0">
                                    <Image 
                                        src="/images/funmat-ht/advanced-4.svg" 
                                        alt="Biocompatible" 
                                        fill 
                                        className="object-contain" 
                                    />
                                </div>
                                <h4 className="text-[#111827] font-bold text-[1rem]">Biocompatible Materials</h4>
                            </div>
                            <p className="text-[#4B5563] font-normal text-[1rem] leading-relaxed">
                                Select materials are suitable for medical device prototyping and end-use parts.
                            </p>
                            <p className="text-[#4B5563] font-normal text-[1rem] leading-relaxed mt-2">
                                Please consult Graft3D for material recommendations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
