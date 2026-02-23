const VideosSection = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1367px] mx-auto px-4">
        <h2
          className="text-center text-[30px] font-bold text-[#1B6DB1] mb-8"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Videos
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:basis-[70.232%] w-full">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_5iJ8hPhHkQ"
                title="Asthi training models video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="md:basis-[27.487%] w-full flex flex-col gap-6">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qrBmFeff78g?start=6"
                title="Asthi training models video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/keRZePyII0w?start=105"
                title="Asthi training models video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
