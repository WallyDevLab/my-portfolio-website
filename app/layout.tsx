import type { Metadata } from "next" // 1. Import the Metadata type
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// 2. Define and export the metadata object
export const metadata: Metadata = {
  title: "Wally Dev Lab | Full-Stack Developer",
  description: "Portfolio of Katlego Barayi",
  icons: {
    icon: "@/app/Wally-Dev-Lab-Official-Logo-Vertical-White.ico", // Replace with your actual filename in the public folder
  },
  // This helps with SEO and social media sharing
  openGraph: {
    title: "Wally Dev Lab",
    description: "Full-Stack Developer Portfolio",
    url: "https://wally-dev-lab.vercel.app/",
    siteName: "Wally Dev Lab",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased"> 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* Using <main> with min-h-screen ensures the footer stays at the bottom */}
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}