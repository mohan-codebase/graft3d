import Image from "next/image";

const ArrowCircle = () => (
    <div className="hidden xl:flex w-12 h-12 rounded-full bg-[#166AAF] items-center justify-center shrink-0 z-10 shadow-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </div>
);

type Card = {
    num: number;
    title: string;
    desc: string;
    img: string;
}

export default function DigitalToMedicalPart() {
    const cards: Card[] = [
        { num: 1, title: "Medical Imaging", desc: "CT / MRI / 3D Scan", img: "digital-to-medical-1.png" },
        { num: 2, title: "Segmentation & Design", desc: "Elucis / Geomagic Freeform", img: "digital-to-medical-2.png" },
        { num: 3, title: "Slicing", desc: "Optimized for performance", img: "digital-to-medical-3.png" },
        { num: 4, title: "Printing", desc: "High precision manufacturing", img: "digital-to-medical-4.png" },
        { num: 5, title: "Post Processing", desc: "Cleaning, support removal & finishing", img: "digital-to-medical-5.png" },
        { num: 6, title: "Final Part", desc: "Quality checked & ready for use", img: "digital-to-medical-6.png" },
    ];

    const renderCard = (card: Card) => (
        <div 
            key={card.num} 
            className="relative w-full max-w-150 bg-white border-t-4 border-[#166AAF] rounded-xl p-4 lg:p-6 pb-6 lg:pb-8 flex flex-col items-center z-10" 
            style={{boxShadow: '0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A'}}
        >
            <div className="absolute -top-4.5 left-6 lg:left-8 w-8 h-8 bg-[#166AAF] rounded-md text-white flex items-center justify-center font-bold text-[1.125rem]">
                {card.num}
            </div>
            <div className="w-full relative aspect-2/1 rounded-lg overflow-hidden mt-2">
                <Image src={`/images/funmat-ht/${card.img}`} alt={card.title} fill className="object-cover" />
            </div>
            <h3 className="text-center text-[#1E1E1E] font-bold text-[1.25rem] lg:text-[1.5rem] mt-6">{card.title}</h3>
            <p className="text-center text-[#475569] font-normal text-[0.875rem] lg:text-[1rem] mt-2">{card.desc}</p>
        </div>
    );

    return (
        <section className="w-full bg-white py-8 lg:py-16 overflow-hidden">
            <div className="container-fluid mx-auto px-4 lg:px-8 xl:px-18">
                <h2 className="text-center text-black font-bold text-[1.75rem] md:text-[2rem] lg:text-[2.375rem]">
                    From Digital Data to Medical Part
                </h2>

                <div className="relative w-full mt-16 max-w-400 mx-auto">
                    
                    {/* Snake Arrow for Desktop */}
                    <div className="hidden xl:block absolute top-42.5 bottom-42.5 -left-7.5 -right-7.5 z-0 pointer-events-none">
                        {/* Right U-Turn */}
                        <div className="absolute right-0 top-0 w-7.5 h-[50%] border-t-2 border-r-2 border-b-2 border-[#166AAF] rounded-r-[30px]"></div>
                        {/* Horizontal Line */}
                        <div className="absolute left-7.5 right-7.5 top-[50%] h-0.5 bg-[#166AAF] -translate-y-px"></div>
                        {/* Left U-Turn */}
                        <div className="absolute left-0 top-[50%] w-7.5 h-[50%] border-t-2 border-l-2 border-b-2 border-[#166AAF] rounded-l-[30px] -mt-px"></div>
                        {/* Arrow Head pointing right into Card 4 */}
                        <div className="absolute left-3.5 bottom-0.5 translate-y-[calc(50%-1px)] text-[#166AAF]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-12 lg:gap-y-20 w-full">
                        {/* Row 1 */}
                        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-4 w-full relative z-10">
                            {renderCard(cards[0])}
                            <ArrowCircle />
                            {renderCard(cards[1])}
                            <ArrowCircle />
                            {renderCard(cards[2])}
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-4 w-full relative z-10">
                            {renderCard(cards[3])}
                            <ArrowCircle />
                            {renderCard(cards[4])}
                            <ArrowCircle />
                            {renderCard(cards[5])}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
