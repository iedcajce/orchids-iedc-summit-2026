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
      subtitle: "From Blueprint to Future-Proof Product",
      description: "For teams building technology at the cutting edge. Focus on security, scalability, and emerging trends.",
      classes: {
        iconBg: "bg-blue-500/10",
        iconText: "text-blue-600",
        border: "hover:border-blue-500/20",
        subtitle: "text-blue-600",
        gradient: "from-blue-500/10",
        headerGradient: "to-blue-50/50",
        blur: "bg-blue-500/5",
        numberBg: "bg-blue-100",
        numberText: "text-blue-700"
      },
      icon: <Cpu className="w-6 h-6" />,
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
      subtitle: "From Problem Solver to Paying Customer",
      description: "The track dedicated to survival, growth, and sustainable revenue generation.",
      classes: {
        iconBg: "bg-emerald-500/10",
        iconText: "text-emerald-600",
        border: "hover:border-emerald-500/20",
        subtitle: "text-emerald-600",
        gradient: "from-emerald-500/10",
        headerGradient: "to-emerald-50/50",
        blur: "bg-emerald-500/5",
        numberBg: "bg-emerald-100",
        numberText: "text-emerald-700"
      },
      icon: <Briefcase className="w-6 h-6" />,
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
      subtitle: "From Pitch Deck to First Strategic Cheque",
      description: "Preparation for the financial journey, designed for teams targeting early-stage capital.",
      classes: {
        iconBg: "bg-amber-500/10",
        iconText: "text-amber-600",
        border: "hover:border-amber-500/20",
        subtitle: "text-amber-600",
        gradient: "from-amber-500/10",
        headerGradient: "to-amber-50/50",
        blur: "bg-amber-500/5",
        numberBg: "bg-amber-100",
        numberText: "text-amber-700"
      },
      icon: <TrendingUp className="w-6 h-6" />,
      details: [
        { title: "Angel Readiness Room", desc: "Decoding what angel investors prioritize in student-led ventures." },
        { title: "PitchCraft Arena", desc: "Building the definitive pitch deck and mastering confident delivery." },
        { title: "Valuation Clarity", desc: "Simple, practical understanding of early-stage valuation, equity, and term sheets." },
        { title: "Fundability Signals", desc: "Identifying and demonstrating the traction, team, and market size signals that investors value." },
      ]
    }
  ];

  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-white text-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-3xl">
            <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">Navigate Your Growth</span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-6" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
              NEW & <span className="text-brand">EXPANDED</span> <br />
              <span className="text-brand-dark/20">FOR 2026</span>
            </h2>
            <p className="text-brand-dark/60 text-sm md:text-base font-medium max-w-xl leading-relaxed">
              Choose the track that directly addresses your startup&apos;s most critical challenge right now.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest px-8 transition-all h-12">
            View Full Schedule
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedTrack(track)}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#f8faf9] border border-black/5 ${track.classes.border} p-8 cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className={`w-12 h-12 rounded-2xl ${track.classes.iconBg} flex items-center justify-center mb-6 ${track.classes.iconText} group-hover:scale-110 transition-transform duration-500`}>
                {track.icon}
              </div>

              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-2 group-hover:text-brand transition-colors">
                {track.title}
              </h3>
              <p className={`${track.classes.subtitle} text-xs font-bold uppercase tracking-widest mb-4`}>
                {track.subtitle}
              </p>
              <p className="text-brand-dark/50 text-sm leading-relaxed mb-8">
                {track.description}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-dark/30 group-hover:text-brand-dark transition-colors">
                <span>View Modules</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>

              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${track.classes.gradient} to-transparent rounded-tl-[100%] translate-y-8 translate-x-8 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-brand-dark/40 backdrop-blur-md"
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`p-8 md:p-12 bg-gradient-to-br from-white ${selectedTrack.classes.headerGradient} border-b border-black/5 relative overflow-hidden`}>
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${selectedTrack.classes.iconBg} flex items-center justify-center mb-6 ${selectedTrack.classes.iconText}`}>
                    {selectedTrack.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-4 italic" style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}>
                    {selectedTrack.title}
                  </h3>
                  <p className={`${selectedTrack.classes.subtitle} text-sm md:text-base font-bold uppercase tracking-widest mb-2`}>
                    {selectedTrack.subtitle}
                  </p>
                  <p className="text-brand-dark/60 max-w-2xl text-lg">
                    {selectedTrack.description}
                  </p>
                </div>

                <div className={`absolute -bottom-24 -right-24 w-96 h-96 ${selectedTrack.classes.blur} rounded-full blur-3xl`} />
              </div>

              {/* Body */}
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedTrack.details.map((detail, idx) => (
                    <div key={idx} className="group p-6 rounded-3xl bg-gray-50 border border-black/5 hover:border-black/10 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 w-6 h-6 rounded-full ${selectedTrack.classes.numberBg} flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-[10px] font-black ${selectedTrack.classes.numberText}`}>{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand transition-colors">
                            {detail.title}
                          </h4>
                          <p className="text-sm text-brand-dark/60 leading-relaxed font-medium">
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
