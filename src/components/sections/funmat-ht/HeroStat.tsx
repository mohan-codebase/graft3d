import Image from 'next/image';

export default function HeroStat() {
    const stats = [
        {
            img: "hero-stat-1.png",
            text: "High Temp\nNozzle —\nUp to\n500°C"
        },
        {
            img: "hero-stat-2.png",
            text: "Heated\nChamber\n— Up to\n90°C"
        },
        {
            img: "hero-stat-3.png",
            text: "Heated\nBuild Plate\n— Up to\n160°C"
        },
        {
            img: "hero-stat-4.png",
            text: "Large\nBuild\nVolume &\nStable\nStructure"
        },
        {
            img: "hero-stat-5.png",
            text: "Industrial\nGrade\nReliability"
        },
        {
            img: "hero-stat-6.png",
            text: "Wide\nRange of\nEngineering\nMaterials"
        }
    ];

    return (
        <section className="w-full bg-[#1B6DB1] py-8 lg:py-12">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 xl:justify-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 relative">
                                <Image
                                    src={`/images/funmat-ht/${stat.img}`}
                                    alt={stat.text.replace(/\n/g, ' ')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white font-bold text-[1.25rem] lg:text-[1.625rem] leading-[1.1] whitespace-pre-line">
                                {stat.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
