import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, scaleInSoft } from '../utils/animations';
import { SectionHeading, Card, CurveDivider } from './ui';
import { Trophy, MapPin, Calendar, DollarSign, ChevronDown, Users } from 'lucide-react';

const tournaments = [
  {
    id: 1, name: "Ludwig x Tarik Invitational 3", prizePool: "$50,000", location: "Los Angeles, CA",
    dates: "Jan 13–14, 2025", winner: "TBD", runnerUp: "TBD",
  },
  {
    id: 2, name: "Ludwig x Tarik Invitational 2", prizePool: "$50,000", location: "Los Angeles, CA",
    dates: "Jan 13–14, 2024", winner: "Sentinels", runnerUp: "Moist x Shopify",
  },
  {
    id: 3, name: "Ludwig x Tarik Invitational", prizePool: "$50,000", location: "Los Angeles, CA",
    dates: "Jan 14–15, 2023", winner: "The Guard", runnerUp: "TSM",
  },
  {
    id: 4, name: "The Lil Bro Cup", prizePool: "$10,000", location: "Online",
    dates: "Oct 25, 2022", winner: "Team Stewart", runnerUp: "Team Brax",
  },
];

export const Tournaments = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="tournaments" className="py-32 relative z-10 bg-esports-charcoal overflow-hidden">
      <CurveDivider position="top" color="#070709" />

      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          badge="ORGANIZED EVENTS"
          title={<>Tournaments hosted<br /><span className="text-gradient-red">by tarik</span></>}
          subtitle="From community cups to premier invitationals with $50K prize pools."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {tournaments.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <div
                className="glass-card border border-white/8 hover:border-sentinels-red/20 transition-all cursor-pointer overflow-hidden"
                onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sentinels-red/10 flex items-center justify-center text-sentinels-red border border-sentinels-red/15">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{t.name}</h3>
                      <p className="text-xs text-gray-500 font-medium">{t.dates}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === t.id ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <ChevronDown className="text-gray-500" size={20} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedId === t.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 16 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          { icon: <DollarSign size={14} />, label: "Prize Pool", value: t.prizePool },
                          { icon: <MapPin size={14} />, label: "Location", value: t.location },
                          { icon: <Trophy size={14} className="text-amber-400" />, label: "Winner", value: t.winner },
                          { icon: <Users size={14} />, label: "Runner-Up", value: t.runnerUp },
                        ].map((d, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                              {d.icon}
                              <span className="text-[10px] uppercase tracking-widest font-bold">{d.label}</span>
                            </div>
                            <p className="font-semibold text-white text-sm">{d.value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
