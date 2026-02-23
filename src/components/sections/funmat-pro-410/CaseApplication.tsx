import Image from "next/image";

const CaseApplication = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[420px]">
          <Image
            src="/images/funmat-pro-410/case-application.png"
            alt="Case application"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-black mb-2">Case Application</h2>
          <p className="text-gray-600 mb-6">Transforming Healthcare Delivery</p>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">Orthopedic Surgery</h4>
              <p className="text-gray-700">
                Patient specific PEEK spinal cages printed on the FUNMAT PRO 410 have been shown
                to reduce operation time and accelerate recovery.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">Cranial Reconstruction</h4>
              <p className="text-gray-700">
                Customized PEEK cranial plates deliver both cosmetic and structural benefits, with
                superior patient outcomes compared to traditional metal alternatives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">Dental & Maxillofacial</h4>
              <p className="text-gray-700">
                PEEK and PEKK implants allow lightweight, biocompatible dental frameworks resistant
                to fracture and corrosion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseApplication;
