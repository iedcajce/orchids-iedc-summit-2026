"use client";

import Image from "next/image";
import { motion, useScroll, AnimatePresence, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";

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
                        src="/images/about_background.png"
                        alt="About Background"
                        fill
                        className="object-cover opacity-30 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
                </div>



                {/* Main Content Area */}
                <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-24 pb-4 md:pb-0 min-h-0">
                    <div className="w-full max-w-7xl mx-auto rounded-[2rem] md:rounded-[3.5rem] border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.05)] bg-white/70 backdrop-blur-xl flex flex-col md:flex-row overflow-hidden transition-all duration-700 max-h-full">

                        {/* Left Content Column */}
                        <div className="flex-1 p-6 md:p-14 lg:p-16 flex flex-col justify-center relative shrink-0">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-4 md:mb-6"
                            >
                                <span className="text-brand font-black tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-2 block">Our Vision</span>
                                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-dark italic tracking-tighter leading-none">
                                    About
                                </h2>
                            </motion.div>

                            <div className="flex gap-6 md:gap-8 h-full min-h-[140px] md:min-h-[180px] mb-8 lg:mb-12">
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

                            {/* Integrated "Who Can Join" Section */}
                            <div className="mt-auto pt-6 border-t border-brand/5">
                                <span className="text-brand font-black tracking-[0.4em] text-[8px] uppercase mb-4 block">Who Can Join?</span>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {[
                                        "Entrepreneurship Enthusiasts",
                                        "Innovative Project Creators",
                                        "Funding & Mentorship Seekers",
                                        "Student Startup Founders",
                                        "Executive Committee Leaders",
                                        "IEDC Members & Supporters",
                                        "Nodal Officers & Enablers"
                                    ].map((tag, i) => (
                                        <motion.div
                                            key={tag}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="flex items-center gap-2 group cursor-default"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-brand/30 group-hover:bg-brand transition-all duration-300" />
                                            <span className="text-[9px] md:text-[10px] font-black italic uppercase tracking-[0.1em] text-brand-dark/40 group-hover:text-brand-dark transition-colors duration-300">
                                                {tag}
                                            </span>
                                        </motion.div>
                                    ))}
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
