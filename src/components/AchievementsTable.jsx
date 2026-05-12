import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel, TrackLineV } from './ui';

import bostonImg from '../assets/boston major tarik.png';
import valorantImg from '../assets/tarik-playing-valorant.avif';
import tariklud from '../assets/ludwigXtarik.jpg';

const achievements = [
  {
    rank: "1st",
    title: "ELEAGUE BOSTON MAJOR",
    subtitle: "Champion (2018)",
    desc: "The crowning achievement of tarik's CS:GO career. Secured the first-ever NA Major Championship in a historic Grand Final against FaZe Clan.",
    image: bostonImg,
  },
  {
    rank: "2nd",
    title: "CO-STREAM KING",
    subtitle: "VALORANT (Present)",
    desc: "Pioneered the co-streaming format, pulling 395K+ concurrent viewers during VCT events—exceeding the official main broadcast.",
    image: valorantImg,
  },
  {
    rank: "3rd",
    title: "LUDWIG x TARIK",
    subtitle: "Invitational",
    desc: "Co-created one of the most popular community-driven VALORANT tournaments, bringing together the biggest names in North American esports.",
    image: tariklud,
  },
];

export const AchievementsTable = () => {
  return (
    <section className="relative py-32 overflow-visible">
      <div className="px-8 md:px-0">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            variants={slowRevealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row items-center gap-12 mb-32 last:mb-0 ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* The giant serif number overlapping the edge of the spine */}
            {/* FIX: Changed color to text-ink opacity-10 since it sits over the light paper background */}
            <div className={`absolute top-0 md:top-1/2 md:-translate-y-1/2 z-20 ${
              i % 2 === 1 ? 'right-0 translate-x-[30%]' : 'left-0 -translate-x-[30%]'
            }`}>
              <span className="text-[8rem] md:text-[16rem] font-serif font-bold text-ink opacity-10 drop-shadow-sm select-none">
                {item.rank}<span className="text-[4rem] md:text-[8rem]">.</span>
              </span>
            </div>

            {/* The Image (if exists) feathered into the spine */}
            <div className="w-full md:w-1/2 relative h-[400px]">
              {item.image ? (
                <div className={`absolute inset-0 overflow-hidden ${
                  i % 2 === 1 ? 'mask-feather-left' : 'mask-feather-all'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover mix-blend-screen opacity-80"
                  />
                </div>
              ) : (
                <div className="w-full h-full border border-white/5 flex flex-col items-center justify-center p-8 text-center bg-ink">
                   <CrosshairLabel light>Tournament Structure</CrosshairLabel>
                   <p className="font-serif text-paper text-2xl mt-4">$50,000 Prize Pool</p>
                </div>
              )}
            </div>

            {/* Text Information Block */}
            <div className={`w-full md:w-1/2 z-30 ${i % 2 === 1 ? 'text-right md:pr-16' : 'md:pl-16'}`}>
              <CrosshairLabel light>{item.subtitle}</CrosshairLabel>
              <h3 className="font-serif text-3xl md:text-5xl text-paper mt-4 mb-6">
                {item.title}
              </h3>
              <p className="text-muted font-sans font-light text-sm leading-relaxed max-w-sm ml-auto mr-auto md:mx-0">
                {item.desc}
              </p>
              
              <div className={`mt-8 flex gap-8 ${i % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                 <TrackLineV className="h-12 bg-crimson" />
                 <div className="text-left">
                   <p className="label-tech text-muted-light mb-1">Impact</p>
                   <p className="font-serif text-paper">Legendary</p>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
