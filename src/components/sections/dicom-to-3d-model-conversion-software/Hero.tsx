import React from 'react';
import { Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <section
            className="w-full min-h-[500px] flex items-center relative overflow-hidden bg-cover bg-right lg:bg-center"
            style={{
                backgroundImage: "url('https://graft3d.com/wp-content/uploads/2021/12/CoverPhoto-1.png')",
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f0f7ff'
            }}
        >
            <div className="max-w-[1200px] mx-auto px-4 w-full h-full py-16 lg:py-0">
                <div className="max-w-[600px] z-10 relative">
                    <div className="flex items-start gap-4 mb-8">
                        {/* Black accent bar */}
                        <div className="w-[6px] h-[80px] bg-[#333333] hidden sm:block" />
                        <div className="flex flex-col">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] mb-2 tracking-tight">
                                D2P SOFTWARE
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[#333333] uppercase">
                                DICOM TO PRINT
                            </p>
                        </div>
                    </div>

                    {/* Button Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[550px]">
                        <a
                            href="https://graft3d.com/wp-content/uploads/2025/02/DICOM-to-print-Brochure.pdf"
                            target="_blank"
                            className="flex items-center justify-center bg-[#1e73be] text-white px-4 py-3 rounded font-bold text-[15px] hover:bg-[#165a94] transition-all shadow-sm"
                        >
                            Download Brochure
                        </a>
                        <a
                            href="#request-trial"
                            className="flex items-center justify-center bg-[#1e73be] text-white px-4 py-3 rounded font-bold text-[15px] hover:bg-[#165a94] transition-all shadow-sm"
                        >
                            Request A Free Trial
                        </a>
                        <a
                            href="#get-quote"
                            className="flex items-center justify-center bg-[#1e73be] text-white px-4 py-3 rounded font-bold text-[15px] hover:bg-[#165a94] transition-all shadow-sm"
                        >
                            Get Quote
                        </a>
                        <a
                            href="#book-meeting"
                            className="flex items-center justify-center gap-2 bg-[#1e73be] text-white px-4 py-3 rounded font-bold text-[15px] hover:bg-[#165a94] transition-all shadow-sm"
                        >
                            Book Online Meeting <Calendar size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Gradient overlay to ensure text readability on smaller screens if the background image shifts */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f7ff]/80 via-[#f0f7ff]/20 to-transparent lg:hidden pointer-events-none" />
        </section>
    );
};

export default Hero;
