import Image from 'next/image';
import Link from 'next/link';

export default function ACompleteWorkflow() {
  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-24">
        
        {/* Title Area */}
        <div className="flex items-center justify-center gap-4 mb-12 lg:mb-16">
          <div className="h-0.5 w-12 sm:w-24 md:w-150 bg-[#166AAF]" />
          <h2 className="text-[#1E1E1E] font-bold text-[1.25rem] sm:text-[1.5rem] tracking-wide whitespace-nowrap">
            A COMPLETE WORKFLOW
          </h2>
          <div className="h-0.5 w-12 sm:w-24 md:w-150 bg-[#166AAF]" />
        </div>

        {/* Workflow Cards Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative">
          
          {/* Card 1 */}
          <div 
            className="flex flex-col bg-white rounded-2xl p-6 lg:w-[31%]"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0px 1px 2px 0px #0000000D, 0px 4px 4px 0px #00000040'
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#166AAF] shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-[1.125rem]">1</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#1E1E1E] font-bold text-[1.25rem] leading-tight">
                  Medical Image Conversion
                </h3>
                <span className="text-[#1E1E1E] font-semibold text-[1rem] mt-1">
                  Elucis GO & Elucis NEXT
                </span>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 mb-6">
              <Image 
                src="/images/complete-package-for-surgical-planning/workflow-1.png"
                alt="Medical Image Conversion"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#166AAF] shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/complete-package-for-surgical-planning/workflow-icon-1.svg"
                  alt="Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[#1E1E1E] font-semibold text-[1rem] leading-snug">
                Advanced medical image visualization and segmentation solution that transforms CT, CBCT, MRI & 4D ECHO data into high quality 3D anatomical models.
              </p>
            </div>

            <div className="mt-auto">
              <Link 
                href="/elucis" 
                className="flex items-center justify-center w-full py-4 bg-[#1F88DD] hover:bg-[#1970b5] transition-colors rounded-lg text-white font-bold text-[1.25rem] text-center px-4"
              >
                Explore Elucis GO & Elucis NEXT
              </Link>
            </div>
          </div>

          {/* Arrow 1 (Desktop) */}
          <div className="hidden lg:flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#166AAF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Arrow 1 (Mobile Down) */}
          <div className="flex lg:hidden items-center justify-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#166AAF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2 */}
          <div 
            className="flex flex-col bg-white rounded-2xl p-6 lg:w-[31%]"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0px 1px 2px 0px #0000000D, 0px 4px 4px 0px #00000040'
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#166AAF] shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-[1.125rem]">2</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#1E1E1E] font-bold text-[1.25rem] leading-tight">
                  Bio CAD & Haptic Design<br />Solution
                </h3>
                <span className="text-[#1E1E1E] font-semibold text-[1rem] mt-1">
                  Geomagic Freeform & Haptic Device.
                </span>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 mb-6">
              <Image 
                src="/images/complete-package-for-surgical-planning/workflow-2.png"
                alt="Bio CAD & Haptic Design Solution"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#166AAF] shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/complete-package-for-surgical-planning/workflow-icon-2.svg"
                  alt="Icon 2"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[#1E1E1E] font-semibold text-[1rem] leading-snug">
                Geomagic Freeform with Haptic Device Combine advanced medical CAD software with force-feedback haptic hardware to enable intuitive digital sculpting and precise patient-specific modeling.
              </p>
            </div>

            <div className="mt-auto">
              <Link 
                href="/geomagic-freeform" 
                className="flex items-center justify-center w-full py-4 bg-[#1F88DD] hover:bg-[#1970b5] transition-colors rounded-lg text-white font-bold text-[1.25rem] text-center px-4"
              >
                Explore Haptic Design Devices
              </Link>
            </div>
          </div>

          {/* Arrow 2 (Desktop) */}
          <div className="hidden lg:flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H19M19 12L12 5M19 12L12 19" stroke="#166AAF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Arrow 2 (Mobile Down) */}
          <div className="flex lg:hidden items-center justify-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
              <path d="M0 12H19M19 12L12 5M19 12L12 19" stroke="#166AAF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 3 */}
          <div 
            className="flex flex-col bg-white rounded-2xl p-6 lg:w-[31%]"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0px 1px 2px 0px #0000000D, 0px 4px 4px 0px #00000040'
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#166AAF] shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-[1.125rem]">3</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#1E1E1E] font-bold text-[1.25rem] leading-tight">
                  Medical 3D Printing
                </h3>
                <span className="text-[#1E1E1E] font-semibold text-[1rem] mt-1">
                  FUNMAT PRO 410
                </span>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 mb-6">
              <Image 
                src="/images/complete-package-for-surgical-planning/workflow-3.png"
                alt="Medical 3D Printing"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#166AAF] shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/complete-package-for-surgical-planning/workflow-icon-3.svg"
                  alt="Icon 3"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[#1E1E1E] font-semibold text-[1rem] leading-snug">
                Medical grade high temperature 3D printer capable of manufacturing patient-specific implants and surgical components using medical grade polymers, including PEEK, PMMA, PC, PLLA.
              </p>
            </div>

            <div className="mt-auto">
              <Link 
                href="/funmat-pro-410" 
                className="flex items-center justify-center w-full py-4 bg-[#1F88DD] hover:bg-[#1970b5] transition-colors rounded-lg text-white font-bold text-[1.25rem] text-center px-4"
              >
                FUNMAT PRO 410
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
