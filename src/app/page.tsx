"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import ServicesScroll from "@/components/sections/ServicesScroll";
import PartnerCTA from "@/components/sections/PartnerCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <ServicesScroll />
      <PartnerCTA />
    </main>
  );
}
