import React from 'react';

const stats = [
    {
        value: "30+",
        label: "Medical 3D Software Installed"
    },
    {
        value: "10+",
        label: "3D Printed Products Developed"
    },
    {
        value: "250+",
        label: "Parts Medical 3D Printed"
    },
    {
        value: "200+",
        label: "Happy Healthcare Customers"
    }
];

const WhyWeAre = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-6 bg-gray-50/50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-[#166AAF]">WHY WE ARE?</h2>
                        <p className="text-gray-600 leading-relaxed text-lg italic">
                            Graft 3D Healthcare Solutions Pvt. Ltd holds a unique focus on being a trusted partner of surgical team, from sensitive medical imaging to dynamic 3DP models for planning and preparation. Surgical outcome accuracy and safety is paramount, we also study patient case histories and provide clinical reports, from beginning to end, we are committed to provide end-to-end 3D healthcare solutions to help medical team by using 3D technology, improving precision surgery, reducing theatre time! Graft 3D has a dedicated team for Bio-Medical imaging case reports, with the help of 3D technology, surgeons are having the advantage of accurate surgery, thus enhancing the care of treatment to the healthcare.
                        </p>
                    </div>

                    {/* Right Side: Stats Card */}
                    <div className="bg-gradient-to-br from-[#166AAF] to-[#dcecfc] p-1 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[22px] h-full flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="text-4xl lg:text-5xl font-bold text-[#166AAF] mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600 font-medium leading-tight max-w-[180px] mx-auto text-sm md:text-base">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeAre;
