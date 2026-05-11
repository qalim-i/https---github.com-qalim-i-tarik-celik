import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';
import { SectionHeading, CurveDivider } from './ui';

import img1 from '../assets/boston major tarik.png';
import img2 from '../assets/tarik-playing-valorant.avif';
import img3 from '../assets/tarik-valorant.jpg';
import img4 from '../assets/lil-bro.jpg';
import img5 from '../assets/redbulxtarik.jpg';

const images = [
  { src: img1, alt: "Boston Major Champion", span: "col-span-12 md:col-span-8 row-span-2", label: "ELEAGUE Boston Major 2018" },
  { src: img2, alt: "VALORANT Gameplay", span: "col-span-6 md:col-span-4", label: "Co-Streaming VCT" },
  { src: img3, alt: "Tarik VALORANT", span: "col-span-6 md:col-span-4", label: "Content Creation" },
  { src: img4, alt: "Event Stage", span: "col-span-12 md:col-span-6", label: "Live Event" },
  { src: img5, alt: "Red Bull Collab", span: "col-span-12 md:col-span-6", label: "Red Bull Partnership" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 relative z-10 bg-esports-charcoal overflow-hidden">
      <CurveDivider position="top" color="#070709" />

      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          badge="GALLERY"
          title={<>Moments in <span className="text-gradient-red">time</span></>}
          subtitle="Captured highlights from tournaments, streams, and behind the scenes."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-12 gap-3 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`${img.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white text-sm font-bold uppercase tracking-wider translate-y-3 group-hover:translate-y-0 transition-transform duration-500">{img.label}</span>
              </div>
              <div className="absolute inset-0 z-5 bg-sentinels-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
