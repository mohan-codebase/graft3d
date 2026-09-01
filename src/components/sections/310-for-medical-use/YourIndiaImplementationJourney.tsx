import Image from "next/image";

const steps = [
    { number: 1, text: "Application\nReview" },
    { number: 2, text: "Sample\nPrinting" },
    { number: 3, text: "Configuration" },
    { number: 4, text: "Installation" },
    { number: 5, text: "Training" },
    { number: 6, text: "Ongoing\nSupport" },
];

export default function YourIndiaImplementationJourney() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Image */}
                    <div className="lg:col-span-4 relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image
                            src="/images/310-for-medical-use/india-image.png"
                            alt="India Map"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-8 flex flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        <h2 className="text-[#111827] font-bold text-[1.5rem] mb-12 shrink-0">
                            Your India Implementation Journey
                        </h2>
                        
                        <div className="flex w-full min-w-150 lg:min-w-0 [--circle-size:48px] lg:[--circle-size:64px]">
                            {steps.map((step, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center relative">
                                    
                                    {/* Circle */}
                                    <div className="w-(--circle-size) h-(--circle-size) rounded-full border-2 border-[#F5821F] flex items-center justify-center bg-white z-10 shrink-0">
                                        <span className="text-[#F5821F] font-bold text-[1rem] lg:text-[1.25rem]">
                                            {step.number}
                                        </span>
                                    </div>
                                    
                                    {/* Connecting Arrow */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-[calc(var(--circle-size)/2)] left-1/2 flex items-center z-0"
                                             style={{
                                                 width: 'calc(100% - var(--circle-size))',
                                                 transform: 'translateX(calc(var(--circle-size) / 2))'
                                             }}>
                                             <div className="w-full h-0.5 bg-[#F5821F] relative">
                                                 <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#F5821F] rotate-45"></div>
                                             </div>
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <span className="text-[#1F2937] font-medium text-[0.875rem] text-center whitespace-pre-line mt-4 px-1 z-10">
                                        {step.text}
                                    </span>

                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
