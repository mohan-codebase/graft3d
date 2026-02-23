const reasons = [
  "Produce implants and prosthetics inhouse",
  "Streamline surgical planning and reduce operation times",
  "Deliver personalized, cost effective, and safer patient care",
];

const WhyChoose = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-4">
          Why Choose the FUNMAT PRO 410 for Healthcare 3D Printing?
        </h2>
        <p className="text-gray-600 mb-10">
          The Intamsys FUNMAT PRO 410 is more than just a high temperature industrial 3D printer.
          By combining biocompatible material support, ISO 13485 compliance, and hospital ready
          safety features, it empowers healthcare providers to
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={reason} className="relative bg-[#f5f9ff] rounded-2xl p-6 shadow-sm">
              <div className="absolute top-4 right-6 text-4xl font-bold text-primary/30">
                {index + 1}
              </div>
              <p className="text-gray-800 font-semibold text-base pr-10">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
