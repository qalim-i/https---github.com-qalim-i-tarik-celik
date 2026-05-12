import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel } from './ui';

const quotes = [
  "Ayooo",
  "My hands are cold, bro.",
  "I don't know what I'm doing.",
  "Unc",
  "I'm not even trying.",
  "I'm just here for content.",
  "Lil bro",
];

export const Trivia = () => {
  return (
    <section className="relative py-32 overflow-visible">
      <div className="relative z-10 px-8">
        <CrosshairLabel light>Iconic Lines</CrosshairLabel>
        
        <div className="mt-20 flex flex-col gap-12">
          {quotes.map((quote, i) => (
            <motion.div 
              key={i}
              variants={slowRevealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className={`w-full ${i % 2 === 1 ? 'text-right' : 'text-left'}`}
            >
              {/* FIX: Changed text color to text-ink opacity-10 since these break out completely over the paper background */}
              <h2 className={`font-serif text-5xl md:text-7xl lg:text-[7rem] leading-none text-muted-light opacity-30 whitespace-nowrap 
                ${i % 2 === 1 ? 'md:-mr-[40%]' : 'md:-ml-[40%]'} 
                hover:opacity-100 transition-opacity duration-700 cursor-default select-none
              `}>
                "{quote}"
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
