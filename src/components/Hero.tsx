"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

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
  }, [targetDate]);

  return timeLeft;
}

export function Hero() {
  const timeLeft = useCountdown("March 7, 2026 09:00:00");

  return (
    <section className="relative flex-1 flex flex-col bg-white overflow-hidden min-h-0">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/boy_and_planes.jpeg"/*hero image*/
              alt="IEDC Startup Summit Innovation"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/hero_mob.jpg"
              alt="IEDC Startup Summit Innovation"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </motion.div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-28">
        <div className="max-w-5xl">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[36px] md:text-[64px] lg:text-[80px] leading-[1.1] tracking-tight flex flex-col items-start font-bold text-white drop-shadow-lg">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                IEDC STARTUP
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                SUMMIT <span className="text-brand">2026</span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 md:mt-10 flex items-center gap-3 md:gap-4"
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative h-10 md:h-14 w-10 md:w-14 overflow-hidden bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={`${index}-${item.value}`}
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "backOut" }}
                        className="text-2xl md:text-3xl font-black text-white absolute inset-0 flex items-center justify-center tabular-nums"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-[9px] md:text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1.5">{item.label}</span>
                </div>
                {index < 3 && <span className="text-white/30 text-xl md:text-2xl font-light mb-5">:</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-16 z-20 flex flex-col items-end text-right"
      >
        <p className="text-[10px] md:text-xs font-bold text-brand uppercase tracking-widest mb-2">
          Powered By
        </p>
        <div className="relative w-32 md:w-40 h-10 md:h-12 mb-4">
          <Image
            src="/images/powredby/ksum.svg"
            alt="KSUM Logo"
            fill
            className="object-contain object-right brightness-0 invert"
          />
        </div>
        <p className="text-sm md:text-lg font-semibold tracking-wide text-white/80 leading-tight max-w-xs md:max-w-md uppercase" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Amal Jyothi College of Engineering
        </p>
        <p className="text-xs md:text-sm font-medium text-white/60 mt-1 uppercase tracking-widest" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Kerala • 07 March 2026
        </p>
      </motion.div>
    </section>
  );
}
