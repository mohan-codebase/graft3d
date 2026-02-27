import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const ArtiNoseCTA = () => {
    return (
        <section className="bg-[#f0f9ff] py-16">
            <div className="container mx-auto px-4 max-w-[1400px] flex flex-col items-center justify-center text-center">
                <h2 className="text-[28px] font-bold text-[#5bc0de] mb-6">
                    Need Our Help?
                </h2>
                <Button
                    asChild
                    className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-4 px-10 rounded text-[16px] shadow-sm transform transition-transform hover:scale-105"
                >
                    <Link href="#consultation-form">
                        Book a Consultation
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default ArtiNoseCTA;
