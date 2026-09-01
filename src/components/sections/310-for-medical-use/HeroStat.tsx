import Image from "next/image";

const stats = [
    {
        icon: "/images/310-for-medical-use/hero-stat-1.svg",
        text: "Up to 500\nmm/s",
    },
    {
        icon: "/images/310-for-medical-use/hero-stat-2.svg",
        text: "100°C Heated\nChamber",
    },
    {
        icon: "/images/310-for-medical-use/hero-stat-3.svg",
        text: "Dual IDEX",
    },
    {
        icon: "/images/310-for-medical-use/hero-stat-4.svg",
        text: "Dual 3 kg Dry\nBoxes",
    },
];

export default function HeroStat() {
    return (
        <section className="w-full bg-[#1B6DB1] py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center sm:justify-start lg:justify-center gap-4"
                        >
                            <div className="relative w-14 h-14 shrink-0">
                                <Image
                                    src={stat.icon}
                                    alt={stat.text.replace("\n", " ")}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-white font-bold text-[1.625rem] leading-tight whitespace-pre-line">
                                {stat.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
