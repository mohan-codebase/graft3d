import React from 'react';

interface PageHeroProps {
    title: string;
    titleAccent?: string; // Optional highlighted word in primary color
    description?: string;
    className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    titleAccent,
    description,
    className = ''
}) => {
    return (
        <section className={`w-full bg-gradient-to-br from-[#eaf6ff] to-white py-16 md:py-24 ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                    {title} {titleAccent && <span className="text-primary">{titleAccent}</span>}
                </h1>
                {description && (
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
