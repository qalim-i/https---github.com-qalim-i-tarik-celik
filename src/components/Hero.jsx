import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, blurReveal, splitLetterVariants, floatingAnimation, floatingAnimationSlow, floatingAnimationDelay, fadeUp } from '../utils/animations';
import { Button, FloatingCard, Badge } from './ui';
import { Play, Trophy, Crosshair, Eye, Flame, Monitor } from 'lucide-react';

import heroImg from '../assets/tarik-valorant.jpg';
import bostonImg from '../assets/boston major tarik.png';
import valorantImg from '../assets/tarik-playing-valorant.avif';
import tarikSenImg from '../assets/lil-bro.jpg';

const titleText = "TARIK".split('');

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-32">
      {/* Layered background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-esports-dark via-esports-dark/95 to-esports-charcoal z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sentinels-red/15 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent z-10" />
        <img
          src={heroImg}
          alt="Esports Arena"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Ambient light particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sentinels-red/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent-purple/8 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* Left: text content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <Badge color="red" className="text-xs">🎮 ESPORTS LEGEND • STREAMER</Badge>
              </motion.div>

              <div className="flex justify-center lg:justify-start overflow-hidden mb-4">
                {titleText.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={splitLetterVariants}
                    className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-heading font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.h2 variants={fadeUp} className="text-base md:text-lg font-light tracking-[0.25em] text-gray-400 mb-6 uppercase">
                Streamer <span className="text-sentinels-red">•</span> Major Champion <span className="text-sentinels-red">•</span> Co-Streamer
              </motion.h2>

              <motion.p variants={fadeUp} className="text-gray-500 text-base mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From lifting the trophy in Boston to dominating the streaming world — the voice and face of North American esports.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button variant="primary" onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Trophy size={16} /> View Career
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('tournaments')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Play size={16} /> Watch Streams
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Central portrait + floating cards */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">

            {/* Central portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.3 }}
              className="relative z-10 w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(206,0,55,0.15)]"
            >
              <img src={tarikSenImg} alt="Tarik Celik" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-esports-dark via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sentinels-red">Sentinels</p>
                <p className="text-white font-heading font-bold text-lg">Content Creator</p>
              </div>
            </motion.div>

            {/* Floating Card 1: Tournament Win */}
            <FloatingCard className="top-4 -left-4 md:left-4 w-56" rotate={-6} delay={0.6}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">ELEAGUE Boston Major</p>
                  <p className="text-white font-bold text-sm">🏆 Champion — 2018</p>
                </div>
              </div>
              <motion.div
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute inset-0 pointer-events-none"
              />
            </FloatingCard>

            {/* Floating Card 2: Stream Stats */}
            <FloatingCard className="top-0 -right-4 md:right-4 w-52" rotate={4} delay={0.8}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sentinels-red/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-sentinels-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Peak Viewers</p>
                  <p className="text-white font-bold text-lg">395K+</p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 3: Boston Major image */}
            <FloatingCard className="bottom-16 -left-8 md:left-0 w-44 h-28 !p-0 overflow-hidden" rotate={-3} delay={1.0}>
              <img src={bostonImg} alt="Boston Major" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-2 left-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Cloud9 • 2018</p>
              </div>
            </FloatingCard>

            {/* Floating Card 4: MVP badge */}
            <FloatingCard className="bottom-8 -right-4 md:right-0 w-48" rotate={5} delay={1.2}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Co-Stream King</p>
                  <p className="text-white font-bold text-sm">#1 VALORANT</p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 5: Live indicator */}
            <FloatingCard className="-top-8 left-1/2 -translate-x-1/2 w-36" rotate={0} delay={1.4}>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Live Now</span>
              </div>
            </FloatingCard>

            {/* Floating valorant screenshot */}
            <FloatingCard className="bottom-36 right-12 md:right-20 w-40 h-24 !p-0 overflow-hidden hidden md:block" rotate={8} delay={1.5}>
              <img src={valorantImg} alt="Valorant gameplay" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-1.5 left-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">VALORANT</p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};
