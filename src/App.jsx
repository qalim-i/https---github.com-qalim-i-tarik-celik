import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValue, animate } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Statistics } from './components/Statistics';
import { AchievementsTable } from './components/AchievementsTable';
import { SentinelsSection } from './components/SentinelsSection';
import { RedBullCollab } from './components/RedBullCollab';
import { CinematicBanner } from './components/CinematicBanner';
import { Tournaments } from './components/Tournaments';
import { Trivia } from './components/Trivia';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

import tarikLogo from './assets/tarik-logo.png';

function App() {
  const [isPastHero, setIsPastHero] = useState(false);
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(32);
  const mouseY = useMotionValue(32);

  const currentMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setIsPastHero(y > window.innerHeight * 0.8);
    });
  }, [scrollY]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      currentMouse.current = { x: e.clientX, y: e.clientY };
      if (isPastHero) {
        const isMd = window.innerWidth >= 768;
        const offset = isMd ? 40 : 32;
        mouseX.set(e.clientX - offset);
        mouseY.set(e.clientY - offset);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isPastHero, mouseX, mouseY]);

  useEffect(() => {
    const isMd = window.innerWidth >= 768;
    if (isPastHero) {
      const offset = isMd ? 40 : 32;
      mouseX.set(currentMouse.current.x - offset);
      mouseY.set(currentMouse.current.y - offset);
    } else {
      animate(mouseX, isMd ? 48 : 32, { duration: 0.4, ease: "easeOut" });
      animate(mouseY, isMd ? 48 : 32, { duration: 0.4, ease: "easeOut" });
    }
  }, [isPastHero, mouseX, mouseY]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* Dynamic Site Logo */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        initial={false}
        animate={{
          scale: isPastHero ? 0.80 : 1,
          opacity: isPastHero ? 0.8 : 0.8
        }}
        whileHover={!isPastHero ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 z-50 ${isPastHero ? 'pointer-events-none' : ''}`}
      >
        <img src={tarikLogo} alt="Tarik Logo" className="w-16 md:w-20" />
      </motion.div>

      {/* SVG Liquid Edge Filter */}
      <svg className="hidden">
        <defs>
          <filter id="liquidSpine" x="-10%" y="0%" width="120%" height="100%">
            {/* High horizontal frequency, very low vertical frequency creates long liquid streaks pouring down */}
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.001" numOctaves="3" result="result1" />
            <feDisplacementMap in="SourceGraphic" in2="result1" scale="120" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* THE CENTRAL SPINE BACKGROUND */}
      {/* This creates the dark visual column without clipping the content inside */}
      <div className="spine-bg" />

      {/* CONTENT LAYER */}
      {/* Constraints are handled per-section now so they can break out when needed */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto pb-32">
        <Hero />
        <About />
        <Statistics />
        <CinematicBanner />
        <AchievementsTable />
        <SentinelsSection />
        <RedBullCollab />
        <Tournaments />
        <Trivia />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
