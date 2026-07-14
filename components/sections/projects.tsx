"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { FolderOpen, Github, ExternalLink, Circle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
  stargazers_count: number
  forks_count: number
}

const featuredProjects = [
  {
    title: "Task Forge",
    description:
      "A simple and efficient system to manage tasks, track progress, and stay organized in one place.",
    features: [
      "User authentication with JWT",
      "Create, update, delete tasks",
      "Task status tracking (Todo, In Progress, Done)",
      "User-specific task management",
      "Protected routes for secure access",
      "Clean and responsive Dashboard UI",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Sahjadansari7",
    demo: null,
  },
  {
    title: "Auth System (MERN Stack)",
    description:
      "A secure authentication system with login, register, JWT and refresh tokens.",
    features: [
      "JWT authentication (access + refresh tokens)",
      "Password hashing with bcrypt",
      "Forgot & reset password flow",
      "Protected routes",
      "Axios interceptor for auto token refresh",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Sahjadansari7",
    demo: null,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Sahjadansari7/repos?sort=updated&per_page=6"
        )
        if (response.ok) {
          const data = await response.json()
          setRepos(data)
        }
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Personal projects built with the MERN stack to strengthen my full-stack development skills and
            explore modern web technologies.
          </p>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Circle className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs text-muted-foreground font-mono">
                          {project.title === "Task Forge"
                            ? "Task Manager"
                            : "MERN Stack"}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                        KEY FEATURES
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">+</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" className="flex-1" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repos */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Recent GitHub Activity</h3>
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                      <div className="h-3 bg-muted rounded w-full mb-2" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 hover:bg-card hover:shadow-lg transition-all border-border hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-sm truncate flex-1">
                            {repo.name}
                          </h4>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                          {repo.description || "No description available"}
                        </p>
                        {repo.language && (
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-xs text-muted-foreground">
                              {repo.language}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
