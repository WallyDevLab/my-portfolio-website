import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail } from "lucide-react"
import Image from "next/image"
import profilePic from "@/public/image/portfolio-profile.jpg"

import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiPrisma, SiGit, 
  SiDocker, SiPython, SiPopos,
  SiJavascript, SiHtml5, SiCss3, SiExpress, SiVercel,
  SiPostman, SiMongodb
} from "react-icons/si"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    image: "",
    description: "A full-stack admin panel with real-time analytics and inventory management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: ""
  },
  {
    title: "AI Chat App",
    image: "",
    description: "Integrated OpenAI API to create a smart coding assistant for developers.",
    tech: ["React", "Node.js", "Tailwind"],
    link: ""
  },
  // Add more projects here easily!
]

const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    category: "Tools & OS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Pop!_OS", icon: SiPopos, color: "#48B9C7" },
    ]
  }
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
                <a href="/Profile.pdf" download="Katlego_Barayi_CV.pdf">
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
      <section id="skills" className="space-y-12 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {TECH_STACK.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-lg font-semibold border-l-4 border-blue-600 pl-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon; // Capitalize for React component usage
                  return (
                    <div key={skill.name} className="group relative">
                      <div className="p-3 rounded-xl bg-muted/50 transition-all duration-300 group-hover:bg-muted group-hover:-translate-y-1 border border-transparent group-hover:border-blue-500/30">
                        <Icon 
                          className="w-7 h-7 filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                          style={{ color: skill.color }} 
                        />
                      </div>
                      {/* Tooltip-style name label */}
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true, // This makes the carousel infinite
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <Card className="flex flex-col h-full overflow-hidden border-muted-foreground/20">
                    <div className="relative h-48 w-full bg-muted overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px]">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-auto" asChild>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          View Code
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
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