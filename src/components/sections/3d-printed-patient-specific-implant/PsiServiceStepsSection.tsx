import Image from 'next/image';

const serviceSteps = [
    {
        title: 'Upload DICOM Image OR 3D scan',
        image: '/images/3d-printed-patient-specific-implant/service-step-01.png',
    },
    {
        title: 'Convert your DICOM image to 3D files',
        image: '/images/3d-printed-patient-specific-implant/service-step-02.png',
    },
    {
        title: 'Consult Our Doctors and Bio CAD Modellers To Design Patient Specific Medical Devices',
        image: '/images/3d-printed-patient-specific-implant/service-step-03.png',
    },
    {
        title: 'Get Healthcare 3D Printed Parts At Your Doorstep',
        image: '/images/3d-printed-patient-specific-implant/service-step-04.png',
    },
];

export default function PsiServiceStepsSection() {
    return (
        <section className="bg-[#EEF7FF] py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
                    Healthcare 3D Printing Service In India (Online Platform)
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {serviceSteps.map((step) => (
                        <article key={step.title} className="text-center">
                            <Image
                                src={step.image}
                                alt={step.title}
                                width={227}
                                height={227}
                                className="mx-auto h-[130px] w-[130px] object-contain md:h-[160px] md:w-[160px]"
                            />
                            <p className="mt-3 text-sm font-semibold leading-6 text-black">{step.title}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
