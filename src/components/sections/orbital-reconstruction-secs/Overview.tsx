import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#f2f6ff] border border-blue-100 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[300px] lg:h-[360px] order-2 lg:order-1">
              <Image
                src="/images/orbital-reconstruction/overview.png"
                alt="Overview"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0056b3] mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                The orbital reconstruction is one of the most challenging areas in maxillofacial surgery because of its complex anatomy and location related to critical structures such as the globe and optic nerve. Functional recovery and aesthetic balance are important surgical aims. Conventional reconstruction using premade plates and meshes need much intraoperative bending and contouring, which results in inappropriate orbital volume restoration and asymmetry.
                <br /><br />The practice of orbital reconstruction has been revolutionized with the advent of patient specific 3D-printed orbital implants. Individualized implants provide unparalleled accuracy, superior aesthetic results and reproducible outcomes. This has made 3D-printing a gold standard treatment in the field of orbital reconstruction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
