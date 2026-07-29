import type { Transition, Variants } from 'framer-motion';

/* ============================================
   SHARED ANIMATION CONFIGURATIONS
   Single source of truth for all framer-motion
   transitions and variants across the app.
   ============================================ */

/* ---------- SPRING TRANSITIONS ---------- */

export const springStiff: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 24,
};

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 28,
};

export const springBouncy: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

export const springSmooth: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

export const springLoose: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 28,
};

export const springSnap: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
};

export const springQuick: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 15,
};

export const springNav: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 15,
};

export const springWobble: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const springLight: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
};

export const springSlow: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
};

export const fadeTransition: Transition = {
  duration: 0.2,
  ease: 'easeOut',
};

/* ---------- STAGGER VARIANTS ---------- */

export function staggerContainer(delay: number = 0.1): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };
}

export function staggerItem(y: number = 20): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: springStiff,
    },
  };
}

export function staggerItemGentle(y: number = 16): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: springLoose,
    },
  };
}

/* ---------- COMMON PATTERNS ---------- */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: springStiff },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: springStiff },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: springStiff },
};
