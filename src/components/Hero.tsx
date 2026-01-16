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
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
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
                  color: "#FFFFFF",
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
                  color: "#FFFFFF",
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
                  color: "#FFFFFF",
                  fontFamily: '"Cooper Hewitt", sans-serif',
                  fontWeight: 703,
                }}
              >
                SUMMIT <span style={{
                  color: "#FFFFFF",
                  fontStyle: "italic",
                  fontWeight: 710,
                }}>2026</span>
              </motion.span>

            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info - Aligned Right */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-6 md:right-12 z-20 flex flex-col items-end text-right"
      >
        <p className="text-xl md:text-3xl font-black tracking-tight text-white drop-shadow-md leading-tight max-w-lg" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
          Amal Jyothi College of Engineering Autonomous, Kerala
        </p>
        <p className="text-sm md:text-base font-black text-white/90 drop-shadow-md mt-2">
          7th March 2026
        </p>
      </motion.div>
    </section>
  );
}
