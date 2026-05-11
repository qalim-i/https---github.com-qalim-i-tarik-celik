import React from 'react';
import { motion } from 'framer-motion';
import { glowPulse, blurReveal, cardHover } from '../../utils/animations';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/* ─── CARD ───────────────────────────────────── */
export const Card = ({ children, className, hover = true, glow = false, ...props }) => {
  return (
    <motion.div
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      variants={hover ? cardHover : {}}
      className={cn(
        "glass-card p-6 relative overflow-hidden group",
        glow && "glow-border-hover",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
};

/* ─── FLOATING CARD (for hero section) ────────── */
export const FloatingCard = ({ children, className, rotate = 0, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ type: "spring", stiffness: 60, damping: 14, delay }}
      className={cn("glass-card-strong p-4 absolute z-20 shadow-2xl", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ─── BUTTON ─────────────────────────────────── */
export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const base = "relative inline-flex items-center justify-center px-7 py-3.5 font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 ease-out tracking-wide uppercase";
  const variants = {
    primary: "bg-sentinels-red text-white shadow-[0_0_20px_rgba(206,0,55,0.4)] hover:shadow-[0_0_35px_rgba(206,0,55,0.7)] hover:scale-105",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm hover:scale-105",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    dark: "bg-esports-gray text-white border border-white/10 hover:bg-esports-light hover:scale-105",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

/* ─── SECTION HEADING ────────────────────────── */
export const SectionHeading = ({ title, subtitle, badge, className, center = false }) => (
  <motion.div
    variants={blurReveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className={cn("mb-16 md:mb-24", center && "text-center", className)}
  >
    {badge && (
      <div className={cn("inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass text-sm font-medium tracking-wider text-gray-300", center && "mx-auto")}>
        <span className="w-1.5 h-1.5 rounded-full bg-sentinels-red animate-pulse" />
        {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-[1.05] mb-5">
      {title}
    </h2>
    {subtitle && (
      <p className={cn("text-lg md:text-xl text-gray-400 font-light leading-relaxed", center ? "max-w-2xl mx-auto" : "max-w-2xl")}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

/* ─── BADGE ──────────────────────────────────── */
export const Badge = ({ children, className, color = 'red' }) => {
  const colors = {
    red: "bg-sentinels-red/15 text-sentinels-red border-sentinels-red/25",
    white: "bg-white/10 text-white border-white/15",
    dark: "bg-esports-gray text-gray-300 border-white/10",
    gold: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    purple: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    blue: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  };

  return (
    <span className={cn(
      "px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md inline-flex items-center gap-1.5 uppercase tracking-wider",
      colors[color], className
    )}>
      {children}
    </span>
  );
};

/* ─── CURVED DIVIDER ─────────────────────────── */
export const CurveDivider = ({ position = 'bottom', color = '#070709', flip = false }) => (
  <div className={cn("curve-divider", position === 'top' ? 'curve-divider-top' : 'curve-divider-bottom')}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={flip ? { transform: 'rotate(180deg)' } : {}}>
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill={color} opacity=".25" />
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill={color} opacity=".5" />
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill={color} />
    </svg>
  </div>
);
