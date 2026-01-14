import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, Eye, Briefcase, MapPin, CheckCircle2, ArrowRight, Quote } from "lucide-react"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import Image from "next/image"
import profilePic from "@/public/image/portfolio-profile.jpg"
import { TechStack } from "@/components/tech-stack" 

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
    description: "Core member of the CMS engineering team building and supporting the Content Management System for MTN Group’s Consolidation App.",
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
    description: "Designed and built an AI-powered Sign Language Interpreter prototype translating South African Sign Language into all 11 official languages.",
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
    description: "A full-stack portfolio profile built with Next.js, TypeScript, and Prisma.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://github.com/WallyDevLab/my-portfolio-website"
  }
]

export const dynamic = 'force-dynamic';

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error("Failed to fetch testimonials", error);
    return []
  }
}

export default async function Home() {
  const testimonials = await getTestimonials();
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-10 md:pt-20">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl" />
          <Image src={profilePic} alt="Katlego Barayi" fill priority className="rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-2xl" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center md:text-left">
            Hi, I&apos;m <span className="text-blue-600">Katlego Barayi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] text-center md:text-left">
            A flexible software engineer with full-stack expertise, passionate about building scalable, performant web applications.
          </p>
          <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start mt-2">
            <Button asChild className="gap-2">
              <a href="/Katlego_Barayi_CV.pdf" target="_blank" rel="noreferrer"><Eye className="h-4 w-4" />View CV</a>
            </Button>
            {/* <Button variant="outline" asChild className="gap-2">
              <a href="/Katlego_Barayi_CV.pdf" download="Katlego_Barayi_CV.pdf"><Download className="h-4 w-4" />Download</a>
            </Button> */}
            <Button variant="outline" asChild className="gap-2">
              <a href="#contact"><Mail className="h-4 w-4" />Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a software engineer with a passion for building scalable, performant, and maintainable web applications. My experience spans full-stack development, including frontend frameworks like React and TypeScript, backend integration with APIs, and implementing secure authentication and authorization workflows using OAuth and Okta. I have also worked extensively on CMS platforms, developing custom extensions, integrating APIs, and maintaining CI/CD pipelines to ensure reliable deployments. In addition to my technical focus, I am a Scrum Master in training, actively applying Agile methodologies to facilitate collaboration, sprint planning, and continuous improvement within cross-functional teams. I enjoy balancing technical problem-solving with team coordination, ensuring that both code quality and project delivery meet high standards. I am motivated by challenges at the intersection of design, functionality, and scalability, and I thrive in environments where I can both write high-quality code and contribute to team processes and delivery frameworks.
        </p>
      </section>

      {/* Work Experience Section */}
        <section id="experience" className="space-y-10 scroll-mt-20">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground font-medium">My professional journey and technical contributions.</p>
          </div>

          {/* 
            1. Line: Removed 'before' from mobile. 
            Added 'md:before' to only show the timeline line on desktop 
          */}
          <div className="space-y-8 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-muted-foreground/20 md:before:to-transparent">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group">
                
                {/* 
                  2. Dot: Added 'hidden md:flex' 
                  This hides the briefcase circle on mobile and only shows it on desktop
                */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary absolute left-1/2 -translate-x-1/2 z-10 shadow-sm">
                  <Briefcase size={18} />
                </div>

                {/* 
                  3. Card: Changed 'w-[calc(100%-4rem)]' to 'w-full' for mobile.
                  Removed 'ml-12' so it fills the width on mobile.
                */}
                <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border bg-muted/10 hover:bg-muted/20 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <span className="w-fit text-xs font-bold px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
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

      {/* Tech Stack Component (CLIENT SIDE) */}
      <TechStack />

      {/* Featured Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground font-medium text-center md:text-left">
              A collection of my recent work and personal experiments.
            </p>
          </div>

          {PROJECTS.length === 0 ? (
            <p className="text-muted-foreground italic text-center">No projects to show yet. Stay tuned!</p>
          ) : PROJECTS.length === 1 ? (
            /* 1. Center a single project card */
            <div className="flex justify-center w-full">
              <Card className="max-w-xl flex flex-col overflow-hidden border-muted-foreground/20 hover:border-blue-500/50 transition-colors duration-300">
                <div className="relative h-64 w-full bg-muted overflow-hidden">
                  <Image 
                    src={PROJECTS[0].image} 
                    alt={PROJECTS[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8 flex-1 flex flex-col text-center items-center">
                  <h3 className="text-2xl font-bold">{PROJECTS[0].title}</h3>
                  <p className="text-md text-muted-foreground mt-4 mb-6 leading-relaxed">
                    {PROJECTS[0].description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {PROJECTS[0].tech.map((t) => (
                      <Badge key={t} variant="secondary" className="px-3 py-1 uppercase tracking-wider text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full max-w-xs mt-auto group" asChild>
                    <a href={PROJECTS[0].link} target="_blank" rel="noreferrer">
                      View Code 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* 2. Show Carousel if 2 or more */
            <Carousel
              opts={{
                align: "start",
                loop: true,
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
                        <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1 line-clamp-3">
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
              
              {/* Navigation Arrows only shown for multiple projects */}
              <div className="flex justify-center md:justify-end gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          )}
        </section>

      {/* Testimonials Preview Section */}
      <section id="testimonials-preview" className="space-y-8 scroll-mt-20">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold">Wall of Love</h2>
          <Button variant="ghost" asChild className="gap-2 group text-blue-600"><Link href="/testimonials">View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1" /></Link></Button>
        </div>
        {testimonials.length > 0 ? (
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-4 basis-full md:basis-1/2">
                  <Card className="p-8 relative h-full">
                    <Quote className="absolute top-4 right-4 h-12 w-12 text-blue-600/10" />
                    <p className="italic mb-6 text-sm">{t.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{t.name[0]}{t.surname[0]}</div>
                      <div><p className="font-bold text-sm">{t.name} {t.surname}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : <p className="text-muted-foreground italic">No testimonials yet.</p>}
      </section>

      {/* Contact Section */}
        <section id="contact" className="space-y-8 pb-20 scroll-mt-20 flex flex-col items-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind? Fill out the form below and I&apos;ll get back to you.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form 
              action="https://formspree.io/f/mojvgojw"
              method="POST" 
              className="space-y-4 text-left" 
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