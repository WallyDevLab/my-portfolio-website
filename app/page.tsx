import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Eye, Briefcase, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import profilePic from "@/public/image/portfolio-profile.jpg"
import { TechStack } from "@/components/tech-stack"
import { TestimonialCard } from "@/components/testimonial-card"
import { ProjectCard } from "@/components/project-cards"
import { ContactForm } from "@/components/contact-form"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { HeroImage } from "@/components/hero-image"
import { EXPERIENCE, PROJECTS, getTestimonials } from "@/lib/data"
import type { Project } from "@/lib/data"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// const EXPERIENCE = [
//   {
//     company: "MTN CoE",
//     location: "Johannesburg",
//     role: "Software Engineer",
//     period: "January 2025 — PRESENT",
//     description: "Core member of the CMS engineering team building and supporting the Content Management System for MTN Group's Consolidation App.",
//     responsibilities: [
//       "CMS Platform Strategy: Designing scalable content models using Directus for enterprise-level delivery across multiple regions.",
//       "Full-Stack Development: Building performant web applications with Next.js, TypeScript, and Tailwind CSS, implementing ISR caching and component-driven architecture with shadcn/ui.",
//       "Security & Data Integrity: Implementing OAuth and Okta for enterprise-grade access control, server-side input sanitization, and whitelist validation to protect API endpoints.",
//       "CI/CD & Automation: Maintaining deployment pipelines with GitHub Actions, writing pre-deployment scripts for linting, type-checking, and build verification before production releases.",
//       "Performance & SEO: Optimizing page load times through ISR caching strategies, responsive image handling, structured metadata (Open Graph, JSON-LD), and WCAG 2.1 AA accessibility compliance.",
//       "Analytics & Monitoring: Leveraging Datadog for application performance monitoring (APM) and log management, filtering and triaging production logs to identify bottlenecks. Integrating PostHog for product telemetry, user behavior tracking, and proactive issue identification."
//     ],
//     tech: ["Next.js", "TypeScript", "Tailwind", "Directus", "OAuth", "Okta", "Datadog", "PostHog", "Prisma", "GitHub Actions", "Scrum"]
//   },
//   {
//     company: "Lelapa AI",
//     location: "Johannesburg",
//     role: "Prototype Developer",
//     period: "June 2024 — October 2024",
//     description: "Designed and built an AI-powered Sign Language Interpreter prototype translating South African Sign Language into all 11 official languages.",
//     responsibilities: [
//       "AI Integration: Leveraging Lelapa AI language APIs for multilingual translation and processing.",
//       "Inclusive Design: Creating multi-format outputs (text/audio) for deaf and hard-of-hearing users.",
//       "Rapid Prototyping: Iterating in fast-paced experimental environments to validate AI concepts.",
//       "Cross-Functional: Collaborating with AI engineers to evolve hackathon concepts into polished prototypes."
//     ],
//     tech: ["AI/ML APIs", "React", "Inclusive Design", "Rapid Prototyping", "Python"]
//   }
// ]

// ── PROJECTS DATA ─────────────────────────────────────────────────
// Each project can include:
//   codeUrl   — always required (GitHub repo link)
//   liveUrl   — optional (renders a "Visit Site" button when present)
//   caseStudy — optional (renders a "Case Study" dialog when present)

// const PROJECTS: Project[] = [
//   {
//     title: "Portfolio Profile",
//     image: "/image.png",
//     description: "A full-stack portfolio profile built with Next.js, TypeScript, and Prisma. Features a testimonial system, dark/light theming, and SEO optimization.",
//     tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
//     link: "https://github.com/WallyDevLab/my-portfolio-website"
//   }
// ]

export const revalidate = 60; // Revalidate every 60 seconds to keep testimonials fresh

// async function getTestimonials() {
//   try {
//     return await prisma.testimonial.findMany({
//       take: 5,
//       orderBy: { createdAt: 'desc' }
//     })
//   } catch (error) {
//     console.error("Failed to fetch testimonials", error);
//     return []
//   }
// }

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

      {/* ═══ Hero Section ═══ */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-10 md:pt-20">
        <HeroImage src={profilePic} alt="Katlego Barayi" />
        <div className="flex flex-col items-center md:items-start gap-4 flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center md:text-left animate-slide-up delay-1">
            Hi, I&apos;m <span className="text-blue-600">Katlego Barayi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] text-center md:text-left animate-slide-up delay-2">
            A flexible software engineer with full-stack expertise, passionate about building scalable, performant web applications.
          </p>
          <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start mt-2 animate-slide-up delay-3">
            <Button asChild className="gap-2">
              <a href="/Katlego_Barayi.pdf" target="_blank" rel="noreferrer"><Eye className="h-4 w-4" />View CV</a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="#contact"><Mail className="h-4 w-4" />Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ About Section ═══ */}
      <AnimateOnScroll>
        <section id="about" className="space-y-6 scroll-mt-20">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I build full-stack web applications for teams that care about correctness, performance, and delivery. My background spans enterprise CMS infrastructure at MTN Group&apos;s Centre of Excellence, where I worked across multiple African markets, implemented enterprise auth with OAuth and Okta, and maintained CI/CD pipelines that gated every production release.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          I have also worked at the intersection of AI and accessibility, building a South African Sign Language interpreter prototype at Lelapa AI that translated into all 11 official languages.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          Outside the code, I am a Scrum Master in training and currently open to new opportunities. I think good process is what lets good engineering compound over time.
          </p>
        </section>
      </AnimateOnScroll>

            {/* ═══ Featured Projects Section ═══ */}
      <AnimateOnScroll>
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
          /* Center a single project card */
          <div className="flex justify-center w-full">
            <ProjectCard project={PROJECTS[0]} featured />
          </div>
        ) : (
          /* Carousel for 2+ projects */
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
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center md:justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        )}
      </section>
      </AnimateOnScroll>

      {/* ═══ Work Experience Section ═══ */}
      <AnimateOnScroll>
        <section id="experience" className="space-y-10 scroll-mt-20">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground font-medium">My professional journey and technical contributions.</p>
          </div>

          <div className="space-y-8 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-muted-foreground/20 md:before:to-transparent">
            {EXPERIENCE.map((job, index) => (
              <AnimateOnScroll key={index} delay={index * 150}>
              <div className={`relative flex items-center md:justify-normal group ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary absolute left-1/2 -translate-x-1/2 z-10 shadow-sm">
                    <Briefcase size={18} />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border bg-muted/10 hover:bg-muted/20 transition-all duration-300 shadow-sm">
                    <div className="flex flex-col space-y-2 mb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                        <span className="w-fit text-xs font-bold px-2 py-1 rounded-full bg-accent-brand/10 text-accent-brand border border-accent-brand/20">
                          {job.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-1 text-accent-brand">
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
                            <CheckCircle2 size={16} className="text-accent-brand mt-0.5 shrink-0" />
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
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* ═══ Tech Stack (Client Component) ═══ */}
      <AnimateOnScroll>
        <TechStack />
      </AnimateOnScroll>



      {/* ═══ Testimonials Preview Section ═══ */}
      <AnimateOnScroll>
        <section id="testimonials-preview" className="space-y-8 scroll-mt-20">
        <div className="flex justify-between items-end">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Wall of Love</h2>
            <p className="text-muted-foreground italic">Feedback from mentors and colleagues.</p>
          </div>
          <Button variant="ghost" asChild className="gap-2 group text-accent-brand">
            <Link href="/testimonials">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {testimonials.length === 0 ? (
          <p className="text-muted-foreground italic text-center">No testimonials yet. Be the first!</p>
        ) : testimonials.length === 1 ? (
          <div className="flex justify-center">
            <TestimonialCard testimonial={testimonials[0]} isCarousel={false} />
          </div>
        ) : (
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <TestimonialCard testimonial={t} isCarousel={true} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center md:justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        )}
      </section>
      </AnimateOnScroll>

      {/* ═══ Contact Section ═══ */}
      <AnimateOnScroll>
        <section id="contact" className="space-y-8 pb-20 scroll-mt-20 flex flex-col items-center text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Fill out the form below and I&apos;ll get back to you.
          </p>
        </div>

        <ContactForm />
      </section>
      </AnimateOnScroll>
    </div>
  )
}
