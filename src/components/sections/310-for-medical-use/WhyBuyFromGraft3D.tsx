import Image from 'next/image';

export default function WhyBuyFromGraft3D() {
  const reasons = [
    "INTAMSYS Master Reseller – India",
    "Application engineering & sample validation",
    "Local sales, service & spare parts inventory",
    "Installation, training & ongoing support",
    "Pan-India service network"
  ];

  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24">
        
        <div className="flex flex-col items-center justify-center mb-6 lg:mb-16">
          <h2 className="text-center">
            <span className="text-[#1E1E1E] font-bold text-[2.125rem]">Why Buy from </span>
            <span className="text-[#166AAF] font-bold text-[2.125rem]">Graft3D</span>
            <span className="text-[#1E1E1E] font-bold text-[2.125rem]">?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
          
          {/* Left Side: Logo */}
          <div className="relative w-full aspect-square max-w-xs lg:max-w-sm mx-auto">
            <Image 
              src="/images/310-for-medical-use/graft3d-logo.png"
              alt="Graft3D Healthcare Solutions"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Side: Features List */}
          <div className="relative flex flex-col gap-8 lg:gap-10 pl-2 lg:pl-0">
            {/* The vertical connection line */}
            <div className="absolute left-3.25 lg:left-2.75 top-2 bottom-2 w-0.5 bg-[#00000040] z-0" />

            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-6 relative z-10">
                <div className="w-7 h-7 lg:w-6 lg:h-6 rounded-full border-4 border-[#166AAF] bg-white shrink-0 shadow-sm" />
                <span className="text-[#1E1E1E] font-semibold text-[1.125rem] lg:text-[1.25rem]">
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
