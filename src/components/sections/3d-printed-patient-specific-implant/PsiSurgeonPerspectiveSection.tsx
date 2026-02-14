import SurgeonPerspectiveCarousel from '@/components/sections/3d-printed-patient-specific-implant/SurgeonPerspectiveCarousel';

export default function PsiSurgeonPerspectiveSection() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <h2 className="text-center text-4xl font-bold text-black">
                    Surgeon <span className="text-primary">Perspective</span>
                </h2>
                <SurgeonPerspectiveCarousel />
            </div>
        </section>
    );
}
