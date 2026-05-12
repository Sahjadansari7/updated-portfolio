"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Download, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Backend Development (Learning Phase)",
    type: "Personal Projects",
    period: "2025 - Present",
    description: [
      "Learning and building REST APIs using Node.js and Express.js",
      "Practicing authentication using JWT and password hashing (bcrypt)",
      "Exploring database design with MongoDB and MySQL",
    ],
  },
  {
    title: "Frontend Development",
    type: "Personal Projects",
    period: "2024 - Present",
    description: [
      "Building responsive user interfaces using React, HTML, CSS, and JavaScript",
      "Practicing component-based architecture and UI structuring",
      "Integrating frontend with APIs for dynamic data handling",
    ],
  },
  {
    title: "Full-Stack Project Development",
    type: "Academic / Personal",
    period: "2023 - 2024",
    description: [
      "Developed an Online Vehicle Parking Management System using PHP and MySQL",
      "Implemented booking functionality and admin management features",
      "Designed database structure and built responsive frontend",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Delivering results across startups and established tech companies
              </p>
            </div>
            <Card className="hidden sm:block bg-card border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Resume.pdf</p>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={`md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-4">{exp.title}</h3>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
