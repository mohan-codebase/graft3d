import Image from 'next/image';

const partners = [
  'partner-1.png',
  'partner-2.png',
  'partner-3.png',
  'partner-4.png',
  'partner-5.png'
];

export default function TechnologyPartners() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-12">
        
        <div className="flex flex-col text-left mb-10">
          <h2 className="text-[#01101B] font-bold text-[2.5rem] leading-tight mb-3">
            Technology Partners
          </h2>
          <p className="text-[#01101B] font-normal text-[1.1875rem]">
            Our packages integrate technologies from leading global manufacturers, including:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 lg:p-6 h-28 lg:h-32"
              style={{
                background: '#F0F8FF',
                border: '1px solid #1B6DB126',
                borderRadius: '8px'
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/images/complete-end-to-end-medical-3d-printing-solutions/${partner}`}
                  alt={`Technology Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
