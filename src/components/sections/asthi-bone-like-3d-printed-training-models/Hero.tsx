import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/asthi-bone-like-3d-printed-training-models/6754-1.png')",
      }}
    >
      <div className="max-w-[1367px] mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8">
          <div className="md:basis-[47.949%] md:pt-[137px] md:pl-[101px] flex flex-col items-center md:items-start text-black text-center md:text-left">
            <h1 className="text-[28px] font-bold text-black">
              Asthi- 3D Printed Anatomical Models
            </h1>
            <p className="text-[24px] text-black mt-4">Plan .Train .Visualize.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-[360px]">
              <a
                href="#"
                className="bg-primary text-white text-[18px] font-medium py-2.5 px-6 text-center rounded"
              >
                Buy
              </a>
              <a
                href="#"
                className="bg-primary text-white text-[18px] font-medium py-2.5 px-6 text-center rounded"
              >
                Download
              </a>
            </div>
          </div>

          <div className="md:basis-[25.902%] flex justify-center mt-8 md:mt-0">
            <div className="relative w-[70%] md:w-full max-w-[428px] h-[311px] md:h-[414px] mx-auto">
              <Image
                src="/images/asthi-bone-like-3d-printed-training-models/img.png"
                alt="Asthi anatomical model"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="md:basis-[26.149%] md:pt-[54px] flex justify-center mt-6 md:mt-0">
            <div className="relative w-[70%] md:w-full max-w-[331px] h-[265px] md:h-[319px] mx-auto">
              <Image
                src="/images/asthi-bone-like-3d-printed-training-models/image-22.png"
                alt="Asthi training model"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
