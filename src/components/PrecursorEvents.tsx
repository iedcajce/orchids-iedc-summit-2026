"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Video, Code, Layers, ArrowUpRight } from "lucide-react";

export function PrecursorEvents() {
    const events = [
        {
            id: 1,
            title: "Cluster-Level Hackathons",
            subtitle: "District-wise Innovation",
            description: "Fostering innovation at the grassroots level. A series of intense hackathons happening across all districts to identify, nurture, and propel local talent into the spotlight.",
            icon: <Code className="w-6 h-6" />,
            date: "Various Dates",
            type: "Offline",
            color: "blue",
            gradient: "from-blue-600/40 via-blue-600/10 to-transparent",
            border: "group-hover:border-blue-500/50",
            text: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            id: 2,
            title: "Zone-wise FDPs",
            subtitle: "Faculty Development Programmes",
            description: "Empowering mentors to guide the next generation. Focused sessions effectively covering all 14 districts across three strategic zones.",
            icon: <Layers className="w-6 h-6" />,
            type: "Offline",
            color: "emerald",
            gradient: "from-emerald-600/40 via-emerald-600/10 to-transparent",
            border: "group-hover:border-emerald-500/50",
            text: "text-emerald-500",
            bg: "bg-emerald-500/10",
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
            title: "Cluster-wise Meetups",
            subtitle: "Community Connect",
            description: "Virtual gatherings designed to connect innovators, share groundbreaking ideas, and build unstoppable momentum leading up to the main summit.",
            icon: <Users className="w-6 h-6" />,
            date: "Online Series",
            type: "Online",
            color: "amber",
            gradient: "from-amber-600/40 via-amber-600/10 to-transparent",
            border: "group-hover:border-amber-500/50",
            text: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            id: 4,
            title: "IEDC Execom Meetup",
            subtitle: "Leadership Summit",
            description: "An exclusive strategic session for IEDC Executive Committee members to collaborate, plan, and align vision for the upcoming year.",
            icon: <Video className="w-6 h-6" />,
            date: "Special Session",
            type: "Online",
            color: "purple",
            gradient: "from-purple-600/40 via-purple-600/10 to-transparent",
            border: "group-hover:border-purple-500/50",
            text: "text-purple-500",
            bg: "bg-purple-500/10",
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Road to Summit</span>
                            <h2 className="text-[10vw] sm:text-[6vw] md:text-5xl lg:text-6xl font-black italic tracking-tight uppercase leading-[0.9] text-brand-dark mb-8">
                                PRECURSOR <span className="text-brand">EVENTS</span>
                            </h2>
                            <p className="text-brand-dark/60 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                                The journey begins here. Join us in a series of transformative events paving the way to the grand summit.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative rounded-[2.5rem] bg-white border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ${event.border} ${event.id === 2 ? 'md:col-span-2' : ''}`}
                        >
                            {/* Background Gradients */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative p-8 md:p-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-2xl ${event.bg} ${event.text} flex items-center justify-center border border-black/5 z-10`}>
                                        {event.icon}
                                    </div>
                                    <div className="flex gap-3">
                                        {event.type && (
                                            <span className="px-4 py-1.5 rounded-full bg-black/5 text-brand-dark/70 text-[10px] font-black uppercase tracking-widest border border-black/5">
                                                {event.type}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4 z-10">
                                    <span className={`text-[10px] font-black tracking-[0.25em] uppercase ${event.text} mb-2 block`}>
                                        {event.subtitle}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-brand-dark mb-3">
                                        {event.title}
                                    </h3>
                                    <p className="text-brand-dark/60 text-sm font-medium leading-relaxed max-w-xl">
                                        {event.description}
                                    </p>
                                </div>

                                {/* Specific Layout for FDPs (id: 2) */}
                                {event.details ? (
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
                                        {event.details.map((detail, idx) => (
                                            <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-black/5 hover:border-brand/20 transition-colors">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar className="w-4 h-4 text-brand" />
                                                    <span className="text-xs font-black uppercase text-brand-dark">{detail.date}</span>
                                                </div>
                                                <h4 className="text-base font-bold text-brand-dark mb-1">{detail.zone}</h4>
                                                <p className="text-xs text-brand-dark/70 font-medium mb-3">{detail.venue}</p>
                                                <div className="flex items-start gap-1.5 opacity-60">
                                                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                    <p className="text-[10px] leading-tight">{detail.districts}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="mt-auto pt-6 flex items-center gap-2 text-brand-dark/40 font-medium text-xs z-10">
                                        {event.date && (
                                            <>
                                                <Calendar className="w-4 h-4" />
                                                <span>{event.date}</span>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
