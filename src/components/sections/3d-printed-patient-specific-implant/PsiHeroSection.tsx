import Link from 'next/link';

export default function PsiHeroSection() {
    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/3d-printed-patient-specific-implant/hero-cover.png')" }}
        >
            <div className="mx-auto flex min-h-[350px] w-full max-w-[1300px] items-center justify-end px-4 py-12 md:min-h-[420px]">
                <div className="max-w-[460px] text-left md:text-right">
                    <h1 className="text-3xl font-bold leading-tight text-[#041B4D] md:text-5xl">
                        3D printed Patient
                        <br />
                        specific Implants in India
                    </h1>
                    <div className="mt-5 flex md:justify-end">
                        <Link
                            href="/contact-us"
                            className="rounded bg-[#335B7D] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#264764]"
                        >
                            Enquire Now
                        </Link>
                    </div>
                    <p className="mt-6 text-sm font-medium leading-6 text-black md:text-base">
                        A revolution in the implant industry was created with the fast and reliable production of
                        patient-specific implants (PSI) to fix bone and skull defects.
                    </p>
                </div>
            </div>
        </section>
    );
}
