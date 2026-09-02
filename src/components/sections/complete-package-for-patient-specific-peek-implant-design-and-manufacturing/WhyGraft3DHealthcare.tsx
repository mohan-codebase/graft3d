import Image from 'next/image';

export default function WhyGraft3DHealthcare() {
  const reasons = [
    "End-to-end implant design and manufacturing workflow",
    "Advanced medical image segmentation software",
    "Medical CAD software for customized implant design",
    "High-performance 3D printing technologies",
    "PEEK-ready manufacturing workflow",
    "Carefully selected hardware and software",
    "Partnerships with globally recognized technology providers",
    "Clinical implementation guidance",
    "Comprehensive user training",
    "Dedicated long-term technical support",
    "Customized solutions based on your specialty and workflow"
  ];

  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-center text-[#1E1E1E] font-bold text-[2.125rem] mb-4">
            Why Graft3D Healthcare?
          </h2>
          <p className="text-center text-[#252525] font-normal text-[1.33rem] max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {"At Graft3D Healthcare, we deliver more than equipment. We provide complete,\napplication-focused medical 3D printing ecosystems tailored to your clinical needs."}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Left Side: Logo */}
          <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
            <Image 
              src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/graft3d-logo.png"
              alt="Graft3D Healthcare Solutions"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Side: Features List */}
          <div className="relative flex flex-col gap-6 lg:gap-6 pl-2 lg:pl-0">
            {/* The vertical connection line */}
            <div className="absolute left-4.75 lg:left-2.75 top-3 bottom-3 w-px bg-[#00000040] z-0" />

            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-6 relative z-10">
                <div className="w-6 h-6 rounded-full border border-[#166AAF] bg-white shrink-0 flex items-center justify-center">
                   <div className="w-3 h-3 bg-[#166AAF] rounded-full"></div>
                </div>
                <span className="text-[#252525] font-semibold text-[1.125rem] lg:text-[1.25rem]">
                  {reason}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
