'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Users, Wrench, Sprout, Bug, CheckCircle2, ChevronRight, Star, ArrowRight, Quote, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/floating-card"
import { fadeInUp, staggerContainer, fadeInLeft, textReveal, scaleUp } from "@/lib/animations"

const services = [
  { id: 1, title: "Guard Service", desc: "Armed and unarmed guard services for all premises.", icon: Shield, img: "/images/IMG-20250208-WA0028.jpg", href: "/services#guard-service" },
  { id: 2, title: "Bouncer Service", desc: "Professional bouncers for events and personal protection.", icon: Users, img: "/images/IMG-20250208-WA0029.jpg", href: "/services#bouncer-service" },
  { id: 3, title: "Housekeeping", desc: "Comprehensive cleaning solutions for corporate and residential.", icon: Sprout, img: "/images/IMG_9581.JPG", href: "/services#housekeeping" },
  { id: 4, title: "STP & WTP", desc: "Operations and maintenance of water treatment plants.", icon: Wrench, img: "/images/IMG_6612.JPG", href: "/services#stp-wtp" },
  { id: 5, title: "Multi Skill Technician", desc: "Skilled technicians for electrical, plumbing, and HVAC maintenance.", icon: Wrench, img: "/images/IMG_6611.JPG", href: "/services#multi-skill-technician" },
  { id: 6, title: "Pest Control", desc: "Effective pest management and sanitization services.", icon: Bug, img: "/images/IMG_6610.JPG", href: "/services#pest-control" },
  { id: 7, title: "Gardening & Landscaping", desc: "Expert landscape design and garden maintenance.", icon: Sprout, img: "/images/IMG_6609.JPG", href: "/services#gardening-landscaping" },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 5)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* ─── Hero Section ─────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_20240111_084100.jpg"
            alt="Security Guards Parade"
            fill
            className="object-cover object-center brightness-[0.32]"
            priority
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-transparent to-transparent" />
        </div>

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content — CENTERED on mobile, left-aligned on lg+ */}
        <div className="container relative z-10 px-5 md:px-8 flex flex-col items-center lg:items-start max-w-7xl mx-auto pt-24 pb-20 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-8"
          >
            {/* Trust badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 font-semibold text-xs md:text-sm shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PSARA-Certified · Premium Security & Facility Services</span>
            </motion.div>

            {/* Headline */}
            <div className="w-full relative">
              {/* Moved the glow here so it doesn't get clipped by any overflow issues */}
              <div 
                className="absolute inset-0 blur-[60px] opacity-30 pointer-events-none" 
                style={{ background: "linear-gradient(120deg,#f59e0b,#f97316,#fbbf24)" }} 
                aria-hidden="true" 
              />
              <div className="overflow-hidden w-full relative z-10">
                <motion.h1
                  variants={textReveal}
                  className="text-[2.6rem] leading-[1.15] sm:text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tight"
                >
                  Your Safety Is{" "}
                  <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 pb-2">
                    Our Profession
                  </span>
                </motion.h1>
              </div>
            </div>


            {/* Subtitle — shorter on mobile */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-xl leading-relaxed"
            >
              Trusted by communities, corporate offices, and industrial hubs across Bangalore for uncompromising security and facility management.
            </motion.p>

            {/* CTA Buttons — side by side even on mobile */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row gap-3 sm:gap-4 w-full max-w-sm lg:max-w-none lg:w-auto pt-2"
            >
              <Link href="/contact" className="flex-1 lg:flex-none">
                <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-5 sm:px-8 rounded-xl text-sm sm:text-base font-bold text-slate-900
                  bg-gradient-to-r from-amber-400 to-amber-500
                  shadow-[0_0_20px_rgba(245,158,11,0.45)]
                  hover:shadow-[0_0_32px_rgba(245,158,11,0.7)]
                  hover:scale-105 active:scale-95
                  transition-all duration-300">
                  Get Service <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services" className="flex-1 lg:flex-none">
                <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-5 sm:px-8 rounded-xl text-sm sm:text-base font-bold text-white
                  border border-white/25 bg-white/8 backdrop-blur-md
                  hover:bg-white hover:text-primary
                  active:scale-95
                  transition-all duration-300">
                  Our Services
                </button>
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 sm:gap-10 pt-4 border-t border-white/10 w-full max-w-sm lg:max-w-none mt-2"
            >
              {[
                { value: "150+", label: "Guards" },
                { value: "50+",  label: "Clients" },
                { value: "4+",   label: "Years" },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label} 
                  className="flex flex-col items-center lg:items-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            className="w-[1.5px] h-8 bg-gradient-to-b from-amber-400/80 to-transparent rounded-full"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ─── About Section ────────────────────────────────────── */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider">
                <Shield className="w-4 h-4" /> About D1 Secure
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
                Excellence Through <span className="text-secondary relative inline-block">Integrity</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed text-xl">
                We provide a robust shield for your operations. D1 Secure And Facilities delivers comprehensive, PSARA-compliant security and facility management solutions engineered for peace of mind.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6 pt-6">
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Highly Trained</h4>
                    <p className="text-sm text-slate-500">Rigorous vetting and training protocols.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Fully Certified</h4>
                    <p className="text-sm text-slate-500">ISO, PSARA, and all regulatory compliances.</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8">
                <Link href="/about">
                  <Button className="group h-14 px-8 text-base bg-secondary hover:bg-primary transition-all rounded-xl shadow-lg hover:shadow-xl">
                    More About Us <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="/images/IMG-20250414-WA0059.jpg"
                alt="About D1 Secure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6">
                <div className="text-accent">
                  <Shield className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Since 2021</h4>
                  <p className="text-slate-200">Securing the Nation&apos;s Assets</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ────────────────────────────────── */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider"
            >
              Our Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-primary"
            >
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600"
            >
              A full spectrum of facility management and professional security solutions.
            </motion.p>
          </div>

          {/* ── Service Cards with FloatingCard ─────────────── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link href={service.href} key={service.id}>
                  <FloatingCard
                    delay={index * 0.08}
                    floatOffset={index % 2 === 1}
                    className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-[500px]"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center text-secondary group-hover:text-accent group-hover:scale-110 transition-all duration-300 transform -rotate-3 group-hover:rotate-0">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1 bg-gradient-to-b from-white to-slate-50/50">
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                      <p className="text-slate-600 mb-6 flex-1 text-lg leading-relaxed">{service.desc}</p>
                      <div className="flex items-center text-secondary font-bold text-lg mt-auto group-hover:text-accent transition-colors">
                        Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </FloatingCard>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonial Slider ───────────────────────────────── */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-800 to-primary" />

        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-white">Client Success Stories</motion.h2>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-slate-300">Unwavering trust built over the years.</motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl flex flex-col justify-center"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <p className="text-xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
                  {currentTestimonial === 0 && `"Residents feel much more relaxed after onboarding D1Secure – the guards are alert 24/7."`}
                  {currentTestimonial === 1 && `"We rely on D1 Secure for our campus access control. Extremely professional service."`}
                  {currentTestimonial === 2 && `"The housekeeper staff is diligent, and the security team acts as a strong deterrent."`}
                  {currentTestimonial === 3 && `"Handling security at a logistics hub is challenging, but D1 Secure manages it flawlessly."`}
                  {currentTestimonial === 4 && `"We required a mix of housekeeping and specialized bouncers. D1 provided an integrated solution."`}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-slate-900 font-bold text-2xl">
                    {['B', 'T', 'S', 'G', 'U'][currentTestimonial]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">{['Brindavan Palms', 'TechHub IT', 'Sunrise Apts', 'Global Logistics', 'Urban Malls'][currentTestimonial]}</h4>
                    <p className="text-slate-400">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {[0, 1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'w-10 bg-accent' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <FloatingCard
              float={true}
              floatOffset={false}
              revealY={40}
              className="bg-gradient-to-br from-primary via-slate-800 to-secondary p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden text-center max-w-6xl mx-auto"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Secure Your Future?</h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
                Contact us today for a free consultation. Our experts will assess your needs and provide a tailored operational plan.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-xl font-bold bg-accent hover:bg-white hover:text-primary text-slate-900 shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 rounded-2xl">
                  Contact Us Now
                </Button>
              </Link>
            </FloatingCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
