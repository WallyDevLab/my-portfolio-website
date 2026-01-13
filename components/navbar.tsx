"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // FIX: Change these from functions () => (...) to variables (...)
  const navLinksJSX = (
    <>
      <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">About</a>
      <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Projects</a>
      <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Contact</a>
      <Link href="/testimonials" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Testimonials</Link>
    </>
  )

  const themeToggleJSX = (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        resolvedTheme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto px-6">
        
        <button onClick={scrollToTop} className="flex items-center gap-2 hover:opacity-80 transition-opacity" type="button">
          <div className="relative w-8 h-8">
            <Image src="/logo-black.png" alt="Logo" width={32} height={32} className="dark:hidden block rounded-sm" />
            <Image src="/logo-white.png" alt="Logo" width={32} height={32} className="hidden dark:block rounded-sm" />
          </div>
          <span className="font-bold text-xl tracking-tight">Wally.dev</span>
        </button>
        
        {/* Desktop Navigation - Use {variable} instead of <Component /> */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinksJSX}
          {themeToggleJSX}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          {themeToggleJSX}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-8 text-2xl font-semibold">
                {navLinksJSX}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}