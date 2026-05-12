// Cinematic, slow, elegant animations

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const cinematicFade = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1, filter: "blur(0px)",
    transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slowRevealUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const revealRight = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const splitLetterCinematic = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const subtleParallax = {
  hidden: { y: 20 },
  show: {
    y: -20,
    transition: { duration: 5, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
};
