"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-1.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Speakers", href: "#speakers" },
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "Pre-Events", href: "#pre-events" },
    { name: "EOIs", href: "#eois" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-2 md:px-12 pointer-events-none">
        {/* Logo Card */}
        <div className="max-w-[120px] md:max-w-[160px] pointer-events-auto">
          <Image
            src={logo}
            alt="IEDC Startup Summit 2026 Logo"
            width={160}
            height={100}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Navigation Pill */}
        <div className="hidden md:flex items-center gap-1 bg-[#E8F3ED]/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 shadow-sm pointer-events-auto h-fit">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-[#4A7C59] hover:text-[#2D5A27] transition-colors rounded-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger / Desktop Register Button */}
        <div className="flex items-center gap-4 pointer-events-auto h-fit">
          <div className="hidden md:block">
            <Link href="#tickets">
              <Button className="bg-[#4A7C59] hover:bg-[#386144] text-white rounded-full px-8 py-6 h-auto text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95">
                Buy Ticket
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-14 h-14 flex items-center justify-center bg-[#CCFFF9]/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-[#4A7C59] hover:bg-[#CCFFF9]/80 transition-all"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center bg-[#CCFFF9] rounded-2xl shadow-lg shadow-black/5 text-[#4A7C59]"
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Menu Container */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-[85%] max-w-sm bg-[#ECFCF1] rounded-[32px] p-8 flex flex-col gap-4"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full py-4 text-left px-6 text-xl font-medium transition-all rounded-2xl ${index === 0 ? "bg-[#D9EBDC] text-[#4A7C59]" : "text-[#4A7C59]/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            {/* Register Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link href="#tickets" onClick={() => setIsOpen(false)}>
                <Button className="bg-[#4A7C59] hover:bg-[#386144] text-white rounded-full px-12 py-6 h-auto text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                  Buy Ticket
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
