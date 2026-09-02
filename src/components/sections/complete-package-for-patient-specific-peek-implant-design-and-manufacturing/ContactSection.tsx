import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-6 xl:px-8">
                
                <div className="w-full bg-[#2C2C2C] rounded-[30px] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-center">
                    
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-[#1697FF] font-bold text-[2rem] lg:text-[2.5rem] leading-tight mb-4 whitespace-pre-line">
                            {"Ready to Transform Your Surgical\nPlanning Workflow?"}
                        </h2>
                        <p className="text-white font-normal text-[1.125rem] lg:text-[1.25rem] mb-12 leading-relaxed whitespace-pre-line">
                            {"Empower your surgical team with patient-specific 3D anatomical\nmodels and a complete medical 3D printing ecosystem."}
                        </p>

                        <div className="flex flex-col gap-8">
                            {/* Phone */}
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 shrink-0 relative">
                                    <Image 
                                        src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/phone-icon.png"
                                        alt="Phone"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-semibold text-[1.25rem] mb-1">
                                        Call us now
                                    </h4>
                                    <div className="flex gap-2 text-white font-medium text-[1rem]">
                                        <a href="tel:+919840478347" className="hover:text-[#1697FF] transition-colors">+91 9840478347</a>
                                        <span className="text-white">|</span>
                                        <a href="tel:+916374410703" className="hover:text-[#1697FF] transition-colors">+91 6374410703</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 shrink-0 relative">
                                    <Image 
                                        src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/mail-icon.png"
                                        alt="Email"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-semibold text-[1.25rem] mb-1">
                                        Email us
                                    </h4>
                                    <a href="mailto:sales@graft3d.com" className="text-white font-bold text-[1rem] hover:text-[#1697FF] transition-colors">
                                        sales@graft3d.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Buttons */}
                    <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[320px] xl:min-w-105">
                        
                        {/* Button 1 */}
                        <Link href="/book-demo" className="w-full">
                            <div 
                                className="w-full h-18 rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity px-6"
                                style={{
                                    background: 'radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #1F88DD',
                                    boxShadow: '0px 4px 10px 0px #0000001F'
                                }}
                            >
                                <span className="text-white font-semibold text-[1.25rem] sm:text-[1.562rem] text-center">
                                    Book a Live Demo
                                </span>
                            </div>
                        </Link>

                        {/* Button 2 */}
                        <Link href="/get-quote" className="w-full">
                            <div 
                                className="w-full rounded-[10px] p-px cursor-pointer hover:opacity-90 transition-opacity"
                                style={{
                                    background: 'radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #1F88DD'
                                }}
                            >
                                <div className="w-full h-17.5 bg-[#2C2C2C] rounded-[9px] flex items-center justify-center px-6">
                                    <span className="text-[#1F88DD] font-semibold text-[1.25rem] sm:text-[1.562rem] text-center">
                                        Get Quote for PSI Package
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Button 3 */}
                        <Link href="/contact-us" className="w-full">
                            <div 
                                className="w-full rounded-[10px] p-px cursor-pointer hover:opacity-90 transition-opacity"
                                style={{
                                    background: 'radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #1F88DD'
                                }}
                            >
                                <div className="w-full h-17.5 bg-[#2C2C2C] rounded-[9px] flex items-center justify-center px-6">
                                    <span className="text-[#1F88DD] font-semibold text-[1.25rem] sm:text-[1.562rem] text-center">
                                        Request a Customized Implant
                                    </span>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}
