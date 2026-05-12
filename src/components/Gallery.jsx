import React from 'react';
import { motion } from 'framer-motion';
import { CrosshairLabel } from './ui';

import img1 from '../assets/boston major tarik.png';
import img2 from '../assets/tarik-playing-valorant.avif';
import img3 from '../assets/tarik-valorant.jpg';
import img4 from '../assets/lil-bro.jpg';
import img5 from '../assets/redbulxtarik.jpg';
import img7 from '../assets/tarik-classy.png';
import img8 from '../assets/tarik-gym.png';
import img9 from '../assets/tarik-imasleep.png';
import img10 from '../assets/tarik-mirror.png';
import img11 from '../assets/tarik-chillguy.png';

const images = [img1, img2, img3, img4, img5, img7, img8, img9, img10, img11];

export const Gallery = () => {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <div className="px-8 md:px-16 mb-16 relative z-10">
         <CrosshairLabel light>Visual Records</CrosshairLabel>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex w-max"
        >
          {duplicatedImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-[50vh] md:h-[60vh] bg-white/5 mr-4 md:mr-8"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover mix-blend-luminosity grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-700 ease-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
