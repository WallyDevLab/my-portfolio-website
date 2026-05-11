import { prisma } from "@/lib/prisma"

export const EXPERIENCE = [
  {
    company: "MTN CoE",
    location: "Johannesburg",
    role: "Software Engineer",
    period: "January 2025 — PRESENT",
    description: "Core member of the CMS engineering team building and supporting the Content Management System for MTN Group's Consolidation App.",
    responsibilities: [
      "CMS Platform Strategy: Designing scalable content models using Directus for enterprise-level delivery across multiple regions.",
      "Full-Stack Development: Building performant web applications with Next.js, TypeScript, and Tailwind CSS, implementing ISR caching and component-driven architecture with shadcn/ui.",
      "Security & Data Integrity: Implementing OAuth and Okta for enterprise-grade access control, server-side input sanitization, and whitelist validation to protect API endpoints.",
      "CI/CD & Automation: Maintaining deployment pipelines with GitHub Actions, writing pre-deployment scripts for linting, type-checking, and build verification before production releases.",
      "Performance & SEO: Optimizing page load times through ISR caching strategies, responsive image handling, structured metadata (Open Graph, JSON-LD), and WCAG 2.1 AA accessibility compliance.",
      "Analytics & Monitoring: Leveraging Datadog for application performance monitoring (APM) and log management, filtering and triaging production logs to identify bottlenecks. Integrating PostHog for product telemetry, user behavior tracking, and proactive issue identification."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Directus", "OAuth", "Okta", "Datadog", "PostHog", "Prisma", "GitHub Actions", "Scrum"]
  },
  {
    company: "Lelapa AI",
    location: "Johannesburg",
    role: "Prototype Developer",
    period: "June 2024 — October 2024",
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

export type Project = {
  title: string
  image: string
  description: string
  tech: string[]
  codeUrl: string
  liveUrl?: string
  caseStudy?: string
}

export const PROJECTS: Project[] = [
  
  {
    title: "WebSocket Chat Server",
    image: "/WebSocketChat.png",
    description: "A real-time chat application with username authentication, duplicate prevention, live user tracking, and a full server admin CLI for moderation and monitoring.",
    tech: ["Node.js", "TypeScript", "WebSocket", "Express"],
    codeUrl: "https://github.com/WallyDevLab/web-socket-server",
    liveUrl: "https://wallydevlab.github.io/web-socket-server/",
    caseStudy:
      "Most web apps rely on HTTP request/response cycles, but I wanted to understand what happens when you need true bidirectional, real-time communication. This project was my deep dive into the WebSocket protocol.\n\nI built a complete client-server architecture from scratch: a TypeScript backend handling authentication, user presence tracking, and message broadcasting over raw WebSocket connections (no Socket.io abstraction), paired with a vanilla HTML/CSS/JS frontend that connects via the browser's native WebSocket API.\n\nThe server includes a full interactive CLI with commands for muting, kicking, banning users, broadcasting announcements, toggling maintenance mode, and viewing live stats. This gave me hands-on experience with real-time systems, connection lifecycle management, and the kind of admin tooling production chat services need.\n\nI intentionally kept the client framework-free to prove that real-time features do not require React or any heavy library. The separation of concerns (independent server and client codebases) also mirrors how production microservices are structured."
  },
  {
    title: "Intern Leave Tracker",
    image: "/LeaveRequestApp.png",
    description: "A full featured leave management system with multi-approver workflows, automated email notifications, business day calculation, and role-based dashboards for interns and approvers.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "shadcn/ui"],
    codeUrl: "https://github.com/WallyDevLab/leave-request-app",
    liveUrl: "https://leave-request-app-sigma.vercel.app/dashboard",
    caseStudy:
      "At MTN, interns had no streamlined way to request and track leave. The process was manual, email-heavy, and lacked visibility for both interns and their approvers. I built this app to solve that.\n\nThe system implements a multi-approver workflow requiring 2 approvals before leave is confirmed, with automated email notifications sent to approvers containing direct review links. It handles partial approval states (1 approval + 1 rejection), business day calculation that excludes weekends, and real-time status tracking across Pending, Approved, Rejected, and Partial statuses.\n\nSecurity was a priority from the start. All user inputs are sanitized to prevent XSS and injection attacks, with strict email validation, date range enforcement, and character limits on every field. The UI follows MTN's brand identity using a 60:30:10 color ratio (black, yellow, white).\n\nI chose Next.js 15 with the App Router and Server Actions to keep the architecture clean, avoiding the need for separate API routes. The role-based dashboard gives interns and approvers completely different views tailored to their workflow, and the entire system is deployed on Vercel with environment-based configuration."
  },
  {
    title: "Portfolio Profile",
    image: "/image.png",
    description: "A full-stack portfolio profile built with Next.js, TypeScript, and Prisma. Features a testimonial system, dark/light theming, and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    codeUrl: "https://github.com/WallyDevLab/my-portfolio-website",
    liveUrl: "https://wally-dev-lab.vercel.app",
    caseStudy:
      "I built this portfolio to go beyond a simple landing page. I wanted a full-stack project that demonstrates my ability to work across the entire web development stack: from database design with Prisma and PostgreSQL, to server-side rendering with Next.js, to polished UI with Tailwind and shadcn/ui.\n\nThe testimonial system was intentional. Rather than static text, it lets mentors and colleagues leave real, verified feedback that lives in a database. This showcases CRUD operations, form validation, spam prevention, and API design in a real-world context.\n\nIt also serves as a living playground where I test new patterns: ISR caching, accessibility standards, animation systems, and CI/CD automation scripts."
  },
]

export async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({
      take: 5,
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    })
  } catch {
    return []
  }
}