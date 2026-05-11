import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleInSoft } from '../utils/animations';
import { SectionHeading, Card, Badge, CurveDivider } from './ui';
import { Trophy, Star, Mic, Monitor, Globe } from 'lucide-react';

import bostonImg from '../assets/boston major tarik.png';
import redBullImg from '../assets/redbulxtarik.jpg';
import valorantImg from '../assets/tarik-playing-valorant.avif';

const highlights = [
  {
    title: "ELEAGUE Boston Major Champion",
    role: "Player — Cloud9",
    year: "2018",
    icon: <Trophy className="w-7 h-7 text-amber-400" />,
    badge: "gold",
    image: bostonImg,
    accent: "from-amber-500/20 to-transparent border-amber-500/15 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    title: "Top VALORANT Co-Streamer",
    role: "Content Creator",
    year: "Present",
    icon: <Monitor className="w-7 h-7 text-sentinels-red" />,
    badge: "red",
    image: valorantImg,
    accent: "from-sentinels-red/20 to-transparent border-sentinels-red/15 hover:border-sentinels-red/40 hover:shadow-[0_0_30px_rgba(206,0,55,0.15)]",
  },
  {
    title: "Ludwig x Tarik Invitational",
    role: "Host & Organizer",
    year: "2023–2025",
    icon: <Star className="w-7 h-7 text-purple-400" />,
    badge: "purple",
    image: null,
    accent: "from-purple-500/20 to-transparent border-purple-500/15 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  {
    title: "Red Bull Athlete",
    role: "Official Partner",
    year: "Active",
    icon: <Globe className="w-7 h-7 text-blue-400" />,
    badge: "blue",
    image: redBullImg,
    accent: "from-blue-500/20 to-transparent border-blue-500/15 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    title: "VALORANT Masters Tokyo",
    role: "Japanese Guest",
    year: "2023",
    icon: <Mic className="w-7 h-7 text-emerald-400" />,
    badge: "white",
    image: null,
    accent: "from-emerald-500/20 to-transparent border-emerald-500/15 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
];

export const CareerHighlights = () => {
  return (
    <section id="highlights" className="py-32 relative z-10 bg-esports-charcoal overflow-hidden">
      <CurveDivider position="top" color="#070709" />

      <div className="container mx-auto px-4">
        <SectionHeading
          badge="ACHIEVEMENTS"
          title={<>The best moments from a<br /><span className="text-gradient-red">legendary career</span></>}
          subtitle="From major-winning plays to pioneering the co-streaming format."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleInSoft}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className={`glass-card border bg-gradient-to-br ${item.accent} transition-all duration-500 overflow-hidden h-full relative group`}>
                {/* Background image (if available) */}
                {item.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-esports-dark via-esports-dark/80 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <Badge color={item.badge}>{item.year}</Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 text-white group-hover:text-glow-white transition-all">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
