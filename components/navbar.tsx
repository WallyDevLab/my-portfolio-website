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

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto px-6">
        <span className="font-bold text-xl tracking-tight">YourName.dev</span>
        
        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</a>
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