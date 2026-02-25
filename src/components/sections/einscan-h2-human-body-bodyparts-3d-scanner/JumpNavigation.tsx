"use client";

import React, { useState, useEffect } from 'react';

const navItems = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'FEATURES & BENEFITS', href: '#features-benefits' },
    { label: 'SPECIFICATION', href: '#specification' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'BOOK ONLINE DEMO', href: '#book-demo' },
    { label: 'RELATED PRODUCTS', href: '#related-products' },
];

const JumpNavigation = () => {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 200;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="sticky top-24 space-y-1">
            {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={`block py-3 px-4 text-sm font-bold border-l-4 transition-all duration-200
                        ${activeSection === item.href.substring(1)
                            ? 'border-[#1171bd] bg-blue-50 text-[#1171bd]'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#1171bd]'
                        }`}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export default JumpNavigation;
