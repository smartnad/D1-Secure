import { Variants } from "framer-motion"

// ─── Scroll Reveal ───────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Stagger Containers ───────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.08 },
  },
}

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

// ─── Card Scroll Reveal (mobile-optimised: shorter distance) ─────
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Legacy hover (desktop whileHover) ───────────────────────────
export const cardHover: Variants = {
  hover: {
    y: -10,
    boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.22)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
}

// ─── Gentle Float Loop ───────────────────────────────────────────
// Subtle vertical bob — GPU transform only, safe for mobile
export const gentleFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// Offset version so adjacent cards don't all float in sync
export const gentleFloatDelayed: Variants = {
  initial: { y: 0 },
  animate: {
    y: [5, -5, 5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
}

/** @deprecated — too aggressive for mobile, use gentleFloat instead */
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
}

// ─── Mobile Tap Press Feedback ───────────────────────────────────
export const tapPress = {
  whileTap: { scale: 0.96, transition: { duration: 0.15 } },
}

// ─── Mobile Auto-hover (viewport enter → slight lift) ────────────
export const mobileHoverIn: Variants = {
  offscreen: { scale: 1, boxShadow: "0 4px 20px rgba(15,23,42,0.06)" },
  onscreen: {
    scale: 1.02,
    boxShadow: "0 16px 40px rgba(15,23,42,0.13)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

// ─── Text Reveal ─────────────────────────────────────────────────
export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Scale Up ────────────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}
