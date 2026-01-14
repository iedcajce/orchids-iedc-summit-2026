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
      title: "TechXplore",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "DesignFlow",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4A7C59]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="text-[#4A7C59] font-black tracking-[0.4em] text-sm uppercase mb-4 block">Experience Innovation</span>
          <h2 
            className="text-5xl md:text-6xl font-bold text-[#2D4A35] tracking-tight italic uppercase"
            style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
          >
            Featured Events
          </h2>
          <div className="h-1.5 w-24 bg-[#4A7C59] mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A35] via-[#2D4A35]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-[2px] bg-[#82D38B]" />
                    <span className="text-[#82D38B] text-[10px] font-black tracking-[0.3em] uppercase">Competition</span>
                  </div>
                  
                  <h3 
                    className="text-3xl font-bold text-white uppercase tracking-tight mb-3"
                    style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                  >
                    {event.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm max-w-xs line-clamp-2 leading-relaxed mb-6 font-medium">
                    {event.desc}
                  </p>
                  
                  <div className="flex items-center gap-4 group/btn">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/btn:bg-[#82D38B] group-hover/btn:border-[#82D38B] transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="text-white text-[10px] font-black tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Register Now</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button className="bg-transparent hover:bg-[#4A7C59] text-[#4A7C59] hover:text-white border-2 border-[#4A7C59] rounded-full px-12 py-7 h-auto uppercase text-sm font-black tracking-[0.2em] transition-all duration-300">
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function Speakers() {
  const speakers = [
    {
      name: "NIVIN PAULY",
      role: "ACTOR & PRODUCER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      company: "Pauly Jr. Pictures"
    },
    {
      name: "FAHAD FAZIL",
      role: "ACTOR & FILMMAKER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      company: "Fahadh Faasil and Friends"
    },
    {
      name: "TOVINO THOMAS",
      role: "ACTOR & PHILANTHROPIST",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
      company: "Innovation Hub"
    },
    {
      name: "PARVATHY THIRUVOTHU",
      role: "ACTOR & DIRECTOR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      company: "Creative Collective"
    }
  ];

  return (
    <section id="speakers" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7C59]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#82D38B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <span className="text-[#4A7C59] font-black tracking-[0.4em] text-sm uppercase mb-4 block">Meet Our Visionaries</span>
          <h2 
            className="text-5xl md:text-7xl font-bold text-[#2D4A35] tracking-tight italic uppercase"
            style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
          >
            SPEAKERS
          </h2>
          <div className="h-1.5 w-24 bg-[#4A7C59] mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F7FCF8] border border-[#E0E7E1] transition-all duration-500 group-hover:shadow-[0_30px_60px_-12px_rgba(74,124,89,0.25)] group-hover:-translate-y-2">
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#2D4A35] via-[#2D4A35]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <p className="text-[#82D38B] text-[10px] font-black tracking-[0.2em] uppercase mb-2">{speaker.role}</p>
                    <h3 
                      className="text-2xl font-bold text-white tracking-tight uppercase mb-1"
                      style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                    >
                      {speaker.name}
                    </h3>
                    <p className="text-white/60 text-xs font-medium">{speaker.company}</p>
                  </motion.div>
                  
                  {/* Hover Social/CTA Bar */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                    <button className="text-white hover:text-[#82D38B] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase">View Profile</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#4A7C59]/10 rounded-full blur-2xl -z-10 group-hover:bg-[#4A7C59]/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Button className="bg-transparent hover:bg-[#4A7C59] text-[#4A7C59] hover:text-white border-2 border-[#4A7C59] rounded-full px-12 py-7 h-auto uppercase text-sm font-black tracking-[0.2em] transition-all duration-300">
            Show More Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
