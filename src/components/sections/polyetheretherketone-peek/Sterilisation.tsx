const points = [
  "Gamma radiation and EtO sterilisation",
  "Maintains mechanical integrity and performance following processing.",
  "Robust heat resistance ensures safety in medical sterilisation and operational settings.",
  "Requires controlled processing temperatures to prevent unwanted crystallization and shrinkage.",
];

const Sterilisation = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-[36px] font-bold text-[#0066b2] text-center mb-10">
          Sterilisation
        </h2>
        <ul className="flex flex-col gap-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              {/* Arrow icon circle */}
              <span className="flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#0066b2]"
                >
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M9 12h6m0 0l-3-3m3 3l-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[15px] font-semibold text-gray-800 leading-snug">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sterilisation;
