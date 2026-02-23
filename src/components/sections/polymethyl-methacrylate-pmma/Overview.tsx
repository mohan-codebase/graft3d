import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[300px] lg:h-[380px]">
          <Image
            src="/images/polymethyl-methacrylate-pmma/Group-54-e1757587654365.png"
            alt="PMMA overview"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Polymethyl Methacrylate (PMMA), often called acrylic, is a highly thermoplastic polymer
            synthesized from methyl methacrylate monomers. Owing to its lightweight nature,
            biocompatibility, high transparency, and excellent impact resistance, PMMA has become a
            preferred material for both industrial and medical applications. Applications of PMMA in
            healthcare range from intraocular lens to craniofacial surgical implants, making it a
            cornerstone in modern medical device innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
