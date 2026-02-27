import Image from "next/image";

const applications = [
  {
    title: "Patient Specific Implants",
    description:
      "Print customized cranial plates, spinal cages, dental frameworks, and orthopedic implants using Medical PEEK, a biocompatible polymer with proven long term success inside the human body.",
    image: "/images/funmat-pro-410/application-implants.png",
    bgColor: "bg-[#454545]", // Dark Gray
  },
  {
    title: "Surgical Guides & Instruments",
    description:
      "Fabricate autoclave sterilizable guides, clamps, spacers, and tools tailored to individual surgical procedures, ensuring greater accuracy and reduced operative risk.",
    image: "/images/funmat-pro-410/application-guides.png",
    bgColor: "bg-[#3B5476]", // Dark Blue
  },
  {
    title: "Pre-Surgical Planning Models",
    description:
      "Create lifelike anatomical replicas based on patient scans (CT, MRI) for surgical rehearsal and education, improving precision and reducing operating room time.",
    image: "/images/funmat-pro-410/application-planning.png",
    bgColor: "bg-[#3B5476]", // Dark Blue
  },
  {
    title: "Customized Prosthetics",
    description:
      "Design lightweight, patient-specific external prosthetics that improve comfort, mobility, and quality of life.",
    image: "/images/funmat-pro-410/application-prosthetics.png",
    bgColor: "bg-[#454545]", // Dark Gray
  },
];

const Applications = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f6cbd] text-center mb-12">
          Applications in Healthcare
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-[2rem] overflow-hidden shadow-sm border border-blue-100 flex flex-col ${item.bgColor} min-h-[450px]`}
            >
              {/* Text Top Half */}
              <div className="p-8 pb-4 z-10 flex-shrink-0">
                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/95 text-[15px] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Image Bottom Half */}
              <div className="relative flex-grow w-full mt-4 min-h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
