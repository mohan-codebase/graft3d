import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/advanced-3d-printing-filaments/Hero';
import MaterialsCatalog from '@/components/sections/advanced-3d-printing-filaments/MaterialsCatalog';
import WhyChooseUs from '@/components/sections/advanced-3d-printing-filaments/WhyChooseUs';
import PolyurethaneCard from '@/components/sections/advanced-3d-printing-filaments/PolyurethaneCard';
import ClinicalApplications from '@/components/sections/advanced-3d-printing-filaments/ClinicalApplications';
import ServicePrecision from '@/components/sections/advanced-3d-printing-filaments/ServicePrecision';

export const metadata: Metadata = {
  alternates: {
    canonical: '/advanced-3d-printing-filaments-for-medical-3d-printing',
  },
  title: 'Advanced 3D Printing Filaments for Medical 3D Printing - Graft 3D',
  description: 'Explore advanced 3D printing filaments for medical applications, including biocompatible materials for surgical guides, models, and healthcare innovation',
  robots: { index: true, follow: true },
};

export default function Advanced3DPrintingFilamentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MaterialsCatalog />
      <WhyChooseUs />
      <PolyurethaneCard />
      <ClinicalApplications />
      <ServicePrecision />
    </main>
  );
}
