import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
              <div className="p-[2px] rounded-full bg-gradient-to-br from-red-400 via-red-600 to-red-800 shadow-[0_4px_20px_rgba(220,38,38,0.5)] group-hover:shadow-[0_4px_25px_rgba(220,38,38,0.8)] transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="D1 Secure And Facilities Logo"
                    width={56}
                    height={56}
                    className="object-contain scale-110"
                  />
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white leading-tight">
                D1 Secure<br /><span className="text-accent text-xs font-medium tracking-widest">AND FACILITIES</span>
              </span>
            </Link>
            <p className="text-sm">Your Well Being Is Our Profession</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/team" className="hover:text-accent">Our Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@d1secure.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <span>+91 87478 89604</span>
                  <span>+91 76192 08169</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>No 2, Khata No 26/2, 1st Floor, Naganath Pura, Rayasandra, Akshaya Layout, Bengaluru - 560100</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                ISO 9001:2015 Certified
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                PSARA-2005 Registered
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                GST Registered
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Labour, ESI & PF Registered
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} D1 Secure And Facilities. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
