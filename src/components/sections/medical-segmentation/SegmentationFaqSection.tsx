"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is a Medical Image Segmentation?",
        answer: "Medical image segmentation is the process of marking out specific areas of interest from DICOM Data received from MRI , CT , CBCT scans. Segmenting this data aims to identify specific anatomical regions needed for various studies, such as physically understanding the patient’s anatomy by 3D printing, simulating physical properties, or digitally placing CAD-designed implants in a patient."
    },
    {
        question: "How does medical image conversion work?",
        answer: "DICOM files (CT,MRI,CBCT) form the voxels similar to Pixels in 2D, so whenever we select the region of interest, it combines and converts that into masks. There are many ways of segmentation techniques: Auto Segmentation, Image thresholding, Multi slice interpolation, Seed selection, and path Tracking. However, for specific projects, especially those that deal with unusual pathologies or complex traumas, more time and a wider range of software features may be needed to create the required segmentation result."
    },
    {
        question: "What are the benefits of Medical Image segmentation?",
        answer: (
            <div className="space-y-4">
                <p>
                    Medical image segmentation stands as a game-changer in the domain of precise anatomical analysis. By preciously isolating crucial areas, it provides an essential advantage. This precision becomes extremely important in procedures like implant design, where specific structures in joints like the hip or knee need detailed segmentation.
                </p>
                <p>
                    What makes segmentation truly powerful is its capacity to filter out undesirable elements, such as air, from scans. This process improves the clarity of the images, allowing medical professionals to focus sharply on what truly matters. Moreover, segmentation allows for the distinct separation of various tissues within the body, varying from solid bones to delicate soft tissues.
                </p>
            </div>
        )
    },
    {
        question: "What Should Be The Format Of The DICOM FIles That I Am Uploading In The Graft3D Portal?",
        answer: "Typically medical scans are called DICOM files they are In .Dcm file Format."
    },
    {
        question: "What Should Be The Minimum Slice Thickness Of Dicom Files?",
        answer: "Slice Thickness Should Be In The Range Of 0.2 To 1.0 (As Minimum As Possible, Depending Upon The Application)."
    },
    {
        question: "How Can I Upload The DICOM File?",
        answer: "You Can Upload The Data On Graft3d.Com Or email us the files at sales@graft3d.com ."
    }
];

const SegmentationFaqSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12">
                    FAQs
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default SegmentationFaqSection;
