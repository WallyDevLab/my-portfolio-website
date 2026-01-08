"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"


export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // This prevents the "hydration mismatch" error
  // (where the server and client show different things)
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto px-6">

        {/* Logo Section - Clickable to scroll to top */}
        <button 
          onClick={scrollToTop} 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/public/icons/Wally-Dev-Lab-Official-Logo-White-Logo-Mark.png" // Path to your logo in public folder
            alt="Katlego Barayi Logo"
            width={32}      // Adjust size as needed
            height={32}
            className="rounded-sm"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            Wally.dev
          </span>
        </button>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {/* Logic: Only show the icon once the page is "mounted" */}
            {mounted && (
              resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
              )
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}