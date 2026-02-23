import Image from 'next/image';

const Overview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-[#041b4d]">Overview</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <p className="text-gray-700 text-[16px] leading-relaxed">
                            Surgical Drill guide is a computer-guided surgical drill tool used for the placement of dental implants and other oral restorations. It is a custom-made device placed over the teeth or gums that guides the dentist in drilling at precise angles and locations for implant placement.
                        </p>
                        <p className="text-gray-700 text-[16px] leading-relaxed mt-5">
                            Regraft Digilumin surgical guides are fabricated using advanced 3D printing technology, ensuring exceptional accuracy, fit, and clinical outcomes. Each guide is patient-specific, designed from CBCT data and intraoral scans.
                        </p>
                    </div>
                    <div className="relative w-full lg:w-[480px] h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/images/regraft-digilumin/overview-768x307.png"
                            alt="Regraft Digilumin Surgical Guide Overview"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
