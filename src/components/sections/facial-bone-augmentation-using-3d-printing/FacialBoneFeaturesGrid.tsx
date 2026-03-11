"use client";

import React from 'react';
import { Activity, Droplets, Shield, Eye, Square, Triangle, Hexagon } from 'lucide-react';

const advantages = [
    {
        title: "Increased Osseointegration",
        description: "The growth of new bone cells into the implant surface.",
        icon: <Activity className="w-6 h-6 text-white" />
    },
    {
        title: "Improved Vascularization",
        description: "Long-term stability and natural healing.",
        icon: <Droplets className="w-6 h-6 text-white" />
    },
    {
        title: "Mechanical Reliability",
        description: "Maintaining structural integrity and facilitation of biological integration.",
        icon: <Shield className="w-6 h-6 text-white" />
    }
];

const clinicalApps = [
    {
        title: "Orbit Augmentation",
        description: "Correcting enophthalmos and replacing atrophied orbital volume following trauma or disease.",
        icon: <Eye className="w-6 h-6 text-white" />
    },
    {
        title: "Zygomatic and Malar Enhancement",
        description: "Restoring symmetry in the case of fractures, congenital underdevelopment or post traumatic deformities.",
        icon: <Triangle className="w-6 h-6 text-white" />
    },
    {
        title: "Mandibular and Maxillary Contouring",
        description: "Enhancing appearance and function for those with congenital jaw abnormalities or injury.",
        icon: <Square className="w-6 h-6 text-white" />
    },
    {
        title: "Reconstruction of the Skull and Frontal Bone",
        description: "Aesthetic and reconstructive aspects in injuries after cerebral and cranial trauma, oncologic surgery, radiotherapy or other congenital conditions.",
        icon: <Hexagon className="w-6 h-6 text-white" />
    }
];

const FacialBoneFeaturesGrid = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">




            </div>
        </section>
    );
};

export default FacialBoneFeaturesGrid;
