import Image from "next/image";

const applications = [
  "Surgical instruments and guides",
  "Training and demonstration models",
  "Laboratory and microfluidic devices",
  "Fluid-handling components (body fluid containers)",
  "Precision machine parts (pump impellers, stirrers)",
  "Customized prosthetic and biomedical devices",
];

const Applications = () => {
  return (
    <section className="w-full py-16 bg-[#EFF8FF]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
          <p className="text-[#464646] mb-4">
            Medical PC Filament is engineered for functional, durable, and critical-use medical
            parts, including:
          </p>
          <ul className="list-disc pl-6 text-[#464646] space-y-2">
            {applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-[320px] lg:h-[460px]">
          <Image
            src="/images/polycarbonate-pc/Group275171.png"
            alt="Medical polycarbonate applications"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Applications;
