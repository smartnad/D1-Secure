'use client'

/**
 * FloatingCard
 * ─────────────────────────────────────────────────────────────────
 * A zero-dependency wrapper that applies three animation layers
 * to any card / UI block:
 *
 *  1. SCROLL REVEAL   — fades + slides up when entering viewport
 *  2. GENTLE FLOAT    — subtle infinite Y bob (GPU-only)
 *  3. MOBILE TAP      — scale-down press feedback on tap
 *
 * Mobile auto-hover is simulated via the `mobileHoverIn` variant
 * which fires on `whileInView` – giving a brief scale/shadow lift
 * when the card enters the viewport on touch devices.
 *
 * Props
 *  children      — card content
 *  className     — passthrough Tailwind classes
 *  delay         — stagger offset in seconds (default 0)
 *  float         — enable float loop (default true)
 *  floatOffset   — use opposite float phase (default false)
 *  revealY       — travel distance for reveal (default 28px)
 */

import React from "react"
import { motion, MotionProps } from "framer-motion"

interface FloatingCardProps extends Omit<MotionProps, "children"> {
  children: React.ReactNode
  className?: string
  delay?: number
  float?: boolean
  floatOffset?: boolean
  revealY?: number
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  float = true,
  floatOffset = false,
  revealY = 28,
  ...rest
}: FloatingCardProps) {

  const floatY = floatOffset ? [4, -4, 4] : [-4, 4, -4]

  return (
    <motion.div
      // ── 1. Scroll reveal & Mobile Auto-Hover ────────────────────
      initial={{ opacity: 0, y: revealY, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: [0.95, 1.03, 1],
        boxShadow: [
          "0px 0px 0px rgba(0,0,0,0)", 
          "0px 15px 35px rgba(15,23,42,0.1)", 
          "0px 4px 15px rgba(15,23,42,0.05)"
        ]
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}

      // ── 2. Desktop hover lift ──────────────────────────────────
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}

      // ── 3. Mobile tap press ────────────────────────────────────
      whileTap={{
        scale: 0.97,
        boxShadow: "0 2px 10px rgba(15,23,42,0.1)",
        transition: { duration: 0.15 },
      }}

      className={className}
      style={{ willChange: "transform, opacity, box-shadow" }}
      {...rest}
    >
      {/* ── 4. Inner float loop (Y axis only) ──────────────────── */}
      {float ? (
        <motion.div
          className="w-full h-full"
          animate={{ y: floatY }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: floatOffset ? 1.5 : 0,
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  )
}
