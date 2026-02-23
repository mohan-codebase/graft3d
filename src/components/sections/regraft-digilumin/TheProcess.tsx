import Image from 'next/image';

const steps = [
    {
        image: '/images/regraft-digilumin/scan.png',
    },
    {
        image: '/images/regraft-digilumin/design.png',
    },
    {
        image: '/images/regraft-digilumin/3dprint.png',
    },
    {
        image: '/images/regraft-digilumin/prepare.png',
    },
    {
        image: '/images/regraft-digilumin/polish.png',
    },
    {
        image: '/images/regraft-digilumin/implant.png',
    },
];

const TheProcess = () => {
    return (
        <section className="py-16 bg-[#dceaf8]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-[36px] font-bold text-[#166aaf]">The Process</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className=" overflow-hidden flex flex-col">
                            {/* Image fills top of card */}
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src={step.image}
                                    alt={step.image}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Text content */}
                            {/* <div className="p-6 flex flex-col gap-2 text-center flex-1">
                                <h3 className="text-[15px] font-extrabold text-[#041b4d] uppercase tracking-wide">
                                    {step.number}. {step.label}
                                </h3>
                                <p className="text-[13px] text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheProcess;
