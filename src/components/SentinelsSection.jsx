import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel, TrackLineH } from './ui';

import tarikSenImg from '../assets/tarik-sen.avif'; // We can reuse this or another

export const SentinelsSection = () => {
  return (
    <section className="relative py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left Side: Completely dark, text only */}
        <motion.div 
          variants={slowRevealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-5 px-12 md:pl-0 md:pr-12 flex flex-col justify-center"
        >
          <CrosshairLabel light>Organization</CrosshairLabel>
          <h2 className="font-serif text-5xl md:text-7xl text-paper mt-4 mb-8">
            Sentinels
          </h2>
          <p className="text-muted text-sm font-sans font-light leading-relaxed mb-8">
            The flagship creator for the most iconic North American esports organization. 
            Tarik's integration into Sentinels brought unprecedented viewership and cultural 
            relevance to the VALORANT scene.
          </p>

          <TrackLineH className="bg-paper/10 mb-8" />
          
          <div className="flex justify-between">
             <div className="text-center">
               <p className="font-serif text-3xl text-paper">3.3M+</p>
               <p className="label-tech text-muted mt-2">Followers</p>
             </div>
             <div className="text-center">
               <p className="font-serif text-3xl text-paper">#1</p>
               <p className="label-tech text-muted mt-2">Co-Streamer</p>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Image breaking out to the right */}
        <div className="md:col-span-7 relative h-[500px] md:h-auto mt-16 md:mt-0">
           {/* Image blends heavily on the left (inside spine) but stays sharp on the right */}
           <div className="absolute inset-0 md:-right-[20vw] overflow-hidden mask-feather-left">
              <img 
                src={tarikSenImg} 
                alt="Sentinels Content" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-85"
              />
              <div className="absolute inset-0 bg-crimson/10 mix-blend-overlay" />
           </div>
        </div>

      </div>
    </section>
  );
};
