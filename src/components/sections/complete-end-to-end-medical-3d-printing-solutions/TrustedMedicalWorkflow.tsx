import Image from 'next/image';

const cards = [
  { img: 'trusted-1.png', text: 'Scanner' },
  { img: 'trusted-2.png', text: 'CT/CBCT Imaging' },
  { img: 'trusted-3.png', text: 'Medical Software' },
  { img: 'trusted-4.png', text: 'Haptic Device' },
  { img: 'trusted-5.png', text: '3D Printers' },
  { img: 'trusted-6.png', text: 'Materials' },
  { img: 'trusted-7.png', text: 'Training &\nImplementation' },
  { img: 'trusted-8.png', text: 'Technical Support' },
  { img: 'trusted-9.png', text: 'Complete Medical 3D Printing Laboratory' },
];

export default function TrustedMedicalWorkflow() {
  return (
    <section className="w-full bg-white pt-16">
      <div className="container-fluid mx-auto px-12">
        
        {/* Border Gradient Wrapper Trick */}
        <div 
          className="rounded-3xl p-px w-full"
          style={{ background: 'linear-gradient(107.93deg, #EBEBEB 0.39%, #AFAEAE 99.61%)' }}
        >
          {/* Inner Content with Radial Gradient & Background Image */}
          <div 
            className="relative w-full rounded-3xl overflow-hidden px-6 py-12 lg:px-12 lg:py-16"
            style={{ background: 'radial-gradient(127.77% 304.58% at 101.78% 127.77%, #88C9FF 0%, #F8FCFF 68.27%)' }}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/complete-end-to-end-medical-3d-printing-solutions/trusted-medical-workflow-bg.png"
                alt="Trusted Medical Workflow Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <div className="mb-10 text-left">
                <h2 className="text-white font-bold text-[2.5rem] leading-tight">Trusted Medical Workflow</h2>
                <p className="text-white font-normal text-[1.1875rem] mt-2">One Complete Medical 3D Printing Ecosystem</p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Row 1: 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {cards.slice(0, 4).map((card, index) => (
                    <WorkflowCard key={index} card={card} index={index} />
                  ))}
                </div>

                {/* Row 2: 5 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                  {cards.slice(4, 9).map((card, index) => (
                    <WorkflowCard key={index + 4} card={card} index={index + 4} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function WorkflowCard({ card, index }: { card: typeof cards[0], index: number }) {
  const isNinth = index === 8;
  return (
    <div 
      className={`border border-[#1B6DB1] rounded-2xl flex flex-col items-center p-4 lg:p-6 h-full ${
        isNinth ? 'bg-[#1B6DB1]' : 'bg-white'
      }`}
    >
      <div className="relative w-full h-32 md:h-40 mb-4 grow">
        <Image
          src={`/images/complete-end-to-end-medical-3d-printing-solutions/${card.img}`}
          alt={card.text.replace('\n', ' ')}
          fill
          className="object-contain"
        />
      </div>
      <h3 
        className={`text-center font-bold text-[1.375rem] whitespace-pre-line leading-tight w-full ${
          isNinth ? 'text-white' : 'text-[#1B6DB1]'
        }`}
      >
        {card.text}
      </h3>
    </div>
  );
}
