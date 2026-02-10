"use client";

import React, { useState } from 'react';
import BioCadHeroSection from '@/components/sections/bio-cad/BioCadHeroSection';
import BioCadSidebar from '@/components/sections/bio-cad/BioCadSidebar';
import BioCadHowItWorks from '@/components/sections/bio-cad/BioCadHowItWorks';
import BioCadApplications from '@/components/sections/bio-cad/BioCadApplications';
import BioCadSampleFiles from '@/components/sections/bio-cad/BioCadSampleFiles';
import BioCadBenefits from '@/components/sections/bio-cad/BioCadBenefits';
import BioCadWhyChooseUs from '@/components/sections/bio-cad/BioCadWhyChooseUs';

const BioCadPageContent = () => {
    const [activeTab, setActiveTab] = useState('how-it-works');

    const renderContent = () => {
        switch (activeTab) {
            case 'how-it-works':
                return <BioCadHowItWorks />;
            case 'applications':
                return <BioCadApplications />;
            case 'sample-files':
                return <BioCadSampleFiles />;
            case 'benefits':
                return <BioCadBenefits />;
            case 'why-graft3d':
                return <BioCadWhyChooseUs />;
            default:
                return <BioCadHowItWorks />;
        }
    };

    return (
        <main className="flex min-h-screen flex-col bg-gray-50">
            <BioCadHeroSection />

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Sticky */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24">
                            <BioCadSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                        </div>
                    </aside>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BioCadPageContent;
