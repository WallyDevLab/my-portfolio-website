import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail } from "lucide-react"
import Image from "next/image"
import profilePic from "@/public/image/portfolio-profile.jpg"

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: "E-commerce Dashboard",
    image: "/e-commerce.png",
    description: "A full-stack admin panel with real-time analytics and inventory management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "AI Chat App",
    image: "ai-chat-app.png",
    description: "Integrated OpenAI API to create a smart coding assistant for developers.",
    tech: ["React", "Node.js", "Tailwind"],
    link: "https://github.com/yourusername/project2"
  },
  // Add more projects here easily!
]

const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "Prisma", "Git", 
  "Docker", "AWS", "Python", "Linux (Pop!_OS)"
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

      {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-10 md:pt-20">
          
          {/* 1. Image is now FIRST in code: Top on Mobile, Left on Desktop */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl" />
            <Image
              src={profilePic}
              alt="Katlego Barayi"
              fill
              priority
              className="rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-2xl"
            />
          </div>

          {/* 2. Text Content: Bottom on Mobile, Right on Desktop */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center md:text-left">
              Hi, I&apos;m <span className="text-blue-600">Katlego Barayi</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] text-center md:text-left">
              A full-stack developer passionate about building clean, 
              performant web applications using TypeScript and React.
            </p>

            <div className="flex gap-4 w-full justify-center md:justify-start mt-2">
              <Button asChild className="gap-2">
                <a href="/cv.pdf" download="Katlego_Barayi_CV.pdf">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>

              <Button variant="outline" asChild className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

        </section>
      {/* About Section */}
      <section id="about" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a developer who loves the intersection of design and functionality. 
          Currently, I&apos;m focused on building scalable web applications and 
          experimenting with new frontend technologies. When I&apos;m not coding, 
          you can find me exploring the latest updates in the Linux ecosystem 
          or contributing to open-source projects.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="space-y-8 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden"> {/* Fixed className syntax */}
              <div className="relative h-48 w-full bg-muted overflow-hidden">
                {/* Use Next.js Image for optimization */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  // fill
                  className="object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noreferrer">View Code</a>
                </Button>
              </CardContent>
            </Card>
          ))}          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-8 pb-20 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Fill out the form below and I&apos;ll get back to you.
          </p>
        </div>

        <div className="max-w-md">
          <form 
            action="https://formspree.io/f/mojvgojw"
            method="POST" 
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Your Email</label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="How can I help?" rows={4} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  )
}