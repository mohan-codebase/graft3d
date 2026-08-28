import Image from 'next/image';

export default function IdealFor() {
  const ideals = [
    {
      title: "Multi-specialty hospitals",
      image: "/images/complete-package-for-surgical-planning/ideal-1.png"
    },
    {
      title: "Medical colleges",
      image: "/images/complete-package-for-surgical-planning/ideal-2.png"
    },
    {
      title: "Dental hospitals",
      image: "/images/complete-package-for-surgical-planning/ideal-3.png"
    },
    {
      title: "Cranio-maxillofacial centers",
      image: "/images/complete-package-for-surgical-planning/ideal-4.png"
    },
    {
      title: "Orthopedic hospitals",
      image: "/images/complete-package-for-surgical-planning/ideal-5.png"
    },
    {
      title: "Neurosurgical centers",
      image: "/images/complete-package-for-surgical-planning/ideal-6.png"
    },
    {
      title: "Plastic and reconstructive surgery units",
      image: "/images/complete-package-for-surgical-planning/ideal-7.png"
    },
    {
      title: "Research institutions",
      image: "/images/complete-package-for-surgical-planning/ideal-8.png"
    }
  ];

  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-24">
        
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center mb-12 lg:mb-16">
          <h2 className="text-[#2F2B2A] font-bold text-[2.25rem] text-center mb-2">
            Ideal For
          </h2>
          <p className="text-[#041B4D] font-semibold text-[1.75rem] text-center">
            This package is designed for:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-12">
          {ideals.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="relative w-full aspect-3/2 mb-5">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-[#2F2B2A] font-bold text-[1.25rem] text-center leading-snug max-w-[90%]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
