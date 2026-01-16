"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

export function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("March 7, 2026 09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const addToCalendar = () => {
        const title = encodeURIComponent("IEDC Summit 2026");
        const details = encodeURIComponent("Join us for the innovation journey");
        const location = encodeURIComponent("Amal Jyothi College of Engineering, Koovappally, Kerala");
        const startDate = "20260307T033000Z"; // 09:00 IST (UTC+5:30)
        const endDate = "20260307T123000Z"; // 18:00 IST (approx 9 hours)

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
        window.open(url, '_blank');
    };

    return (
        <section className="relative z-30 px-6 py-12 bg-white">
            <div className="max-w-5xl mx-auto relative pt-8">
                {/* Spiral Binder Rings */}
                <div className="absolute top-4 left-0 right-0 flex justify-evenly z-20 px-4 md:px-20 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="w-4 h-12 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 rounded-full shadow-lg border border-gray-400"
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-xl overflow-hidden group"
                >
                    {/* Calendar Top Strip */}
                    {/* Calendar Top Strip */}
                    <div className="h-16 bg-[#4A7C59] border-b border-[#3d664a] flex items-center justify-center relative">
                        <div className="w-full h-[1px] bg-white/20 mt-8"></div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={addToCalendar}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors shadow-lg z-20"
                            title="Set Reminder"
                        >
                            <Bell className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.button>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-gradient-to-b from-white/50 to-transparent">
                        <div className="text-center md:text-left relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black italic mb-1 tracking-tighter uppercase text-[#2d4f38] leading-none" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>Countdown to Summit</h2>
                            <p className="text-[#4A7C59] text-base font-medium">Join us for the innovation journey</p>
                        </div>

                        <div className="flex gap-3 md:gap-6">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hrs", value: timeLeft.hours },
                                { label: "Min", value: timeLeft.minutes },
                                { label: "Sec", value: timeLeft.seconds }
                            ].map((item, index) => {
                                const digits = String(item.value).padStart(2, '0').split('');
                                return (
                                    <div key={index} className="flex flex-col items-center bg-white border border-[#4A7C59]/10 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm relative group overflow-hidden">
                                        <div className="absolute top-0 inset-x-0 h-1 bg-[#4A7C59] opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="flex justify-center gap-0.5 mb-1">
                                            {digits.map((digit, i) => (
                                                <div key={i} className="relative h-8 md:h-10 w-4 md:w-6 overflow-hidden">
                                                    <AnimatePresence mode="popLayout">
                                                        <motion.span
                                                            key={`${index}-${i}-${digit}`}
                                                            initial={{ y: -50, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            exit={{ y: 50, opacity: 0 }}
                                                            transition={{ duration: 0.5, ease: "backOut" }}
                                                            className="text-3xl md:text-4xl font-black italic font-heading text-[#2d4f38] leading-none absolute inset-0 flex justify-center"
                                                            style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                                                        >
                                                            {digit}
                                                        </motion.span>
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>

                                        <span className="text-[10px] uppercase tracking-widest text-[#4A7C59]/70 font-semibold">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center md:text-right hidden md:block">
                            <p className="font-black italic text-xl text-[#2d4f38] uppercase tracking-tighter" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>March 7, 2026</p>
                            <p className="text-[#4A7C59] text-sm">Amal Jyothi College, Kerala</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
