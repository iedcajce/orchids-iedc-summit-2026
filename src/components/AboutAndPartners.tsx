"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, animate } from "framer-motion";
import {
  ArrowUpRight
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

      {/* Arrow Top Right - Removed */}
      {/* <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          className={`p-2.5 rounded-full ${className.includes('bg-brand-dark') ? 'bg-brand text-white' : 'bg-brand-dark text-white'}`}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div> */}

      <div className="relative z-10 w-full flex flex-col items-start gap-4">
        <span className={`text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full ${className.includes('bg-brand-dark') ? 'bg-white/10 text-white/60' : 'bg-brand/10 text-brand'}`}>
          {tag}
        </span>

        <div>
          {/* Responsive text sizing to prevent overflow */}
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
  /* const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  }); */

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

  // Auto-scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            entry.target.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
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

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeTab, setActiveTab] = useState(0);

  // Optimized scroll listener to prevent unnecessary re-renders
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const newTab = latest < 0.35 ? 0 : latest < 0.7 ? 1 : 2;
      setActiveTab(prev => (prev !== newTab ? newTab : prev));
    });
  }, [scrollYProgress]);

  const content = [
    {
      text: "IEDC Startup Summit 2026 is a flagship, student-focused initiative and the largest hillside student startup summit, designed to help students transform ideas, academic projects, and prototypes into market-ready, commercially viable ventures.",
      highlightStats: ["IEDCs", "Nodal Officers", "IEDC Clusters"]
    },
    {
      text: "The summit provides a structured platform combining networking, mentoring, technology enablement, and investment access, enabling participants to validate ideas, build scalable products, and connect with industry experts, investors, and the broader startup ecosystem.",
      highlightStats: ["Investors", "Mentors", "Speakers"]
    },
    {
      text: "Open to all business and startup enthusiasts, the programme supports innovation-driven student startups through focused tracks in business development, mentoring, funding, and technology.",
      highlightStats: ["Startups", "Innovators"]
    }
  ];

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

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ed3e4ef3-254e-4a25-9f8f-ed422d28efcf/6780a29c-208d-4208-8c74-c0c7ae2eeff6-1-1768413742875.png?width=8000&height=8000&resize=contain"
            alt="About Background"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        </div>

        {/* Marquee Header */}
        <div className="relative z-10 w-full bg-brand-dark py-2 md:py-3 overflow-hidden whitespace-nowrap shadow-lg flex-shrink-0 mt-14 md:mt-24">
          <div className="inline-block animate-marquee-slow">
            {Array(20).fill("IEDC SUMMIT '26  •  TRANSFORMING IDEAS  •  ").map((text, i) => (
              <span key={i} className="text-white/30 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mx-4">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-24 pb-4 md:pb-0 min-h-0">
          <div className="w-full max-w-7xl mx-auto rounded-[2rem] md:rounded-[3.5rem] border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.05)] bg-white/70 backdrop-blur-xl flex flex-col md:flex-row overflow-hidden transition-all duration-700 max-h-full">

            {/* Left Content Column */}
            <div className="flex-1 p-6 md:p-16 flex flex-col justify-center relative shrink-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-dark mb-4 md:mb-10 italic tracking-tighter"
              >
                About
              </motion.h2>

              <div className="flex gap-6 md:gap-8 h-full min-h-[120px] md:min-h-[200px]">
                {/* Visual Progress Bar */}
                <div className="w-1 md:w-1.5 bg-brand/10 rounded-full h-auto relative overflow-hidden shrink-0">
                  <motion.div
                    animate={{ top: `${activeTab * 33.3}%`, height: '33.3%' }}
                    className="absolute w-full bg-brand rounded-full transition-all duration-500 ease-in-out"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 relative">
                  {/* Ghost element to reserve height based on the longest paragraph */}
                  <div className="invisible pointer-events-none select-none" aria-hidden="true">
                    <p className="text-sm md:text-lg lg:text-xl italic font-medium leading-relaxed text-justify">
                      The summit provides a structured platform combining networking, mentoring, technology enablement, and investment access, enabling participants to validate ideas, build scalable products, and connect with industry experts, investors, and the broader startup ecosystem.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute top-0 left-0 w-full h-full"
                    >
                      <p className="text-brand-dark/80 text-sm md:text-lg lg:text-xl italic font-medium leading-relaxed text-justify">
                        {content[activeTab].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="bg-brand/5 p-6 md:p-14 grid grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-8 content-center md:border-l border-brand/10 md:w-[45%] lg:w-[40%] transition-colors duration-500 overflow-y-auto">
              {stats.map((stat, i) => {
                const isHighlighted = content[activeTab].highlightStats.includes(stat.label);
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: isHighlighted ? 1 : 0.3, scale: isHighlighted ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                  >
                    <p className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter whitespace-nowrap transition-colors duration-500 ${isHighlighted ? 'text-brand-dark' : 'text-brand-dark/50'}`}>
                      <Counter value={stat.value} isActive={isHighlighted} />
                    </p>
                    <p className={`text-[9px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 ${isHighlighted ? 'text-brand' : 'text-brand-dark/40'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-slow { animation: marquee 80s linear infinite; }
      `}</style>
    </section>
  );
}

function Counter({ value, isActive }: { value: string; isActive: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  // Extract number and suffix (any non-numeric characters after the number)
  // e.g., "100k+" -> num: 100, suffix: "k+"
  // e.g., "557" -> num: 557, suffix: ""
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numericValue = match ? parseFloat(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : value;
  const prefix = ""; // Determine prefix if needed, but for now assuming suffix based on examples

  useEffect(() => {
    if (isActive) {
      const controls = animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v: number) => {
          if (ref.current) {
            // Simplify floor and locale string
            ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    } else {
      // When not active, show the full static value (dimmed state)
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
