import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            At Graft 3D, we offer first-class products that utilise the latest innovative medical 3D
            printing technology, specifically the FUNMAT PRO 410 from Intamsys, a world-leading
            manufacturing company. The FUNMAT PRO 410 is a high-quality FFF (Fused Filament
            Fabrication) 3D printer system known for its strong performance. It offers a good build
            volume and excellent print quality. The FUNMAT PRO 410 is a medical-grade additive
            manufacturing printer engineered to meet the demanding needs of hospitals, biomedical
            engineers, and surgical specialists. Designed to process advanced polymers such as PEEK,
            PEKK, and medical-grade composites, it enables the production of patient specific
            implants, customized surgical instruments, and anatomical models with unmatched
            accuracy and safety.
            <br />
            <br />
            By aligning with ISO 13485, FDA, and CE medical device guidelines, the FUNMAT PRO
            410 empowers healthcare institutions to bring implant production closer to the point of
            care, reducing costs, accelerating surgical planning, and transforming patient outcomes.
          </p>
        </div>
        <div className="relative w-full h-[340px] lg:h-[460px]">
          <Image
            src="/images/funmat-pro-410/overview-printer.png"
            alt="Funmat Pro 410 printer overview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
