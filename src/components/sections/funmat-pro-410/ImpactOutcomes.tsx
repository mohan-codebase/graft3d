import Image from "next/image";

const ImpactOutcomes = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-10">Impact on Surgery & Patient Outcomes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[420px] w-full">
              <Image
                src="/images/funmat-pro-410/impact-surgeons.png"
                alt="Impact for surgeons"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold mb-3">For Surgeons</h3>
              <ul className="list-disc pl-5 text-white/90 text-sm space-y-2">
                <li>Access to ready to use implants and tools designed around patient anatomy.</li>
                <li>Improved surgical precision and efficiency through patient specific surgical guides.</li>
                <li>Reduced dependence on third party suppliers and cutting delays in critical procedures.</li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[420px] w-full">
              <Image
                src="/images/funmat-pro-410/impact-patients.png"
                alt="Impact for patients"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold mb-3">For Patients</h3>
              <ul className="list-disc pl-5 text-white/90 text-sm space-y-2">
                <li>Faster surgical intervention by enabling on-site, hospital-based implant printing.</li>
                <li>Better fit and function of implants, reducing revision surgeries.</li>
                <li>Personalized treatment implants designed specifically for their anatomy and pathology.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactOutcomes;
