"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ticket, Zap, ArrowRight, ShieldCheck, Star } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export function Tickets() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="tickets" className="py-24 px-6 md:px-12 bg-[#F8FFF9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-[#DDF7E8] text-[#4A7C59] px-4 py-1.5 rounded-full text-sm font-bold mb-4"
          >
            <Star className="w-4 h-4 fill-current" />
            LIMITED SLOTS AVAILABLE
          </motion.div>
          <h2
            className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none text-brand-dark mb-4"
            style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
          >
            Grab Your <span className="text-brand">Access</span>
          </h2>
          <p className="text-[#4A7C59]/70 text-lg md:text-xl max-w-2xl">
            Join the most innovative startup summit of 2025. Secure your spot now with our exclusive early bird offer.
          </p>
        </div>

        <div className="flex justify-center perspective-1000">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[950px] h-auto md:h-[520px] cursor-grab active:cursor-grabbing group"
          >
            {/* Ticket Shadow */}
            <div className="absolute inset-4 bg-black/10 blur-3xl rounded-[40px] transition-all md:group-hover:bg-black/20" />

            {/* Physical Ticket Body */}
            <div className="relative md:absolute md:inset-0 bg-white border border-[#E0E7E1] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Left Section (Main) */}
              <div className="flex-1 p-5 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-[#E0E7E1]">
                <div>
                  {/* Header: Logo & Zap */}
                  <div className="flex justify-between items-center mb-2 md:mb-4">
                    <div className="w-[100px] md:w-[130px]">
                      <Image
                        src={Logo}
                        alt="IEDC Startup Summit Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="bg-[#4A7C59] text-white p-3 md:p-4 rounded-2xl shadow-lg shadow-[#4A7C59]/20 hidden sm:block">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                    </div>
                  </div>

                  {/* Centered Content */}
                  <div className="flex flex-col items-start text-left w-full pl-2">
                    <div className="mb-6 md:mb-6">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#4A7C59]/50 uppercase mb-2 block">OFFICIAL ADMIT</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-[#2D4A35]" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>IEDC STARTUP SUMMIT</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-x-16 mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-[#4A7C59]/40 uppercase block mb-1">DATE</span>
                        <p className="text-base md:text-lg font-bold text-[#2D4A35]">07 MAR 2026</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#4A7C59]/40 uppercase block mb-1">TIME</span>
                        <p className="text-base md:text-lg font-bold text-[#2D4A35]">09:00 AM IST</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-bold text-[#4A7C59]/40 uppercase block mb-1">LOCATION</span>
                        <p className="text-lg md:text-xl font-black text-[#2D4A35] uppercase tracking-tight leading-none">Amal Jyothi College, Kerala</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 justify-start mt-auto w-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F0F7F1] flex items-center justify-center border border-[#4A7C59]/10 shrink-0">
                        <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#4A7C59]" />
                      </div>
                      <p className="text-left text-xs text-[#4A7C59]/60 font-medium leading-relaxed">
                        This ticket grants full access to all <br className="hidden md:block" /> sessions and networking areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section (Stub) */}
              <div className="w-full md:w-[320px] bg-[#F7FCF8] p-6 md:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="w-full z-10">
                  <span className="inline-block bg-[#E8F3ED] text-[#4A7C59] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6">
                    EARLY BIRD
                  </span>
                  <div className="mb-6 relative h-20 flex flex-col items-center justify-center">
                    <div className="relative inline-block">
                      <span className="text-[#4A7C59]/40 text-xl block relative font-bold">
                        ₹899
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                          className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-400 origin-left"
                        />
                      </span>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3, duration: 0.4 }}
                      className="text-5xl font-black text-[#2D4A35]"
                      style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                    >
                      ₹749
                    </motion.span>
                  </div>
                </div>

                <div className="w-full space-y-6 z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-[#4A7C59] hover:bg-[#3D6649] text-white rounded-2xl py-7 h-auto text-base font-bold shadow-xl shadow-[#4A7C59]/20 transition-all">
                      Get Your Ticket
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>

                  <div className="space-y-3">
                    {/* Barcode Mock */}
                    <div className="flex justify-center gap-0.5 h-10 w-full overflow-hidden opacity-30">
                      {[...Array(25)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-[#2D4A35] h-full"
                          style={{ width: `${Math.random() * 5 + 1}px` }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#4A7C59]/30 tracking-[0.3em] block font-bold">#ISS2026-EB001</span>
                  </div>
                </div>
              </div>

              {/* Decorative Perforation (Visual Only) */}
              <div className="absolute left-[calc(100%-320px)] top-0 bottom-0 hidden md:flex flex-col justify-around pointer-events-none z-20">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#F8FFF9] -ml-[5px] border border-[#E0E7E1]/30" />
                ))}
              </div>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-black/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[#4A7C59]/60 text-sm">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            24 people are looking at this right now
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
