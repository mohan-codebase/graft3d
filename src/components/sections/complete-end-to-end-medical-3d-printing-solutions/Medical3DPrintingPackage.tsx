import Image from 'next/image';

const steps = [
  {
    num: '1',
    text: 'Patient Data\nAcquisition',
    position: 'lg:top-[5%] lg:left-[20%]'
  },
  {
    num: '2',
    text: 'CT / CBCT\nProcessing',
    position: 'lg:top-[5%] lg:right-[20%]'
  },
  {
    num: '3',
    text: 'Medical Image\nSegmentation',
    position: 'lg:top-[33%] lg:-right-[-4%]'
  },
  {
    num: '4',
    text: 'Medical CAD\nDesign',
    position: 'lg:bottom-[28%] lg:-right-[-4%]'
  },
  {
    num: '5',
    text: 'Medical 3D\nPrinting',
    position: 'lg:bottom-[5%] lg:left-1/2 lg:-translate-x-1/2'
  },
  {
    num: '6',
    text: 'Training\nMaterials',
    position: 'lg:bottom-[28%] lg:-left-[-4%]'
  },
  {
    num: '7',
    text: 'Training\nImplementation',
    position: 'lg:top-[33%] lg:-left-[-4%]'
  }
];

export default function Medical3DPrintingPackage() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container-fluid mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Content) */}
          <div className="flex flex-col gap-6 mt-8 lg:col-span-4">
            <h2 className="text-[#01101B] font-bold text-[2.5rem] leading-tight">
              What is a Medical 3D Printing Package?
            </h2>
            <div className="text-[#01101B] font-normal text-[1.3rem] flex flex-col gap-4">
              <p>
                A Medical 3D Printing Package is a complete ecosystem that enables hospitals to transform patient imaging into patient-specific medical devices.
              </p>
              <p>
                Instead of buying individual products from different venders, you get one validated workflow with compatible technologies, implementation, training and support.
              </p>
            </div>
          </div>

          {/* Right Column (Visual Hexagon Graphic) */}
          <div className="relative w-full lg:min-h-150 mt-8 lg:mt-0 flex flex-col lg:block lg:col-span-8">
            
            {/* Center Image */}
            <div className="relative w-full h-64 lg:h-90 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mb-8 lg:mb-0 z-0">
              <Image 
                src="/images/complete-end-to-end-medical-3d-printing-solutions/what-is-a-medical-3d-printing-package-image.png"
                alt="Medical 3D Printing Package Ecosystem"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Cards */}
            <div className="flex flex-col gap-3 lg:block z-10 w-full">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`lg:absolute flex items-center gap-4 px-5 bg-[#F0F8FF] border border-[#1B6DB126] rounded-xl shadow-sm hover:shadow-md transition-shadow w-59.5 h-24.5 ${step.position}`}
                >
                  <span className="text-4xl text-[#1B6DB1] font-bold shrink-0">{step.num}</span>
                  <span className="text-lg font-bold text-[#01101B] whitespace-pre-line leading-tight">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
