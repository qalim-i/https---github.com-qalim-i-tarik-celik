import React from 'react';
import { motion } from 'framer-motion';
import { cinematicFade, slowRevealUp, staggerContainer } from '../utils/animations';
import { CrosshairLabel, RedSquare, TrackLineH } from './ui';

import tarikHero from '../assets/tarik-valorant.png';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-48 md:pb-32">
      {/* 
        HERO IMAGE MASKING
        The image is absolutely positioned at the top of the spine.
        It uses mask-feather-bottom to fade seamlessly into the black spine.
        mix-blend-luminosity makes it look like it's carved out of the background.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[800px] z-0 overflow-hidden mask-feather-bottom">
        <motion.img
          variants={cinematicFade}
          initial="hidden"
          animate="show"
          src={tarikHero}
          alt="Tarik Celik"
          className="w-75% h-full object-cover object-top opacity-50 mix-blend-luminosity scale-105"
        />
        {/* Subtle red overlay to give it that cinematic ember feel */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-crimson/20 mix-blend-overlay" /> */}
      </div>

      <div className="relative z-10 w-full">
        {/* Top left technical marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute -left-12 md:-left-32 top-8 hidden md:block"
        >
          <CrosshairLabel light>Subject 01</CrosshairLabel>
          <div className="mt-4 flex gap-1 items-center">
            <RedSquare />
            <span className="label-tech text-paper">Active</span>
          </div>
        </motion.div>

        {/* Main Title - Centered, massive, breaking out of the spine slightly */}
        <div className="pt-48 md:pt-64 pb-20 text-center relative">
          <motion.h1
            variants={slowRevealUp}
            initial="hidden"
            animate="show"
            className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-serif leading-none tracking-tighter text-paper text-shadow-cinematic mx-[-20%]"
          >
            TARIK
          </motion.h1>
          <motion.div
            variants={slowRevealUp}
            initial="hidden"
            animate="show"
            className="mt-6 flex justify-center items-center gap-8"
          >
            <div className="w-12 h-[1px] bg-paper/30" />
            <p className="label-tech text-paper tracking-[0.4em]">Esports Legend</p>
            <div className="w-12 h-[1px] bg-paper/30" />
          </motion.div>
        </div>

        {/* Floating White Information Card - straddling the edge of the spine */}
        <motion.div
          variants={slowRevealUp}
          initial="hidden"
          animate="show"
          className="relative mt-12 mx-8 md:absolute md:right-0 md:translate-x-[40%] md:bottom-0 md:mt-0 md:mx-0 z-20"
        >
          <div className="editorial-card w-64 md:w-80 p-8 bg-card border border-black/10">
            <CrosshairLabel>CELIK</CrosshairLabel>
            <TrackLineH className="my-6" />
            <p className="text-xs text-muted leading-relaxed font-sans font-light">
              From Major Champion to the definitive voice of North American esports.
              A career spanning Counter-Strike glory and unmatched content creation.
            </p>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="label-tech text-charcoal mb-1">Status</p>
                <p className="font-serif text-xl">S-Tier</p>
              </div>
              <div className="text-right">
                <p className="label-tech text-charcoal mb-1">Since</p>
                <p className="font-serif text-xl">2014</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
