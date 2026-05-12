import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel, TrackLineH, RedSquare } from './ui';

export const Statistics = () => {
  const stats = [
    { label: "PEAK VIEWERSHIP", value: "395K", detail: "Concurrent (VCT 2023)" },
    { label: "CAREER EARNINGS", value: "$289K", detail: "Tournament Prizes" },
    { label: "EVENT COVERED", value: "100+", detail: "Major Tournaments" },
    { label: "HOURS STREAMED", value: "10K+", detail: "Twitch Platform" }
  ];

  return (
    <section className="relative py-24 px-8 md:px-16">
      <motion.div
        variants={slowRevealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-16">
          <RedSquare />
          <CrosshairLabel light>Performance Metrics</CrosshairLabel>
          <div className="flex-grow h-[1px] bg-paper/10 ml-8" />
        </div>

        {/* Minimalist Grid inside the dark spine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative">
              <p className="label-tech text-muted-light mb-4">{stat.label}</p>
              <h3 className="font-serif text-5xl md:text-6xl text-paper tracking-tighter mb-4">
                {stat.value}
              </h3>
              <TrackLineH className="mb-4 bg-paper/10" />
              <p className="text-[10px] uppercase tracking-widest text-muted font-sans">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
