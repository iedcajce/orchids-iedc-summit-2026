"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, QrCode, Wifi, MapPin, Calendar, CreditCard, Check } from "lucide-react";
import React from "react";
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
    <section id="tickets" className="py-24 px-6 md:px-12 bg-[#F8FFF9] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-[#DDF7E8] text-[#4A7C59] px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm border border-[#4A7C59]/10"
            >
              <Star className="w-3 h-3 fill-current" />
              Limited Delegate Passes
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] text-brand-dark mb-8"
              style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
            >
              Get Your <br />
              <span className="text-brand">Access Pass</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4A7C59]/70 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10"
            >
              Secure your spot at Kerala&apos;s most influential startup gathering.
              Official delegate status provides full access to all summits, keynote sessions, and exclusive networking arenas.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 w-full max-w-xl"
            >
              {[
                "Access to all events",
                "Exhibition stalls",
                "Food and refreshments",
                "Goodies & swag",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-[#2D4A35] font-semibold text-sm md:text-base">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  {benefit}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center gap-8 text-[#4A7C59]/40"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Verified Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Digital Pass</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Access Card */}
          <div className="flex justify-center lg:justify-end perspective-2000">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[340px] md:max-w-[420px] h-[540px] md:h-[640px] cursor-grab active:cursor-grabbing group"
            >
              {/* Holographic Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand/20 via-blue-400/10 to-purple-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Access Card Outer Frame */}
              <div className="relative h-full w-full bg-[#FCFFFD] border-[1px] border-[#E0E7E1] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(45,74,53,0.12)] flex flex-col group-hover:shadow-[0_50px_100px_-20px_rgba(45,74,53,0.2)] transition-shadow duration-500">

                {/* Lanyard Attachment Hole */}
                <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 md:w-16 h-2 md:h-3 bg-gradient-to-b from-[#E0E7E1] to-[#D1D9D2] rounded-full shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                </div>

                {/* Security Hologram Strip (Top) */}
                <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-brand/40 via-blue-400/30 to-brand/40 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

                {/* Header Content */}
                <div className="pt-8 px-8 md:px-12 pb-2 flex justify-between items-start">
                  <div className="w-[90px] md:w-[120px]">
                    <Image
                      src={Logo}
                      alt="IEDC Logo"
                      className="w-full h-auto opacity-90 contrast-125"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="p-1.5 md:p-2 bg-[#4A7C59]/5 border border-[#4A7C59]/10 rounded-lg">
                      <Wifi className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4A7C59]" />
                    </div>
                    <span className="text-[7px] md:text-[8px] font-bold text-[#4A7C59]/40 tracking-tighter uppercase">NFC Enabled</span>
                  </div>
                </div>

                {/* Main Identity Section */}
                <div className="px-8 md:px-12 py-2 flex-1 flex flex-col justify-start">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-[#4A7C59]/70 uppercase">DELEGATE ACCESS</span>
                    </div>
                    <h3 className="text-[2rem] md:text-[2.6rem] font-black text-[#2D4A35] leading-[0.9] italic uppercase tracking-tighter" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                      IEDC STARTUP <br /> <span className="text-brand">SUMMIT</span> 2026
                    </h3>
                  </div>

                  {/* Card Info Grid */}
                  <div className="grid grid-cols-2 gap-y-3 md:gap-y-5 mb-4 border-t border-b border-dashed border-[#E0E7E1] py-3 md:py-5">
                    <div className="space-y-1">
                      <span className="text-[8px] md:text-[9px] font-bold text-[#4A7C59]/50 uppercase tracking-widest block">Event Date</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand/60" />
                        <p className="text-xs md:text-sm font-bold text-[#2D4A35]">MAR 07, 2026</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] md:text-[9px] font-bold text-[#4A7C59]/50 uppercase tracking-widest block">Location</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand/60" />
                        <p className="text-xs md:text-sm font-bold text-[#2D4A35]">AJCE, KERALA</p>
                      </div>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <span className="text-[8px] md:text-[9px] font-bold text-[#4A7C59]/50 uppercase tracking-widest block">Authorization Status</span>
                      <div className="flex items-center gap-2 bg-brand/5 p-2 rounded-xl border border-brand/10">
                        <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand" />
                        <p className="text-[9px] md:text-[11px] font-bold text-[#2D4A35] uppercase tracking-tight">Full Access Granted</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive Section */}
                  <div className="mt-auto flex flex-col items-center gap-5 pb-8 md:pb-12">
                    <a
                      href="https://iedcsummit-form-aghqgu-d1c8a5-103-66-79-81.traefik.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 md:p-2.5 rounded-xl border border-[#2D4A35]/10 shadow-sm relative group/qr cursor-pointer block transition-transform hover:scale-105"
                    >
                      <div className="absolute -inset-3 bg-brand/5 rounded-2xl opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                      <Image
                        src="/images/ticket-qr.png"
                        alt="Scan to Register"
                        width={112}
                        height={112}
                        className="w-24 h-24 md:w-28 md:h-28 object-contain"
                      />
                    </a>
                    <div className="text-center space-y-1.5">
                      <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#2D4A35] font-mono">ISS2026-DP0XXX</p>
                      <span className="text-[7px] md:text-[8px] font-bold text-[#4A7C59]/40 uppercase tracking-widest block">Official Delegate ID</span>
                    </div>
                  </div>
                </div>

                {/* Design Elements */}
                <div className="absolute bottom-10 left-[-20%] w-[140%] h-[1px] bg-brand/5 -rotate-12 pointer-events-none" />
                <div className="absolute bottom-16 left-[-20%] w-[140%] h-[1px] bg-brand/5 -rotate-12 pointer-events-none" />
              </div>

              {/* Reflection Overlay */}
              <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] pointer-events-none bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Scan Line Effect */}
              <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[80px] md:h-[100px] bg-gradient-to-b from-transparent via-brand/5 to-transparent pointer-events-none z-20"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </section>
  );
}
