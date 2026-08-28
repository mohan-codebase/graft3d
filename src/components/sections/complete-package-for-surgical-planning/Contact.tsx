import Image from 'next/image';
import { Phone, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section 
      className="w-full py-16 lg:py-24"
      style={{ background: 'linear-gradient(90deg, #0E324F 0%, #1F72B5 100%)' }}
    >
      <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-white font-extrabold text-[3.125rem] leading-tight mb-4 lg:mb-6 whitespace-pre-line">
              {`Ready to Transform Your\nSurgical Planning Workflow?`}
            </h2>
            <p className="text-[#C9DEFF] font-semibold text-[1.5rem] mb-10 max-w-3xl leading-snug">
              Empower your surgical team with patient-specific 3D anatomical models and a complete medical 3D printing ecosystem.
            </p>

            <div className="flex flex-col gap-6">
              {/* Phone Contact */}
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 relative flex items-center justify-center">
                  <Image 
                    src="/images/complete-package-for-surgical-planning/phone-icon.png"
                    alt="Call Us"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-[1.25rem]">Call us now</span>
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
                    alt="Email Us"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-[1.25rem]">Email Us at</span>
                  <span className="text-white font-normal text-[0.9375rem] mt-1">
                    <a href="mailto:sales@graft3d.com" className="hover:underline">sales@graft3d.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link 
              href="/contact-us"
              className="flex items-center justify-center gap-3 w-full py-4 px-4 rounded-lg bg-[#1F88DD] text-white font-bold text-[1.125rem] xl:text-[1.25rem] hover:bg-[#1970b5] transition-colors text-center"
            >
              <Phone fill="white" size={24} className="shrink-0" />
              Speak to a Medical 3D Specialist
            </Link>
            <Link 
              href="/book-demo"
              className="flex items-center justify-center gap-3 w-full py-4 px-4 rounded-lg bg-transparent border border-white text-white font-bold text-[1.125rem] xl:text-[1.25rem] hover:bg-white/10 transition-colors text-center"
            >
              <PlayCircle size={24} className="shrink-0" />
              Book a Live Demo
            </Link>
            <Link 
              href="/contact-us"
              className="flex items-center justify-center w-full py-4 px-4 rounded-lg bg-transparent border border-white text-white font-bold text-[1.125rem] xl:text-[1.25rem] hover:bg-white/10 transition-colors text-center"
            >
              Request a Customized Surgical Planning Package
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
