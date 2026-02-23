import Image from "next/image";

const points = [
  "Resistant to most chemicals, particularly acids, ensuring longevity and compatibility with various sterilisation agents and clinical environments.",
  "Maintains structure and function after repeated steam or gamma sterilisation cycles.",
  "Independent studies confirm PEEK’s elastic modulus and hardness are unchanged by typical sterilisation procedures.",
];

const ChemicalResistance = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Chemical and Environmental Resistance</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polyetheretherketone-peek/chemical-resistance.png"
            alt="Chemical and environmental resistance"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ChemicalResistance;
