import Image from 'next/image';

export default function PsiBlogsSection() {
    return (
        <section className="bg-[#CFE7FA] py-12">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <h2 className="text-center text-4xl font-bold text-primary">Our Blogs</h2>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <article className="overflow-hidden rounded border border-[#b9c9d6] bg-white">
                        <Image
                            src="/images/3d-printed-patient-specific-implant/blog-01.png"
                            alt="Virtual surgical planning blog"
                            width={589}
                            height={370}
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold leading-6 text-primary">
                                Virtual Surgical Planning Assists With Full Face Transplant
                            </h3>
                            <p className="mt-2 text-xs text-gray-500">Admin • June 28 2021</p>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded border border-[#b9c9d6] bg-white">
                        <Image
                            src="/images/3d-printed-patient-specific-implant/blog-02.png"
                            alt="Geomagic Freeform blog"
                            width={294}
                            height={200}
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold leading-6 text-primary">
                                Geomagic Freeform Puts a Face To Missing Children
                            </h3>
                            <p className="mt-2 text-xs text-gray-500">Admin • June 28 2021</p>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded border border-[#b9c9d6] bg-white">
                        <Image
                            src="/images/3d-printed-patient-specific-implant/blog-03.png"
                            alt="Geomagic Phantom Haptic blog"
                            width={299}
                            height={200}
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold leading-6 text-primary">
                                Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual
                                Touch
                            </h3>
                            <p className="mt-2 text-xs text-gray-500">Admin • June 28 2021</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
