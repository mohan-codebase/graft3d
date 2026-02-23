import Image from "next/image";
import { ChevronRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-[#DEF0FF] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222223]">
            <span className="text-[#166AAF]">3D PRINTING</span> PACKAGE FOR P&amp;O DEVICES
          </h1>
          <p className="mt-4 text-[#222223] text-base">
            Advanced Technologies To Establish A Digital Fabrication Facility
          </p>
          <div className="mt-6">
            <Image
              src="/images/3d-printing-packagefor-po-devices/Group-54.png"
              alt="3D printing package logo"
              width={352}
              height={91}
              className="w-auto h-auto"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded bg-[#166AAF] px-6 py-3 text-white text-sm font-medium"
            >
              <ChevronRight size={16} />
              Book Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded border border-[#166AAF] bg-white px-6 py-3 text-[#166AAF] text-sm font-medium"
            >
              <Download size={16} />
              Download Brochure
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/3d-printing-packagefor-po-devices/Group-83.png"
            alt="3D printing package devices"
            width={748}
            height={549}
            className="w-full max-w-[520px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
