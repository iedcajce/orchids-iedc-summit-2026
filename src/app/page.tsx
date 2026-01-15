"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CountdownSection } from "@/components/CountdownSection";
import { Ticker } from "@/components/Ticker";
import { FeaturedEvents, Speakers } from "@/components/EventsAndSpeakers";
import { SummitHighlights, About, Partners } from "@/components/AboutAndPartners";
import { Tickets } from "@/components/Tickets";
import { Location, PreviousSummits, Footer } from "@/components/FooterAndLocation";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <div className="mx-auto w-full h-screen flex flex-col overflow-hidden snap-start">
              <Hero />
              <Ticker />
            </div>
            <div className="snap-start"><CountdownSection /></div>
            <div className="snap-start"><FeaturedEvents /></div>
            <div className="snap-start"><Speakers /></div>
            <div className="snap-start"><Tickets /></div>
            <div className="snap-start"><SummitHighlights /></div>
            <div className="snap-start"><About /></div>
            <div className="snap-start"><Partners /></div>
            <div className="snap-start"><Location /></div>
            <div className="snap-start"><PreviousSummits /></div>
            <div className="snap-start"><Footer /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
