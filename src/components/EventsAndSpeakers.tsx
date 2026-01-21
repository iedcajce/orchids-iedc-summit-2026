"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Linkedin, Youtube, Instagram, X } from "lucide-react";

export function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      title: "Business Dev",
      fullTitle: "Business Development Session",
      subtitle: "Are You Looking to Earn While You Study?",
      image: "/images/event_idea_pitch.jpg",
      desc: "Earn while you study. Connect with industries for part-time business and franchise opportunities.",
      fullDesc: (
        <>
          <p className="mb-4">
            This session provides a unique platform for doing business by connecting student startups with government and private sector industries. The programme promotes the “earn while you learn” model by creating part-time business and entrepreneurship opportunities for students.
          </p>
          <p>
            Participants will gain practical exposure to the basics of customer acquisition, business operations, and revenue generation, along with clear financial benefits. The programme also aims to facilitate franchise and dealership opportunities for a significant number of interested and eligible students.
          </p>
        </>
      ),
      badge: "BUSINESS",
    },
    {
      title: "Fundraising",
      fullTitle: "Fund Raising",
      subtitle: "Looking for funding for your product or startup?",
      image: "/images/event_workshops.jpg",
      desc: "Secure funding. Interact with investors and explore government grants and CSR support.",
      fullDesc: (
        <>
          <p className="mb-4">
            A dedicated component focused on fundraising for student startups, offering opportunities to interact directly with investors.
          </p>
          <p>
            This includes the creation of institution-wise investor platforms and expert-led sessions on effectively channeling government and private funding, including CSR support, for idea-to-product development.
          </p>
        </>
      ),
      badge: "FUNDING",
    },
    {
      title: "Experience",
      fullTitle: "Learn from the Experience",
      subtitle: "Looking to meet the influencing entrepreneurs?",
      image: "/images/event_night_meet.jpg",
      desc: "Meet influencing entrepreneurs and business leaders to learn creative marketing strategies.",
      fullDesc: (
        <p>
          Opportunity to meet and interact with new-generation entrepreneurs and conventional business leaders who have revamped their marketing strategies through creative thinking.
        </p>
      ),
      badge: "CONNECT",
    },
    {
      title: "Tech Sessions",
      fullTitle: "Hands on Technology Sessions",
      subtitle: "Looking to fine-tune your product?",
      image: "/images/event_tech_expo.jpg",
      desc: "Hands-on product fine-tuning with SEM, HPLC, GCMS, and IoT. Pre-booking available.",
      fullDesc: (
        <p>
          Hands-on sessions for product development, including access to Scanning Electron Microscopy (SEM), HPLC, GCMS, IoT, and more. Pre-booking facilities will be available.
        </p>
      ),
      badge: "HANDS-ON",
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
              onClick={() => setSelectedEvent(i)}
              className="relative group overflow-hidden rounded-[2rem] aspect-[2.5/1] md:aspect-[10/12] cursor-pointer bg-[#f8faf9] border border-black/5"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />

              <div className="absolute top-4 left-4 z-20">
                <span className={`text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-sm ${event.badge === 'NEW' ? 'bg-brand text-white' : 'bg-brand-dark text-white'
                  }`}>
                  {event.badge}
                </span>
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
                      {event.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-[11px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-2">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`event-card-${selectedEvent}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-64 w-full shrink-0">
                <Image
                  src={events[selectedEvent].image}
                  alt={events[selectedEvent].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                  <span className="bg-brand text-white text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-sm mb-3 inline-block">
                    {events[selectedEvent].badge}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase leading-none" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                    {events[selectedEvent].fullTitle}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <p className="text-brand font-bold text-xs md:text-sm uppercase tracking-widest mb-6">
                  {events[selectedEvent].subtitle}
                </p>

                <div className="prose prose-sm md:prose-base text-brand-dark/80 font-medium leading-relaxed">
                  {events[selectedEvent].fullDesc}
                </div>

                <div className="mt-8 pt-6 border-t border-brand/10 flex justify-center">
                  <Button className="bg-brand-dark hover:bg-brand text-white rounded-full px-8 py-6 h-auto text-xs font-bold uppercase tracking-widest transition-all">
                    Register Interest
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Speakers() {
  const speakers = [
    {
      name: "NIVIN PAULY",
      role: "Global Tech Visionary",
      company: "Pauly Innovations",
      image: "/images/speaker_nivin_pauly.jpg",
    },
    {
      name: "FAHAD FAZIL",
      role: "Deep Tech Architect",
      company: "Fazil Dynamics",
      image: "/images/speaker_fahad_fazil.jpg",
    },
    {
      name: "DULQUER SALMAAN",
      role: "Strategic Growth Lead",
      company: "Salmaan Ventures",
      image: "/images/speaker_dulquer_salmaan.jpg",
    },
    {
      name: "TOVINO THOMAS",
      role: "AI Ethics Specialist",
      company: "Thomas Research",
      image: "/images/speaker_tovino_thomas.jpg",
    },
    {
      name: "NAZRIYA NAZIM",
      role: "UX Strategy Director",
      company: "Nazim Labs",
      image: "/images/speaker_nazriya_nazim.jpg",
    },
    {
      name: "PRITHVIRAJ",
      role: "Quantum Computing Lead",
      company: "Prithvi Systems",
      image: "/images/speaker_prithviraj.jpg",
    },
    {
      name: "PARVATHY",
      role: "Sustainability Advisor",
      company: "Parvathy Global",
      image: "/images/speaker_parvathy.jpg",
    },
    {
      name: "MANJU WARRIER",
      role: "FinTech Innovation Head",
      company: "Warrier Group",
      image: "/images/speaker_manju_warrier.jpg",
    }
  ];

  return (
    <section id="speakers" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">Global Experts</span>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-brand-dark" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
            KEYNOTE <span className="text-brand">SPEAKERS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#f8faf9] border border-black/5 rounded-[2rem]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-4 flex justify-start px-4 gap-4 translate-x-0 md:-translate-x-full md:group-hover:translate-x-0 transition-transform duration-500 z-20">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand transition-all duration-300">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter leading-none group-hover:text-brand transition-colors" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                  {speaker.name}
                </h3>
                <p className="text-[11px] font-bold text-brand uppercase tracking-widest leading-none">
                  {speaker.role}
                </p>
                <p className="text-[10px] text-brand-dark/50 font-medium tracking-tight">
                  {speaker.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Button variant="outline" className="border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-none text-[10px] font-black uppercase tracking-widest px-12 py-6 h-auto transition-all">
            Explore All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
