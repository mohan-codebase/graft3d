import React from 'react';
import PatientSpecificImplantHero from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantHero';
import PatientSpecificImplantPrecision from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantPrecision';
import WhySurgeonsChooseUs from '@/components/sections/patient-specific-implant-design/WhySurgeonsChooseUs';
import PatientSpecificImplantHowItWorks from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantHowItWorks';
import PatientSpecificImplantCTA from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantCTA';

export const metadata = {
  alternates: {
    canonical: '/patient-specific-implant-design',
  },
    title: 'Patient-Specific Implant Design | Graft3D',
    description: 'Design precise patient-specific implants with Graft3D using CT, MRI, and CBCT data for surgical planning, custom implants, and advanced medical 3D printing.',
    robots: { index: true, follow: true },
};

export default function PatientSpecificImplantDesignPage() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-50">
            <PatientSpecificImplantHero />
            <PatientSpecificImplantPrecision />
            <WhySurgeonsChooseUs />
            <PatientSpecificImplantHowItWorks />
            <PatientSpecificImplantCTA />
        </main>
    );
}
