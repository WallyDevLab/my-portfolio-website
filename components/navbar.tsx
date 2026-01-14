"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import {  Sheet,  SheetContent,  SheetDescription,  SheetTitle,  SheetTrigger,} from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation"
import whiteIcon from "@/public/icons/wally-dev-lab-hori-icon.png"
import blackIcon from "@/public/icons/wally-dev-lab-hori-icon-blk.png"

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If we are on the home page, scroll to top safely
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If we are on any other page (like /testimonials), go back home
      router.push("/");
    }
  };

  // FIX: Change these from functions () => (...) to variables (...)
  const navLinksJSX = (
    <>
      <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">About</a>
      <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Experience</a>
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
        
        {/* Logo Section - Clickable to scroll to top */}
                <button onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 ransition-opacity" type="button">
                  <div className="relative w-45 h-25">
                    {/* This icon shows ONLY in Light Mode */}
                    <Image 
                      src={blackIcon} 
                      alt="Logo"
                      width={150}
                      height={150}
                      className="dark:hidden block rounded-sm"
                    />
                    {/* This icon shows ONLY in Dark Mode */}
                    <Image 
                      src={whiteIcon}
                      alt="Logo"
                      width={150}
                      height={150}
                      className="hidden dark:block rounded-sm"
                    />
                  </div>
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
                
                {/* --- ADD THESE ACCESSIBILITY TITLES START --- */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main site navigation links for About, Projects, Experience, and Contact sections.
                </SheetDescription>
                {/* --- ADD THESE ACCESSIBILITY TITLES END --- */}

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