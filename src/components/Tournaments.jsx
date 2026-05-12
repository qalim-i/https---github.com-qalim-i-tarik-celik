import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../utils/animations';
import { CrosshairLabel, TrackLineH } from './ui';

const timeline = [
  {
    version: "V.05",
    date: "JAN 2025",
    title: "Ludwig x Tarik Invitational 3",
  },
  {
    version: "V.04",
    date: "JAN 2024",
    title: "Ludwig x Tarik Invitational 2",
  },
  {
    version: "V.03",
    date: "2023",
    title: "VALORANT Masters Tokyo",
  },
  {
    version: "V.02",
    date: "OCT 2022",
    title: "The Lil Bro Cup",
  },
  {
    version: "V.01",
    date: "JAN 2018",
    title: "Boston Major Champion",
  },
];

export const Tournaments = () => {
  return (
    <section className="relative py-24 px-8 md:px-24">
      <motion.div
        variants={slowRevealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-5xl text-paper">Timeline</h2>
          <CrosshairLabel light>Historic Versions</CrosshairLabel>
        </div>

        <div className="space-y-0">
          {timeline.map((entry, i) => (
            <div key={i} className="group">
              <TrackLineH className="bg-paper/10" />
              <div className="grid grid-cols-12 gap-4 py-8 items-center transition-colors hover:bg-paper/[0.02]">
                <div className="col-span-3 md:col-span-2">
                  <p className="label-tech text-muted group-hover:text-paper transition-colors">{entry.version}</p>
                </div>
                <div className="col-span-3 md:col-span-2">
                  <p className="label-tech text-muted-light">{entry.date}</p>
                </div>
                <div className="col-span-6 md:col-span-8 text-right md:text-left">
                  <p className="font-serif text-xl md:text-3xl text-paper">{entry.title}</p>
                </div>
              </div>
            </div>
          ))}
          <TrackLineH className="bg-paper/10" />
        </div>
      </motion.div>
    </section>
  );
};
