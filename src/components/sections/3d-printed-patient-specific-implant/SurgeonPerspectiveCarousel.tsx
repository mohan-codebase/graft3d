'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type SurgeonSlide = {
    actor: 'Surgeon' | 'Graft3D';
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    width: number;
    height: number;
};

const slides: SurgeonSlide[] = [
    {
        actor: 'Surgeon',
        title: 'Upload Medical Scan',
        description: 'Surgeons provide a detailed medical scan through a secure platform.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-01.png',
        imageAlt: 'Surgeon uploads medical scan',
        width: 470,
        height: 275,
    },
    {
        actor: 'Graft3D',
        title: 'Scan Evaluation and Quotation',
        description:
            'Graft3D analyzes the medical scan and generates a quotation based on case complexity, material, and process.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-02.png',
        imageAlt: 'Graft3D scan evaluation and quotation',
        width: 369,
        height: 276,
    },
    {
        actor: 'Surgeon',
        title: 'Approve Quote',
        description:
            'Once the scan is evaluated, a cost estimate is generated and the surgeon reviews and approves the quotation.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-03.png',
        imageAlt: 'Surgeon approves quotation',
        width: 261,
        height: 276,
    },
    {
        actor: 'Graft3D',
        title: 'Segmentation and Modeling',
        description:
            'Advanced segmentation software isolates the affected region and creates an accurate patient-specific 3D model.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-04.png',
        imageAlt: 'Graft3D segmentation and modeling',
        width: 426,
        height: 326,
    },
    {
        actor: 'Surgeon',
        title: 'Design Approval and Feedback',
        description:
            'A preliminary implant design is shared for surgeon approval, with room for modifications to ensure fit.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-05.png',
        imageAlt: 'Surgeon design approval and feedback',
        width: 362,
        height: 318,
    },
    {
        actor: 'Graft3D',
        title: '3D Printing Process and Inspection',
        description:
            'After design confirmation, the implant is 3D printed in the requested material and inspected to medical standards.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-06.png',
        imageAlt: 'Graft3D printing process and inspection',
        width: 298,
        height: 303,
    },
    {
        actor: 'Graft3D',
        title: 'Shipping and Delivery',
        description:
            'The final implant is securely packaged and shipped to ensure scheduled arrival for surgery.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-07.png',
        imageAlt: 'Graft3D shipping and delivery',
        width: 314,
        height: 281,
    },
    {
        actor: 'Surgeon',
        title: 'Receive Implant',
        description:
            'After receiving the implant, the surgeon prepares it for surgery and shares post-surgery feedback with Graft3D.',
        image: '/images/3d-printed-patient-specific-implant/surgeon-step-08.png',
        imageAlt: 'Surgeon receives implant',
        width: 248,
        height: 413,
    },
];

export default function SurgeonPerspectiveCarousel() {
    const [index, setIndex] = useState(0);
    const currentSlide = slides[index];

    const goToPrevious = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-[auto_1fr_auto] items-center gap-3">
            <button
                type="button"
                onClick={goToPrevious}
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white"
                aria-label="Previous step"
            >
                {'<'}
            </button>

            <div className="rounded-2xl bg-[#EEF7FF] p-6 shadow-sm md:p-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                        Step {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="text-sm font-semibold text-primary">{index + 1} / {slides.length}</p>
                </div>

                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-3xl font-bold leading-tight text-black md:text-5xl">
                            {currentSlide.actor}: <span className="text-primary">{currentSlide.title}</span>
                        </h3>
                        <p className="mt-4 text-base text-gray-700">{currentSlide.description}</p>
                        <Link
                            href="/contact-us"
                            className="mt-6 inline-block rounded bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                        >
                            Enquire Now
                        </Link>
                    </div>
                    <Image
                        src={currentSlide.image}
                        alt={currentSlide.imageAlt}
                        width={currentSlide.width}
                        height={currentSlide.height}
                        className="mx-auto h-auto max-h-[340px] w-auto max-w-full"
                    />
                </div>
            </div>

            <button
                type="button"
                onClick={goToNext}
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white"
                aria-label="Next step"
            >
                {'>'}
            </button>
        </div>
    );
}
