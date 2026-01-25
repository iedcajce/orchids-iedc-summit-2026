"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CountdownSection } from "@/components/CountdownSection";
import { Ticker } from "@/components/Ticker";
import { FeaturedEvents, Speakers } from "@/components/EventsAndSpeakers";
import { Eligibility } from "@/components/Eligibility";
import { SummitHighlights } from "@/components/SummitHighlights";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
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
            <div id="about" className="snap-start"><About /></div>
            {/* <div className="snap-start"><CountdownSection /></div> */}
            <div id="events" className="snap-start"><FeaturedEvents /></div>
            <div id="speakers" className="snap-start"><Speakers /></div>
            <div id="tickets" className="snap-start"><Tickets /></div>
            <div id="highlights" className="snap-start"><SummitHighlights /></div>

            {/* <div className="snap-start"><Eligibility /></div> */}
            <div id="partners" className="snap-start"><Partners /></div>
            <div id="location" className="snap-start"><Location /></div>
            {/* <div className="snap-start"><PreviousSummits /></div> */}
            <div className="snap-start"><Footer /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
