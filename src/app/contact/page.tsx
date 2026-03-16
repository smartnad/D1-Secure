'use client'

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    // Simulate network delay
    setTimeout(() => {
      setStatus("success")
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50 min-h-screen">
      {/* Enhanced Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenBurns_20s_ease-out_forwards]">
          <Image 
            src="/images/IMG-20250414-WA0059.jpg" 
            alt="Contact D1 Secure" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto mt-20">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 flex flex-col items-center">
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-sm backdrop-blur-md">
               <ShieldCheck className="w-5 h-5" /> Let's Connect
             </motion.div>
             
             <div className="overflow-hidden w-full">
               <motion.h1 variants={textReveal} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                 Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">Us</span>
               </motion.h1>
             </div>
             
             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl leading-relaxed">
               Ready to upgrade your security and facility management? Reach out for a comprehensive consultation.
             </motion.p>
           </motion.div>
        </div>
      </section>

      {/* Spacious Contact Section */}
      <section className="py-32 container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto relative z-10">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 tracking-tight">Reach Out Today</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2">Our Location</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">No 2, Khata No 26/2, 1st Floor, Naganath Pura, Rayasandra, Akshaya Layout, Bengaluru - 560100</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2">Contact Numbers</h3>
                    <p className="text-slate-600 text-lg">+91 87478 89604</p>
                    <p className="text-slate-600 text-lg">+91 76192 08169</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2">Email Address</h3>
                    <p className="text-slate-600 text-lg">info@d1secure.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2">Business Hours</h3>
                    <p className="text-slate-600 text-lg">24/7 Operations & Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] bg-slate-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14167.31835560965!2d77.65349!3d12.87157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b7264f%3A0xe104dbfc89100ebb!2sNaganathapura%2C%20Rayasandra%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-100 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Send an Inquiry</h2>
            <p className="text-slate-500 mb-10 text-lg">Leave your details and a specialized representative will get back to you immediately.</p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 bg-green-50/50 rounded-3xl border border-green-100/50"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                     <CheckCircle2 className="w-24 h-24 text-green-500 mb-6 drop-shadow-md" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-10 text-lg font-medium">Thank you. Our dispatch will contact you shortly.</p>
                  <Button onClick={() => setStatus("idle")} variant="outline" size="lg" className="border-green-200 hover:bg-green-100 px-8 h-14 text-lg">Send Another</Button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8 relative z-10"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input required id="name" name="name" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone</label>
                      <input required id="phone" name="phone" type="tel" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm" placeholder="+91" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input required id="email" name="email" type="email" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Required</label>
                    <select id="service" name="service" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm appearance-none cursor-pointer">
                      <option value="" disabled selected>Select a service</option>
                      <option value="Guard Service">Guard Service</option>
                      <option value="Bouncer Service">Bouncer Service</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="STP & WTP">STP & WTP</option>
                      <option value="Multi Skill Technician">Multi Skill Technician</option>
                      <option value="Pest Control">Pest Control</option>
                      <option value="Gardening & Landscaping">Gardening & Landscaping</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea required id="message" name="message" rows={5} className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all text-lg resize-none shadow-sm" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-slate-900 hover:to-primary text-white shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.5)] transition-all hover:-translate-y-1 rounded-2xl flex items-center justify-center gap-3"
                  >
                    {status === "submitting" ? (
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Transmit Inquiry <Send className="w-6 h-6" /></>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
