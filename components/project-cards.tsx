"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react"
import type { Project } from "@/lib/data"

// export interface Project {
//   title: string
//   image: string
//   description: string
//   tech: string[]
//   codeUrl: string
//   liveUrl?: string
//   caseStudy?: string
// }

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)

  return (
    <Card
      className={`flex flex-col overflow-hidden border-muted-foreground/20 hover:border-accent-brand/50 transition-colors duration-300 ${
        featured ? "max-w-xl" : "h-full"
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative ${
          featured ? "h-64" : "h-48"
        } w-full bg-muted overflow-hidden`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <CardContent
        className={`${featured ? "p-8" : "p-6"} flex-1 flex flex-col ${
          featured ? "text-center items-center" : ""
        }`}
      >
        <h3 className={`${featured ? "text-2xl" : "text-xl"} font-bold`}>
          {project.title}
        </h3>

        <p
          className={`${
            featured ? "text-md mt-4 mb-6" : "text-sm mt-2 mb-4 flex-1"
          } text-muted-foreground leading-relaxed ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Badges */}
        <div
          className={`flex flex-wrap ${
            featured ? "justify-center" : ""
          } gap-2 mb-6`}
        >
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant={featured ? "secondary" : "outline"}
              className={`${
                featured ? "px-3 py-1" : ""
              } uppercase tracking-wider text-[10px]`}
            >
              {t}
            </Badge>
          ))}
        </div>

        {/* ── Action Buttons ── */}
        <div
          className={`flex flex-col sm:flex-row gap-3 w-full ${
            featured ? "max-w-sm" : ""
          } mt-auto`}
        >
          {/* View Code (always visible) */}
          <Button variant="outline" className="flex-1 group" asChild>
            <a href={project.codeUrl} target="_blank" rel="noreferrer">
              View Code
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Visit Site (only if liveUrl exists) */}
          {project.liveUrl && (
            <Button className="flex-1 gap-2" asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Visit Site
              </a>
            </Button>
          )}
        </div>

        {/* ── Case Study Dialog ── */}
        {project.caseStudy && (
          <Dialog open={caseStudyOpen} onOpenChange={setCaseStudyOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="mt-3 w-full text-accent-brand hover:text-accent-brand/80 gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Case Study
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent-brand" />
                  {project.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent-brand">
                  Why I Built This
                </h4>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.caseStudy}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-[10px] uppercase tracking-wider"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  )
}
