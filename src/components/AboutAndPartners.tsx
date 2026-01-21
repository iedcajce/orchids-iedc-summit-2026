"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  CircleDollarSign,
  Cpu
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
      className={`relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-end items-start group cursor-pointer transition-all duration-500 border border-brand/5 shadow-sm hover:shadow-2xl hover:border-brand/20 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(95, 180, 124, 0.2), transparent 40%)`,
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-start gap-4">
        <span className={`text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full ${className.includes('bg-brand-dark') ? 'bg-white/10 text-white/60' : 'bg-brand/10 text-brand'}`}>
          {tag}
        </span>

        <div>
          <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic tracking-tighter leading-[0.9] uppercase ${className.includes('bg-brand-dark') ? 'text-white' : 'text-brand-dark'}`} style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
            {title}
          </h3>
          <p className={`text-xs md:text-sm leading-relaxed italic font-medium max-w-xs ${className.includes('bg-brand-dark') ? 'text-white/60' : 'text-brand-dark/60'}`}>
            {description}
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none select-none">
        <div className="text-[12rem] md:text-[20rem] font-black italic tracking-tighter leading-none">
          {tag.slice(0, 1)}
        </div>
      </div>
    </motion.div>
  );
}

export function SummitHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      title: "Business Development",
      description: "Promotes the 'earn while you learn' model by connecting student startups with industries for part-time business opportunities.",
      className: "md:col-span-2 md:row-span-2 bg-brand-dark text-white",
      tag: "EARN & LEARN",
    },
    {
      title: "Investment Track",
      description: "Dedicated fundraising platform offering direct interaction with investors and expert sessions on channelling funding.",
      className: "md:col-span-2 md:row-span-1 bg-white",
      tag: "FUNDRAISING",
    },
    {
      title: "Learn from Experience",
      description: "Meet influencing entrepreneurs and leaders who have revamped marketing strategies through creative thinking.",
      className: "md:col-span-1 md:row-span-1 bg-brand/5",
      tag: "MENTORSHIP",
    },
    {
      title: "Technology Track",
      description: "Hands-on product development with access to SEM, HPLC, GCMS, IoT, and pre-booking facilities.",
      className: "md:col-span-1 md:row-span-1 bg-white",
      tag: "HANDS-ON",
    },
    {
      title: "Nodal Officers & ExeComs",
      description: "Exclusive meetups for Nodal Officers and Executive Committee members to collaborate and drive the ecosystem.",
      className: "md:col-span-4 md:row-span-1 bg-[#f0f4f2]",
      tag: "COMMUNITY",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            entry.target.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen h-auto md:h-screen w-full bg-[#f8faf9] overflow-y-auto md:overflow-hidden flex flex-col justify-center snap-start relative py-8 md:py-2 lg:py-4"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-2 lg:mb-4 shrink-0"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-2 md:mb-1 lg:mb-2 italic tracking-tighter uppercase leading-none">
            SUMMIT <span className="text-brand">HIGHLIGHTS</span>
          </h2>
          <p className="text-brand-dark/60 text-[10px] md:text-[9px] lg:text-[10px] max-w-2xl mx-auto uppercase tracking-[0.2em] md:tracking-[0.4em] font-black leading-relaxed">
            Kerala's largest student entrepreneurship platform with world-class tracks, hands-on workshops, and unparalleled opportunities.
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3 md:gap-3 lg:gap-4 md:min-h-0 pb-2 h-auto md:h-full">
          {highlights.map((item, idx) => (
            <BentoCard key={idx} {...item} delay={idx * 0.1} className={`${item.className} min-h-[240px] md:min-h-0 h-full w-full`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const tracks = [
  {
    id: "business",
    title: "Business Development",
    icon: TrendingUp,
    description: "This track helps startups identify their strengths and weaknesses, understand market requirements, and develop a clear idea-to-market pathway through networking, mentoring, and expert-led sessions."
  },
  {
    id: "mentoring",
    title: "Mentoring",
    icon: Users,
    description: "A dedicated mentoring track led by industry experts, successful founders, and management professionals. One-to-one mentoring opportunities will be provided for selected teams."
  },
  {
    id: "investment",
    title: "Investment",
    icon: CircleDollarSign,
    description: "This track focuses on when, where, and how to raise funds. Key highlights include investment pitching sessions, interactions with investors, and exclusive sessions on government grants and funding schemes."
  },
  {
    id: "technology",
    title: "Technology",
    icon: Cpu,
    description: "Focused on optimizing technology for market-ready product development. This track includes specialized workshops, expert interactions, and technical guidance to build commercially feasible solutions."
  }
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTrack, setActiveTrack] = useState(0);

  const stats = [
    { label: "IEDCs", value: "557" },
    { label: "Nodal Officers", value: "1000+" },
    { label: "IEDC Clusters", value: "14" },
    { label: "Startups", value: "1000+" },
    { label: "Innovators", value: "100k+" },
    { label: "Speakers", value: "100+" },
    { label: "Mentors", value: "50+" },
    { label: "Investors", value: "10+" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrack((prev) => (prev + 1) % tracks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white py-16 md:py-24 overflow-hidden">
      {/* Sharper Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#439162 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-6">
            <span className="text-brand text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">The Flagship Initiative</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-brand-dark mb-6 italic tracking-tighter uppercase leading-[0.9]">
            About <span className="text-brand">The Summit</span>
          </h2>
          <p className="text-brand-dark/60 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-wider">
            IEDC Startup Summit 2026 is designed to nurture deep-tech student startups, transforming academic projects into market-ready ventures.
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] md:rounded-[4rem] border border-brand/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-14 mb-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-colors duration-1000" />
          <p className="relative z-10 text-brand-dark/80 text-base md:text-2xl leading-relaxed text-center max-w-4xl mx-auto font-medium italic tracking-tight">
            The summit ensures effective networking to nurture and scale student startups through peer interactions, market connections, technological support, and fundraising opportunities. These objectives are delivered through <span className="font-black text-brand underline decoration-brand/20 underline-offset-8">four dedicated tracks</span>:
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTrack(index)}
                className={`group cursor-pointer p-5 md:p-6 rounded-[2rem] border transition-all duration-500 flex items-center gap-6 ${activeTrack === index
                  ? "bg-brand-dark border-brand-dark shadow-2xl shadow-brand-dark/20 scale-[1.02]"
                  : "bg-white border-brand/5 hover:border-brand/20 hover:bg-brand/5"
                  }`}
              >
                <div className={`shrink-0 w-16 h-16 rounded-2xl transition-all duration-500 flex items-center justify-center transform-gpu ${activeTrack === index
                  ? "bg-brand text-white shadow-xl shadow-brand/30 rotate-3"
                  : "bg-brand/10 text-brand group-hover:scale-110"
                  }`}>
                  <track.icon size={32} strokeWidth={2.5} className="transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xl md:text-3xl font-black tracking-tighter mb-1 transition-colors duration-500 uppercase italic leading-none ${activeTrack === index ? "text-white" : "text-brand-dark"
                    }`} style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                    {track.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    {activeTrack === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -5 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/70 text-sm leading-relaxed font-medium line-clamp-3 mt-2"
                      >
                        {track.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand/5 rounded-[2rem] p-6 md:p-10 grid grid-cols-2 gap-4 md:gap-6 content-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-left"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-brand-dark">
                  <Counter value={stat.value} isActive={true} />
                </p>
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.15em] text-brand">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[2rem] p-8 md:p-12 text-center"
        >
          <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto italic">
            "IEDC Startup Summit 2026 will be the <span className="text-brand font-bold">largest hillside student startup summit</span>, aimed at empowering students to transform their ideas and academic projects into market-driven, commercially viable products."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value, isActive }: { value: string; isActive: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/^([\d.,]+)(.*)$/);
  const numericValue = match ? parseFloat(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (isActive) {
      const controls = animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v: number) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    } else {
      if (ref.current) {
        ref.current.textContent = value;
      }
    }
  }, [isActive, numericValue, suffix, value]);

  return <span ref={ref}>{value}</span>;
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
            Grateful to our partners who make IEDC Summit 2026 possible.
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
            <Button className="bg-[#4A7C59] hover:bg-[#386144] text-white rounded-full px-12 py-6 h-auto uppercase text-xs font-bold tracking-widest shadow-[0_20px_40px_rgba(74,124,89,0.3)] transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
              View All Partners
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
