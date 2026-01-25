"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
            className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-start items-start group cursor-pointer transition-all duration-500 border border-brand/5 shadow-sm hover:shadow-2xl hover:border-brand/20 ${className}`}
        >
            {/* Dynamic Background Noise/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(95, 180, 124, 0.15), transparent 40%)`,
                }}
            />

            <div className="relative z-10 w-full flex flex-col items-start h-full">
                <span className={`text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-full uppercase mb-6 ${className.includes('bg-brand-dark') ? 'bg-white/10 text-white/80' : 'bg-brand/10 text-brand'}`}>
                    {tag}
                </span>

                <div className="flex-1 flex flex-col justify-start w-full">
                    <h3 className={`font-black mb-3 italic tracking-tighter leading-[0.85] uppercase transition-all duration-500 group-hover:translate-x-1 
            ${className.includes('md:row-span-2') ? 'text-4xl md:text-6xl lg:text-7xl' :
                            className.includes('md:col-span-2') ? 'text-3xl md:text-5xl lg:text-5xl' : 'text-xl md:text-2xl lg:text-3xl'} 
            ${className.includes('bg-brand-dark') ? 'text-white' : 'text-brand-dark'}`} style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                        {title}
                    </h3>
                    <p className={`leading-relaxed italic font-medium transition-all duration-500 
            ${className.includes('md:row-span-2') ? 'text-base md:text-lg lg:text-xl max-w-sm' : 'text-xs md:text-sm lg:text-base max-w-md'}
            ${className.includes('bg-brand-dark') ? 'text-white/60 group-hover:text-white/90' : 'text-brand-dark/60 group-hover:text-brand-dark/90'}`}>
                        {description}
                    </p>
                </div>

                {/* Action Button on Hover */}
                <div className="mt-6 overflow-hidden">
                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className={className.includes('bg-brand-dark') ? 'text-brand' : 'text-[#4A7C59]'}>DISCOVER MORE</span>
                        <div className={`p-1 rounded-full ${className.includes('bg-brand-dark') ? 'bg-brand text-brand-dark' : 'bg-brand-dark text-white'}`}>
                            <ArrowUpRight size={12} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Identifier Letter */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 group-hover:scale-110 pointer-events-none select-none">
                <div className={`font-black italic tracking-tighter leading-none 
          ${className.includes('md:col-span-2') ? 'text-[20rem] md:text-[30rem]' : 'text-[12rem] md:text-[18rem]'}`}>
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
            description: "Identify strengths, understand markets, and build a clear idea-to-market pathway.",
            className: "md:col-span-1 bg-brand-dark text-white",
            tag: "BUSINESS",
        },
        {
            title: "Mentoring",
            description: "Connect with industry experts. Exclusive one-to-one mentoring for selected teams.",
            className: "md:col-span-1 bg-white",
            tag: "MENTORSHIP",
        },
        {
            title: "Investment",
            description: "Master fundraising strategies, pitch to investors, and explore government grants.",
            className: "md:col-span-1 bg-brand/5",
            tag: "INVESTMENT",
        },
        {
            title: "Technology",
            description: "Optimize tech for market-ready products through workshops and technical guidance.",
            className: "md:col-span-1 bg-white",
            tag: "TECHNOLOGY",
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
            id="highlights"
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
                        IEDC Startup Summit 2026 will be the largest hillside student startup summit, aimed at empowering students to transform their ideas and academic projects into market-driven, commercially viable products.
                    </p>
                </motion.div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 md:min-h-0 pb-8 h-auto md:h-full">
                    {highlights.map((item, idx) => (
                        <BentoCard key={idx} {...item} delay={idx * 0.1} className={`${item.className} min-h-[320px] md:min-h-0 h-full w-full`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
