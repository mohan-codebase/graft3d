import Image from 'next/image';

export default function RegraftCustomisedPlatesHero() {
    return (
        <section className="relative h-[400px] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/regraft-customised-plates/bg-image.avif"
                    alt="Background pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4">
                <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                    Regraft Customised Plates
                </h1>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex items-center gap-4 rounded-lg bg-white/80 px-6 py-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
                        <div className="shrink-0 rounded-full bg-primary p-3">
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Call us now</p>
                            <p className="text-lg font-bold text-primary">+91 63744 10703 | +91 98404 78347</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-lg bg-white/80 px-6 py-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
                        <div className="shrink-0 rounded-full bg-primary p-3">
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-600">Email Us at</p>
                            <p className="text-lg font-bold text-primary">sales@graft3d.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
