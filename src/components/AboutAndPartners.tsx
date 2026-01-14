"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";

function BentoCard({ 
  title, 
  description, 
  className, 
  tag,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  className: string; 
  tag: string;
  delay?: number;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 border border-brand/5 shadow-sm hover:shadow-2xl hover:border-brand/20 ${className}`}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(95, 180, 124, 0.2), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <span className={`text-[10px] font-black tracking-[0.2em] px-4 py-1.5 rounded-full ${className.includes('bg-brand-dark') ? 'bg-white/10 text-white/60' : 'bg-brand/10 text-brand'}`}>
            {tag}
          </span>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            className={`p-2.5 rounded-full ${className.includes('bg-brand-dark') ? 'bg-brand text-white' : 'bg-brand-dark text-white'}`}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
        
        <div className="mt-auto">
          <h3 className={`text-3xl md:text-5xl font-black mb-4 italic tracking-tighter leading-[0.9] ${className.includes('bg-brand-dark') ? 'text-white' : 'text-brand-dark'}`}>
            {title}
          </h3>
          <p className={`text-base md:text-lg leading-relaxed italic font-medium max-w-md ${className.includes('bg-brand-dark') ? 'text-white/60' : 'text-brand-dark/60'}`}>
            {description}
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none select-none">
         <div className="text-[20rem] font-black italic tracking-tighter leading-none">
            {tag.slice(0, 1)}
         </div>
      </div>
    </motion.div>
  );
}

export function SummitHighlights() {
  const highlights = [
    {
      title: "Investment Track",
      description: "Direct access to venture capital and angel investors for high-potential startups ready to scale.",
      className: "md:col-span-2 md:row-span-2 bg-brand-dark text-white",
      tag: "FINANCE",
    },
    {
      title: "Business Strategy",
      description: "Masterclasses on scaling and product-market fit from global leaders.",
      className: "md:col-span-2 md:row-span-1 bg-white",
      tag: "GROWTH",
    },
    {
      title: "Future Tech",
      description: "Hands-on with AI, Robotics, and Web3 innovations shaping the world.",
      className: "md:col-span-1 md:row-span-1 bg-brand/5",
      tag: "INNOVATION",
    },
    {
      title: "Networking",
      description: "Connect with 5000+ peers and world-class mentors in every domain.",
      className: "md:col-span-1 md:row-span-1 bg-white",
      tag: "COMMUNITY",
    },
    {
      title: "Kerala Growth",
      description: "Witness the surge of India's most vibrant startup ecosystem and join the movement.",
      className: "md:col-span-4 md:row-span-1 bg-[#f0f4f2]",
      tag: "ECOSYSTEM",
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-black text-brand-dark mb-6 italic tracking-tighter uppercase leading-none">
            SUMMIT <span className="text-brand">HIGHLIGHTS</span>
          </h2>
          <p className="text-brand-dark/60 text-[10px] md:text-xs max-w-2xl mx-auto uppercase tracking-[0.4em] font-black leading-relaxed">
            Kerala's largest student entrepreneurship platform with world-class tracks, hands-on workshops, and unparalleled opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[320px]">
          {highlights.map((item, idx) => (
            <BentoCard key={idx} {...item} delay={idx * 0.1} />
          ))}
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
          className="relative z-10 mx-auto rounded-[3rem] border border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-8 py-12 md:py-20 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl max-w-[1400px]"
        >
          <div className="flex-1 px-8 md:px-16">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black text-brand-dark mb-8 italic tracking-tighter"
            >
              About
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-dark/80 text-xl md:text-2xl italic font-medium leading-relaxed max-w-2xl"
            >
              The IEDC Summit 2025, organized by Kerala Startup Mission and jointly hosted by Amal Jyothi College of Engineering, Koovappally, marks a decade of fostering innovation, entrepreneurship, and technological excellence.
            </motion.p>
          </div>

          <div className="px-8 md:px-16 grid grid-cols-2 gap-8 md:gap-x-20 md:gap-y-12">
            {stats.slice(0, 4).map((stat, i) => (
              <div key={i} className="text-left">
                <p className="text-4xl md:text-6xl font-black text-brand-dark mb-2 tracking-tighter">
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
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-4 italic tracking-tighter uppercase leading-none">
            OUR <span className="text-brand">PARTNERS</span>
          </h2>
          <p className="text-brand-dark/40 text-[10px] uppercase tracking-[0.4em] font-black mb-24">
            Grateful to our partners who make IEDC Summit 2025 possible.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f8faf9] rounded-[4rem] p-12 md:p-24 shadow-inner space-y-32"
        >
          <div className="relative">
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Title Sponsor</p>
            <div className="flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-80 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer border border-brand/5"
              >
                <div className="w-48 h-10 bg-brand/10 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>

          <div>
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Startup Enablers</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="w-56 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center cursor-pointer border border-brand/5"
                >
                  <div className="w-32 h-6 bg-brand/5 rounded-full" />
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
            <Button className="bg-brand hover:bg-brand-dark text-white rounded-full px-20 py-10 h-auto uppercase text-xs font-black tracking-[0.4em] shadow-[0_30px_60px_rgba(95,180,124,0.3)] transition-all">
              View All Partners
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
