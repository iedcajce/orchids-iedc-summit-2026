import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { FeaturedEvents, Speakers } from "@/components/EventsAndSpeakers";
import { SummitHighlights, About, Partners } from "@/components/AboutAndPartners";
import { Tickets } from "@/components/Tickets";
import { Location, PreviousSummits, Footer } from "@/components/FooterAndLocation";

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
