import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column - Product Image */}
        <div className="relative w-full h-[350px] md:h-[500px] flex justify-center">
          <Image
            src="/images/funmat-pro-410/hero-printer.png"
            alt="Funmat Pro 410 3D Printer"
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Right Column - CTA Card */}
        <div className="flex justify-start w-full">
          <div className="bg-[#f0f7ff] border border-[#a2c8f0] rounded-[1.5rem] p-10 max-w-lg w-full">
            <p className="text-gray-600 font-bold text-sm md:text-[15px] mb-3">
              Contact Us & Get details for
            </p>
            <h2 className="text-[#0e6cbd] text-4xl md:text-5xl font-semibold mb-8">
              Funmat Pro 410
            </h2>
            <Button asChild className="bg-[#0e5c9e] hover:bg-[#0a457a] text-white rounded-3xl px-8 py-6 text-base font-semibold shadow-sm">
              <Link href="/get-quote">
                Get Quote Now
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
