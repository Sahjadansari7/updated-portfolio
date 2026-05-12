"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive and interactive UIs with React ecosystem",
    skills: [
      "React",
      "React Hooks",
      "React Router",
      "Context API",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    description: "Building REST APIs and authentication systems with Node.js",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt Password Hashing",
      "Middleware",
    ],
  },
  {
    title: "Database",
    description: "Working with NoSQL database for full-stack applications",
    skills: [
      "MongoDB",
      "Mongoose",
      "CRUD Operations",
      "Schema Design",
      "Data Relationships",
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Version control and deployment workflows",
    skills: [
      "Git & GitHub",
      "Postman",
      "Vercel Deployment",
      "Render Deployment",
      "NPM",
      "VS Code",
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Comprehensive full-stack expertise across the modern web development
            ecosystem
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:shadow-lg transition-shadow border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-muted hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
