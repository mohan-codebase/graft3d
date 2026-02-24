"use client";

import React, { useState, useEffect } from 'react';

const JumpNavigation = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const navItems = [
        { id: 'overview', label: 'OVERVIEW' },
        { id: 'featuresandbenefits', label: 'FEATURES & BENEFITS' },
        { id: 'applications', label: 'APPLICATIONS' },
        { id: 'videogallery', label: 'VIDEO GALLERY' },
        { id: 'request-trial', label: 'REQUEST A FREE TRIAL' },
        { id: 'related-products', label: 'RELATED PRODUCTS' },
        { id: 'faqs', label: 'FAQs' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offsets = navItems.map(item => {
                const el = document.getElementById(item.id);
                return el ? { id: item.id, offset: el.offsetTop } : null;
            }).filter(Boolean) as { id: string, offset: number }[];

            const scrollPos = window.scrollY + 100;
            const current = offsets.reverse().find(o => scrollPos >= o.offset);
            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="lg:sticky lg:top-24 h-fit">
            <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`text-[15px] font-bold transition-all px-4 py-3 rounded-lg text-left whitespace-nowrap ${activeSection === item.id
                            ? 'text-[#1e73be] bg-blue-50/50'
                            : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default JumpNavigation;
