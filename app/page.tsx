"use client";
import { useState } from "react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Plans from "../components/Plans";
import N8NSection from "../components/N8NSection";
import About from "../components/About";
import Sites from "../components/Sites";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Carousel from "@/components/Carousel";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans bg-gradient-to-b from-black via-zinc-900 to-black">
      <Header onOpenMobile={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main
        id="inicio"
        className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-28 sm:py-32 px-6 sm:px-8 bg-transparent sm:items-start"
      >
        
        <Hero />
        <Services />
        <Plans />
        <Sites />
        <CTA />
        {/*
        <Portfolio />
        */}
        <About />
        <Footer />
      </main>
    </div>
  );
}
