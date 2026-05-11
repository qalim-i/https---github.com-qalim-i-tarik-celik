import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, slideFromLeft } from '../utils/animations';
import { SectionHeading, Card, CurveDivider } from './ui';
import { ChevronRight, ChevronLeft, MonitorPlay, MessageSquare, Video, Shield } from 'lucide-react';

import tarikSenImg from '../assets/lil-bro.jpg';
import zombsImg from '../assets/Sentinels_zombs.png';
import aceuImg from '../assets/aceu.jpg';
import ewokImg from '../assets/ewok.jpg';
import robMooreImg from '../assets/rob moore.jpg';

const roster = [
  { name: "Tarik", role: "Creator", image: tarikSenImg },
  { name: "zombs", role: "Creator", image: zombsImg },
  { name: "aceu", role: "Creator", image: aceuImg },
  { name: "Ewok", role: "Creator", image: ewokImg },
  { name: "Rob Moore", role: "CEO", image: robMooreImg },
];

export const SentinelsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((p) => (p + 1) % roster.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + roster.length) % roster.length);

  return (
    <section className="py-32 relative z-10 bg-esports-charcoal overflow-hidden">
      <CurveDivider position="top" color="#070709" />

      {/* Accent shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sentinels-red/[0.03] skew-x-[-20deg] translate-x-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
            className="lg:w-1/2"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-sentinels-red flex items-center justify-center font-black text-2xl text-white skew-x-[-8deg] rounded-lg">
                SEN
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Sentinels</h3>
                <p className="text-sentinels-red font-semibold text-sm tracking-wider">STREAMER • CONTENT CREATOR</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 uppercase leading-[1.05]">
              The face of<br />North American<br /><span className="text-gradient-red">esports</span>
            </h2>

            <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
              Joining Sentinels cemented tarik as the central hub of the VALORANT community. Alongside creators like zombs, aceu, and Ewok under Rob Moore's leadership.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <MonitorPlay size={18} />, label: "Twitch" },
                { icon: <MessageSquare size={18} />, label: "Twitter" },
                { icon: <Video size={18} />, label: "YouTube" },
              ].map((s, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-sentinels-red hover:border-sentinels-red/50 transition-all text-gray-400 hover:text-white">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Roster carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
            className="lg:w-1/2 w-full max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative">
              <div className="glass-card-strong p-0 overflow-hidden border-sentinels-red/20">
                <div className="relative aspect-[3/4] bg-esports-dark">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={roster[currentIndex].image}
                      alt={roster[currentIndex].name}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 0.8, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-esports-dark via-esports-dark/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`txt-${currentIndex}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                      >
                        <p className="text-sentinels-red text-xs font-bold uppercase tracking-[0.2em] mb-2">{roster[currentIndex].role}</p>
                        <h4 className="text-4xl font-heading font-black text-white uppercase tracking-wider">{roster[currentIndex].name}</h4>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute -bottom-5 right-8 flex gap-2 z-30">
                <button onClick={prev} className="w-10 h-10 rounded-xl bg-white text-esports-dark flex items-center justify-center hover:bg-sentinels-red hover:text-white transition-colors font-bold">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-xl bg-white text-esports-dark flex items-center justify-center hover:bg-sentinels-red hover:text-white transition-colors font-bold">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-1.5 justify-center mt-10">
                {roster.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-sentinels-red w-6' : 'bg-white/20 hover:bg-white/40'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
