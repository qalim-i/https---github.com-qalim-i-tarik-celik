// Reusable Framer Motion variants — cinematic, premium esports feel

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 70 },
  show: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 30 },
  show: {
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export const scaleInSoft = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -18, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatingAnimationSlow = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatingAnimationDelay = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
  },
};

export const glowPulse = {
  initial: { boxShadow: "0 0 0px rgba(206, 0, 55, 0)" },
  hover: {
    boxShadow: "0 0 25px rgba(206, 0, 55, 0.5), 0 0 50px rgba(206, 0, 55, 0.2)",
    scale: 1.02,
    transition: { duration: 0.35 },
  },
};

export const splitLetterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -80 },
  show: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring", damping: 14, stiffness: 90 },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};
