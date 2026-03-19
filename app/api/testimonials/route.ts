import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// ── Sanitization helpers ──────────────────────────────────────────

function sanitize(input: unknown, maxLength: number = 500): string {
  if (typeof input !== "string") return ""
  return input
    .trim()
    .replace(/<[^>]*>/g, "")   // strip HTML tags
    .replace(/\s+/g, " ")      // collapse multiple whitespace into one
    .slice(0, maxLength)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// ── Allowed values (whitelist) ────────────────────────────────────

const VALID_ROLES = [
  "Mentor",
  "Mentee",
  "Junior Developer",
  "Mid Developer",
  "Senior Developer",
  "Senior Manager",
  "Scrum Master",
  "Functional Analyst",
  "Product Owner",
  "UX/UI Designer",
  "Quality Assurance Engineer",
]

const VALID_CATEGORIES = ["Mentors", "Mentees", "Colleagues"]

// ── POST handler ──────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // 1. Sanitize every field
    const name     = sanitize(data.name, 50)
    const surname  = sanitize(data.surname, 50)
    const email    = sanitize(data.email, 100).toLowerCase()
    const role     = sanitize(data.role, 50)
    const category = sanitize(data.category, 50)
    const oneLiner = sanitize(data.oneLiner, 150)
    const content  = sanitize(data.content, 2000)

    // 2. Required fields check
    if (!name || !surname || !email || !role || !category || !oneLiner || !content) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    // 3. Email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // 4. Whitelist validation for role and category
    if (!VALID_ROLES.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role selected." },
        { status: 400 }
      )
    }

    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { error: "Invalid category selected." },
        { status: 400 }
      )
    }

    // 5. Duplicate check
    const existingTestimonial = await prisma.testimonial.findFirst({
      where: { email },
    })

    if (existingTestimonial) {
      return NextResponse.json(
        { error: "You have already submitted a testimonial!" },
        { status: 400 }
      )
    }

    // 6. Create record with sanitized data
    const testimonial = await prisma.testimonial.create({
      data: { name, surname, email, role, category, oneLiner, content },
    })

    return NextResponse.json(testimonial)
  } catch (error) {
    console.error("Request error", error)
    return NextResponse.json(
      { error: "Error creating testimonial" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: "API is working" })
}