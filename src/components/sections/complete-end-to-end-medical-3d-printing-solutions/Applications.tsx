import Image from 'next/image';

const applications = [
  { img: 'applications-1.png', text: 'Medical & Surgical Simulation' },
  { img: 'applications-2.png', text: 'Robotics & Teleoperation' },
  { img: 'applications-3.png', text: '3D Design & Modeling' },
  { img: 'applications-4.png', text: 'Virtual Reality & Gaming' },
  { img: 'applications-5.png', text: 'Research & Education' }
];

export default function Applications() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-12">
        <h2 className="text-left text-[#01101B] font-bold text-[2.5rem] mb-10 leading-tight">
          Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={`/images/complete-end-to-end-medical-3d-printing-solutions/${app.img}`}
                alt={app.text}
                fill
                className="object-cover z-0 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(0deg, rgba(18, 28, 42, 0.8) 0%, rgba(18, 28, 42, 0) 100%)'
                }}
              />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                <p className="text-white font-bold text-[1rem] text-left leading-tight">
                  {app.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
