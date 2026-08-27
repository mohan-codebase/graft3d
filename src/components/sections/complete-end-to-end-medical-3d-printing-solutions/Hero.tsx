import Image from 'next/image';
import Link from 'next/link';
import { Phone, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#000A18] overflow-hidden min-h-150 flex items-center py-16 lg:py-24">
      {/* Background image & gradient overlay on right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0">
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(86.22deg, #000A18 -2.82%, rgba(0, 10, 24, 0) 252.05%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        />
        <Image
          src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side content */}
          <div className="flex flex-col gap-6">
            <span className="text-[#1F88DD] font-bold text-[1.25rem]">
              Graft3D Healthcare 3D Printing Packages
            </span>
            
            <h1 className="font-bold leading-tight">
              <span className="text-white text-[2.5rem] block">Complete End-to-End Medical</span>
              <span className="text-[#008BFF] text-[2.5rem] block">3D Printing Solutions</span>
            </h1>

            <div className="flex flex-col gap-4 text-white text-[1.1875rem] font-normal">
              <p>
                At Graft3D Healthcare, we don&apos;t simply supply a 3D scanner, software, or 3D printer. We design and deliver complete medical 3D printing packages that enable hospitals, medical colleges, prosthetic centers, and healthcare innovators to create patient-specific, life-saving medical devices.
              </p>
              <p>
                Every medical application requires a unique workflow. Our packages combine the right hardware, software, and clinical workflow into one integrated solution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/book-demo" className="flex items-center justify-center bg-[#1F88DD] text-white font-bold text-[1.25rem] rounded-lg py-3 px-6 gap-2 transition-colors hover:bg-[#1F88DD]/90">
                <Phone className="w-5 h-5 fill-white text-white" />
                Book a Live Demo
              </Link>
              <Link href="/contact-us" className="flex items-center justify-center bg-transparent border border-white text-white font-bold text-[1.25rem] rounded-lg py-3 px-6 gap-2 transition-colors hover:bg-white/10">
                <PlayCircle className="w-5 h-5 text-white" />
                Talk to Graft 3D India
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-150 mt-8 lg:mt-0">
            <Image
              src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-image.png"
              alt="Complete End-to-End Medical 3D Printing Solutions"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
