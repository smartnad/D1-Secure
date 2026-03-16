'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react"
import { fadeInUp, staggerContainer, textReveal, scaleUp } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/floating-card"

const servicesData = [
  {
    id: "guard-service",
    title: "Guard Service",
    shortDesc: "Armed and unarmed guard services for all premises.",
    fullDesc: "D1 Secure offers complete Armed and Unarmed security Guard Services, Bodyguard Services, and Escort Security services. Registered under the Private Security Agencies Regulations Act (PSARA-2005). Guards are deployed at residential complexes, corporate offices, malls, hospitals, schools, and industrial facilities in Bangalore.",
    subServices: ["Armed Security Guards", "Unarmed Security Guards", "Bodyguard / Personal Security", "Escort Security Services", "Residential Complex Guards", "Corporate Office Guards", "Industrial / Factory Guards", "Event Security Guards"],
    img: "/images/IMG-20250208-WA0028.jpg"
  },
  {
    id: "bouncer-service",
    title: "Bouncer Service",
    shortDesc: "Professional bouncers for events and personal protection.",
    fullDesc: "Highly trained, professional bouncers suitable for specialized security needs, high-profile events, clubs, VIP protection, and crowd control. Our bouncers are experienced in threat assessment and rapid response.",
    subServices: ["Event Bouncers", "VIP Protection", "Corporate Event Security", "Crowd Control", "Venue Security"],
    img: "/images/IMG-20250208-WA0029.jpg"
  },
  {
    id: "housekeeping",
    title: "Housekeeping Service",
    shortDesc: "Comprehensive cleaning solutions for corporate and residential.",
    fullDesc: "Our housekeeping services ensure pristine environments utilizing industry-standard equipment and practices. We deploy trained personnel to manage daily cleaning and periodic deep cleaning for an impeccable premise.",
    subServices: ["Corporate Housekeeping", "Residential Cleaning", "Deep Cleaning", "Facade Cleaning", "Restroom Management", "Waste Management"],
    img: "/images/IMG_9581.JPG"
  },
  {
    id: "stp-wtp",
    title: "STP & WTP Operations",
    shortDesc: "Operations and maintenance of water treatment plants.",
    fullDesc: "Specialized technicians for managing Sewage Treatment Plants (STP) and Water Treatment Plants (WTP). We ensure all environmental regulations are met with seamless 24/7 operation and maintenance.",
    subServices: ["STP Operation & Maintenance", "WTP Operation", "Water Quality Analytics", "Equipment Maintenance", "Regulatory Compliance"],
    img: "/images/IMG_6612.JPG"
  },
  {
    id: "multi-skill-technician",
    title: "Multi Skill Technician",
    shortDesc: "Skilled technicians for electrical, plumbing, and HVAC maintenance.",
    fullDesc: "A complete facilities management solution deploying certified technicians proficient in electrical works, plumbing, carpentry, and HVAC systems. Ensures zero downtime for your facility.",
    subServices: ["Electrical Maintenance", "Plumbing Services", "HVAC Maintenance", "Carpentry & Repairs", "24/7 Emergency Repairs"],
    img: "/images/IMG_6611.JPG"
  },
  {
    id: "pest-control",
    title: "Pest Control Services",
    shortDesc: "Effective pest management and sanitization services.",
    fullDesc: "Comprehensive pest management utilizing safe, approved chemicals. We conduct detailed inspections and execute eradication and prevention plans for all types of common pests in commercial and residential properties.",
    subServices: ["General Disinfestation", "Termite Control", "Rodent Control", "Mosquito Management", "Fogging Services", "Sanitization Services"],
    img: "/images/IMG_6610.JPG"
  },
  {
    id: "gardening-landscaping",
    title: "Gardening & Landscaping",
    shortDesc: "Expert landscape design and garden maintenance.",
    fullDesc: "Enhance your facility's aesthetic appeal with our expert landscaping services. From designing new green spaces to maintaining existing gardens, our horticulturists ensure lush environments year-round.",
    subServices: ["Garden Maintenance", "Landscape Design", "Lawn Care", "Tree Pruning", "Irrigation Management", "Indoor Plant Care"],
    img: "/images/IMG_6609.JPG"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      {/* Enhanced Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/IMG-20250208-WA0028.jpg" 
            alt="Services D1 Secure" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto mt-20">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm backdrop-blur-md">
               <ShieldCheck className="w-5 h-5 text-accent" /> Premium Facility Management
             </motion.div>
             
             <div className="overflow-hidden">
               <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                 Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-secondary">Solutions</span>
               </motion.h1>
             </div>
             
             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
                Elevate your residential or corporate premise with industry-leading security and maintenance management.
             </motion.p>
           </motion.div>
        </div>
      </section>

      {/* Spaced out Services */}
      <div className="container mx-auto px-4 md:px-6 py-32 space-y-40 max-w-7xl">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <section key={service.id} id={service.id} className="scroll-mt-40 group/section relative">
              
              <div className={`grid lg:grid-cols-2 gap-16 items-center relative z-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-primary group-hover/section:text-secondary transition-colors duration-500">{service.title}</motion.h2>
                  <motion.p variants={fadeInUp} className="text-2xl font-semibold text-accent border-l-4 border-accent pl-4">
                    {service.shortDesc}
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed text-lg">
                    {service.fullDesc}
                  </motion.p>
                  
                  <FloatingCard revealY={20} className="pt-6 bg-white p-8 rounded-3xl shadow-[0_0_40px_rgba(15,23,42,0.05)] border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                       <ShieldCheck className="w-6 h-6 text-accent" /> Included Features:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                      {service.subServices.map((sub, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium group">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                          <span className="group-hover:text-primary transition-colors">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </FloatingCard>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  className={`relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
                  <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white font-bold bg-white/10 backdrop-blur-xl px-6 py-4 rounded-full border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] animate-[shimmer_2s_infinite]" />
                     <Shield className="w-6 h-6 text-accent" /> <span className="text-lg">D1 Secure Standard</span>
                  </div>
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>
      
      {/* Grand CTA */}
      <section className="bg-gradient-to-t from-primary to-slate-900 py-32 text-center border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
           <FloatingCard 
             float={true}
             className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[3rem]"
           >
             <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl">Require a Custom Package?</h3>
             <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
               Contact us to formulate a highly optimized, fully integrated operational package specific to your facility limits.
             </p>
             <Button size="lg" className="bg-accent hover:bg-yellow-500 text-slate-900 px-12 h-16 text-xl font-bold rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all hover:scale-105">
               Consult Our Experts
             </Button>
           </FloatingCard>
        </div>
      </section>
    </div>
  )
}
