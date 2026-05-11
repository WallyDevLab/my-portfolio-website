import type { Metadata } from "next" // 1. Import the Metadata type
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// 2. Define and export the metadata object
export const metadata: Metadata = {
  title: "Katlego Barayi | Software Engineer",
  description: "Full-stack software engineer open to new opportunities. Building for correctness, performance, and delivery.",
  icons: {
    icon: "/icons/black-icon.ico",
  },
  openGraph: {
    title: "Katlego Barayi — Software Engineer · Open to Work",
    description: "Full-stack software engineer open to new opportunities. Building for correctness, performance, and delivery.",
    url: "https://wally-dev-lab.vercel.app/",
    siteName: "Wally Dev Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katlego Barayi — Software Engineer · Open to Work",
    description: "Full-stack software engineer open to new opportunities.",
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