import Image from "next/image";

const points = [
  "High resolution CT scanning provides an accurate three dimensional virtual model of the orbit.",
  "Digital reflection of the normal orbit assists in recreating anatomy.",
  "Custom design of the orbital implant makes possible reconstruction of the orbital floor, medial wall and lateral wall with accuracy.",
  "3D printing creates implants of precise curvature, thickness, and contour to restore orbit volume accurately.",
  "3D printing in orbital reconstruction provides more surgical precision with less operative time, better function and aesthetics.",
];

const RoleOf3DPrinting = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#f2f6ff] border border-blue-100 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[360px] lg:h-[460px]">
              <Image
                src="/images/orbital-reconstruction/role-of-3d.png"
                alt="Role Of 3D Printing"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0056b3] mb-8 leading-tight">Role of 3D Printing in Orbital Reconstruction</h2>
              <ul className="space-y-6">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="min-w-2 min-h-2 max-w-2 max-h-2 mt-2 rounded-full bg-[#0056b3]" />
                    <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOf3DPrinting;
