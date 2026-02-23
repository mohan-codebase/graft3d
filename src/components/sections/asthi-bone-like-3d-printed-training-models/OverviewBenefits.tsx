const benefits = [
  "Improved quality of skills and knowledge",
  "Practice surgical procedures in a safe and risk-free environment",
  "Understand the complex anatomical structures and pathologies",
  "Better visualisation and examination of bones and tissues",
  "Experiment with different surgical approaches and techniques",
  "Learn what it feels like to drill and cut the real bone",
];

const OverviewBenefits = () => {
  return (
    <section className="w-full bg-[#166AAF]">
      <div className="max-w-[1367px] mx-auto px-4 py-[60px] lg:px-[150px] text-center text-white">
        <h2 className="text-[28px] font-semibold">Overview</h2>
        <p className="mt-4 text-[18px] leading-7">
          Asthi is a bone-like 3D Printed standard Anatomical training model designed to provide
          medical professors and students with a lifelike and engaging surgical planning experience.
          Created to meet the demands of modern medical education, Whether you&apos;re a seasoned surgeon
          or a student just starting out, with Asthi, you can practice complex surgical procedures in
          a safe and controlled environment without the risk of harming real patients.
        </p>
        <h2 className="mt-10 text-[28px] font-semibold">Benefits</h2>
        <div className="mt-4 space-y-2 text-[18px] leading-7">
          {benefits.map((benefit) => (
            <p key={benefit}>{benefit}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewBenefits;
