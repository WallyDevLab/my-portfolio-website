import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import {  Footer } from "@/components/footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar/>
          {children}
          <Footer/>


        </ThemeProvider>
      </body>
    </html>
  )
}