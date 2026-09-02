import Image from "next/image";
import { Phone, CirclePlay } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section 
            className="w-full py-8 lg:py-16"
            style={{ background: 'linear-gradient(90deg, #0E324F 0%, #1F72B5 100%)' }}
        >
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-450 mx-auto">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-3/5">
                        <h2 className="text-white font-extrabold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight">
                            Ready to Buy Funmat HT
                        </h2>
                        <p className="text-[#C9DEFF] font-semibold text-[1.25rem] lg:text-[1.5rem] max-w-175 leading-relaxed">
                            Empower your surgical team with patient-specific 3D anatomical models and a complete medical 3D printing ecosystem.
                        </p>
                        
                        <div className="flex flex-col gap-6 mt-4">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <Image src="/images/funmat-ht/phone-icon.png" alt="Phone" width={56} height={56} className="w-14 h-14 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-[1.125rem]">Call us now</span>
                                    <a href="tel:+918939080815" className="text-white font-normal text-[0.9375rem] mt-1 hover:underline">+91 89390 80815</a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Image src="/images/funmat-ht/mail-icon.png" alt="Email" width={56} height={56} className="w-14 h-14 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-[1.125rem]">Email Us at</span>
                                    <a href="mailto:info@graft3d.com" className="text-white font-normal text-[0.9375rem] mt-1 hover:underline">info@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5 w-full lg:w-2/5 max-w-100 lg:ml-auto">
                        <Link href="/get-quote" className="flex items-center justify-center gap-3 w-full bg-[#1F88DD] text-white font-bold text-[1.125rem] lg:text-[1.25rem] py-4 rounded-lg hover:bg-[#166AAF] transition-colors">
                            <Phone className="w-6 h-6" />
                            Get a Quote
                        </Link>
                        <Link href="/book-demo" className="flex items-center justify-center gap-3 w-full bg-transparent border border-white text-white font-bold text-[1.125rem] lg:text-[1.25rem] py-4 rounded-lg hover:bg-white/10 transition-colors">
                            <CirclePlay className="w-6 h-6" />
                            Request Demo
                        </Link>
                        <Link href="/brochures/Graft3d.pdf" className="flex items-center justify-center gap-3 w-full bg-transparent border border-white text-white font-bold text-[1.125rem] lg:text-[1.25rem] py-4 rounded-lg hover:bg-white/10 transition-colors">
                            <CirclePlay className="w-6 h-6" />
                            Download Brochure
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
