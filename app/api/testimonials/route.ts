import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "Testimonial submissions are closed." },
    { status: 405 }
  )
}

export async function GET() {
  return NextResponse.json({ message: "API is working" })
}