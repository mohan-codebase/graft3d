import Image from 'next/image';

export default function PsiTestimonialsSection() {
    return (
        <section className="bg-[#CFE7FA] py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-lg font-semibold text-black">Our Clients</p>
                        <h2 className="text-4xl font-bold text-primary">Testimonials</h2>
                    </div>
                    <p className="text-sm leading-7 text-gray-700 md:text-[15px]">
                        Our recent healthcare 3D service projects, such as medical image segmentation and Bio CAD
                        modelling for 3D printing, serve as a testament to our proficiency and dedication. Whether you
                        require image segmentation, bio CAD modelling, or comprehensive medical 3D printing solutions,
                        we have your workflow covered.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {['Arun', 'Prasanna'].map((doctor) => (
                        <article
                            key={doctor}
                            className="rounded-md border border-[#9fb8ca] bg-white p-6 shadow-[2px_3px_0_0_rgba(0,0,0,0.20)]"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <Image
                                    src="/images/3d-printed-patient-specific-implant/user-icon.png"
                                    alt={`${doctor} profile icon`}
                                    width={38}
                                    height={39}
                                    className="h-10 w-10"
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">{doctor}</p>
                                    <p className="text-sm text-gray-600">Doctor</p>
                                </div>
                            </div>
                            <p className="text-sm leading-7 text-gray-700">
                                We use advanced software to preprocess images, such as noise reduction or contrast
                                enhancement. This step ensures the input image is of the best quality for segmentation.
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
