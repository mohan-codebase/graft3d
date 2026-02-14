import Image from 'next/image';
import Link from 'next/link';

export default function NasalCaseProcessSection() {
    return (
        <>
            <h3 className="mb-4 text-xl font-bold text-primary">How Did We Do It?</h3>

            <p className="mb-6 text-[15px] leading-7 text-gray-700">
                We provide an online healthcare-exclusive 3D services platform. The patient completed pre-consultation
                and 3D face scanning. After doctor-led modeling and Bio CAD design for patient-specific medical
                devices, the final prosthesis was manufactured and delivered.
            </p>

            <div className="mb-6 flex justify-center">
                <Image
                    src="/images/artificial-nasal-prosthesis-case-study/proface-preview.png"
                    alt="Proface scan preview"
                    width={299}
                    height={111}
                    className="h-auto w-[220px] border border-gray-200 bg-white p-1"
                />
            </div>

            <div className="mb-6 flex justify-center">
                <Link
                    href="/contact-us"
                    className="rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                    Book Now
                </Link>
            </div>

            <p className="mb-12 text-center text-[15px] font-medium leading-7 text-gray-700">
                The main benefit is that all steps are completed online and the prosthesis reaches your doorstep.
            </p>
        </>
    );
}
