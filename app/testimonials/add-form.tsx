"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const CONTENT_MAX_LENGTH = 2000

export function AddTestimonialForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // React state for Select values (shadcn Select does not forward
  // the name attribute to FormData, so controlled state is required)
  const [role, setRole] = useState("")
  const [category, setCategory] = useState("")
  const [contentLength, setContentLength] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Build payload with trimmed values + Select state
    const payload = {
      name:     (formData.get("name") as string || "").trim(),
      surname:  (formData.get("surname") as string || "").trim(),
      email:    (formData.get("email") as string || "").trim().toLowerCase(),
      role,
      category,
      oneLiner: (formData.get("oneLiner") as string || "").trim(),
      content:  (formData.get("content") as string || "").trim(),
    }

    // Client side required check (catches empty Selects)
    if (
      !payload.name ||
      !payload.surname ||
      !payload.email ||
      !role ||
      !category ||
      !payload.oneLiner ||
      !payload.content
    ) {
      alert("Please fill in all fields.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      })

      const result = await response.json()

      if (response.ok) {
        alert("Thank you! Your testimonial has been submitted.")
        setOpen(false)
        setRole("")
        setCategory("")
        setContentLength(0)
        window.location.reload()
      } else {
        alert(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("A network error occurred. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full shadow-lg">
          Leave a Testimonial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share your experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Name"
              required
              disabled={loading}
              maxLength={50}
            />
            <Input
              name="surname"
              placeholder="Surname"
              required
              disabled={loading}
              maxLength={50}
            />
          </div>

          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            disabled={loading}
            maxLength={100}
          />

          {/* Role Select — controlled via React state */}
          <Select value={role} onValueChange={setRole} disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mentor">Mentor</SelectItem>
              <SelectItem value="Mentee">Mentee</SelectItem>
              <SelectItem value="Junior Developer">Junior Developer</SelectItem>
              <SelectItem value="Mid Developer">Mid Developer</SelectItem>
              <SelectItem value="Senior Developer">Senior Developer</SelectItem>
              <SelectItem value="Senior Manager">Senior Manager</SelectItem>
              <SelectItem value="Scrum Master">Scrum Master</SelectItem>
              <SelectItem value="Functional Analyst">Functional Analyst</SelectItem>
              <SelectItem value="Product Owner">Product Owner</SelectItem>
              <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
              <SelectItem value="Quality Assurance Engineer">Quality Assurance Engineer</SelectItem>
            </SelectContent>
          </Select>

          {/* Category Select — controlled via React state */}
          <Select value={category} onValueChange={setCategory} disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mentors">Mentors</SelectItem>
              <SelectItem value="Mentees">Mentees</SelectItem>
              <SelectItem value="Colleagues">Colleagues</SelectItem>
            </SelectContent>
          </Select>

          <Input
            name="oneLiner"
            placeholder='One liner (e.g. "A brilliant problem solver")'
            required
            disabled={loading}
            maxLength={150}
          />

          <div className="space-y-1">
            <Textarea
              name="content"
              placeholder="Write your testimonial here..."
              rows={5}
              required
              disabled={loading}
              maxLength={CONTENT_MAX_LENGTH}
              onChange={(e) => setContentLength(e.target.value.length)}
            />
            <p
              className={`text-xs text-right ${
                contentLength > CONTENT_MAX_LENGTH * 0.9
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {contentLength} / {CONTENT_MAX_LENGTH}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || !role || !category}
          >
            {loading ? "Submitting..." : "Submit for Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
