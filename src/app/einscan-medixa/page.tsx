
import React from 'react';
import Hero from '@/components/sections/einscan-medixa/Hero';
import Overview from '@/components/sections/einscan-medixa/Overview';
import CoreFeatures from '@/components/sections/einscan-medixa/CoreFeatures';
import TechnicalSpecifications from '@/components/sections/einscan-medixa/TechnicalSpecifications';
import Workflow from '@/components/sections/einscan-medixa/Workflow';
import DemoVideo from '@/components/sections/einscan-medixa/DemoVideo';
import ClinicalApplications from '@/components/sections/einscan-medixa/ClinicalApplications';
import Advantages from '@/components/sections/einscan-medixa/Advantages';
import ComplianceSafety from '@/components/sections/einscan-medixa/ComplianceSafety';
import EinscanMedixaFaq from '@/components/sections/einscan-medixa/EinscanMedixaFaq';

export const metadata = {
    title: 'EinScan Medixa 3D Scanner | High Accuracy Medical 3D Scanning',
    description: 'EinScan Medixa is a next generation, all in one handheld medical 3D scanner developed for highly accurate and efficient analysis of patient anatomy.',
};

export default function EinscanMedixaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <CoreFeatures />
            <TechnicalSpecifications />
            <Workflow />
            <DemoVideo />
            <ClinicalApplications />
            <Advantages />
            <ComplianceSafety />
            <EinscanMedixaFaq />

        </main>
    );
}
