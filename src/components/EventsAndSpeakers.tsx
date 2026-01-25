"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Linkedin, Youtube, Instagram, Cpu, Briefcase, TrendingUp, X } from "lucide-react";

export function FeaturedEvents() {
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);

  const tracks = [
    {
      id: 1,
      title: "TECHNOLOGY",
      subtitle: "Blueprint to Future-Proof",
      description: "For teams building technology at the cutting edge. Focus on security, scalability, and emerging trends.",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
      border: "group-hover:border-blue-500/50",
      text: "text-blue-500",
      bg: "bg-blue-500/10",
      details: [
        { title: "TechFrontiers", desc: "AI, Generative AI, Robotics, DeepTech." },
        { title: "Prototype to Product", desc: "Operationalizing your MVP for deployment." },
        { title: "BuildOps Lab", desc: "Essential cloud architecture and infrastructure for early-stage teams." },
        { title: "Responsible Tech", desc: "Building secure, ethical, and compliant solutions." },
      ]
    },
    {
      id: 2,
      title: "BUSINESS",
      subtitle: "Problem Solver to Paying Customer",
      description: "The track dedicated to survival, growth, and sustainable revenue generation.",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      border: "group-hover:border-emerald-500/50",
      text: "text-emerald-500",
      bg: "bg-emerald-500/10",
      details: [
        { title: "Zero-to-One Playbook", desc: "The mechanics of finding your first paying customer." },
        { title: "MarketFit Studio", desc: "Techniques for achieving and validating Product-Market Fit (PMF)." },
        { title: "Startup Operations 101", desc: "Legal, finance, compliance, and essential team structure." },
        { title: "Branding & Growth", desc: "Telling your story and leveraging digital platforms for traction." },
      ]
    },
    {
      id: 3,
      title: "INVESTMENT",
      subtitle: "Pitch Deck to Strategic Cheque",
      description: "Preparation for the financial journey, designed for teams targeting early-stage capital.",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      border: "group-hover:border-amber-500/50",
      text: "text-amber-500",
      bg: "bg-amber-500/10",
      details: [
        { title: "Angel Readiness Room", desc: "Decoding what angel investors prioritize in student-led ventures." },
        { title: "PitchCraft Arena", desc: "Building the definitive pitch deck and mastering confident delivery." },
        { title: "Valuation Clarity", desc: "Simple, practical understanding of early-stage valuation, equity, and term sheets." },
        { title: "Fundability Signals", desc: "Identifying and demonstrating the traction, team, and market size signals that investors value." },
      ]
    }
  ];

  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-[#F8FFF9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-3 block">Track Selection</span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.9] text-brand-dark mb-6">
              NEW & <span className="text-brand">EXPANDED</span> <br />
              <span className="opacity-30">FOR 2026</span>
            </h2>
            <p className="text-brand-dark/60 text-sm md:text-base font-medium max-w-xl leading-relaxed">
              Curated tracks designed to address the specific lifecycle challenges of student startups.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest px-8 h-12">
            Explore All Sessions
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {tracks.map((track, i) => (
            <div
              key={track.id}
              onClick={() => setSelectedTrack(track)}
              className={`group relative h-full min-h-[420px] rounded-[2.5rem] bg-white border border-black/5 p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${track.border}`}
            >
              {/* Magic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-auto">
                  <div className={`w-14 h-14 rounded-2xl ${track.bg} ${track.text} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    {track.icon}
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-black/5 flex items-center justify-center ${track.text} opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-2 leading-[0.9] group-hover:text-black transition-colors">
                    {track.title}
                  </h3>
                  <div className={`h-1 w-12 rounded-full ${track.bg.replace('/10', '')} mb-4 opacity-50 group-hover:w-full transition-all duration-500`} />
                  <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${track.text}`}>
                    {track.subtitle}
                  </p>
                  <p className="text-brand-dark/50 text-sm leading-relaxed font-medium group-hover:text-brand-dark/80 transition-colors">
                    {track.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 md:p-12 overflow-hidden bg-[#F8FFF9] border-b border-black/5">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${selectedTrack.gradient} opacity-50 blur-3xl`} />

                <button
                  onClick={() => setSelectedTrack(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all z-20 shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${selectedTrack.bg} ${selectedTrack.text}`}>
                      {selectedTrack.icon}
                    </div>
                    <span className={`text-xs font-black tracking-widest uppercase ${selectedTrack.text}`}>Track Deep Dive</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-3 leading-none italic">
                    {selectedTrack.title}
                  </h3>
                  <p className="text-brand-dark/60 text-lg max-w-2xl font-medium">
                    {selectedTrack.description}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-12 overflow-y-auto bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTrack.details.map((detail, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl border border-black/5 hover:border-black/10 hover:shadow-lg hover:bg-[#F8FFF9] transition-all duration-300">
                      <div className="flex gap-4">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg ${selectedTrack.bg} ${selectedTrack.text} flex items-center justify-center text-xs font-black`}>
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="text-lg font-bold text-brand-dark mb-2 leading-tight group-hover:text-black">
                            {detail.title}
                          </h4>
                          <p className="text-sm text-brand-dark/50 leading-relaxed group-hover:text-brand-dark/70">
                            {detail.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
      name: "D.S. Prashant",
      role: "CEO",
      company: "Startup & IT Promotion Cell (SITPC)",
      image: "/images/speaker_d_s_prashant.jpeg",
      linkedin: "https://www.linkedin.com/in/dsprashant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Anoop Ambika",
      role: "CEO",
      company: "Kerala Startup Mission",
      image: "/images/speaker_anoop_ambika_.jpeg",
      linkedin: "https://www.linkedin.com/in/anoopambika?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "K Suresh Kumar",
      role: "Executive Director",
      company: "PSG-STEP Coimbatore",
      image: "/images/speaker_suresh_kumar.png",
      linkedin: "https://www.linkedin.com/in/k-suresh-kumar-0b3ab29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Ashok Kurian Panjikkaran",
      role: "Senior Manager",
      company: "Kerala Startup Mission",
      image: "/images/speaker_ashok_kurian_panjikkaran.jpeg",
      linkedin: "https://www.linkedin.com/in/ashok-kurian-panjikaran-akp-50b8b526?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Dr. J. Deny",
      role: "Dy-Director-IEDC",
      company: "Kalasalingam University",
      image: "/images/speaker_dr_j_deny.jpg",
      linkedin: "#"
    },
    {
      name: "Jaison Thomas",
      role: "Co-Founder",
      company: "Blusteak",
      image: "/images/speaker_jaison_thomas.jpg",
      linkedin: "#"
    },

    {
      name: "Jijo Paul",
      role: "CEO",
      company: "Resnova Technologies",
      image: "/images/speaker_jijo_paul.jpg",
      linkedin: "#"
    },

    {
      name: "Abidh Habib",
      role: "CEO",
      company: "INCIAL",
      image: "/images/speaker_abidh_habib.jpg",
      linkedin: "#"
    },
    {
      name: "Anson P Sam",
      role: "Keynote Speaker",
      company: "Tata Consultancy Services",
      image: "/images/speaker_anson_p_sam.jpg",
      linkedin: "#"
    },
    {
      name: "Akhil Hakkim",
      role: "Keynote Speaker",
      company: "Armada",
      image: "/images/speaker_akhil_hakkim.jpg",
      linkedin: "#"
    },

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

        <div className="flex flex-wrap justify-center gap-6">
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
              className="group cursor-pointer w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#f8faf9] rounded-[2rem]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-4 flex justify-start px-4 gap-4 translate-x-0 md:-translate-x-full md:group-hover:translate-x-0 transition-transform duration-500 z-20">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
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
      </div>
    </section>
  );
}
