"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
  return (
    <section className="relative flex-1 flex flex-col bg-white overflow-hidden min-h-0">
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
                }}>2026</span>
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
        className="relative z-20 px-6 md:px-12 pb-10 flex justify-end"
      >
        <div className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden md:block"
            >
              <div className="text-[#1a2e23] font-light text-2xl leading-tight max-w-[200px]">
                <TextReveal>
                  Where ideas take <br />
                </TextReveal>
                <TextReveal delay={0.2}>
                  <span className="font-medium italic text-[#2d6644]">root and grow</span>
                </TextReveal>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="text-center md:text-right text-[#1a2e23] flex flex-col items-center md:items-end">
              <TextReveal delay={0.4}>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-60 mb-2 text-[#2d6644]">Venue & Time</p>
              </TextReveal>
              <TextReveal delay={0.5}>
                <p className="text-xl font-bold tracking-tight text-[#1a2e23]">Amal Jyothi College, Kerala</p>
              </TextReveal>
              <TextReveal delay={0.6}>
                <p className="text-[10px] font-medium opacity-80 mt-1 text-[#2d6644]">7th March 2026 • 09:00 AM Onwards</p>
              </TextReveal>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
