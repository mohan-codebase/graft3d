"use client";

const testimonials = [
    {
        quote:
            "I have lost my nose While fighting Cancer. It broke me completely and I was depressed and stopped coming out of the home. Meeting Graft and Dr Sanketh Reddy was the best thing happened to me after suffering from cancer. The prosthesis matches my skin color precisely. I am very happy to go anywhere with much confidence.",
        name: "Kushal Gupta",
        stars: 4,
    },
    {
        quote:
            "I have met with an accident and lost my left ear and Loosing an ear at 21 had a huge mental toll. I Skipped college for a whole semester and I was no where near to meet new people. but with God's Grace I have met Graft3D and they had the helped me with Artificial prosthetic Ears and that looks very real and that has made life as good as before.",
        name: "Arish Karthick",
        stars: 5,
    },
];

const StarRating = ({ count }: { count: number }) => (
    <div className="flex gap-1 mt-3">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className={`w-5 h-5 ${star <= count ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.372 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Light blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c8dff5] via-[#d8eaf9] to-[#c8dff5]" />

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-[36px] font-bold text-[#166aaf]">Testimonials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm p-8 relative">
                            {/* Big quote mark */}
                            <span className="text-[72px] leading-none text-[#166aaf] font-serif absolute top-4 left-6 opacity-80 select-none">
                                &ldquo;
                            </span>
                            <div className="pt-10">
                                <p className="text-[14px] text-gray-700 leading-relaxed">{t.quote}</p>
                                <p className="mt-5 font-bold text-[#166aaf] text-[15px]">- {t.name}</p>
                                <StarRating count={t.stars} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
