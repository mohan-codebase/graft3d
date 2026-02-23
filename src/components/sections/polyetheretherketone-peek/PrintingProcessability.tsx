import Image from "next/image";

const points = [
  "3D printed objects achieve mechanical properties near or equal to those produced by traditional moulding.",
  "Extrusion controls are vital for ensuring filament diameter and print quality.",
  "Optimized algorithms and control systems enhance surface quality, dimensional accuracy, and stability of medical parts.",
];

const PrintingProcessability = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polyetheretherketone-peek/printing-processability.png"
            alt="3D printing and material processability"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">3D Printing and Material Processability</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrintingProcessability;
