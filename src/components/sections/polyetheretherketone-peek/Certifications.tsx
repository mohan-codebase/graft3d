const Certifications = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Dark blue card */}
        <div
          className="relative rounded-2xl overflow-hidden px-10 py-14 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #0a1f5c 0%, #0d2d7a 50%, #0a1f5c 100%)',
          }}
        >
          {/* Decorative dot grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />

          <h2 className="relative text-[32px] font-bold mb-4">Certifications</h2>
          <p className="relative text-[16px] leading-relaxed text-white/90 max-w-xl mx-auto">
            <span className="font-semibold">USP Class VI and ISO 10993:</span>
            <br />
            Assures compliance with international biocompatibility standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
