import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp, cinematicFade } from '../utils/animations';
import { CrosshairLabel, TrackLineV, TrackLineH } from './ui';

import tarikcool from '../assets/tarik-cool.png';

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
        
        {/* Left Side: Feathered Image emerging from the dark */}
        <motion.div 
          variants={cinematicFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-7 relative h-[600px]"
        >
          {/* 
            This image uses mask-feather-all to blend softly into the black background,
            mimicking the reference's atmospheric lighting.
          */}
          <div className="absolute inset-0 mask-feather-all overflow-hidden">
            <img 
              src={tarikcool} 
              alt="Tarik Profile" 
              className="w-full h-100% object-cover opacity-100 mix-blend-screen"
            />
          </div>
          
          {/* Subtle label over image */}
          <div className="absolute bottom-12 left-12">
            <CrosshairLabel light>Origin</CrosshairLabel>
            <h3 className="font-serif text-4xl text-paper mt-2">Brooklyn, NY</h3>
          </div>
        </motion.div>

        {/* Right Side: Information Block breaking out of the spine */}
        <div className="md:col-span-5 relative">
          {/* This block intentionally hangs off the right side of the spine onto the paper background */}
          <motion.div 
            variants={slowRevealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute top-20 -right-[40%] w-[120%] z-20"
          >
            <div className="editorial-card bg-card p-10 md:p-16">
              <div className="flex gap-12 mb-12">
                <TrackLineV className="h-20" />
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6">
                    A Legacy Built on <br/>
                    <span className="italic text-muted">Pure Instinct.</span>
                  </h2>
                  <p className="text-sm font-sans font-light text-muted leading-loose max-w-sm">
                    Tarik "tarik" Celik began his journey as an aggressive entry fragger in Counter-Strike. 
                    Known for his explosive playstyle, he culminated his competitive career with a 
                    Major Championship at the ELEAGUE Boston Major in 2018.
                  </p>
                </div>
              </div>

              <TrackLineH className="my-8" />

              {/* Stats Grid inside the card */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <CrosshairLabel>Role</CrosshairLabel>
                  <p className="font-serif text-2xl mt-2">Content Creator</p>
                </div>
                <div>
                  <CrosshairLabel>Organization</CrosshairLabel>
                  <p className="font-serif text-2xl mt-2">Sentinels</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
