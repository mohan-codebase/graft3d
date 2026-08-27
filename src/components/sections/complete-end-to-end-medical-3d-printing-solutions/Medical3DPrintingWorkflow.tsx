import Image from 'next/image';

const workflowCards = [
  {
    num: '1',
    title: 'Patient Data\nAcquisition',
    img: 'workflow-1.png',
    list: ['3D Scanners', 'CT / CBCT/ MRI', 'External & Internal Anatomy Capture']
  },
  {
    num: '2',
    title: 'Medical Image\nSegmentation',
    img: 'workflow-2.png',
    list: ['DICOM Import', 'Accurate Segmentation', '3D Patient Anatomy']
  },
  {
    num: '3',
    title: 'Medical CAD\nDesign',
    img: 'workflow-3.png',
    list: ['Implant Design', 'Surgical Guides', 'Prosthetics & Models']
  },
  {
    num: '4',
    title: 'Medical 3D\nPrinting',
    img: 'workflow-4.png',
    list: ['Resin Printing', 'FDM Printing', 'PEEK / Industrial Printing']
  },
  {
    num: '5',
    title: 'Clinical\nApplication',
    img: 'workflow-5.png',
    list: ['Surgical Planning', 'Implants & Prosthetics', 'Patient Treatment']
  }
];

export default function Medical3DPrintingWorkflow() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="container-fluid mx-auto px-12">
        
        <h2 className="text-center text-[#01101B] font-bold text-[2.5rem] mb-12">
          Complete Medical 3D Printing Workflow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflowCards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col p-5 xl:p-6 h-full"
              style={{
                background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)',
                borderTop: '4px solid #1B6DB1',
                boxShadow: '0px 4px 4px 0px #B4DDFF40',
                borderRadius: '16px'
              }}
            >
              {/* Header (Number and Title) */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1B6DB1] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-[1.5rem]">{card.num}</span>
                </div>
                <h3 className="text-[#1B6DB1] font-bold text-[1.375rem] leading-tight whitespace-pre-line">
                  {card.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative w-full h-32 sm:h-40 mb-6 shrink-0">
                <Image
                  src={`/images/complete-end-to-end-medical-3d-printing-solutions/${card.img}`}
                  alt={card.title.replace('\n', ' ')}
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* List */}
              <ul className="list-disc pl-5 flex flex-col gap-2 text-[#01101B] font-normal text-sm xl:text-base">
                {card.list.map((item, i) => (
                  <li key={i} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
