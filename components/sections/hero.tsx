"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "UI/UX Enthusiast",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Building reliable, scalable{" "}
              <span className="text-primary">MERN</span> applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg mb-4"
            >
              Full-stack developer crafting responsive web applications
              with MongoDB, Express, React, and Node.js
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-8 mb-8"
            >
              <span className="text-xl text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button asChild size="lg" className="glow-sm">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Sahjadansari7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahzad-ansari-1b0076330/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sahzadansri3@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl glow">
              {/* Terminal Header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                  <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  terminal
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">$</span>
                  <span className="text-muted-foreground">whoami</span>
                </div>
                <p className="text-foreground mb-4 ml-4">
                  Full-Stack MERN Developer
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">$</span>
                  <span className="text-muted-foreground">cat skills.txt</span>
                </div>
                <p className="text-foreground mb-4 ml-4">
                  MongoDB + Express.js + React + Node.js + TypeScript
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">$</span>
                  <span className="text-muted-foreground">echo $STATUS</span>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-500">Available for Work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
