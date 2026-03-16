'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918747889604"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 border-2 border-white"></span>
      </span>
    </motion.a>
  )
}
