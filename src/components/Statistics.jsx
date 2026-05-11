import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, scaleInSoft, slideFromLeft, slideFromRight } from '../utils/animations';
import { SectionHeading, Card, CurveDivider } from './ui';
import { TrendingUp, BarChart3, Award, Users } from 'lucide-react';

/* ─── Animated Counter ─────────────────────── */
const Counter = ({ from = 0, to, duration = 2.2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Mini Bar Chart ───────────────────────── */
const MiniChart = () => {
  const bars = [40, 55, 35, 70, 60, 85, 75, 95, 80, 100, 90, 110];
  return (
    <div className="flex items-end gap-1 h-24 w-full">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 14 }}
          className="flex-1 rounded-t bg-gradient-to-t from-sentinels-red to-sentinels-red/40 min-w-0"
        />
      ))}
    </div>
  );
};

export const Statistics = () => {
  const stats = [
    { label: "Years Active", value: 10, suffix: "+", icon: <TrendingUp size={20} /> },
    { label: "Tournament Appearances", value: 85, suffix: "+", icon: <BarChart3 size={20} /> },
    { label: "Events Organized", value: 4, suffix: "", icon: <Award size={20} /> },
    { label: "Championship Wins", value: 12, suffix: "", icon: <Users size={20} /> },
  ];

  return (
    <section className="py-32 relative z-10 bg-esports-dark overflow-hidden">
      <CurveDivider position="top" color="#101014" />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="PERFORMANCE"
          title={<>See the growth<br /><span className="text-gradient-red">in numbers</span></>}
          subtitle="A career defined by consistent performance at the highest level — from LAN stages to 100K+ viewer streams."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Left: Chart + context */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <Card className="!p-0 overflow-hidden" hover={false}>
              <div className="p-6 pb-0 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Streaming Growth</p>
                  <p className="text-3xl font-heading font-black text-white mt-1">
                    <Counter from={0} to={395} suffix="K" /> <span className="text-sm text-gray-400 font-normal">peak viewers</span>
                  </p>
                </div>
                <div className="glass px-3 py-1.5 rounded-full text-xs font-bold text-green-400 flex items-center gap-1">
                  <TrendingUp size={14} /> +247%
                </div>
              </div>
              <div className="p-6">
                <MiniChart />
                <div className="flex justify-between text-[10px] text-gray-600 mt-2 px-1">
                  <span>2017</span><span>2019</span><span>2021</span><span>2023</span><span>2025</span>
                </div>
              </div>
            </Card>

            {/* Sub-card: investment-style stat (matches reference calculator area) */}
            <Card className="mt-4 !bg-esports-gray/50" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Career Earnings (CS:GO)</p>
                  <p className="text-2xl font-heading font-bold text-white mt-1">$289,869</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Avg. Concurrent Viewers</p>
                  <p className="text-2xl font-heading font-bold text-white mt-1">42.3K</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Stat counters grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={scaleInSoft}>
                <Card className="text-center h-full flex flex-col items-center justify-center" glow>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sentinels-red mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-white text-glow">
                    <Counter from={0} to={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/15 rounded-tl" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/15 rounded-tr" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/15 rounded-bl" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/15 rounded-br" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
