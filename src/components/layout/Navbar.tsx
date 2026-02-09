"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname?.startsWith(path);
    };

    return (
        <div className="w-full bg-gray-50 shadow-sm sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-4 py-1 flex flex-col lg:flex-row items-center justify-between gap-4 relative">

                <div className="w-full lg:w-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-[180px] h-[50px]">
                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Graft Logo Horizontal"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-primary focus:outline-none p-2 w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:bg-transparent"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden w-full absolute top-full left-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4 z-40`}>
                    {/* Mobile Search Bar */}
                    <div className="flex items-center w-full mb-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="border border-gray-200 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-primary text-black placeholder-gray-400"
                            />
                            <Button className="absolute right-0 top-0 h-full bg-primary text-white px-3 rounded-r rounded-l-none hover:bg-primary/80 transition-colors flex items-center justify-center w-auto">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </Button>
                        </div>
                    </div>

                    <Link href="/" className={`font-semibold ${isActive('/') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '150ms' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                    {/* Mobile Dropdown: 3D Products */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <button onClick={() => toggleDropdown('products')} className={`flex items-center justify-between w-full font-semibold ${isActive('/products') ? 'text-primary' : 'text-black'}`}>
                            <span>3D Products</span>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {activeDropdown === 'products' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20">
                                <Link href="/products/filaments" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Medical 3D Filaments</Link>
                                <Link href="/products/printers" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>3D Printers</Link>
                                <Link href="/products/accessories" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Accessories</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/3d-packages" className={`font-semibold ${isActive('/3d-packages') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '250ms' }} onClick={() => setIsMobileMenuOpen(false)}>3D Packages</Link>

                    {/* Mobile Dropdown: Resources */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <button onClick={() => toggleDropdown('resources')} className={`flex items-center justify-between w-full font-semibold ${isActive('/resources') ? 'text-primary' : 'text-black'}`}>
                            <span>Resources</span>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {activeDropdown === 'resources' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20">
                                <Link href="/resources/case-studies" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
                                <Link href="/resources/blogs" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                                <Link href="/resources/whitepapers" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Whitepapers</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Dropdown: 3D Service */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                        <button onClick={() => toggleDropdown('services')} className={`flex items-center justify-between w-full font-semibold ${isActive('/services') ? 'text-primary' : 'text-black'}`}>
                            <span>3D Service</span>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {activeDropdown === 'services' && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-primary/20">
                                <Link href="/services/design" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Design Services</Link>
                                <Link href="/services/printing" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Printing Services</Link>
                                <Link href="/services/consultation" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Consultation</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contact-us" className={`font-semibold ${isActive('/contact-us') ? 'text-primary' : 'text-black'} animate-fade-in-up`} style={{ animationDelay: '400ms' }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px]">
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : 'text-black'}`}
                    >
                        Home
                    </Link>

                    {/* 3D Products Dropdown */}
                    <div className={`group relative cursor-pointer h-full flex items-center gap-1 hover:text-primary transition-colors py-4 ${isActive('/products') ? 'text-primary' : 'text-black'}`}>
                        <span>3D Products</span>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary min-w-[200px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                <Link href="/products/filaments" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Medical 3D Filaments</Link>
                                <Link href="/products/printers" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">3D Printers</Link>
                                <Link href="/products/accessories" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Accessories</Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/3d-packages"
                        className={`hover:text-primary transition-colors ${isActive('/3d-packages') ? 'text-primary' : 'text-black'}`}
                    >
                        3D Packages
                    </Link>

                    {/* Resources Dropdown */}
                    <div className={`group relative cursor-pointer h-full flex items-center gap-1 hover:text-primary transition-colors py-4 ${isActive('/resources') ? 'text-primary' : 'text-black'}`}>
                        <span>Resources</span>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary min-w-[200px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                <Link href="/resources/case-studies" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Case Studies</Link>
                                <Link href="/resources/blogs" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Blogs</Link>
                                <Link href="/resources/whitepapers" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Whitepapers</Link>
                            </div>
                        </div>
                    </div>

                    {/* 3D Service Dropdown */}
                    <div className={`group relative cursor-pointer h-full flex items-center gap-1 hover:text-primary transition-colors py-4 ${isActive('/services') ? 'text-primary' : 'text-black'}`}>
                        <span>3D Service</span>
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary min-w-[200px] z-50 animate-fade-in-up">
                            <div className="py-2 flex flex-col">
                                <Link href="/services/design" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Design Services</Link>
                                <Link href="/services/printing" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Printing Services</Link>
                                <Link href="/services/consultation" className="px-4 py-2 hover:bg-gray-50 text-sm text-black hover:text-primary transition-colors">Consultation</Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact-us"
                        className={`hover:text-primary transition-colors ${isActive('/contact-us') ? 'text-primary' : 'text-black'}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="border border-gray-200 rounded-l px-4 py-2 text-sm w-[200px] focus:outline-none focus:border-primary text-black placeholder-gray-400"
                        />
                        <Button className="absolute right-0 top-0 h-full bg-primary text-white px-3 rounded-r rounded-l-none hover:bg-primary/80 transition-colors flex items-center justify-center w-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
