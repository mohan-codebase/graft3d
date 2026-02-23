import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[300px] lg:h-[360px]">
          <Image
            src="/images/polyetheretherketone-peek/overview-peek.png"
            alt="Medical grade PEEK"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Polyetheretherketone (PEEK) is one of the well-known members of the
            Polyaryletherketone (PAEK) family of molecules, characterized by outstanding
            mechanical and chemical properties. Used widely in medicine for orthopaedic, trauma,
            dental, and spinal implants because of its dependability and safety record. Its proven
            track record in both moulding and 3D printing ensures that highly complex, robust, and
            safe medical devices can be developed to improve patient outcomes and further drive
            medical innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
