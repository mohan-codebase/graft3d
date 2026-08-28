import Image from 'next/image';

export default function ClinicalApplication() {
  const applications = [
    {
      title: "Cranio-Maxillofacial\nSurgery",
      image: "/images/complete-package-for-surgical-planning/application-1.png",
      items: [
        "Facial trauma",
        "Jaw reconstruction",
        "Orthognathic surgery",
        "Cranial reconstruction"
      ]
    },
    {
      title: "Orthopedic Surgery",
      image: "/images/complete-package-for-surgical-planning/application-2.png",
      items: [
        "Complex fractures",
        "Pelvic reconstruction",
        "Limb deformity correction",
        "Joint replacement planning"
      ]
    },
    {
      title: "Spine Surgery",
      image: "/images/complete-package-for-surgical-planning/application-3.png",
      items: [
        "Vertebral deformities",
        "Spinal reconstruction",
        "Instrumentation planning"
      ]
    },
    {
      title: "Cardiac surgery",
      image: "/images/complete-package-for-surgical-planning/application-4.png",
      items: [
        "Cardiac VR segmentation",
        "Interactive valve mapping",
        "Stent Planning"
      ]
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-8 lg:py-16">
      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-24">
        
        {/* Title Area */}
        <div className="flex items-center justify-center gap-4 mb-12 lg:mb-16">
          <div className="h-0.5 w-12 sm:w-24 md:w-150 bg-[#166AAF]" />
          <h2 className="text-[#1E1E1E] font-bold text-[1.25rem] sm:text-[1.5rem] tracking-wide whitespace-nowrap uppercase">
            Clinical Applications
          </h2>
          <div className="h-0.5 w-12 sm:w-24 md:w-150 bg-[#166AAF]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white p-6 rounded-xl"
              style={{
                border: '1px solid #F1F5F9',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
              }}
            >
              <h3 className="text-[#1E1E1E] font-bold text-[1.25rem] text-center mb-6 whitespace-pre-line min-h-15 flex items-center justify-center">
                {app.title}
              </h3>
              
              <div className="relative w-full aspect-4/3 mb-8">
                <Image 
                  src={app.image}
                  alt={app.title.replace('\n', ' ')}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <ul className="list-disc pl-5 space-y-3 grow">
                {app.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[#1E1E1E] font-medium text-[1.25rem] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
