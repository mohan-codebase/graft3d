import Image from 'next/image';

export default function VspMandibularFiguresSection() {
    return (
        <section className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <figure className="mx-auto max-w-[380px] text-center">
                    <Image
                        src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-1-resection-guides.png"
                        alt="Figure 1 mandible defect resection guides"
                        width={341}
                        height={251}
                        className="mx-auto h-auto w-full bg-[#d8e6f4] p-3"
                        priority
                    />
                    <figcaption className="mt-3 text-sm text-gray-600">
                        Figure 1. Mandible defect resection guides
                    </figcaption>
                </figure>

                <figure className="mx-auto max-w-[380px] text-center">
                    <Image
                        src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-2-fibula-adapted-region.png"
                        alt="Figure 2 fibula fragments adapted on removed defected region"
                        width={309}
                        height={253}
                        className="mx-auto h-auto w-full bg-[#d8e6f4] p-3"
                    />
                    <figcaption className="mt-3 text-sm text-gray-600">
                        Figure 2. Fibula fragments adapted on the removed defected region of the mandible
                    </figcaption>
                </figure>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <figure className="mx-auto max-w-[420px] text-center">
                    <div className="grid grid-cols-2 gap-4 bg-[#d8e6f4] p-3">
                        <Image
                            src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-3-adaptation-guide-a.png"
                            alt="Figure 3 fibula adaptation guide view one"
                            width={261}
                            height={167}
                            className="h-auto w-full"
                        />
                        <Image
                            src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-3-adaptation-guide-b.png"
                            alt="Figure 3 fibula adaptation guide view two"
                            width={240}
                            height={169}
                            className="h-auto w-full"
                        />
                    </div>
                    <figcaption className="mt-3 text-sm text-gray-600">
                        Figure 3. Fibula fragments adapted using adaptation guide
                    </figcaption>
                </figure>

                <figure className="mx-auto max-w-[420px] text-center">
                    <Image
                        src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-4-fibula-cutting-guide.png"
                        alt="Figure 4 fibula cutting guide"
                        width={556}
                        height={273}
                        className="mx-auto h-auto w-full bg-[#d8e6f4] p-3"
                    />
                    <figcaption className="mt-3 text-sm text-gray-600">Figure 4. Fibula cutting Guide</figcaption>
                </figure>
            </div>

            <figure className="mx-auto mt-8 max-w-[460px] text-center">
                <Image
                    src="/images/virtual-surgical-planning-mandibular-reconstruction/figure-5-psi-implant.png"
                    alt="Figure 5 patient-specific implant with fibula fragments"
                    width={332}
                    height={277}
                    className="mx-auto h-auto w-full bg-[#d8e6f4] p-3"
                />
                <figcaption className="mt-3 text-sm text-gray-600">
                    Figure 5. Patient-specific implant (PSI) with accommodation of the fibula fragments including the
                    attachment at the condyle and the midbody of the healthy side
                </figcaption>
            </figure>
        </section>
    );
}
