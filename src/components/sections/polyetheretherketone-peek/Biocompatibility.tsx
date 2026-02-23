import Image from "next/image";

const points = [
  "Biocompatible: Proven non-toxic, non-mutagenic, non-carcinogenic, and non-immunogenic through extensive testing in animal models.",
  "Comparable tissue response to controls (minimal reaction, no cell lysis or adverse effects).",
  "Extremely low rates of allergic or inflammatory reactions, with rare reported cases linked mainly to allergies, not the material itself.",
  "Suitable for permanent implants, including use near sensitive tissues such as the spinal cord and nerves.",
];

const Biocompatibility = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Biocompatibility and Material Safety</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polyetheretherketone-peek/biocompatibility.png"
            alt="Biocompatibility and material safety"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Biocompatibility;
