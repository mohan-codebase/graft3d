import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const BlogMeta = () => {
  return (
    <div className="mt-4 flex flex-col gap-2 text-[#ACACAC] text-[15px]">
      <div className="flex items-center gap-2">
        <User size={16} className="text-[#ACACAC]" />
        <span>Admin</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-[#ACACAC]" />
        <span>June 28 2021</span>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  return (
    <section className="w-full bg-[#E9F5FF]">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h2
          className="text-center text-[30px] font-bold text-[#1B6DB1] mb-8"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Our Blogs
        </h2>

        <div className="bg-white shadow-[2px_0_6px_rgba(0,0,0,0.16)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="pt-[15px] pl-[15px] pr-0 pb-0">
              <Link href="/artificial-nasal-prosthesis-case-study/">
                <div className="relative h-[240px] w-full">
                  <Image
                    src="/images/asthi-bone-like-3d-printed-training-models/WhatsApp-Image-2022-07-27-at-11.16.47-AM-2.jpeg"
                    alt="Facial prosthesis in India"
                    fill
                    className="object-fill"
                  />
                </div>
              </Link>
            </div>
            <div className="px-[15px] pt-[35px] pb-6">
              <h3
                className="text-[17px] font-bold text-[#1B6DB1] leading-[22px]"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Virtual Surgical Planning Assists With Full Face Transplant
              </h3>
              <BlogMeta />
            </div>
            <div className="pt-[15px] pr-[15px] pl-0 pb-0">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/asthi-bone-like-3d-printed-training-models/caseStudy2.png"
                  alt="Case Study"
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-[2px_3px_6px_rgba(0,0,0,0.16)] mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="px-[15px] pt-[35px] pb-6">
              <Link href="/artificial-nasal-prosthesis-case-study/">
                <h3
                  className="text-[17px] font-bold text-[#1B6DB1] leading-[22px] hover:underline"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis
                </h3>
              </Link>
              <BlogMeta />
            </div>
            <div className="pt-0 pb-[15px] px-0">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/images/asthi-bone-like-3d-printed-training-models/case-study.png"
                  alt="Medical Case Study"
                  fill
                  className="object-fill"
                />
              </div>
            </div>
            <div className="px-[15px] pt-[35px] pb-6">
              <h3
                className="text-[17px] font-bold text-[#1B6DB1] leading-[22px]"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual
                Touch
              </h3>
              <BlogMeta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
