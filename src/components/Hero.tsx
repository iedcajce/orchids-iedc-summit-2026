"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

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
              src="/images/hero-bg-final.jpg"/*hero image*/
              alt="IEDC Startup Summit Innovation"
              fill
              className="object-cover object-[left_50%_bottom_50%] scale-110"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/hero-bg-mobile.jpg"
              alt="IEDC Startup Summit Innovation"
              fill
              className="object-cover object-[50%_100%] scale-110"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </motion.div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-10 pb-8 md:pb-12">
        <div className="w-full max-w-[98%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

          {/* Left Content */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[32px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-tight font-black text-white drop-shadow-lg uppercase">
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
                  SUMMIT <span className="text-[#4ADE80] bg-white/10 backdrop-blur-sm px-3 md:px-5 py-0 md:py-2 rounded-xl ml-2 md:ml-4 inline-block">2026</span>
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 pl-1"
            >
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-base md:text-xl font-bold tracking-wide">07 MARCH 2026</span>
              </div>
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-bold uppercase leading-tight">AMAL JYOTHI COLLEGE OF ENGINEERING(AUTONOMOUS)</span>
                  <span className="text-sm md:text-base text-white/80">Kanjirappally</span>
                </div>
              </div>
            ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hrs", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 w-12 h-16 md:w-24 md:h-28 shadow-xl">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`${index}-${item.value}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="text-2xl md:text-4xl font-bold text-white tabular-nums leading-none"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] md:text-sm uppercase tracking-wider text-white/70 font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-5 flex flex-col justify-end items-end h-full pb-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-right"
            >
              <p className="text-lg md:text-2xl font-light text-white/90 leading-snug">
                Your Nomination.<br />
                Your Innovation Passport.<br />
                Your One-Year Journey.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
<<<<<<< HEAD

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-16 z-20 flex flex-col items-end text-right"
      >
        <p className="text-sm md:text-lg font-semibold tracking-wide text-white/80 leading-tight max-w-xs md:max-w-md uppercase" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Amal Jyothi College of Engineering(Autonomous)
        </p>
        <p className="text-xs md:text-sm font-medium text-white/60 mt-1 uppercase tracking-widest" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Kanjirappally • 07 March 2026
        </p>
      </motion.div>
    </section >
=======
    </section>
>>>>>>> parent of b39c9ad (Merge branch 'main' into njo)
  );
}
