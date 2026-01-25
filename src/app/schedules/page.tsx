"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/FooterAndLocation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SchedulesPage() {
    const scheduleItems = [
        {
            time: "10:00 AM",
            title: "Inauguration",
            events: [
                {
                    image: "/images/event_idea_pitch.jpg", // Placeholder - reusing existing
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                },
                {
                    image: "/images/event_idea_pitch.jpg", // Placeholder
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                },
                {
                    image: "/images/event_idea_pitch.jpg", // Placeholder
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                }
            ]
        },
        {
            time: "11:00 AM",
            title: "IEDC: From Campus Cells to Venture Engines — Lessons from the Past, Roadmap for the Future",
            events: [
                {
                    image: "/images/event_idea_pitch.jpg",
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                },
                {
                    image: "/images/event_idea_pitch.jpg",
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                }
            ]
        },
        {
            time: "12:00 PM",
            title: "Rewriting Learning: The Future of EdTech from Kerala",
            events: [
                {
                    image: "/images/event_idea_pitch.jpg",
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                },
                {
                    image: "/images/event_idea_pitch.jpg",
                    name: "NIVIN PAULY",
                    role: "SPEAKER",
                    bio: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav",
                    description: "Actor, Founder Pauly Jr Pictures, Co-founder - Dhav"
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-brand/20">
            <Navbar />

            <div className="pt-24 pb-12 md:pt-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 hover:bg-brand/20 text-brand-dark rounded-full transition-colors text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black italic text-brand-dark uppercase tracking-tighter mb-8"
                        style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                    >
                        Schedule
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center items-center gap-8 md:gap-32 text-[#4A7C59] font-bold uppercase tracking-widest text-[10px] md:text-xs"
                    >
                        <div className="flex flex-col items-end text-right">
                            <span className="text-2xl md:text-3xl font-black leading-none opacity-20">01</span>
                            <span>DEC 22</span>
                        </div>
                        <div className="h-8 w-[1px] bg-[#4A7C59]/30"></div>
                        <div className="flex flex-col items-start text-left">
                            <span>AT <span className="text-brand-dark font-black">AMAL JYOTHI</span></span>
                            <span className="opacity-60">COLLEGE OF ENGINEERING</span>
                            <span className="opacity-60">KOOVAPALLY</span>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="space-y-16 md:space-y-24 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-[1px] bg-brand-dark/5 hidden md:block"></div>

                    {scheduleItems.map((slot, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 md:gap-24 relative"
                        >
                            {/* Time */}
                            <div className="md:w-[140px] shrink-0 text-left md:text-right pt-2">
                                <span className="text-2xl md:text-3xl font-light italic text-[#4A7C59] opacity-60" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                                    {slot.time}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Section Title / Event Name */}
                                <h3 className="text-xl md:text-2xl font-bold text-brand-dark italic mb-8 md:ml-2">
                                    {slot.title}
                                </h3>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {slot.events.map((event, eventIndex) => (
                                        <motion.div
                                            key={eventIndex}
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-4 shadow-sm border border-brand-dark/5 flex gap-4 items-center group hover:border-[#4A7C59]/30 hover:shadow-md transition-all"
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
                                                <Image
                                                    src={event.image}
                                                    alt={event.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-extrabold text-brand-dark uppercase text-sm md:text-base tracking-tight">{event.name}</h4>
                                                    <span className="text-[8px] bg-[#4A7C59]/10 text-[#4A7C59] px-2 py-0.5 rounded-full font-bold tracking-wider">{event.role}</span>
                                                </div>
                                                <p className="text-[10px] md:text-[11px] text-brand-dark/60 font-medium leading-tight max-w-[200px]">
                                                    {event.bio}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Divider for mobile */}
                                <div className="md:hidden w-full h-[1px] bg-brand-dark/5 mt-12"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
