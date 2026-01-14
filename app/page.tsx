"use client" // Ensure this is at the very top of your page.tsx

import { useState } from "react" // Add this
import { ChevronDown, ChevronUp } from "lucide-react" // Add these
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, Eye, Terminal, Settings2, ShieldCheck, Microscope, Cpu, Workflow, Globe, Zap, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import profilePic from "@/public/image/portfolio-profile.jpg"

import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiPrisma, SiGit, 
  SiDocker, SiPython, SiPopos, SiJavascript, SiHtml5, SiCss3, 
  SiExpress, SiVercel, SiPostman, SiMongodb, SiFlutter, 
  SiDart, SiFirebase, SiSqlite, SiGithubactions, SiTensorflow, 
  SiPytorch, SiFigma, SiTestinglibrary, SiOpenjdk
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

const EXPERIENCE = [
  {
    company: "MTN CoE",
    location: "Johannesburg",
    role: "Software Engineer",
    period: "January 2025 - PRESENT",
    description: "Core member of the CMS engineering team building and supporting the Content Management System for MTN Group’s Consolidation App. Bridging full-stack development with Scrum Master capabilities.",
    responsibilities: [
      "CMS Platform Strategy: Designing scalable content models using Directus for enterprise-level delivery.",
      "Security & Auth: Implementing OAuth and Okta for enterprise-grade access control.",
      "CI/CD & Reliability: Maintaining pipelines and automated testing to minimize release risks.",
      "Analytics & Monitoring: Integrating PostHog for telemetry and proactive issue identification."
    ],
    tech: ["Directus", "OAuth", "Okta", "PostHog", "Next.js", "Scrum"]
  },
  {
    company: "Lelapa AI",
    location: "Johannesburg",
    role: "Prototype Developer",
    period: "June 2024 - October 2024",
    description: "Designed and built an AI-powered Sign Language Interpreter prototype translating South African Sign Language into all 11 official languages via text and audio.",
    responsibilities: [
      "AI Integration: Leveraging Lelapa AI language APIs for multilingual translation and processing.",
      "Inclusive Design: Creating multi-format outputs (text/audio) for deaf and hard-of-hearing users.",
      "Rapid Prototyping: Iterating in fast-paced experimental environments to validate AI concepts.",
      "Cross-Functional: Collaborating with AI engineers to evolve hackathon concepts into polished prototypes."
    ],
    tech: ["AI/ML APIs", "React", "Inclusive Design", "Rapid Prototyping", "Python"]
  }
]

const PROJECTS: Project[] = [
  {
    title: "Portfolio Profile",
    image: "/image.png",
    description: "A full-stack portfolio profile build with TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://github.com/WallyDevLab/my-portfolio-website"
  },
  // {
  //   title: "AI Chat App",
  //   image: "",
  //   description: "Integrated OpenAI API to create a smart coding assistant for developers.",
  //   tech: ["React", "Node.js", "Tailwind"],
  //   link: ""
  // },
  // Add more projects here easily!
]

const colorMap: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  amber: { 
    bg: "bg-amber-500/10 dark:bg-amber-500/20", 
    border: "border-amber-500/20 dark:border-amber-500/50", 
    text: "text-amber-600 dark:text-amber-400",
    shadow: "group-hover:shadow-amber-500/20"
  },
  blue: { 
    bg: "bg-blue-500/10 dark:bg-blue-500/20", 
    border: "border-blue-500/20 dark:border-blue-500/50", 
    text: "text-blue-600 dark:text-blue-400",
    shadow: "group-hover:shadow-blue-500/20"
  },
  emerald: { 
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20", 
    border: "border-emerald-500/20 dark:border-emerald-500/50", 
    text: "text-emerald-600 dark:text-emerald-400",
    shadow: "group-hover:shadow-emerald-500/20"
  },
  purple: { 
    bg: "bg-purple-500/10 dark:bg-purple-500/20", 
    border: "border-purple-500/20 dark:border-purple-500/50", 
    text: "text-purple-600 dark:text-purple-400",
    shadow: "group-hover:shadow-purple-500/20"
  },
  rose: { 
    bg: "bg-rose-500/10 dark:bg-rose-500/20", 
    border: "border-rose-500/20 dark:border-rose-500/50", 
    text: "text-rose-600 dark:text-rose-400",
    shadow: "group-hover:shadow-rose-500/20"
  },
};

const TECH_STACK = [
  {
    category: "Languages & Core",
    variant: "amber",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "OOP", icon: Settings2, color: "#64748b" }, // Abstract concept
    ]
  },
  {
    category: "Frontend & Mobile",
    variant: "blue",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "WebSockets", icon: Workflow, color: "#0ea5e9" },
    ]
  },
  {
    category: "Backend & AI",
    variant: "emerald",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "API Integration", icon: Globe, color: "#10b981" }, // Added here
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "ML", icon: Cpu, color: "#10b981" },
    ]
  },
  {
    category: "DevOps & QA",
    variant: "purple",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GH Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "TDD", icon: ShieldCheck, color: "#8b5cf6" },
      { name: "Unit Testing", icon: SiTestinglibrary, color: "#E33332" },
      { name: "Integration", icon: Microscope, color: "#a855f7" },
      { name: "Debugging", icon: Terminal, color: "#64748b" },
      { name: "API Testing", icon: Zap, color: "#f59e0b" }, // Added here
    ]
  },
  {
    category: "Methodology & CMS",
    variant: "rose", // We'll add a rose variant to the colorMap
    skills: [
      { name: "Scrum", icon: Workflow, color: "#e11d48" },
      { name: "Agile", icon: Settings2, color: "#f43f5e" },
      { name: "CMS", icon: SiVercel, color: "#000000" }, 
    ]
  }
]

export default function Home() {
  // Initialize state with all categories open by default
  const [openSections, setOpenSections] = useState<string[]>(
    TECH_STACK.map((group) => group.category)
  );

  const toggleSection = (category: string) => {
    setOpenSections((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // Close it
        : [...prev, category]               // Open it
    );
  };
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
              A flexible software engineer with full-stack expertise, passionate about building scalable, performant web applications and contributing effectively across diverse technical environments.
            </p>

            <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start mt-2">
              {/* Primary Action: Preview/View */}
              <Button asChild className="gap-2">
                <a href="/Katlego_Barayi_CV.pdf" target="_blank" rel="noreferrer">
                  <Eye className="h-4 w-4" />
                  View CV
                </a>
              </Button>

              {/* Secondary Action: Direct Download */}
              <Button variant="outline" asChild className="gap-2">
                <a href="/Katlego_Barayi_CV.pdf" download="Katlego_Barayi_CV.pdf">
                  <Download className="h-4 w-4" />
                  Download
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
          I am a software engineer with a passion for building scalable, performant, and maintainable web applications. My experience spans full-stack development, including frontend frameworks like React and TypeScript, backend integration with APIs, and implementing secure authentication and authorization workflows using OAuth and Okta. I have also worked extensively on CMS platforms, developing custom extensions, integrating APIs, and maintaining CI/CD pipelines to ensure reliable deployments. In addition to my technical focus, I am a Scrum Master in training, actively applying Agile methodologies to facilitate collaboration, sprint planning, and continuous improvement within cross-functional teams. I enjoy balancing technical problem-solving with team coordination, ensuring that both code quality and project delivery meet high standards. I am motivated by challenges at the intersection of design, functionality, and scalability, and I thrive in environments where I can both write high-quality code and contribute to team processes and delivery frameworks. </p>
      </section>

      {/* Work Experience Section */}
        <section id="experience" className="space-y-10 scroll-mt-20">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground font-medium">My professional journey and technical contributions.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* The Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                  <Briefcase size={18} />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border bg-muted/10 hover:bg-muted/20 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {job.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                      <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                        <Briefcase size={14} /> {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/70">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px] py-0 px-2 font-semibold uppercase tracking-wider">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Tech Stack Section */}
      <section id="skills" className="space-y-12 scroll-mt-20">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Skills</h2>
          <p className="text-muted-foreground font-medium">Click a section to expand or collapse.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {TECH_STACK.map((group) => {
            const colors = colorMap[group.variant];
            const isOpen = openSections.includes(group.category);

            return (
              <div key={group.category} className="space-y-5 border-b pb-6 lg:border-none lg:pb-0">
                {/* Toggle Header Button */}
                <button 
                  onClick={() => toggleSection(group.category)}
                  className="flex items-center justify-between w-full group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-bold ${colors.text}`}>
                      {group.category}
                    </h3>
                    <div className={`h-[1px] hidden md:block w-24 ${colors.bg}`} />
                  </div>
                  
                  {/* Toggle Icon */}
                  <div className={`p-1 rounded-full ${colors.bg} ${colors.text} transition-transform duration-300`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                
                {/* Animated Skills Grid */}
                <div className={`
                  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? "max-h-[1000px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"}
                `}>
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    const isBlackIcon = skill.color === "#000000" || skill.color === "#2D3748";

                    return (
                      <div key={skill.name} className="group flex flex-col items-center">
                        <div className={`
                          w-full aspect-square rounded-2xl transition-all duration-300 
                          flex items-center justify-center border
                          ${colors.bg} ${colors.border}
                          group-hover:-translate-y-1 group-hover:shadow-lg ${colors.shadow}
                        `}>
                          <Icon 
                            className={`w-7 h-7 md:w-8 md:h-8 transition-all duration-300 
                              ${isBlackIcon ? "dark:text-white text-black" : ""}`} 
                            style={!isBlackIcon ? { color: skill.color } : {}} 
                          />
                        </div>
                        <p className="mt-2 text-[10px] md:text-xs font-bold text-muted-foreground text-center truncate w-full">
                          {skill.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
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