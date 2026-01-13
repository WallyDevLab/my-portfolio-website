import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wally Dev Lab. Built with Next.js and Tailwind.
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/WallyDevLab" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/wally-dev-lab/" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          {/* <a 
            href="mailto:wallydevlab@gmail.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a> */}
        </div>
      </div>
    </footer>
  )
}