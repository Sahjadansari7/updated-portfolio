"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin, Circle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:sahzadansri3@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for a MERN developer? Let&apos;s discuss how I can help
              bring your project to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                      <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">
                      contact-form.app
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="mt-1.5 min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full glow-sm">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:sahzadansri3@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        sahzadansri3@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sahzad-ansari-1b0076330/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">
                        linkedin.com/in/sahzad-ansari
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Sahjadansari7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">
                        github.com/Sahjadansari7
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Nepal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-medium">status.txt</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-green-500 font-medium">
                      Available for Work
                    </p>
                    <p className="text-muted-foreground">
                      Currently accepting new projects and freelance
                      opportunities. Typical response time: within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
