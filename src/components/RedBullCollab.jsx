import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel, TrackLineV } from './ui';

import redBullImg from '../assets/redbulxtarik.jpg';

export const RedBullCollab = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* 
        This section uses a massive full-width image that is feathered out
        at the top and bottom to blend into the spine's flow.
      */}
      <div className="absolute inset-0 mask-feather-all opacity-40 mix-blend-luminosity">
        <img
          src={redBullImg}
          alt="Red Bull Partnership"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="relative z-10 px-8 flex flex-col items-center text-center mt-32">
        <motion.div
          variants={slowRevealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <CrosshairLabel light>Brand Partnership</CrosshairLabel>
          <h2 className="font-serif text-5xl md:text-7xl text-paper mt-6 mb-8">
            Red Bull Athlete
          </h2>
          <TrackLineV className="h-16 mx-auto bg-crimson mb-8" />
          <p className="text-muted text-sm font-sans font-light leading-relaxed">
            Representing the brand on the global stage. From high-octane content creation 
            to epic live events, the partnership fuels the next generation of esports entertainment.
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-6">
             <div className="w-12 h-[1px] bg-paper/20" />
             <a
                href="https://www.redbull.com/in-en/athlete/tarik-tarik-celik"
                target="_blank"
                rel="noopener noreferrer"
                className="label-tech text-paper hover:text-crimson transition-colors"
             >
                View Profile
             </a>
             <div className="w-12 h-[1px] bg-paper/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
