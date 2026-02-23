const Hero = () => {
  return (
    <section
      className="w-full bg-[#BFE2FF] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/get-quote/Group-103-1.png')" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 min-h-[400px] flex items-center justify-end">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold uppercase text-[#222223]">
            ENquire Now
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
