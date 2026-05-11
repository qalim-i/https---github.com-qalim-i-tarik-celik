import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, slideFromLeft, slideFromRight, scaleInSoft, blurReveal } from '../utils/animations';
import { SectionHeading, Card, Badge, CurveDivider } from './ui';
import { Calendar, MapPin, Target, Video, Shield, Gamepad2 } from 'lucide-react';
import tarikSenImg from '../assets/lil-bro.jpg';
import tarikValorantImg from '../assets/tarik-valorant.jpg';

export const About = () => {
  const teams = [
    { name: 'Cloud9', year: '2017-18' },
    { name: 'OpTic', year: '2016-17' },
    { name: 'MIBR', year: '2018' },
    { name: 'NRG', year: '2019' },
    { name: 'Evil Geniuses', year: '2019-20' },
    { name: 'Sentinels', year: '2022-now' },
  ];

  return (
    <section id="about" className="py-32 relative z-10 bg-esports-charcoal overflow-hidden">
      <CurveDivider position="top" color="#070709" />

      <div className="container mx-auto px-4">
        <SectionHeading
          badge="THE JOURNEY"
          title={<>A legendary path through<br /><span className="text-gradient-red">esports & streaming</span></>}
          subtitle="From entry fragging on LAN to commanding the biggest co-streams in VALORANT history — this is the story of tarik."
          center
        />

        {/* Two-column content: Timeline + Device mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">

          {/* Left: Stream dashboard mockup (replaces phone mockup from reference) */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sentinels-red/10 blur-[80px] rounded-full -z-10" />

            {/* Dashboard frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-esports-dark shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-xs text-gray-500 font-mono">twitch.tv/tarik</div>
              </div>

              {/* Stream preview */}
              <div className="relative aspect-video">
                <img src={tarikValorantImg} alt="Tarik playing VALORANT" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-esports-dark/90 to-transparent" />

                {/* Overlay stats */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Live — Co-Streaming VCT</span>
                    </div>
                    <h3 className="text-white font-heading font-bold text-xl">tarik</h3>
                    <p className="text-gray-400 text-sm">VALORANT • 128,432 viewers</p>
                  </div>
                  <div className="glass px-3 py-2 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">128K</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Watching</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {[
              {
                icon: <Calendar size={18} />,
                title: "Origins",
                text: "Born February 18, 1996. Tarik \"tarik\" Celik began his journey as an aggressive rifler and entry fragger in Counter-Strike.",
                color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
              },
              {
                icon: <Shield size={18} />,
                title: "The CS:GO Legacy",
                text: "Competed at the highest level across Cloud9, OpTic Gaming, MIBR, NRG, and Evil Geniuses — culminating in a Major Championship.",
                color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
              },
              {
                icon: <Video size={18} />,
                title: "The Sentinels Era",
                text: "Now the face of Sentinels' content team, tarik has become the definitive voice of competitive VALORANT through his co-streams.",
                color: "text-sentinels-red bg-sentinels-red/10 border-sentinels-red/20",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-5 items-start group">
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center transition-all group-hover:scale-110`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1.5">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Team badges */}
            <motion.div variants={fadeUp} className="pt-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Career Teams</p>
              <div className="flex flex-wrap gap-2">
                {teams.map((t) => (
                  <Badge key={t.name} color="dark">{t.name}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Role badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              <Badge color="red"><Target size={12} /> Rifler</Badge>
              <Badge color="red"><Crosshair size={12} /> Entry Fragger</Badge>
              <Badge color="white"><Video size={12} /> Co-Streamer</Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Crosshair = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
);
