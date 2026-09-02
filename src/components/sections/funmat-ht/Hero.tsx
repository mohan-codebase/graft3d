import Image from "next/image";
import Link from "next/link";
import { Phone, CirclePlay } from "lucide-react";

export default function Hero() {
    return (
        <section 
            className="w-full min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative flex items-center"
            style={{
                background: 'radial-gradient(104.43% 173.59% at 100% 50%, rgba(30, 30, 40, 0.8) 0%, #0A0A0A 70%), #1E1E1E'
            }}
        >
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24 w-full">
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 xl:gap-12">
                    
                    {/* Left Content */}
                    <div className="flex flex-col flex-1 max-w-2xl z-10 w-full">
                        <span className="text-[#1F88DD] font-bold text-[1.25rem] lg:text-[1.5rem] tracking-wider mb-2 uppercase">
                            MEDICAL 3D PRINTER
                        </span>
                        
                        <h1 className="text-white font-bold text-[4rem] lg:text-[5rem] leading-none mb-4">
                            FUNMAT HT
                        </h1>
                        
                        <h2 className="text-white font-semibold text-[1.5rem] lg:text-[1.75rem] leading-tight mb-6">
                            High-Temperature 3D Printing.<br/>Built for Medical Excellence.
                        </h2>
                        
                        <p className="text-white font-normal text-[1.125rem] lg:text-[1.25rem] leading-relaxed mb-10 text-opacity-90">
                            FUNMAT HT is a high-performance industrial 3D printer<br className="hidden lg:block"/>
                            engineered for advanced medical applications.<br className="hidden lg:block"/>
                            With its robust high-temperature system and precision<br className="hidden lg:block"/>
                            engineering, it delivers reliable, accurate and<br className="hidden lg:block"/>
                            biocompatible parts for demanding healthcare needs.
                        </p>

                        <div className="flex flex-col gap-4 w-full max-w-125">
                            {/* Top Row Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href="/contact" className="w-full">
                                    <div className="w-full h-14 bg-[#1F88DD] rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#166AAF] transition-colors">
                                        <Phone className="w-5 h-5 text-white" />
                                        <span className="text-white font-bold text-[1.25rem]">Get a Quote</span>
                                    </div>
                                </Link>
                                <Link href="/contact" className="w-full">
                                    <div className="w-full h-14 border border-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                                        <CirclePlay className="w-5 h-5 text-white" />
                                        <span className="text-white font-bold text-[1.25rem]">Request Demo</span>
                                    </div>
                                </Link>
                            </div>
                            
                            {/* Bottom Row Button */}
                            <Link href="/contact" className="w-full">
                                <div className="w-full h-14 border border-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                                    <CirclePlay className="w-5 h-5 text-white" />
                                    <span className="text-white font-bold text-[1.25rem]">Download Brochure</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Middle Image */}
                    <div className="flex-[1.2] relative flex justify-center items-center w-full">
                        <div className="relative w-full max-w-125 aspect-4/4">
                            {/* Backdrop Glow */}
                            <div 
                                className="absolute inset-10 sm:inset-16 rounded-full"
                                style={{
                                    background: '#1F88DD33',
                                    filter: 'blur(80px)'
                                }}
                            />
                            {/* Printer Image */}
                            <Image 
                                src="/images/funmat-ht/hero-image.png"
                                alt="FUNMAT HT 3D Printer"
                                fill
                                className="object-contain relative z-10"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col gap-6 w-full sm:w-auto lg:w-55 shrink-0 z-10 bg-black/20 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                        {[
                            { img: "hero-list-1.png", text: "High\nTemperature\nPerformance" },
                            { img: "hero-list-2.png", text: "Reliable\nManufacturing" },
                            { img: "hero-list-3.png", text: "Application\nFocused" },
                            { img: "hero-list-4.png", text: "Built for\nPrecision" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-15 h-15 relative shrink-0">
                                    <Image 
                                        src={`/images/funmat-ht/${item.img}`}
                                        alt={item.text.replace(/\n/g, ' ')}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-white font-semibold text-[1rem] leading-tight whitespace-pre-line">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
