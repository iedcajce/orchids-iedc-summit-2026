"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FeaturedEvents() {
  const events = [
    {
      title: "Idea Pitch",
      image: "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa99?q=80&w=800&auto=format&fit=crop",
      desc: "Pitch your revolutionary ideas to top-tier investors.",
      badge: "EXPANDED",
    },
    {
      title: "Workshops",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      desc: "Hands-on sessions with industry leaders.",
      badge: "NEW",
    },
    {
      title: "Tech Expo",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      desc: "Explore the latest innovations from emerging startups.",
      badge: "EXPANDED",
    },
    {
      title: "Night Meet",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
      desc: "Build connections that last a lifetime.",
      badge: "NEW",
    },
  ];

  return (
    <section id="events" className="py-12 px-6 md:px-12 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
        >
          <div>
            <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">Innovation Hub</span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
              NEW & <span className="text-brand">EXPANDED</span> <br />
              <span className="text-brand-dark/20">FOR 2026</span>
            </h2>
          </div>
          <Button variant="outline" className="border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest px-8 transition-all">
            View Schedule
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-[2rem] aspect-[10/12] cursor-pointer bg-[#f8faf9] border border-black/5"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-sm ${
                  event.badge === 'NEW' ? 'bg-brand text-white' : 'bg-brand-dark text-white'
                }`}>
                  {event.badge}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
                    {event.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
                <p className="text-white/70 text-[10px] font-medium leading-tight opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Speakers() {
  const speakers = [
    {
      name: "NIVIN PAULY",
      role: "ACTOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "FAHAD FAZIL",
      role: "ACTOR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "DULQUER SALMAAN",
      role: "ACTOR",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "TOVINO THOMAS",
      role: "ACTOR",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "NAZRIYA NAZIM",
      role: "ACTRESS",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "PRITHVIRAJ",
      role: "ACTOR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "PARVATHY",
      role: "ACTRESS",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "MANJU WARRIER",
      role: "ACTRESS",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
    }
  ];

  return (
    <section id="speakers" className="py-24 px-6 md:px-12 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-16 text-center italic tracking-tight uppercase">
            SPEAKERS
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {speakers.map((speaker, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: (i % 4) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-black/5"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-black text-xl tracking-tighter uppercase leading-none mb-1">{speaker.name}</p>
                <p className="text-brand text-[10px] font-bold tracking-[0.2em]">{speaker.role}</p>
              </div>
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-brand-dark font-bold text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                  {speaker.name.split(' ')[0]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button className="bg-brand hover:bg-brand-dark text-black hover:text-white rounded-full px-12 py-6 h-auto uppercase text-xs font-bold tracking-widest shadow-lg border-none transition-all">
            View All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
