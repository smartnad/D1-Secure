import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D1 Secure And Facilities | Security & Facility Services Bangalore",
  description: "Professional security guards, housekeeping, pest control, technicians, and facility services in Bangalore.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
