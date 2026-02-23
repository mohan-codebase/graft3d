import Image from "next/image";
import { Button } from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[420px]">
          <Image
            src="/images/funmat-pro-410/case-application.png"
            alt="Funmat Pro 410 contact"
            fill
            className="object-contain"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <p className="text-gray-600 mb-2">Contact Us & Get details for</p>
          <h2 className="text-3xl font-bold text-black mb-6">Funmat Pro 410</h2>
          <Button asChild className="rounded-full px-6 py-4">
            <a href="https://graft3d.com/get-quote/" target="_blank" rel="noreferrer">
              Get Quote Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
