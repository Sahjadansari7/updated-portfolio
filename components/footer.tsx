"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sahjadansari7",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahzad-ansari-1b0076330/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:sahzadansri3@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              &copy; {currentYear} MERN Stack Developer. Built with React & Next.js
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
              Designed & Developed with{" "}
              <Heart className="w-3 h-3 fill-red-500 text-red-500" /> by{" "}
              <span className="text-foreground font-medium">Sahjad Ansari</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
