import type { Metadata } from 'next';
import Hero from '@/components/sections/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/Hero';
import ACompleteWorkflow from '@/components/sections/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/ACompleteWorkflow';
import ApplicationAndAudience from '@/components/sections/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/ApplicationAndAudience';
import WhyGraft3DHealthcare from '@/components/sections/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/WhyGraft3DHealthcare';
import ContactSection from '@/components/sections/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/ContactSection';

export const metadata: Metadata = {
    title: 'Patient-Specific PEEK Implant Design & Manufacturing | Graft3D',
    description: 'The Graft3D Healthcare Patient-Specific Implant Package combines industry-leading software, hardware, and manufacturing technologies.',
    robots: { index: true, follow: true },
};

export default function Page() {
    return (
        <main>
            <Hero />
            <ACompleteWorkflow />
            <ApplicationAndAudience />
            <WhyGraft3DHealthcare />
            <ContactSection />
        </main>
    );
}
