"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
            <div className="mx-auto w-screen h-screen flex flex-col overflow-hidden">
              <Hero />
              <Ticker />
            </div>
            <FeaturedEvents />
            <Speakers />
            <Tickets />
            <SummitHighlights />
            <About />
            <Partners />
            <Location />
            <PreviousSummits />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
