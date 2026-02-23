import Image from "next/image";

const parameters = [
  "Extruder Temperature: 230–250 °C",
  "Bed Temperature: 60 °C",
  "Print Speed: ≤ 30 mm/s (PMMA performs best at low speeds)",
  "Safety Note: Printing releases gases. Always ensure proper ventilation during 3D printing.",
  "Fused Deposition Modelling (FDM): Optimizing layer height, raster angle, and infill density improves flexural strength.",
  "Direct PMMA Printing for Cranioplasty: Eliminates PLA molds, producing high-quality, patient-specific implants.",
];

const PrintingWithPmma = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">3D Printing with PMMA</h2>
          <h4 className="text-lg font-semibold text-black mb-4">Printing Parameters</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {parameters.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polymethyl-methacrylate-pmma/Group-1171275170.png"
            alt="3D printing with PMMA"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PrintingWithPmma;
