"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo-1.png";

export function Location() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#d1e9e0] rounded-[3.5rem] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center border border-brand/20 shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern with reduced opacity */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
            style={{ backgroundImage: "url('/topography-pattern.png')", backgroundSize: "cover" }}
          />

          <div className="absolute top-10 left-10 w-20 h-20 bg-brand/5 rounded-full blur-3xl" />

          <div className="flex-1 space-y-12 relative z-10">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black text-brand italic tracking-tighter uppercase"
            >
              LOCATION
            </motion.h2>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-[10px] uppercase font-black text-brand/40 tracking-[0.3em] mb-3">Venue</p>
                <p className="text-2xl font-black text-brand-dark leading-tight" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                  Amal Jyothi College of Engineering Autonomous,<br />Kanjirappally
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[10px] uppercase font-black text-brand/40 tracking-[0.3em] mb-3">Event Date</p>
                <p className="text-2xl font-black text-brand-dark" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                  07th March 2026
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://maps.app.goo.gl/sEDfSLhWoJCtdLqu5" } }, "*")}
                className="bg-[#4A7C59] hover:bg-[#386144] text-white rounded-full px-10 py-6 h-auto font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Get Directions
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block flex-1 relative aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15739.204109742124!2d76.8144186!3d9.5260093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063626ed32c771%3A0xff305e1affdbb4b4!2sAmal%20Jyothi%20College%20of%20Engineering%20Autonomous!5e0!3m2!1sen!2sin!4v1768413063598!5m2!1sen!2sin"
              className="w-full h-full grayscale brightness-90 contrast-125 sepia saturate-[2] hue-rotate-[90deg] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-brand/20 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-6 h-6 bg-brand rounded-full animate-ping opacity-40" />
              <div className="w-4 h-4 bg-brand rounded-full absolute shadow-[0_0_20px_rgba(67,145,98,0.8)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function PreviousSummits() {
  const summits = [
    { year: "2024", image: "/images/summit_2024.jpg" },
    { year: "2023", image: "/images/summit_2023.jpg" },
    { year: "2022", image: "/images/summit_2022.jpg" },
  ];

  /* Carousel State */
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInfoIndex((prev) => (prev + 1) % summits.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [summits.length]);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-black text-brand-dark mb-16 italic tracking-tighter uppercase"
        >
          PREVIOUS SUMMITS
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 w-full">
            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {summits.map((summit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <Image
                    src={summit.image}
                    alt={`Summit ${summit.year}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center mb-4"
                    >
                      <Play className="w-6 h-6 text-white fill-white" />
                    </motion.div>
                    <p className="text-white font-black text-2xl tracking-tighter uppercase">{summit.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Vertical Carousel View */}
            <div className="md:hidden relative h-[250px] w-full overflow-hidden rounded-[2rem]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentInfoIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full bg-zinc-100 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg"
                >
                  <Image
                    src={summits[currentInfoIndex].image}
                    alt={`Summit ${summits[currentInfoIndex].year}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center mb-4">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <p className="text-white font-black text-2xl tracking-tighter uppercase">{summits[currentInfoIndex].year}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {summits.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentInfoIndex ? "bg-white w-6" : "bg-white/40"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ x: 10 }}
            className="cursor-pointer"
          >
            <Button size="icon" className="rounded-full bg-[#4A7C59] hover:bg-[#386144] w-16 h-16 shrink-0 shadow-xl transition-all hover:scale-105 active:scale-95">
              <ArrowRight className="w-8 h-8" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_background.webp"
          alt="Footer Background"
          fill
          className="object-cover brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Brand Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[2.5rem] p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          {/* Decorative Background Text */}
          <div className="absolute -bottom-4 -left-4 text-white/[0.02] text-[10rem] font-black italic select-none pointer-events-none">
            '26
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="w-14 h-14 bg-white rounded-[1rem] flex items-center justify-center p-2 shadow-xl transition-all duration-500 overflow-hidden"
            >
              <Image src={logo} alt="IEDC Logo" className="w-full h-full object-contain" />
            </motion.div>
            <div className="text-center md:text-left">
              <p className="font-black text-2xl md:text-4xl text-white uppercase tracking-tighter leading-tight mb-2 italic">
                IEDC Startup <span className="text-brand">Summit '26</span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <p className="text-[7px] md:text-[9px] uppercase font-black tracking-[0.25em] text-white/30">Kerala's Largest Innovation Hub</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 relative z-10">
            <div className="text-center md:text-right">
              <p className="text-[7px] uppercase font-black text-white/30 tracking-[0.4em] mb-1">Inquiries</p>
              <a href="mailto:iedcsummit@ajce.ac.in" className="text-lg md:text-xl font-black text-white hover:text-brand transition-all duration-300">
                iedcsummit@ajce.ac.in
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/50 hover:text-white font-black uppercase tracking-widest text-[7px] transition-all backdrop-blur-sm"
            >
              Jump to Top ↑
            </motion.button>
          </div>
        </motion.div>

        {/* Organization Social Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-8 border-b border-white/5">
          <SocialHubCard
            label="Government Partner"
            name="KSUM"
            desc="Kerala Startup Mission"
            linkedin="https://www.linkedin.com/company/kerala-startup-mission"
            instagram="https://www.instagram.com/keralastartupmission/"
          />
          <SocialHubCard
            label="Ecosystem Partner"
            name="IEDC Kerala"
            desc="Innovation & Entrepreneurship"
            linkedin="https://www.linkedin.com/company/iedckerala/"
            instagram="https://www.instagram.com/iedckerala/"
          />
          <SocialHubCard
            label="Host Institution"
            name="IEDC AJCE"
            desc="Amal Jyothi College"
            linkedin="https://www.linkedin.com/company/iedcajce/"
            instagram="https://www.instagram.com/iedc.iic.ajce/"
          />
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-white/20 text-[8px] font-black uppercase tracking-[0.4em]">
          <div className="flex flex-col items-center md:items-start">
            <p>© MAKERHUB IEDC AJCE. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <p className="text-brand/40">#IEDCSummit2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialHubCard({ label, name, desc, linkedin, instagram }: { label: string, name: string, desc: string, linkedin?: string, instagram?: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 flex flex-col items-center md:items-start hover:bg-white/[0.05] hover:border-brand/20 transition-all duration-500 group"
    >
      <span className="text-[7px] uppercase font-black text-brand tracking-[0.3em] mb-2">{label}</span>
      <h4 className="text-lg font-black text-white italic tracking-tight mb-0.5">{name}</h4>
      <p className="text-[9px] font-medium text-white/30 italic mb-6 uppercase tracking-wider">{desc}</p>

      <div className="flex items-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-brand/20 hover:border-brand/40 transition-all duration-500 shadow-xl"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-brand/20 hover:border-brand/40 transition-all duration-500 shadow-xl"
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
