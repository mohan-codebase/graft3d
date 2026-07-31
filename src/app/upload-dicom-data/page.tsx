import React from 'react';
import type { Metadata } from 'next';
import DicomWorkflowBanner from '@/components/sections/upload-dicom-data/DicomWorkflowBanner';
import DicomUploadSection from '@/components/sections/upload-dicom-data/DicomUploadSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/upload-dicom-data',
  },
    title: 'Upload DICOM Data | Secure 3D Model Delivery | Graft3D',
    description: 'Upload DICOM data securely to Graft3D for medical image segmentation, 3D model creation, surgical planning, and patient-specific implant solutions.',
    robots: { index: true, follow: true },
};

export default function UploadDicomDataPage() {
    return (
        <main className="min-h-screen bg-white">
            <DicomWorkflowBanner />
            <DicomUploadSection />
        </main>
    );
}
