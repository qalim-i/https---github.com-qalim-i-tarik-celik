import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleInSoft } from '../utils/animations';
import { SectionHeading, Card, CurveDivider } from './ui';
import { Info, MessageSquare, Quote } from 'lucide-react';

export const Trivia = () => {
  const facts = [
    {
      icon: <Info className="w-6 h-6 text-blue-400" />,
      title: "Role Transition",
      text: "Was primarily known as a highly aggressive rifler and entry fragger during his long CS:GO career before transitioning to content creation.",
      gradient: "from-blue-500/15 via-transparent to-transparent",
      border: "border-blue-500/15 hover:border-blue-500/30",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-sentinels-red" />,
      title: "Voice of VALORANT",
      text: "Currently one of the most popular VALORANT co-streamers globally, regularly drawing higher viewership than the main official broadcasts.",
      gradient: "from-sentinels-red/15 via-transparent to-transparent",
      border: "border-sentinels-red/15 hover:border-sentinels-red/30",
    },
    {
      icon: <Quote className="w-6 h-6 text-purple-400" />,
      title: "Famous Comparison",
      text: "Famously compared Evil Geniuses' Cinderella run at VALORANT Champions 2023 to his own Cloud9 Boston Major run in 2018.",
      gradient: "from-purple-500/15 via-transparent to-transparent",
      border: "border-purple-500/15 hover:border-purple-500/30",
    },
  ];

  return (
    <section className="py-32 relative z-10 bg-esports-dark overflow-hidden">
      <CurveDivider position="top" color="#101014" />

      <div className="container mx-auto px-4">
        <SectionHeading
          badge="TRIVIA"
          title={<>Did you <span className="text-gradient-red">know?</span></>}
          subtitle="Memorable moments and fun facts from tarik's journey."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {facts.map((fact, i) => (
            <motion.div key={i} variants={scaleInSoft} className="h-full">
              <div className={`glass-card border ${fact.border} bg-gradient-to-br ${fact.gradient} p-7 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-lg`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {fact.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{fact.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{fact.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
