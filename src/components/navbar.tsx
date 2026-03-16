'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShieldCheck, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0F172A]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/10 py-3"
            : "bg-[#0F172A] py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between min-h-[56px]">

            {/* ── Logo + Brand ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              {/* Logo ring with glow */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 shadow-[0_0_16px_rgba(220,38,38,0.5)] transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(220,38,38,0.75)] group-hover:scale-105">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#0F172A] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="D1 Secure Logo"
                    width={42}
                    height={42}
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Brand name */}
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg tracking-wide group-hover:text-amber-400 transition-colors duration-300">
                  D1 Secure
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Security & Facilities
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 group",
                      isActive
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    {item.name}
                    {/* Hover underline */}
                    <span className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-amber-400 transition-all duration-300",
                      isActive ? "w-4/5" : "w-0 group-hover:w-3/5"
                    )} />
                  </Link>
                )
              })}
            </nav>

            {/* ── CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white
                  bg-gradient-to-r from-amber-500 to-amber-600
                  shadow-[0_4px_15px_rgba(245,158,11,0.35)]
                  hover:shadow-[0_6px_25px_rgba(245,158,11,0.6)]
                  hover:scale-105 hover:from-amber-400 hover:to-amber-500
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
              >
                <ShieldCheck className="w-4 h-4" />
                Get Consultation
              </Link>

              {/* Hamburger */}
              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-40 bg-[#0F172A] border-b border-white/10 shadow-2xl pt-24 pb-6 px-6 md:hidden"
            >
              {/* Brand strip */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-[2px] rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#0F172A] flex items-center justify-center">
                    <Image src="/logo.png" alt="D1 Secure Logo" width={38} height={38} className="object-contain scale-110" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-extrabold text-base">D1 Secure</p>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase">Security & Facilities</p>
                </div>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200",
                          isActive
                            ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.name}
                        <ChevronRight className={cn("w-4 h-4 transition-transform duration-200", isActive && "text-amber-400")} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06 + 0.1, duration: 0.25 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-base font-bold text-white
                    bg-gradient-to-r from-amber-500 to-amber-600
                    shadow-[0_4px_20px_rgba(245,158,11,0.4)]
                    hover:shadow-[0_6px_30px_rgba(245,158,11,0.6)]
                    transition-all duration-300"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Get Security Consultation
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
