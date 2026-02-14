import Image from 'next/image';

const benefits = [
    {
        id: '01',
        title: 'Reduced / lesser operation time',
        image: '/images/3d-printed-patient-specific-implant/benefit-01.png',
    },
    {
        id: '02',
        title: 'Fast recovery after surgery',
        image: '/images/3d-printed-patient-specific-implant/benefit-02.png',
    },
    {
        id: '03',
        title: 'High aesthetic and reconstructive result',
        image: '/images/3d-printed-patient-specific-implant/benefit-03.png',
    },
    {
        id: '04',
        title: 'Outstanding',
        image: '/images/3d-printed-patient-specific-implant/benefit-04.png',
    },
    {
        id: '05',
        title: 'Made up of biocompatible material. Non-contact scanning process.',
        image: '/images/3d-printed-patient-specific-implant/benefit-05.png',
    },
    {
        id: '06',
        title: 'Implantable and detachable prosthesis. Rapid medical prototyping',
        image: '/images/3d-printed-patient-specific-implant/benefit-06.png',
    },
];

export default function PsiOverviewBenefitsSection() {
    return (
        <section className="bg-[#EEF7FF] py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <h2 className="text-center text-3xl font-bold text-primary">Overview</h2>
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
                    <p className="text-sm font-medium leading-8 text-[#2f3b4f] md:text-[15px]">
                        A revolution in the implant industry was created with the fast and reliable production of
                        patient-specific implants (PSI) to fix bone and skull defects. PSI is a rapidly emerging
                        clinical treatment for various bone deformities including injuries due to accidents, war
                        casualties, tumours, aesthetic requirements, functional improvement, and congenital anomalies.
                        Titanium has been used for a long time, but Polyetheretherketone (PEEK) provides excellent
                        clinical outcomes along with numerous advantages. Graft3D&apos;s 3D printed patient-specific
                        implants (PSI) enable the construction of almost any complex design geometry that cannot be
                        manufactured using other technologies. 3D printed PSI offers high-temperature performance,
                        chemical resistance, fatigue resistance, and lightweight performance.
                    </p>
                    <div className="overflow-hidden rounded-sm border border-[#d4e6f8] bg-white">
                        <Image
                            src="/images/3d-printed-patient-specific-implant/overview.png"
                            alt="3D printed patient specific implants overview"
                            width={843}
                            height={273}
                            className="h-auto w-full"
                        />
                    </div>
                </div>

                <h3 className="mt-12 text-center text-3xl font-bold text-primary">Benefits</h3>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <article key={benefit.id} className="flex items-start gap-3 rounded bg-transparent p-1">
                            <Image
                                src={benefit.image}
                                alt={`Benefit ${benefit.id}`}
                                width={160}
                                height={189}
                                className="h-12 w-10 shrink-0 object-contain"
                            />
                            <p className="pt-2 text-sm font-semibold leading-5 text-black">{benefit.title}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
