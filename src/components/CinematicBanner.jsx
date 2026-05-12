import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { TrackLineH } from './ui';

export const CinematicBanner = () => {
  return (
    <section className="relative py-24 px-8 text-center flex flex-col items-center">
      <motion.div
        variants={slowRevealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full"
      >
        <TrackLineH className="bg-paper/10 mb-12" />
        <h2 className="font-serif text-3xl md:text-5xl text-paper tracking-widest uppercase font-light">
          The Legacy Continues
        </h2>
        <TrackLineH className="bg-paper/10 mt-12" />
      </motion.div>
    </section>
  );
};
