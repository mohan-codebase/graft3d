"use client";

import React from 'react';
import ServiceTabs from '@/components/sections/medical-3d-printing/ServiceTabs';

import ServiceFaqSection from '@/components/sections/medical-3d-printing/ServiceFaqSection';
import ServiceHero from '@/components/sections/medical-3d-printing/ServiceHero';

export default function Medical3DPrintingServicePage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <ServiceHero />

            {/* Service Tabs Section */}
            <ServiceTabs />

            {/* FAQ Section */}
            <ServiceFaqSection />
        </main>
    );
}
