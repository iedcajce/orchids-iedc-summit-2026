"use client";

export function Ticker() {
  const items = Array(10).fill("IEDC STARTUP SUMMIT 2026 • TRANSFORMING IDEAS •");

  return (
    <div className="bg-brand-dark py-3 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="inline-block animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mx-6 md:mx-12">
            {item}
          </span>
        ))}

      </div>
      <div className="inline-block animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mx-6 md:mx-12">
            {item}
          </span>
        ))}

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
      `}</style>
    </div>
  );
}
