"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">
            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Back to Top"
            >
                <ChevronUp className="text-primary w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/916374410703"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba59] transition-all duration-300 hover:scale-110"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-white" />
            </a>
        </div>
    );
};

export default FloatingButtons;
