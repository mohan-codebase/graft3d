import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const DownloadBrochure = () => {
    return (
        <section className="bg-[#115d9a] py-6 w-full mt-10">
            <div className="container mx-auto px-4 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">

                <h2 className="text-white text-2xl md:text-[28px] font-bold m-0 leading-tight">
                    Einscan H2 Human body and body <br className="hidden md:block" /> parts 3D scanner
                </h2>

                <Button
                    asChild
                    className="bg-[#009bca] hover:bg-[#007da8] text-white font-bold py-6 px-6 rounded-full text-base flex items-center gap-2"
                >
                    <Link href="https://graft3d.com/wp-content/uploads/2024/01/Graft3d.pdf" target="_blank" rel="noopener noreferrer">
                        Download Brochure
                        <Download size={20} strokeWidth={2.5} />
                    </Link>
                </Button>

            </div>
        </section>
    );
};

export default DownloadBrochure;
