import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) { // Must be 'POST'
  try {
    const data = await req.json()

    const existingTestimonial = await prisma.testimonial.findFirst({
      where: {
        email: data.email,
      },
    })

    if (existingTestimonial) {
      return NextResponse.json(
        { error: "You have already submitted a testimonial!" },
        { status: 400 } // Bad Request
      )
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        role: data.role,
        category: data.category,
        oneLiner: data.oneLiner,
        content: data.content,
      }
    })

    return NextResponse.json(testimonial)
  } catch (error) {
    console.error("Request error", error)
    return NextResponse.json({ error: "Error creating testimonial" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "API is working" })
}