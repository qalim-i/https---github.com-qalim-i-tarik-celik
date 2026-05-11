import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, blurReveal } from '../utils/animations';
import { SectionHeading, CurveDivider } from './ui';

const events = [
  { date: "2025", tournament: "Sentinels Invitational 2025", tier: "A-Tier", role: "Commentator" },
  { date: "2025", tournament: "SEN City Classic 2025", tier: "Showmatch", role: "Commentator" },
  { date: "2024", tournament: "SEN City Classic 2024", tier: "Showmatch", role: "Commentator" },
  { date: "2024", tournament: "Ludwig x Tarik Invitational 2", tier: "A-Tier", role: "Host" },
  { date: "2023", tournament: "Sentinels Invitational", tier: "B-Tier", role: "Commentator" },
  { date: "2023", tournament: "G2-Sentinels Showmatch", tier: "Showmatch", role: "Commentator" },
  { date: "2023", tournament: "VALORANT Masters Tokyo", tier: "S-Tier", role: "Japanese Guest" },
  { date: "2023", tournament: "Ludwig x Tarik Invitational", tier: "A-Tier", role: "Host" },
  { date: "2022", tournament: "The Lil Bro Cup", tier: "C-Tier", role: "Commentator" },
];

export const AchievementsTable = () => {
  return (
    <section className="py-32 relative z-10 bg-esports-dark overflow-hidden">
      <CurveDivider position="top" color="#101014" />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          badge="EVENT LOG"
          title={<>Tournament & event<br /><span className="text-gradient-red">history</span></>}
          subtitle="Recent appearances as host, commentator, and guest across premier esports events."
          center
        />

        <motion.div
          variants={blurReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="overflow-hidden rounded-2xl border border-white/8 glass-card"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.03]">
                  <th className="p-5 font-bold text-gray-500 uppercase tracking-[0.15em] text-xs">Date</th>
                  <th className="p-5 font-bold text-gray-500 uppercase tracking-[0.15em] text-xs">Tournament</th>
                  <th className="p-5 font-bold text-gray-500 uppercase tracking-[0.15em] text-xs">Tier</th>
                  <th className="p-5 font-bold text-gray-500 uppercase tracking-[0.15em] text-xs">Role</th>
                </tr>
              </thead>
              <motion.tbody
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {events.map((event, index) => (
                  <motion.tr
                    key={index}
                    variants={fadeUp}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group cursor-default"
                  >
                    <td className="p-5 font-mono text-sm text-gray-600 group-hover:text-white transition-colors">{event.date}</td>
                    <td className="p-5 font-semibold text-white group-hover:text-sentinels-red transition-colors">{event.tournament}</td>
                    <td className="p-5">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        event.tier === 'S-Tier' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                        event.tier === 'A-Tier' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                        event.tier === 'B-Tier' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        'bg-gray-500/10 text-gray-400 border-gray-500/20'
                      }`}>
                        {event.tier}
                      </span>
                    </td>
                    <td className="p-5 text-gray-400 text-sm font-medium">{event.role}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
