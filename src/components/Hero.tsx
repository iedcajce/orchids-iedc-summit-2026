"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
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

    return (
      <section className="relative flex-1 flex flex-col bg-white overflow-hidden">
          {/* Background with split slant */}
          <div className="absolute inset-0 z-0 flex">
              {/* Left white part - angled overlay */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-y-0 left-0 w-full bg-white z-10 hidden md:block"
                style={{ 
                  clipPath: "polygon(0 0, 45% 0, 15% 100%, 0 100%)",
                }}
              />
              
              {/* Right image part */}
              <div className="absolute inset-0 w-full h-full z-0">
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ed3e4ef3-254e-4a25-9f8f-ed422d28efcf/99a4454c5dbd52c982eb12ae1946b62f358fa562-resized-1768301717096.webp?width=8000&height=8000&resize=contain"
                      alt="IEDC Startup Summit Innovation"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-white/10" />
                  </motion.div>
              </div>

            {/* Mobile white background overlay */}
            <div className="absolute inset-0 bg-white/70 md:hidden z-10 backdrop-blur-[2px]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                  <h1 className="text-[48px] md:text-[96px] leading-[1] tracking-tight flex flex-col items-start">
    
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="block whitespace-nowrap"
                        style={{
                          color: "#4EBFB0",
                          fontFamily: '"Cooper Hewitt", sans-serif',
                          fontWeight: 703,
                        }}
                      >
                        IEDC
                      </motion.span>

                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="block whitespace-nowrap"
                        style={{
                          color: "#4EBFB0",
                          fontFamily: '"Cooper Hewitt", sans-serif',
                          fontWeight: 703,
                        }}
                      >
                        STARTUP
                      </motion.span>

                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="block whitespace-nowrap"
                        style={{
                          color: "#4EBFB0",
                          fontFamily: '"Cooper Hewitt", sans-serif',
                          fontWeight: 703,
                        }}
                      >
                        SUMMIT <span style={{
                          color: "#82D38B",
                          fontStyle: "italic",
                          fontWeight: 710,
                        }}>2025</span>
                      </motion.span>

                  </h1>
              </motion.div>
            </div>
          </div>

        {/* Bottom Info Bar - Floating Glassmorphism */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 px-6 md:px-12 pb-10"
        >
          <div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] px-10 py-8 grid grid-cols-1 md:grid-cols-3 items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden lg:block"
              >
                <p className="text-[#4A7C59]/80 font-light text-xl leading-tight max-w-[180px]">
                  Where ideas take <br /><span className="font-medium italic text-[#4A7C59]">root and grow</span>
                </p>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full border border-[#4A7C59]/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all group"
              >
                <ChevronDown className="w-5 h-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center text-[#4A7C59]">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40 mb-2">Countdown to Summit</p>
              <div className="flex gap-4 md:gap-8 font-bold tracking-tight">
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl">{timeLeft.days}</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-60">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl">{timeLeft.hours}</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-60">Hrs</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl">{timeLeft.minutes}</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-60">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl">{timeLeft.seconds}</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-60">Sec</span>
                </div>
              </div>
              <p className="text-[10px] font-bold opacity-60 mt-2 tracking-wider">MARCH 7, 2026 • AMAL JYOTHI COLLEGE</p>
            </div>

            <div className="flex justify-center md:justify-end">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-[#4A7C59] hover:bg-[#3D6649] text-white rounded-3xl px-10 py-7 h-auto text-lg font-bold shadow-[0_10px_20px_rgba(74,124,89,0.3)] transition-all">
                  Register Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
