import React from 'react';
import BioCadPageContent from '@/components/sections/bio-cad/BioCadPageContent';
import BioCadFaq from '@/components/sections/bio-cad/BioCadFaq';

export const metadata = {
    title: 'Bio CAD Modeling Service | Graft3D',
    description: 'Custom medical device design and bio CAD modeling services based on patient 3D models and medical scans.',
};

export default function BioCadModelingServicePage() {
    return (
        <main>
            <BioCadPageContent />
            <div className="bg-gray-50/50">
                <div className="container mx-auto px-4 py-12">
                    <BioCadFaq />
                </div>
            </div>
        </main>
    );
}
