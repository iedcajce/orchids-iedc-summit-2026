"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Eligibility() {
    const criteria = [
        "Students with a strong interest in entrepreneurship",
        "Students interested in developing innovative projects",
        "Students seeking funding, mentoring, and networking opportunities for startup development",
        "Student Startup founders interested to meet investors",
        "Student leaders or Executive Committee (ExeCom) members",
        "IEDC members",
        "IEDC Nodal officers"
    ];

    return (
        <section className="py-12 md:py-20 px-6 md:px-12 bg-[#F8FFF9] overflow-hidden relative min-h-screen md:min-h-0 flex flex-col justify-center">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A7C59]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A7C59]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="text-[#4A7C59] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">Who Can Attend?</span>
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-brand-dark uppercase leading-none" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                        Eligibility for <span className="text-[#4A7C59]">Participation</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-3xl mx-auto">
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.01, x: 5 }}
                            className="relative bg-white/80 hover:bg-white p-4 rounded-xl border border-[#4A7C59]/10 flex items-center gap-5 group transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#4A7C59]/30 overflow-hidden"
                        >
                            {/* Accent Bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4A7C59] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#4A7C59] to-[#365c42] text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#4A7C59]/20 group-hover:scale-110 transition-transform duration-300">
                                <Check className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
                            </div>
                            <p className="text-brand-dark/90 font-semibold text-sm md:text-base leading-snug text-left tracking-tight">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
