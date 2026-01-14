"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function SummitHighlights() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 italic tracking-tight">
            SUMMIT HIGHLIGHTS
          </h2>
          <p className="text-brand-dark/60 text-sm max-w-2xl mx-auto mb-16 uppercase tracking-[0.2em] leading-relaxed font-bold">
            Experience Kerala's largest student entrepreneurship platform with world-class speakers, hands-on workshops, and unparalleled networking opportunities.
          </p>
        </motion.div>

          <div className="flex justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1 },
                  type: "spring", 
                  bounce: 0.3
                }}
              className="bg-brand-dark p-16 md:p-24 rounded-[4rem] text-left max-w-2xl shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              <motion.h3 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none"
              >
                Engineering <br /><span className="text-brand">Future</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white/80 text-xl md:text-2xl leading-relaxed italic font-light"
              >
                Where innovation meets impact through technology, design, and real-world problem-solving. We're building the next generation of thinkers.
              </motion.p>
            </motion.div>
          </div>
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { label: "Cluster Coordinators", value: "70+" },
    { label: "Clusters", value: "14" },
    { label: "IEDCs", value: "557" },
    { label: "Innovators", value: "1 Lakh+" },
    { label: "Nodal Officers", value: "1K+" },
    { label: "MEST Members", value: "150+" },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white flex flex-col items-center gap-12">
      {/* Infinite Carousel Like Label (Optional, to mimic ticker style) */}
      <div className="w-full bg-brand-dark py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-slow">
            {Array(20).fill("ABOUT IEDC SUMMIT 2025").map((text, i) => (
            <span key={i} className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mx-10">
              {text}
            </span>
          ))}
        </div>
      </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            width: '1442px',
            minHeight: '521px',
            padding: '19px 20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(251deg, rgba(255, 255, 255, 0.85) -12.2%, rgba(255, 255, 255, 0.60) 112.36%)',
            backdropFilter: 'blur(7.5px)',
          }}
          className="relative z-10 mx-auto rounded-[3rem] border border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex-col md:flex-row gap-8"
        >
          <div className="flex-1 px-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-brand-dark mb-6 italic tracking-tighter"
            >
              About
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-dark/80 text-lg md:text-xl max-w-2xl italic font-medium leading-relaxed"
            >
              The IEDC Summit 2025, organized by Kerala Startup Mission and jointly hosted by Amal Jyothi College of Engineering, Koovappally, marks a decade of fostering innovation, entrepreneurship, and technological excellence.
            </motion.p>
          </div>

          <div className="px-10 grid grid-cols-2 gap-8 md:gap-x-16 md:gap-y-10">
            {stats.slice(0, 4).map((stat, i) => (
              <div key={i} className="text-left">
                <p className="text-3xl md:text-5xl font-black text-brand-dark mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

export function Partners() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 italic tracking-tighter uppercase">
            OUR PARTNERS
          </h2>
          <p className="text-brand-dark/40 text-xs uppercase tracking-[0.3em] font-bold mb-24">
            Grateful to our partners who make IEDC Summit 2025 possible.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f8faf9] rounded-[4rem] p-16 md:p-24 shadow-inner space-y-32"
        >
          <div className="relative">
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Title Sponsor</p>
            <div className="flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-64 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center cursor-pointer border border-brand/5"
              >
                <div className="w-40 h-8 bg-brand/10 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>

          <div>
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Startup Enablers</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="w-48 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center cursor-pointer border border-brand/5"
                >
                  <div className="w-24 h-4 bg-brand/5 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-8"
          >
            <Button className="bg-brand hover:bg-brand-dark text-white rounded-full px-16 py-8 h-auto uppercase text-xs font-black tracking-[0.3em] shadow-[0_20px_40px_rgba(95,180,124,0.3)] transition-all">
              View All Partners
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
