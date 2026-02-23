import Image from "next/image";
import { Button } from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[320px] lg:h-[460px]">
          <Image
            src="/images/polycarbonate-pc/Frame-427319419-1.png"
            alt="Polycarbonate PC spool"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-[#EFF8FF] border border-primary rounded-2xl p-8">
          <p className="text-[#464646] mb-2">Contact Us & Get details for</p>
          <h2 className="text-3xl font-bold text-primary">
            Polycarbonate <span className="text-[#565656]">(PC)</span>
          </h2>
          <Button asChild className="rounded-full px-6 py-4 mt-6">
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
