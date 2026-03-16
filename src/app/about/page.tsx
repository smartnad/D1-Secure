'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Eye, Target, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, textReveal, scaleUp } from "@/lib/animations"
import { FloatingCard } from "@/components/floating-card"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* Enhanced Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/IMG-20250731-WA0012.jpg" 
            alt="About D1 Secure" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto mt-20">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm backdrop-blur-md">
               <ShieldCheck className="w-5 h-5" /> Establishing Trust Since 2021
             </motion.div>
             
             <div className="overflow-hidden">
               <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                 Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">We Are</span>
               </motion.h1>
             </div>
             
             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
               D1 Secure And Facilities - Engineered for your safety, built on an uncompromising foundation of excellence.
             </motion.p>
           </motion.div>
        </div>
      </section>

      {/* Spacious Company Overview */}
      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Pioneers in <span className="text-secondary relative inline-block">Modern Security</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-xl leading-relaxed">
              D1 Secure And Facilities provides professional security and facility management solutions exclusively adapted for residential, corporate, and massive industrial environments across India.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-600 text-xl leading-relaxed">
              Operating rigorously under PSARA regulations, our deployed personnel bring unparalleled training, technological literacy, and operational efficiency to every facility in Bangalore and beyond.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="pt-8 grid grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-4xl font-black text-accent mb-2">150+</h4>
                <p className="font-bold text-primary">Trained Guards</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-4xl font-black text-secondary mb-2">50+</h4>
                <p className="font-bold text-primary">Happy Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <Image 
              src="/images/IMG-20250731-WA0006.jpg" 
              alt="D1 Secure Overview" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-32 bg-gradient-to-br from-primary via-slate-900 to-secondary relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <FloatingCard
              delay={0}
              float={true}
              floatOffset={false}
              className="bg-white/10 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] shadow-2xl border border-white/20 flex flex-col items-start group"
            >
              <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mb-8 text-slate-900 shadow-[0_0_30px_rgba(245,158,11,0.5)] transform -rotate-6 group-hover:rotate-0 transition-transform">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6">Our Mission</h3>
              <p className="text-slate-300 text-xl leading-relaxed">
                To provide universally reliable, overwhelmingly professional, and deeply trustworthy security and facility management services that effortlessly scale with our clients&apos; needs.
              </p>
            </FloatingCard>

            <FloatingCard
              delay={0.15}
              float={true}
              floatOffset={true}
              className="bg-white/10 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] shadow-2xl border border-white/20 flex flex-col items-start group"
            >
              <div className="w-20 h-20 bg-cyan-400 rounded-3xl flex items-center justify-center mb-8 text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.5)] transform rotate-6 group-hover:rotate-0 transition-transform">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6">Our Vision</h3>
              <p className="text-slate-300 text-xl leading-relaxed">
                To ultimately become the most trusted and technologically integrated security and facility management powerhouse operating across all of India.
              </p>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Certifications with Glow Design */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-16"
          >
            A Foundation built on <span className="text-secondary">Compliance</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["ISO 9001:2015", "PSARA 2005", "GST Registered", "Labour, ESI & PF"].map((cert, i) => (
              <FloatingCard
                key={i}
                delay={i * 0.1}
                float={true}
                floatOffset={i % 2 === 1}
                className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white border border-slate-100 shadow-lg group"
              >
                <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="w-12 h-12 text-accent group-hover:text-white" />
                </div>
                <span className="font-bold text-xl text-slate-800">{cert}</span>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
