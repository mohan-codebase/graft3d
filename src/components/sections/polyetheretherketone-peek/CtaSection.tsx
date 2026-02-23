import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: product image */}
          <div className="relative w-full h-[340px]">
            <Image
              src="/images/polyetheretherketone-peek/hero-peek.png"
              alt="Polyetheretherketone PEEK filament spools"
              fill
              className="object-contain object-center drop-shadow-md"
            />
          </div>

          {/* Right: contact card */}
          <div className="bg-[#eaf3fb] rounded-2xl border border-blue-100 p-10 flex flex-col gap-4">
            <p className="text-gray-500 text-[14px] font-medium">Contact Us &amp; Get details for</p>
            <h2 className="text-[34px] font-bold text-[#4a4a4a] leading-tight">
              Polyetheretherketone
              <br />
              <span className="text-[#4a4a4a]">(PEEK)</span>
            </h2>
            <div>
              <a
                href="https://graft3d.com/contact-us/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#1b4e8e] hover:bg-[#153d72] text-white font-semibold text-[15px] px-6 py-3 rounded-full transition-colors duration-200 shadow-md"
              >
                Book a Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
