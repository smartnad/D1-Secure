'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, textReveal, fadeInUp } from "@/lib/animations"
import { FloatingCard } from "@/components/floating-card"
import { Star, Quote, ShieldCheck } from "lucide-react"

const testimonialsData = [
  { client: "Brindavan Palms", role: "Residential Client", rating: 5, review: "Residents feel much more relaxed after onboarding D1Secure – the guards are alert 24/7 and entry/exit is tightly monitored without disturbing daily convenience." },
  { client: "TechHub IT Park", role: "Corporate Client", rating: 5, review: "We rely on D1 Secure for our campus access control. Their guards are well-trained, and the facilities management team keeps our premises spotless. Extremely professional service." },
  { client: "Sunrise Apartments", role: "Residential Client", rating: 5, review: "The housekeeper staff is diligent, and the security team acts as a strong deterrent. We've seen a noticeable improvement since making the switch to D1 Secure." },
  { client: "Global Logistics", role: "Industrial Client", rating: 5, review: "Handling security at a logistics hub is challenging, but D1 Secure manages it flawlessly. Their armed guards and perimeter checks are highly reliable." },
  { client: "Urban Oasis Malls", role: "Commercial Retail", rating: 5, review: "We required a mix of housekeeping, specialized bouncers for events, and standard security. D1 provided an integrated solution with great ROI." },
  { client: "Acme Pharmaceuticals", role: "Industrial Client", rating: 5, review: "Their multi-skill technicians have reduced our overall maintenance downtime drastically. Great service, punctual and well-certified technicians." },
  { client: "Greenwood Enclave", role: "Residential Client", rating: 5, review: "Our STP had constant issues until D1 Secure took over operations. They brought expertise and resolved the operational bottlenecks perfectly." },
  { client: "City Center Clinics", role: "Healthcare Client", rating: 5, review: "From deep cleaning and sanitization to patient traffic management, the staff is very polite and understands the sensitive nature of our business." },
  { client: "Silver Oak Builders", role: "Construction Client", rating: 5, review: "We strongly recommend D1 Secure for heavy-duty site security. They handled material gate-pass systems and worker verifications without a hitch." },
  { client: "Crescent Club", role: "Hospitality Client", rating: 5, review: "The bouncer service provided for our weekend events is top-notch. They handle difficult situations calmly without escalating them. Exceptional team." },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50 min-h-[90vh]">

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenBurns_20s_ease-out_forwards]">
          <Image
            src="/images/IMG-20250731-WA0009.jpg"
            alt="Client Testimonials"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto mt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 flex flex-col items-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-sm backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Star className="w-4 h-4 text-accent fill-accent" /> Guaranteed Satisfaction
            </motion.div>

            <div className="overflow-hidden w-full">
              <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">They Say</span>
              </motion.h1>
            </div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl leading-relaxed">
              Unwavering trust built over the years across residential complexes, commercial spaces, and industrial hubs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonial Cards Grid ───────────────────────────── */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {testimonialsData.map((t, index) => (
            <FloatingCard
              key={index}
              delay={index * 0.07}
              floatOffset={index % 2 === 1}
              float={true}
              className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col relative group"
            >
              {/* inner padding needed because FloatingCard wraps a full-height div */}
              <div className="p-8 md:p-10 flex flex-col h-full">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-accent/10 transition-colors duration-500 transform group-hover:rotate-12" />

                <div className="flex gap-1 text-accent mb-6 z-10">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed italic border-l-4 border-slate-100 pl-5 group-hover:border-accent group-hover:text-slate-800 transition-colors duration-500 mb-8 z-10 flex-1">
                  &quot;{t.review}&quot;
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-slate-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-transparent group-hover:ring-accent/20 transition-all duration-500 shrink-0">
                    {t.client.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary text-base">{t.client}</h4>
                    <span className="text-sm font-semibold text-secondary">{t.role}</span>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>
    </div>
  )
}
