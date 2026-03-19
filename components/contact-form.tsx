"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [messageLength, setMessageLength] = useState(0)

  const MESSAGE_MAX = 2000

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const name = (form.user_name as HTMLInputElement).value.trim()
    const email = (form.user_email as HTMLInputElement).value.trim()
    const message = (form.message as HTMLTextAreaElement).value.trim()

    // Client side validation
    if (!name || !email || !message) {
      setStatus("error")
      setErrorMessage("Please fill in all fields.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    try {
      // 1. Send the message to your inbox (main template)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      // 2. Send auto-reply to the person who contacted you
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
      }

      setStatus("success")
      setMessageLength(0)
      formRef.current?.reset()
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again later.")
    }
  }

  // Reset back to idle after success so user can send another message
  function handleReset() {
    setStatus("idle")
    setErrorMessage("")
  }

  // ── Success State ──
  if (status === "success") {
    return (
      <div className="w-full max-w-md text-center space-y-4 py-8">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out. Check your inbox for a confirmation, 
          and I&apos;ll get back to you soon.
        </p>
        <Button variant="outline" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    )
  }

  // ── Form State ──
  return (
    <div className="w-full max-w-md">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 text-left"
      >
        <div className="space-y-2">
          <label htmlFor="user_name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="John Doe"
            required
            maxLength={80}
            disabled={status === "loading"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="user_email" className="text-sm font-medium">
            Your Email
          </label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="name@example.com"
            required
            maxLength={100}
            disabled={status === "loading"}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            rows={4}
            required
            maxLength={MESSAGE_MAX}
            disabled={status === "loading"}
            onChange={(e) => setMessageLength(e.target.value.length)}
          />
          <p
            className={`text-xs text-right ${
              messageLength > MESSAGE_MAX * 0.9
                ? "text-destructive"
                : "text-muted-foreground"
            }`}
          >
            {messageLength} / {MESSAGE_MAX}
          </p>
        </div>

        {/* Error feedback */}
        {status === "error" && errorMessage && (
          <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  )
}
