"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Zap, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description:
      "End-to-end development from database design to responsive UIs.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description:
      "Optimized applications that scale and deliver fast user experiences.",
  },
  {
    icon: Shield,
    title: "Security-Minded",
    description:
      "Authentication, authorization, and data protection built in from day one.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Clear communication, clean code, and comprehensive documentation.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a full-stack MERN developer passionate about building modern,
                responsive, and user-friendly web applications. I enjoy turning
                ideas into practical projects while continuously improving my
                skills through hands-on learning and real-world development.

              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in writing clean, maintainable code, creating
                intuitive user experiences, and exploring modern web technologies.
                I'm always eager to learn new tools, improve my problem-solving
                skills, and build scalable applications using the MERN stack.

              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 hover:bg-card transition-colors border-border hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
