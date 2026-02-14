import Image from 'next/image';

export default function NasalCaseIntroSection() {
    return (
        <>
            <div className="mb-6 text-[12px] font-medium text-gray-500">
                <span>Graft3D</span>
                <span className="mx-2">&gt;</span>
                <time dateTime="2022-08-06">August 6, 2022</time>
                <span className="mx-2">&gt;</span>
                <span>Uncategorized</span>
                <span className="mx-2">&gt;</span>
                <span>0 Comments</span>
            </div>

            <h1 className="mb-5 text-2xl font-bold leading-tight text-primary md:text-3xl">
                Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis
            </h1>

            <h2 className="mb-4 text-xl font-bold uppercase leading-snug text-primary md:text-2xl">
                Nasal Prosthesis
                <br />
                (Artificial Silicone Nose)
            </h2>

            <div className="mb-6 overflow-hidden rounded-sm border border-gray-200 bg-white">
                <Image
                    src="/images/artificial-nasal-prosthesis-case-study/nasal-prosthesis-banner.jpeg"
                    alt="Facial prosthesis planning and final prosthetic nose"
                    width={907}
                    height={220}
                    className="h-auto w-full"
                    priority
                />
            </div>

            <p className="mb-8 text-[15px] leading-7 text-gray-700">
                A{' '}
                <a
                    href="https://graft3d.com/3d-printed-facial-prosthetics-in-india/"
                    className="font-semibold text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    nasal prosthesis
                </a>{' '}
                is an artificial substitute or replacement for nose. This prosthesis helps to restore normal
                appearance and improve the function of patients who had a partial or total loss of the nose due to
                accidents, disease, congenital defects, or due to surgical removal of nose (rhinectomy).
            </p>
        </>
    );
}
