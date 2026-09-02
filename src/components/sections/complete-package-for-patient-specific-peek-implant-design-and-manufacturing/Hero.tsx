import Image from 'next/image';
import { Phone, CirclePlay } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-150 lg:min-h-200 flex flex-col"
      style={{
        backgroundImage: "url('/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-fluid px-4 lg:px-12 xl:px-24 z-10 relative py-16 grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 grow">
          {/* Left Side Content */}
          <div className="flex flex-col h-full max-w-2xl lg:max-w-3xl">
            
            {/* Top Content */}
            <div className="mt-4 lg:mt-12">
              <h1 className="flex flex-col mb-6">
                <span className="text-white font-bold text-[2rem] lg:text-[3rem] leading-tight">
                  A Complete Package for
                </span>
                <span className="text-[#439AE2] font-bold text-[2.5rem] lg:text-[3.5rem] leading-tight">
                  Patient-Specific PEEK Implant Design &amp; Manufacturing
                </span>
              </h1>
              
              <p className="text-white font-normal text-[1.125rem] lg:text-[1.45rem] leading-8 lg:leading-10 mb-8">
                The Graft3D Healthcare Patient-Specific Implant Package combines industry-leading software, hardware, and manufacturing technologies into one seamless workflow for designing and producing customized implants.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-8">
                <Link href="/book-demo" className="inline-flex items-center justify-center gap-3 bg-[#1F88DD] hover:bg-[#156EBA] text-white px-6 py-4 rounded-lg transition-colors">
                  <Phone className="w-6 h-6" />
                  <span className="font-bold text-[1.25rem]">Book a Live Demo</span>
                </Link>
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 bg-transparent border border-white hover:bg-white/10 text-white px-6 py-4 rounded-lg transition-colors">
                  <CirclePlay className="w-6 h-6" />
                  <span className="font-bold text-[1.25rem]">Talk to Graft 3D India</span>
                </Link>
              </div>
            </div>

            {/* Bottom Contact (Pushed to bottom) */}
            <div className="flex flex-col gap-6 mt-12 lg:mt-auto pt-12">
              {/* Phone Contact */}
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 relative flex items-center justify-center">
                  <Image 
                    src="/images/complete-package-for-surgical-planning/phone-icon.png"
                    alt="Call us now"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#439AE2] font-semibold text-[1.25rem]">Call us now</span>
                  <span className="text-white font-normal text-[0.9375rem] mt-1">
                    <a href="tel:+919840478347" className="hover:underline">+91 9840478347</a> | <a href="tel:+916374410703" className="hover:underline">+91 6374410703</a>
                  </span>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 relative flex items-center justify-center">
                  <Image 
                    src="/images/complete-package-for-surgical-planning/mail-icon.png"
                    alt="Email Us at"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#439AE2] font-semibold text-[1.25rem]">Email Us at</span>
                  <span className="text-white font-normal text-[0.9375rem] mt-1">
                    <a href="mailto:Sales@graft3d.com" className="hover:underline">Sales@graft3d.com</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Right Side is empty as the background image covers it */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
