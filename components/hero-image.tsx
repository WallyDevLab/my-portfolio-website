"use client"

import { useRef, useLayoutEffect } from "react"
import Image, { StaticImageData } from "next/image"
import gsap from "gsap"

interface HeroImageProps {
  src: StaticImageData
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image: fade in + scale up from 80% to 100%
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )

      // Glow: fade in slightly delayed for a layered feel
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
          delay: 0.3,
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0" style={{ opacity: 0 }}>
      <div ref={glowRef} className="absolute inset-0 bg-accent-brand/10 rounded-full blur-3xl" style={{ opacity: 0 }} />
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-2xl"
      />
    </div>
  )
}
