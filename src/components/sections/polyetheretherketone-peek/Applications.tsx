import Image from "next/image";

const points = [
  "Orthopaedics & Spinal Surgery: PEEK has superior biomechanical compatibility with bone and soft tissues. Ideal for custom interbody cages, plates, and screws.",
  "Dental Implants: PEEK has high resistance to mechanical and fatigue stresses in the oral cavity.",
  "Craniofacial Reconstruction: Enables complex, fully customized designs for maxillofacial, cranial, and orbital defects. Demonstrated success in patient cases for both functional and cosmetic outcomes.",
  "Medical Device Components: Surgical instruments, microfluidic devices, body fluid containers, impellers, and more.",
  "Cardiac Implants: Innovative heart valve frames offer improved hydrodynamics and performance.",
];

const Applications = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polyetheretherketone-peek/applications.png"
            alt="PEEK applications"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Applications</h2>
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

export default Applications;
