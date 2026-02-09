"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BANNER_SLIDES = [
  {
    id: 1,

    title: "Medical 3D Filaments",
    description: "Polyetheretherketone (PEEK), Polymethyl Methacrylate (PMMA), Polycarbonate (PC)",
    desktopImage: "/images/home/banner/slide-5.png",
    mobileImage: "/images/home/banner/slide-5.png",
    imageAlt: "Medical 3D Filaments",


  },
  {
    id: 2,
    subtitle: <span className="text-gray-500 font-medium text-lg block mb-2 text-left">Medical 3D Printer</span>,
    title: "Funmat Pro 410",
    description: "Self-Developed FFF (Fused Filament Fabrication) Core Technologies",
    desktopImage: "/images/home/banner/slide-4.png",
    mobileImage: "/images/home/banner/slide-4.png",
    imageAlt: "Funmat Pro 410 Medical 3D Printer",
    titlePrimary: true,
    imageRight: true,
  },
  {
    id: 3,
    title: "EinScan Medixa",
    desktopImage: "/images/home/banner/slide-2.png",
    mobileImage: "/images/home/banner/slide-2.png",
    imageAlt: "EinScan Medixa 3D Scanner",
    titlePrimary: true,
    titleLarge: true,
    extraButtons: (
      <div className="flex flex-wrap justify-start gap-4 mb-8">
        <Button className="rounded-full px-6 py-5" variant="default">
          Meet Us Live Online
        </Button>
        <Button className="rounded-full px-6 py-5 bg-white text-primary border border-primary hover:bg-blue-50">
          Get a Quote Now
        </Button>
      </div>
    )
  },
  {
    id: 4,
    title: <>Geomagic Freeform <span className="text-black">With</span><br /><span className="text-black">Haptic</span></>,
    description: "Comprehensive Medical Design Software For Custom Medical Devices",
    desktopImage: "/images/home/banner/slide-1-mobile.png",
    mobileImage: "/images/home/banner/slide-1-mobile.png",
    imageAlt: "Geomagic Freeform Medical Design Software",
    titlePrimary: true,
  },
  {
    id: 5,
    subtitle: "Graft3D Healthcare",
    title: <>Medical 3D Printing<br />Solution Provider</>,
    description: "We Design and Develop Custom Healthcare 3D printed products, Healthcare 3D printing packages and Healthcare 3D services for hospitals and surgeons.",
    desktopImage: "/images/home/banner/slide-3-mobile.png",
    mobileImage: "/images/home/banner/slide-3-mobile.png",
    imageAlt: "Graft3D Healthcare Solution Provider",
    contentAlignCenter: false, // For lg:items-start
  }
];

const BannerCarousel = () => {
  return (
    <div className="max-w-[1400px]  mx-auto min-h-[500px] lg:h-[600px] flex items-center relative overflow-hidden">

      <div className="w-full h-full z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full pb-12"
        >
          {BANNER_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link href="/contact-us" className="block w-full h-full group">
                <div className="w-full flex flex-col lg:block min-h-[500px] lg:h-[600px] relative ">
                  {/* Content Container */}
                  <div className={`w-full lg:absolute lg:inset-0 z-20 container mx-auto px-4 flex flex-col items-start justify-center lg:items-start lg:justify-center py-12 lg:py-0 h-full`}>
                    <div className="max-w-2xl text-left">
                      {slide.subtitle && (
                        typeof slide.subtitle === 'string' ? (
                          <h2 className="text-primary font-bold text-2xl lg:text-3xl mb-2 text-left">{slide.subtitle}</h2>
                        ) : slide.subtitle
                      )}

                      <h1 className={`${slide.titlePrimary ? 'text-primary' : 'text-black'} font-extrabold ${slide.titleLarge ? 'text-4xl lg:text-6xl' : 'text-3xl lg:text-5xl'} mb-4 leading-tight text-left`}>
                        {slide.title}
                      </h1>

                      {slide.description && (
                        <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg text-left">
                          {slide.description}
                        </p>
                      )}

                      {slide.extraButtons}

                      <BannerContactInfo />

                      <Button variant="default" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/30">
                        Know More
                      </Button>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className={`w-full lg:absolute lg:inset-y-0 lg:right-0 h-[400px] lg:h-full z-10 ${slide.imageRight ? 'lg:w-[45%] lg:p-1' : 'lg:w-1/2'}`}>
                    <div className="hidden lg:block w-full h-full relative">
                      <Image
                        src={slide.desktopImage}
                        alt={`${slide.imageAlt} Desktop`}
                        fill
                        className={`object-contain ${slide.imageRight ? 'object-center' : 'object-right'}`}
                        priority={slide.id === 1}
                      />
                    </div>
                    <div className="block lg:hidden w-full h-full relative">
                      <Image
                        src={slide.mobileImage}
                        alt={`${slide.imageAlt} Mobile`}
                        fill
                        className="object-contain"
                        priority={slide.id === 1}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const BannerContactInfo = () => (
  <div className="flex flex-col gap-4 mb-8 items-start lg:items-start">
    <div className="flex items-center gap-3">
      <div className="bg-primary text-white p-3 rounded-full">
        <Phone size={24} />
      </div>
      <div className="text-left">
        <p className="text-primary font-bold text-lg">Call us now</p>
        <p className="text-gray-700 text-sm font-medium">+91 6374410703 | +91 98404 78347</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="bg-primary text-white p-3 rounded-full">
        <Mail size={24} />
      </div>
      <div className="text-left">
        <p className="text-primary font-bold text-lg">Email Us at</p>
        <p className="text-gray-700 text-sm font-medium">sales@graft3d.com</p>
      </div>
    </div>
  </div>
);

export default BannerCarousel;