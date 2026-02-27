import Image from "next/image";

const points = [
  "Light, radio translucent and biomechanically resemble the bone.",
"Ideal for cosmetically sensitive orbital reconstruction when postoperative imaging is essential.",
"Concave-convex surface increases friction force for a perfect fit and natural shape.",
"Limitations: Lower osseointegration than titanium implants."
];

const Polyetheretherketone = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Polyetheretherketone (PEEK) 3D Printed Implants</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      
      </div>
    </section>
  );
};

export default Polyetheretherketone;
