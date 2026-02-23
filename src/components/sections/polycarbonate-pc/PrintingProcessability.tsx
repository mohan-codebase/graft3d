import Image from "next/image";

const topCards = [
  {
    title: "Printing Technology Compatibility",
    description:
      "Medical PC filament is primarily used with Fused Filament Fabrication (FFF) or Fused Deposition Modeling (FDM) 3D printers, which melt and extrude the filament layer by layer to create precise, functional parts.",
    icon: "/images/polycarbonate-pc/Grou.png",
  },
  {
    title: "Printing Temperature",
    description:
      "Optimal extrusion temperatures for medical PC filament generally range between 260°C and 310°C, allowing the filament to melt properly while maintaining strength and layer adhesion. The printer bed temperature should be set around 90°C to 110°C to reduce warping and improve adhesion.",
    icon: "/images/polycarbonate-pc/Grou8.png",
  },
  {
    title: "Print Speed",
    description:
      "Due to its high melting point and viscosity, medical PC requires moderate print speeds, typically 30–60 mm/s, to ensure consistent extrusion and reduce print defects like stringing or warping.",
    icon: "/images/polycarbonate-pc/Gro.png",
  },
];

const bottomCards = [
  {
    title: "Warpage and Shrinkage Control",
    description:
      "Polycarbonate has a relatively high tendency to warp due to thermal contraction during cooling. Proper bed adhesion techniques such as using heated beds, build surfaces like PEI sheets or glass, and enclosure to maintain temperature stability are recommended.",
    icon: "/images/polycarbonate-pc/G9.png",
  },
  {
    title: "Layer Adhesion and Strength",
    description:
      "When printed using optimized parameters, PC filament provides excellent interlayer bonding, resulting in durable, tough parts.",
    icon: "/images/polycarbonate-pc/Group-60.png",
  },
];

const PrintingProcessability = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">
          3D Printing and
          <br />
          Processability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topCards.map((card) => (
            <div key={card.title} className="bg-[#EFF8FF] rounded-2xl p-6">
              <div className="relative w-[70px] h-[70px] mb-4">
                <Image src={card.icon} alt={card.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#020F33] mb-2">{card.title}</h3>
              <p className="text-[#464646] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomCards.map((card) => (
            <div key={card.title} className="bg-[#EFF8FF] rounded-2xl p-6">
              <div className="relative w-[70px] h-[70px] mb-4">
                <Image src={card.icon} alt={card.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-[#020F33] mb-2">{card.title}</h3>
              <p className="text-[#464646] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingProcessability;
