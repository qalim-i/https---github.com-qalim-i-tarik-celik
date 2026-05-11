import React from 'react';
import { motion } from 'framer-motion';
import { blurReveal } from '../utils/animations';
import { Button } from './ui';
import { Play } from 'lucide-react';
import heroImg from '../assets/tarik-valorant.jpg';

export const CinematicBanner = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-end z-10">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Esports arena" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-esports-dark via-esports-dark/60 to-esports-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-esports-dark/80 to-transparent" />
      </div>

      {/* Animated light streaks */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-sentinels-red/40 to-transparent"
        />
        <motion.div
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 4, delay: 2 }}
          className="absolute top-2/3 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-sentinels-red text-xs font-bold uppercase tracking-[0.25em] mb-4">The Legacy Continues</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase leading-[1.05] mb-6">
            Expansion of<br />tarik's streaming<br /><span className="text-gradient-red">empire</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            From arena stages to 100K viewer co-streams, the journey is far from over. The competitive spirit lives on.
          </p>
          <Button variant="primary" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play size={16} /> Explore Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
