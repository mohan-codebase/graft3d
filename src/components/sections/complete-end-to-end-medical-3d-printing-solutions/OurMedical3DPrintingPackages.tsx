import Image from 'next/image';

const packages = [
  {
    img: 'package-1.png',
    title: 'Patient-Specific Implant Package',
    list: [
      'CT segmentation',
      'Implant design software',
      'High-performance 3D printing',
      'PEEK-ready workflow'
    ]
  },
  {
    img: 'package-2.png',
    title: 'Surgical Planning Package',
    list: [
      'CT segmentation',
      'Anatomical model generation',
      'Surgical planning software',
      'Medical 3D printing'
    ]
  },
  {
    img: 'package-3.png',
    title: 'Prosthetics Package',
    list: [
      'Upper limb prosthetics',
      'Lower limb prosthetics',
      'Custom sockets',
      'Rehabilitation'
    ]
  },
  {
    img: 'package-4.png',
    title: 'Orthotics Package',
    list: [
      'Foot orthotics',
      'Spinal braces',
      'Pediatric orthotics',
      'Rehabilitation devices'
    ]
  },
  {
    img: 'package-5.png',
    title: 'Facial Prosthesis Package',
    list: [
      'Ear prosthesis',
      'Nose prosthesis',
      'Orbital prosthesis',
      'Facial restoration'
    ]
  },
  {
    img: 'package-6.png',
    title: 'Medical Education Package',
    list: [
      'Anatomical model creation',
      'Surgical simulation',
      'Medical education models',
      'Student training'
    ]
  }
];

export default function OurMedical3DPrintingPackages() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <h2 className="text-center text-[#01101B] font-bold text-[2.5rem] mb-12">
          Our Medical 3D Printing Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="flex flex-col h-full overflow-hidden"
              style={{
                background: '#FDFEFF',
                border: '1px solid #1B6DB180',
                boxShadow: '0px 2px 4px 0px #60617029, 0px 0px 1px 0px #28293D0A',
                borderRadius: '12px'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-64 shrink-0">
                <Image
                  src={`/images/complete-end-to-end-medical-3d-printing-solutions/${pkg.img}`}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8 flex flex-col grow">
                <h3 className="text-[#121212] font-semibold text-[1.25rem] mb-4">
                  {pkg.title}
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[#121212] font-normal text-[1.0625rem]">
                  {pkg.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
