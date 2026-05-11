import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Statistics } from './components/Statistics';
import { CareerHighlights } from './components/CareerHighlights';
import { AchievementsTable } from './components/AchievementsTable';
import { SentinelsSection } from './components/SentinelsSection';
import { RedBullCollab } from './components/RedBullCollab';
import { CinematicBanner } from './components/CinematicBanner';
import { Tournaments } from './components/Tournaments';
import { Trivia } from './components/Trivia';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-esports-dark min-h-screen font-sans selection:bg-sentinels-red selection:text-white">
      {/* Mouse-reactive ambient light */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(206, 0, 55, 0.08), transparent 40%)'
        }}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Statistics />
        <CareerHighlights />
        <AchievementsTable />
        <CinematicBanner />
        <SentinelsSection />
        <RedBullCollab />
        <Tournaments />
        <Trivia />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
