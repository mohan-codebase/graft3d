import Image from "next/image";

const parameterBlocks = [
  {
    title: "Printing",
    image: "/images/funmat-pro-410/printing-parameters.png",
    imageAlt: "Printing parameters",
    imagePosition: "right",
    items: [
      "Technology: FFF (Fused Filament Fabrication)",
      "Build Volume: 305 × 305 × 406 mm (12 × 12 × 16 in)",
      "Layer Thickness: 0.1 – 0.5 mm",
      "Number of Nozzles: 2",
      "Filament Diameter: 1.75 mm",
      "Print Speed: Max. 120 mm/s",
      "Nozzle Diameter: Default: 0.4 mm (Optional: 0.25 / 0.6 mm)",
      "Leveling: Auto Leveling, Manual Leveling",
      "Materials: PEEK, PEEK-CF, PEEK-GF, PEKK, PPS, PC, PC-ABS, PPA-CF, PPA-GF, PA6/66, PA6-CF, PA12, PA12-CF, ABS, ASA, HIPS, SP3030, etc.",
      "Nozzle Temperature: Max. 500 °C (932 °F)",
      "Build Plate Temperature: Max. 160 °C (320 ℉)",
      "Chamber Temperature: Max. 90 °C (194 ℉)",
      "Functions: Auto-cleaning Nozzles, Filament Jam Warning, Filament Absence Warning, Remote Monitoring, Remote Printing, Printing Recovery from Power Loss",
    ],
  },
  {
    title: "Machine",
    image: "/images/funmat-pro-410/machine-parameters.png",
    imageAlt: "Machine parameters",
    imagePosition: "left",
    items: [
      "Voltage: 200–240 V, 15 A, 50/60 Hz",
      "Max. Power: 3 kW",
      "Connectivity: WiFi, Ethernet, USB",
      "Screen: 7” Touch Screen",
      "Build Plate: Ceramics Glass Plate with Magnetic Fixations",
      "Build Chamber: Fully Enclosed Printing Chamber",
      "Motor System: High-precision Closed-loop Drive",
      "Cooling: Liquid Cooling System & Fan",
      "Travel Speed: Max. XY 300 mm/s, Max. Z 50 mm/s",
      "Resolution: XY: 15.6 μm; Z: 1.56 μm",
      "Printer Size: 728 × 684 × 1480 mm (35.0 × 34.6 × 66.5 in)",
      "Printer Weight: 230 kg (507 lb)",
      "Other Features: Overall Sealed Design, Built-in Reusable Molecular Sieve to Keep Dry, Temperature & Humidity Real-time Monitoring, Auto Filament Feeding",
    ],
  },
  {
    title: "Safety",
    image: "/images/funmat-pro-410/safety-parameters.png",
    imageAlt: "Safety parameters",
    imagePosition: "right",
    items: [
      "Safety design: Electromagnetic Safety Door Lock, Over Temperature Protection, Overload Protection, Leakage Protection, Warning Labels",
      "Safety standards: EN60204 CE",
      "Certification: FCC, SGS",
    ],
  },
  {
    title: "Slicing",
    image: "/images/funmat-pro-410/slicing-parameters.png",
    imageAlt: "Slicing parameters",
    imagePosition: "left",
    items: [
      "Slicing Software: INTAMSUITE NEO",
      "Supported File Types: .stl/.3mf/.obj/.x3d/.g/oltp/.stp/.step/.iges",
      "Operating System: Windows",
    ],
  },
  {
    title: "Operating Environment",
    image: "/images/funmat-pro-410/environment-parameters.png",
    imageAlt: "Operating environment parameters",
    imagePosition: "right",
    items: [
      "Working Temperature: 15 °C ～ 30 °C (59 ℉ ～ 86 ℉)",
      "Working Humidity: 30 ～ 70 %",
      "Storage Temperature: 0 °C ～ 35 °C (32 ℉ ～ 95 ℉)",
      "Storage Humidity: 20 ～ 90 %",
    ],
  },
];

const TechnicalParameters = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-10">Technical Parameters</h2>

        <div className="space-y-10">
          {parameterBlocks.map((block) => {
            const isImageLeft = block.imagePosition === "left";
            return (
              <div
                key={block.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isImageLeft ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={isImageLeft ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-semibold text-black mb-4">{block.title}</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={isImageLeft ? "lg:col-start-1" : ""}>
                  <div className="relative w-full h-[280px] sm:h-[340px]">
                    <Image src={block.image} alt={block.imageAlt} fill className="object-contain" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalParameters;
