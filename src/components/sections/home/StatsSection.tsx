import React from 'react';

const stats = [
    {
        value: "250+",
        label: "Parts Medical 3D printed"
    },
    {
        value: "200+",
        label: "Happy Healthcare Customers"
    },
    {
        value: "30+",
        label: "Medical 3D Software Installed"
    },
    {
        value: "10+",
        label: "Medical 3D Printing Applications Developed"
    }
];

const StatsSection = () => {
    return (
        <section className="w-full py-16 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-start gap-3">
                            <span className="text-4xl lg:text-5xl font-bold text-primary">
                                {stat.value}
                            </span>
                            <p className="text-gray-600 font-medium max-w-[180px] leading-tight">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
