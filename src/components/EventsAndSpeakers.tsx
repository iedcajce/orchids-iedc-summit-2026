"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function FeaturedEvents() {
  const events = [
    {
      title: "FearForge",
      image: "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa99?q=80&w=800&auto=format&fit=crop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "FearForge",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="events" className="py-32 px-6 md:px-12 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-16 text-center italic tracking-tight uppercase">
            FEATURED EVENTS
          </h2>
        </motion.div>
        
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {events.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group overflow-hidden rounded-[2.5rem] aspect-[16/10] cursor-pointer shadow-xl"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-12 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-4">{event.title}</h3>
                    <p className="text-white/80 text-lg max-w-sm line-clamp-3 leading-relaxed font-light">
                      {event.desc}
                    </p>
                  </motion.div>
                  <div className="h-[2px] w-0 group-hover:w-full bg-[#5FB47C] mt-8 transition-all duration-700" />
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
          <Button className="bg-brand hover:bg-brand-dark text-white rounded-full px-12 py-6 h-auto uppercase text-sm font-bold tracking-widest shadow-lg hover:shadow-brand/20 transition-all">
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function Speakers() {
  const speakers = Array(8).fill({
    name: "NIVIN PAULY",
    role: "ACTOR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  }).map((s, i) => i % 2 === 0 ? s : { ...s, name: "FAHAD FAZIL", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" });

  return (
    <section id="speakers" className="py-32 px-6 md:px-12 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-16 text-center italic tracking-tight uppercase">
            SPEAKERS
          </h2>
        </motion.div>
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16">
            {speakers.map((speaker, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: (i % 4) * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white font-black text-2xl tracking-tighter uppercase leading-none mb-1">{speaker.name}</p>
                  <p className="text-white/70 text-xs font-bold tracking-[0.2em]">{speaker.role}</p>
                </div>
                <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white font-bold text-xs tracking-widest uppercase bg-brand-dark/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">{speaker.name.split(' ')[0]}</p>
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
          <Button className="bg-brand hover:bg-brand-dark text-white rounded-full px-12 py-6 h-auto uppercase text-sm font-bold tracking-widest shadow-lg">
            View All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
