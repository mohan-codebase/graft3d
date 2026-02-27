import Image from "next/image";

const points = [
  "Useful in large or weight bearing orbital wall defects.",
  "Offer excellent strength, lasting durability and long term stability.",
  "The porous structure of the titanium promotes the integration of tissue and inhibits migration of the implant.",
  "Limitation: May produce imaging artifacts on CT/MRI.",
];

const Titanium3DPrintedImplants = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Titanium 3D Printed Implants</h2>
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

export default Titanium3DPrintedImplants;
