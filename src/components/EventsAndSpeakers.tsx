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
      image: "/images/track_tech.png", // Technology/Robotics themed
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-600/40 via-blue-600/10 to-transparent",
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
      image: "/images/track_business.png", // Business/Startup themed
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-emerald-600/40 via-emerald-600/10 to-transparent",
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
      image: "/images/track_investment.png", // Pitching/Investment themed
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-amber-600/40 via-amber-600/10 to-transparent",
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

          <Link href="/schedules">
            <Button variant="outline" className="border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest px-8 transition-all">
              View Schedule
            </Button>
          </Link>
        </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Event Tracks</span>
              <h2 className="text-[12vw] sm:text-[8vw] md:text-6xl lg:text-[72px] font-black italic tracking-tight uppercase leading-[0.8] text-brand-dark mb-8">
                CURATED <span className="text-brand">LEARNING</span> <span className="opacity-10">EXPERIENCES</span>
              </h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <p className="text-brand-dark/60 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                  Deep-dive into specialized tracks crafted to empower every stage of your startup journey, from ideation to scale.
                </p>
                <Link href="/schedules">
                  <Button variant="outline" className="w-fit whitespace-nowrap border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest px-8 h-12 transition-all duration-300">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer bg-[#f8faf9] border border-black/5"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

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

              {/* Bottom Content Area */}
              <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-10 text-white">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#4ADE80] mb-2 block drop-shadow-sm">
                  {track.subtitle}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-md">
                  {track.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium line-clamp-2 group-hover:text-white transition-colors duration-300">
                  {track.description}
                </p>
                <div className="mt-8 flex items-center gap-3 group/btn">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#4ADE80]">Explore Track</span>
                  <div className="h-[1px] flex-grow bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_10px_rgba(74,222,128,0.5)] group-hover:scale-150 transition-transform duration-300" />
                </div>
              </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all z-30 text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Left - Image & Basic Info */}
              <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full">
                <Image
                  src={selectedTrack.image}
                  alt={selectedTrack.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90`} />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full">
                  <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white inline-flex mb-6`}>
                    {selectedTrack.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none italic">
                    {selectedTrack.title}
                  </h3>
                  <p className="text-white/70 text-base font-medium">
                    {selectedTrack.description}
                  </p>
                </div>
              </div>

              {/* Modal Right - Details List */}
              <div className="w-full md:w-[60%] p-8 md:p-16 overflow-y-auto bg-white custom-scrollbar">
                <div className="mb-12">
                  <span className="text-brand font-black tracking-[0.3em] uppercase text-[11px] mb-2 block">Track Highlights</span>
                  <h4 className="text-2xl font-black text-brand-dark uppercase tracking-tight italic">Key Sessions & Topics</h4>
                </div>

                <div className="space-y-6">
                  {selectedTrack.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="group p-8 rounded-[2rem] border border-black/5 hover:border-brand/20 hover:bg-brand/5 transition-all duration-300"
                    >
                      <div className="flex gap-6">
                        <span className={`flex-shrink-0 w-10 h-10 rounded-xl ${selectedTrack.bg} ${selectedTrack.text} flex items-center justify-center text-xs font-black border border-black/5`}>
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <div>
                          <h5 className="text-xl font-bold text-brand-dark mb-2 leading-tight group-hover:text-brand transition-colors">
                            {detail.title}
                          </h5>
                          <p className="text-[15px] text-brand-dark/60 leading-relaxed">
                            {detail.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-black/5">
                  <Button className="w-full h-14 rounded-2xl bg-brand-dark text-white font-black uppercase tracking-widest hover:bg-brand transition-all duration-300">
                    View Schedule
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
