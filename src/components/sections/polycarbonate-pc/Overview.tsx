import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[320px] lg:h-[420px]">
          <Image
            src="/images/polycarbonate-pc/image-9937.png"
            alt="Medical polycarbonate overview"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Overview</h2>
          <p className="text-[#464646] leading-relaxed">
            Medical Polycarbonate (PC) Filament is an advanced 3D printing material specifically
            engineered for the stringent standards of healthcare applications. Known for its
            biocompatibility, non-toxicity, and exceptional chemical resistance, it delivers
            superior impact resistance, rigidity, and drillability printed materials. Ideal for
            producing surgical guides, medical devices, and training models, Medical PC delivers
            both strength and reliability for critical healthcare environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
