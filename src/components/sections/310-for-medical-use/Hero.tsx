import Image from 'next/image';
import { Phone, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-200 flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#00101B]"
      style={{ background: 'linear-gradient(90deg, #00101B 68.67%, rgba(0, 16, 27, 0) 100%)' }}
    >
      {/* Right Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="relative w-full md:w-1/2 h-full hidden md:block">
          <Image 
            src="/images/310-for-medical-use/hero-bg.png" 
            alt="Hero Background Grid" 
            fill 
            className="object-cover object-left"
          />
        </div>
      </div>

      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h1 className="text-white font-bold text-[3rem] lg:text-[3.75rem] leading-tight whitespace-pre-line">
              {`Medical-Grade\nPEEK 3D Printing.\nTrusted for Life.`}
            </h1>
            <h2 className="text-[#1F88DD] font-bold text-[2rem] lg:text-[2.5rem] leading-tight uppercase">
              FUNMAT PRO 310 APOLLO
            </h2>
            <p className="text-white font-semibold text-[1.25rem]">
              High Performance. Clinical Confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href="/book-demo" 
                className="flex items-center justify-center gap-3 bg-[#1F88DD] text-white font-bold text-[1.25rem] px-8 py-4 rounded-lg hover:bg-[#1970b5] transition-colors"
              >
                <Phone fill="white" size={24} />
                Book a Live Demo
              </Link>
              <Link 
                href="/contact-us" 
                className="flex items-center justify-center gap-3 border border-white text-white font-bold text-[1.25rem] px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                <PlayCircle size={24} />
                Talk to Graft 3D India
              </Link>
            </div>
          </div>

          {/* Middle Image */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-87.5 lg:max-w-100 aspect-3/4">
              <Image 
                src="/images/310-for-medical-use/hero-image.png"
                alt="FUNMAT PRO 310 APOLLO Printer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3 flex flex-col pt-8 lg:pt-0 pl-0 lg:pl-4">
            <h3 className="text-[#1F88DD] font-bold text-[1.5rem] lg:text-[2rem] uppercase leading-tight mb-6 whitespace-pre-line">
              {`PEEK FOR MEDICAL\nAPPLICATIONS`}
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-white font-semibold text-[1.25rem]">Implantable</li>
              <li className="text-white font-semibold text-[1.25rem]">Biocompatible</li>
              <li className="text-white font-semibold text-[1.25rem]">Sterilizable</li>
              <li className="text-white font-semibold text-[1.25rem]">High Strength</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
