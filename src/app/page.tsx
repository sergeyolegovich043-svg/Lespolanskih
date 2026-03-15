"use client";

import { useState, useCallback } from "react";
import GrainOverlay from "@/components/GrainOverlay";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import NdaBlock from "@/components/NdaBlock";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Loader */}
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      {/* Grain Overlay */}
      <GrainOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <WhyMe />
        <NdaBlock />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
