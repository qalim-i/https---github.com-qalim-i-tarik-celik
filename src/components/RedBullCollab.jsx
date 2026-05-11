import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideFromLeft, blurReveal } from '../utils/animations';
import { Button, CurveDivider } from './ui';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import redBullImg from '../assets/redbulxtarik.jpg';

export const RedBullCollab = () => {
  return (
    <section className="py-32 relative z-10 bg-esports-dark overflow-hidden">
      <CurveDivider position="top" color="#101014" />

      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111C4E]/10 skew-x-[-20deg] translate-x-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#DB0A40]/5 skew-x-[20deg] -translate-x-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:w-1/2"
          >
            <motion.div variants={slideFromLeft} className="mb-6 inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#DB0A40] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#B3C0DB] uppercase">Official Partner</span>
            </motion.div>

            <motion.div variants={slideFromLeft}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 uppercase leading-[1.05]">
                Red Bull <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] to-[#FFC200]">Athlete</span>
              </h2>
            </motion.div>

            <motion.p variants={slideFromLeft} className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl">
              Tarik is proud to be an official Red Bull Athlete, representing the brand on the global stage. From high-octane content creation to epic live events, the partnership fuels the next generation of esports entertainment.
            </motion.p>

            <motion.div variants={slideFromLeft} className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.redbull.com/in-en/athlete/tarik-tarik-celik" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className="bg-[#111C4E] hover:bg-[#111C4E]/80 border-[#B3C0DB]/15">
                  Athlete Profile <ExternalLink size={14} />
                </Button>
              </a>
              <a href="https://www.redbullcontentpool.com/search?q=Tarik%20%27tarik%27%20%C3%87elik" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-[#B3C0DB] border-[#B3C0DB]/20 hover:border-[#B3C0DB]/50">
                  <ImageIcon size={14} /> Content Pool
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/8 group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111C4E]/30 to-[#DB0A40]/15 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img
                src={redBullImg}
                alt="Tarik Red Bull Collaboration"
                className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-5 right-5 z-20 w-14 h-14 glass rounded-full flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#DB0A40] to-[#FFC200] opacity-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
