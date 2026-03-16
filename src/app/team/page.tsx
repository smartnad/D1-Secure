'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations"
import { FloatingCard } from "@/components/floating-card"
import { ShieldCheck } from "lucide-react"
import { teamMembers } from "@/lib/team-data"

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F8FAFC] min-h-screen">

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG-20250731-WA0024.jpg"
            alt="D1 Secure Team"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto mt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 flex flex-col items-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-semibold text-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" /> The People Behind Your Safety
            </motion.div>

            <div className="overflow-hidden w-full">
              <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Team</span>
              </motion.h1>
            </div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Dedicated professionals committed to security excellence and world-class facility management.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10" />
      </section>

      {/* ─── Team Grid ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A]">
            Our <span className="text-[#1E3A8A]">Leadership</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto">
            A team built on trust, discipline, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Cards use FloatingCard — reveal + float + tap press */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <FloatingCard
              key={index}
              delay={index * 0.07}
              floatOffset={index % 2 === 1}
              float={true}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.07)] border border-slate-100 flex flex-col group cursor-default"
            >
              {/* Portrait Image */}
              <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "4/5" }}>
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="px-6 py-5 text-center flex flex-col items-center bg-white border-t border-slate-100">
                <h3 className="text-[1.1rem] font-extrabold text-[#0B132B] tracking-tight leading-snug">
                  {member.name}
                </h3>
                <div className="mt-2 mb-2 w-10 h-[2px] bg-[#1E3A8A] rounded-full group-hover:w-16 transition-all duration-500" />
                <p className="text-[#1E3A8A] text-sm font-medium italic">{member.role}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>
    </div>
  )
}
