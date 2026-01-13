"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function AddTestimonialForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false) // Added loading state for better UX

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // We read the JSON body ONLY ONCE here
      const result = await response.json()

      if (response.ok) {
        alert("Thank you! Your testimonial has been submitted.")
        setOpen(false)
        window.location.reload()
      } else {
        // We use the 'result' we already read instead of calling .json() again
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
        <form 
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData);
          }} 
          className="space-y-4 pt-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input name="name" placeholder="Name" required disabled={loading} />
            <Input name="surname" placeholder="Surname" required disabled={loading} />
          </div>
          <Input name="email" type="email" placeholder="Your Email" required disabled={loading} />
          
          <Select name="role" required disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mentor">Mentor</SelectItem>
              <SelectItem value="Mentee">Mentee</SelectItem>
              <SelectItem value="Junior Developer">Junior Developer</SelectItem>
              <SelectItem value="Senior Developer">Senior Developer</SelectItem>
              <SelectItem value="Senior Manager">Senior Manager</SelectItem>
              <SelectItem value="Scrum Master">Scrum Master</SelectItem>
            </SelectContent>
          </Select>

          <Select name="category" required disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mentors">Mentors</SelectItem>
              <SelectItem value="Mentees">Mentees</SelectItem>
              <SelectItem value="Colleagues">Colleagues</SelectItem>
            </SelectContent>
          </Select>

          <Input name="oneLiner" placeholder="One liner (e.g. A brilliant problem solver)" required disabled={loading} />
          <Textarea name="content" placeholder="Write your testimonial here..." rows={5} required disabled={loading} />
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit for Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}