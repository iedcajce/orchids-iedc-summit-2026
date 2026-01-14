"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#d1e9e0] rounded-[3.5rem] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center border border-brand/20 shadow-2xl relative"
        >
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
                    className="bg-brand hover:bg-brand-dark text-white rounded-full px-10 py-6 h-auto font-bold uppercase tracking-widest text-xs shadow-lg"
                  >
                    Get Directions
                  </Button>
                </motion.div>
              </div>

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 relative aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl group"
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
    { year: "2024", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" },
    { year: "2023", image: "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa99?q=80&w=800" },
    { year: "2022", image: "https://images.unsplash.com/photo-1505373633513-333182859942?q=80&w=800" },
  ];

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
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
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
          <motion.div
            whileHover={{ x: 10 }}
            className="cursor-pointer"
          >
            <Button size="icon" className="rounded-full bg-brand hover:bg-brand-dark w-16 h-16 shrink-0 shadow-xl">
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
    <footer className="relative pt-40 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1f736307cd4ccb4b2032fb2b866ba61c6fde5cc7-resized-1768279000064.webp?width=2000&height=800&resize=contain"
          alt="Footer Background"
          fill
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-6">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center text-brand font-black text-4xl shadow-2xl shadow-brand/20"
            >
              S
            </motion.div>
            <div className="text-white">
              <p className="font-black text-3xl uppercase tracking-tighter leading-none mb-1">IEDC Summit</p>
              <p className="text-xs uppercase font-black tracking-[0.3em] text-brand opacity-80">Kerala Startup Mission</p>
            </div>
          </div>

          <div className="text-center md:text-right text-white space-y-2">
            <p className="text-[10px] uppercase font-black text-white/40 tracking-[0.4em]">For details mail to</p>
            <p className="text-2xl font-black hover:text-brand transition-colors cursor-pointer">iedcsummit@ajce.ac.in</p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
          <p>© 2026 KERALA STARTUP MISSION. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <motion.div whileHover={{ y: -5, color: "#fff" }}><Instagram className="w-6 h-6 cursor-pointer transition-all" /></motion.div>
            <motion.div whileHover={{ y: -5, color: "#fff" }}><Twitter className="w-6 h-6 cursor-pointer transition-all" /></motion.div>
            <motion.div whileHover={{ y: -5, color: "#fff" }}><Linkedin className="w-6 h-6 cursor-pointer transition-all" /></motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
