"use client"

import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface TestimonialCardProps {
  testimonial: {
    name: string;
    surname: string;
    role: string;
    oneLiner: string;
    content: string;
  };
  isCarousel?: boolean;
}

export function TestimonialCard({ testimonial, isCarousel }: TestimonialCardProps) {
  const initials = `${testimonial.name[0]}${testimonial.surname[0]}`;

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Card className={`
          relative cursor-help bg-muted/30 border-none p-8 flex flex-col justify-between transition-all duration-300
          hover:bg-muted/50 hover:shadow-md
          ${isCarousel ? "h-full" : "max-w-xl"}
        `}>
          <Quote className="absolute top-4 right-4 h-12 w-12 text-blue-600/10" />
          
          <p className="text-lg font-semibold italic leading-relaxed mb-6 text-foreground line-clamp-3">
            &quot;{testimonial.oneLiner}&quot;
          </p>
          
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
              {initials}
            </div>
            <div>
              <p className="font-bold leading-none">{testimonial.name} {testimonial.surname}</p>
              <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
            </div>
          </div>
        </Card>
      </HoverCardTrigger>

      {/* The Hover Pop-up Content */}
      <HoverCardContent className="w-80 md:w-96 p-6 shadow-2xl border-blue-500/20">
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b pb-3">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {initials}
            </div>
            <div>
              <h4 className="text-sm font-bold">{testimonial.name} {testimonial.surname}</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-blue-600 text-xs font-bold italic">&quot;{testimonial.oneLiner}&quot;</p>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {testimonial.content}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}