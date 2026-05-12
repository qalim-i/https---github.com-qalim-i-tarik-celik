import React from 'react';
import { motion } from 'framer-motion';
import { slowRevealUp } from '../../utils/animations';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/* ─── EDITORIAL CARD (Sharp corners, pure white) ─────────── */
export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "editorial-card p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/* ─── LABEL MARKER (+ prefix) ────────────── */
export const CrosshairLabel = ({ children, className, light = false }) => (
  <span className={cn("label-tech", light ? "marker-crosshair-light" : "marker-crosshair", className)}>
    {children}
  </span>
);

/* ─── SECTION TITLE (Elegant Serif) ────────────── */
export const SectionTitle = ({ title, subtitle, className }) => (
  <motion.div
    variants={slowRevealUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    className={cn("mb-12", className)}
  >
    <h2 className="text-4xl md:text-6xl font-serif text-ink tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted text-sm max-w-sm font-sans font-light leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

/* ─── RED SQUARE INDICATOR ───────────────────────────── */
export const RedSquare = ({ className }) => (
  <span className={cn("inline-block w-2 h-2 bg-crimson", className)} />
);

/* ─── HORIZONTAL / VERTICAL TRACKING LINES ───────────────── */
export const TrackLineH = ({ className }) => (
  <div className={cn("track-line-h w-full", className)} />
);

export const TrackLineV = ({ className }) => (
  <div className={cn("track-line-v h-full", className)} />
);
