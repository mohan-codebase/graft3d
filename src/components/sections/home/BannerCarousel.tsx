"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Phone, Mail } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Custom styles for pagination dots
import './BannerCarousel.css';

const BannerCarousel = () => {
  return (
    <div className="w-full bg-[#f8fbff] min-h-[500px] lg:h-[600px] flex items-center relative overflow-hidden">

      <div className="w-full h-full z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // loop={true} // Loop can sometimes cause hydration issues with complex content, keep enabled if stable
          loop={true}
          className="w-full h-full pb-12"
        >
          {/* Slide 1: Medical 3D Filaments */}
          <SwiperSlide>
            <Link href="/contact-us" className="block w-full h-full group">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center">
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                    {/* <span className="text-gray-500 font-medium text-lg block mb-2">Materials</span> */}
                    <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-4 leading-tight">Medical 3D Filaments</h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg mx-auto lg:mx-0">
                      Polyetheretherketone (PEEK), Polymethyl Methacrylate (PMMA), Polycarbonate (PC)
                    </p>
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-500/30">
                      Know More
                    </button>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full relative opacity-30">
                  <Image
                    src="/images/home/medical-banner-mobile.png"
                    alt="Medical 3D Filaments Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden lg:block w-full h-full relative">
                  <Image
                    src="/images/home/medical-banner-desktop.png"
                    alt="Medical 3D Filaments Desktop"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 2: Geomagic Freeform */}
          <SwiperSlide>
            <Link href="/contact-us" className="block w-full h-full group">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center">
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                    {/* <span className="text-gray-500 font-medium text-lg block mb-2">Software</span> */}
                    <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-4 leading-tight">Geomagic Freeform With Haptic</h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg mx-auto lg:mx-0">
                      Comprehensive Medical Design Software For Custom Medical Devices
                    </p>
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-500/30">
                      Know More
                    </button>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full relative opacity-30">
                  <Image
                    src="/images/home/medical-banner-mobile.png"
                    alt="Geomagic Freeform Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden lg:block w-full h-full relative">
                  <Image
                    src="/images/home/medical-banner-desktop.png"
                    alt="Geomagic Freeform Desktop"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 3: Graft3D Healthcare (Main) */}
          <SwiperSlide>
            <Link href="/contact-us" className="block w-full h-full group">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center">

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                    <h2 className="text-primary font-bold text-2xl lg:text-3xl mb-2">Graft3D Healthcare</h2>
                    <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-4 leading-tight">
                      Medical 3D Printing<br />Solution Provider
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg mx-auto lg:mx-0">
                      We Design and Develop Custom Healthcare 3D printed products,
                      Healthcare 3D printing packages and Healthcare 3D services for hospitals and surgeons.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4 mb-6 items-center lg:items-start">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary text-white p-2 rounded-full">
                          {/* Phone Icon */}
                          <Phone size={20} />
                        </div>
                        <div className="text-left">
                          <p className="text-primary font-bold text-sm">Call us now</p>
                          <p className="text-gray-700 text-xs lg:text-sm font-medium">+91 6374410703 | +91 98404 78347</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary text-white p-2 rounded-full">
                          {/* Mail Icon */}
                          <Mail size={20} />
                        </div>
                        <div className="text-left">
                          <p className="text-primary font-bold text-sm">Email Us at</p>
                          <p className="text-gray-700 text-xs lg:text-sm font-medium">sales@graft3d.com</p>
                        </div>
                      </div>
                    </div>

                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-500/30">
                      Know More
                    </button>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full relative opacity-30">
                  <Image
                    src="/images/home/landing-hero-mobile.png"
                    alt="Graft3D Healthcare Mobile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Desktop Image - Adjusted to keep image visible on right */}
                <div className="hidden lg:block w-full h-full relative">
                  <Image
                    src="/images/home/landing-hero-desktop.png"
                    alt="Graft3D Healthcare Desktop"
                    fill
                    className="object-cover object-right"
                    priority
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 4: EinScan Medixa */}
          <SwiperSlide>
            <Link href="/contact-us" className="block w-full h-full group">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center">
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                    {/* <span className="text-gray-500 font-medium text-lg block mb-2">Scanning</span> */}
                    <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-4 leading-tight">EinScan Medixa</h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg mx-auto lg:mx-0">
                      High-precision dental and medical 3D scanning solutions.
                    </p>
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-500/30">
                      Know More
                    </button>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full relative opacity-30">
                  <Image
                    src="/images/home/medical-banner-mobile.png"
                    alt="EinScan Medixa Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden lg:block w-full h-full relative">
                  <Image
                    src="/images/home/medical-banner-desktop.png"
                    alt="EinScan Medixa Desktop"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* Slide 5: Funmat Pro 410 */}
          <SwiperSlide>
            <Link href="/contact-us" className="block w-full h-full group">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center">
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center justify-center lg:justify-start">
                  <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                    <span className="text-gray-500 font-medium text-lg block mb-2">Medical 3D Printer</span>
                    <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-4 leading-tight">Funmat Pro 410</h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg mx-auto lg:mx-0">
                      Self-Developed FFF (Fused Filament Fabrication) Core Technologies
                    </p>
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-500/30">
                      Know More
                    </button>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full relative opacity-30">
                  <Image
                    src="/images/home/landing-hero-mobile.png"
                    alt="Funmat Pro 410 Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden lg:block w-full h-full relative">
                  <Image
                    src="/images/home/landing-hero-desktop.png"
                    alt="Funmat Pro 410 Desktop"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default BannerCarousel;