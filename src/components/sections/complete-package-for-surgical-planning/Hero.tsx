import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-150 lg:min-h-200 flex flex-col"
      style={{
        backgroundImage: "url('/images/complete-package-for-surgical-planning/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-fluid px-4 lg:px-12 xl:px-24 z-10 relative py-16 grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 grow">
          {/* Left Side Content */}
          <div className="flex flex-col h-full max-w-2xl">
            
            {/* Top Content */}
            <div className="mt-4 lg:mt-12">
              <h1 className="flex flex-col mb-6">
                <span className="text-white font-bold text-[3rem] leading-tight">
                  A Complete Package for
                </span>
                <span className="text-[#439AE2] font-bold text-[4.5rem] leading-tight">
                  Surgical Planning
                </span>
              </h1>
              
              <p className="text-white font-normal text-[1.45rem] leading-10 mb-8">
                The Graft3D Healthcare Surgical Planning Package combines industry-leading software, hardware, and 3D printing technologies into one seamless workflow for creating patient-specific anatomical models that enhance surgical planning, simulation, and clinical decision-making.
              </p>
            </div>

            {/* Bottom Contact (Pushed to bottom) */}
            <div className="flex flex-col gap-6 mt-auto pt-12">
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
                  <span className="text-[#1364A8] font-semibold text-[1.25rem]">Call us now</span>
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
                  <span className="text-[#1364A8] font-semibold text-[1.25rem]">Email Us at</span>
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
