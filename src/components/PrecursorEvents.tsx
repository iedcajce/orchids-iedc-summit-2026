"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PrecursorEvents() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const events = [
        {
            id: 1,
            number: "01",
            title: "Cluster-Level Hackathons",
            subtitle: "District-wise Innovation",
            description: "Fostering innovation at the grassroots level. A series of intense hackathons happening across all districts to identify, nurture, and propel local talent into the spotlight.",
            date: "Various Dates",
            type: "Offline",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100",
        },
        {
            id: 2,
            number: "02",
            title: "Zone-wise FDPs",
            subtitle: "Faculty Development Programmes",
            description: "Empowering mentors to guide the next generation. Focused sessions effectively covering all 14 districts across three strategic zones.",
            type: "Offline",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
            details: [
                {
                    zone: "South Zone",
                    date: "28 Jan 2026",
                    venue: "Marian Engineering College, Tvm",
                    districts: "Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha"
                },
                {
                    zone: "Central Zone",
                    date: "13 Feb 2026",
                    venue: "Adi Shankara Institute, Kalady",
                    districts: "Kottayam, Idukki, Ernakulam, Palakkad, Thrissur"
                },
                {
                    zone: "North Zone",
                    date: "3 Mar 2026",
                    venue: "MES College of Engineering, Kuttippuram",
                    districts: "Malappuram, Kozhikode, Wayanad, Kannur, Kasaragod"
                }
            ]
        },
        {
            id: 3,
            number: "03",
            title: "Cluster-wise Meetups",
            subtitle: "Community Connect",
            description: "Virtual gatherings designed to connect innovators, share groundbreaking ideas, and build unstoppable momentum leading up to the main summit.",
            date: "Online Series",
            type: "Online",
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-100",
        },
        {
            id: 4,
            number: "04",
            title: "IEDC Execom Meetup",
            subtitle: "Leadership Summit",
            description: "An exclusive strategic session for IEDC Executive Committee members to collaborate, plan, and align vision for the upcoming year.",
            date: "Special Session",
            type: "Online",
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-100",
        }
    ];

    return (
        <section id="precursor-events" className="py-24 px-6 md:px-12 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Road to Summit</span>
                        <h2 className="text-[10vw] sm:text-[6vw] md:text-5xl lg:text-7xl font-black italic tracking-tight uppercase leading-[0.85] text-brand-dark">
                            PRECURSOR <br />
                            <span className="text-brand">EVENTS</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-2">
                    {events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => setHoveredId(event.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative border-b border-black/5 last:border-0 transition-all duration-500 cursor-pointer overflow-hidden ${hoveredId === event.id ? 'bg-background/50' : 'bg-transparent'}`}
                        >
                            <div className="relative px-4 py-8 md:px-8 md:py-12 flex flex-col md:flex-row md:items-center gap-8 z-10">
                                {/* Large Number Background */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 text-[15vw] font-black italic select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] ${event.color} leading-none -translate-x-4`}>
                                    {event.number}
                                </div>

                                {/* Main Content Row */}
                                <div className="flex-shrink-0 w-20 hidden md:block">
                                    <span className={`text-4xl font-black italic tracking-tighter ${event.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}>
                                        {event.number}
                                    </span>
                                </div>

                                <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="max-w-2xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${event.color}`}>
                                                {event.subtitle}
                                            </span>
                                            <span className="h-px w-8 bg-black/10" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                                {event.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-brand-dark group-hover:text-brand transition-colors duration-300">
                                            {event.title}
                                        </h3>

                                        <AnimatePresence>
                                            {hoveredId === event.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-brand-dark/60 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-xl">
                                                        {event.description}
                                                    </p>

                                                    {event.details && (
                                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                                            {event.details.map((detail, idx) => (
                                                                <div key={idx} className="flex flex-col gap-1 border-l-2 border-brand/20 pl-4 py-1">
                                                                    <span className="text-[10px] font-black text-brand uppercase tracking-wider">{detail.date}</span>
                                                                    <h4 className="text-sm font-black text-brand-dark uppercase tracking-tight">{detail.zone}</h4>
                                                                    <p className="text-[11px] text-brand-dark/60 font-medium leading-tight">{detail.venue}</p>
                                                                    <p className="text-[9px] text-brand-dark/40 font-bold uppercase mt-1 leading-tight tracking-tighter">{detail.districts}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex-shrink-0 flex items-center gap-4">
                                        <div className="hidden md:flex flex-col items-end">
                                            <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Status</span>
                                            <span className="text-sm font-black text-brand-dark uppercase tracking-tighter">{event.date || "Upcoming"}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className={`w-5 h-5 transition-all duration-300 ${hoveredId === event.id ? 'rotate-45 text-white' : 'text-brand'}`}
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
        </section>
    );
}
