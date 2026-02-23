import Image from "next/image";
import { Button } from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polymethyl-methacrylate-pmma/Frame-427319419.png"
            alt="PMMA spool"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-[#f5f9ff] rounded-2xl shadow-sm p-8">
          <p className="text-gray-600 mb-2">Contact Us & Get details for</p>
          <h2 className="text-3xl font-bold text-black">Polymethyl Methacrylate</h2>
          <h3 className="text-3xl font-bold text-primary mb-6">(PMMA)</h3>
          <Button asChild className="rounded-full px-6 py-4">
            <a href="https://graft3d.com/contact-us/" target="_blank" rel="noreferrer">
              Book a Live Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
