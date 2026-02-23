import Image from "next/image";

const applications = [
  {
    title: "Patient Specific Implants",
    description:
      "Print customized cranial plates, spinal cages, dental frameworks, and orthopedic implants using Medical PEEK, a biocompatible polymer with proven long term success inside the human body.",
    image: "/images/funmat-pro-410/application-implants.png",
  },
  {
    title: "Surgical Guides & Instruments",
    description:
      "Fabricate autoclave sterilizable guides, clamps, spacers, and tools tailored to individual surgical procedures, ensuring greater accuracy and reduced operative risk.",
    image: "/images/funmat-pro-410/application-guides.png",
  },
  {
    title: "Pre-Surgical Planning Models",
    description:
      "Create lifelike anatomical replicas based on patient scans (CT, MRI) for surgical rehearsal and education, improving precision and reducing operating room time.",
    image: "/images/funmat-pro-410/application-planning.png",
  },
  {
    title: "Customized Prosthetics",
    description:
      "Design lightweight, patient-specific external prosthetics that improve comfort, mobility, and quality of life.",
    image: "/images/funmat-pro-410/application-prosthetics.png",
  },
];

const Applications = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-10">Applications in Healthcare</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((item) => (
            <div key={item.title} className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[320px] w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
