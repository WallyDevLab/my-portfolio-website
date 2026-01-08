import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  {
    title: "E-commerce Dashboard",
    image: "/e-commerce.png",
    description: "A full-stack admin panel with real-time analytics and inventory management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "AI Chat App",
    image: "ai-chat-app.png",
    description: "Integrated OpenAI API to create a smart coding assistant for developers.",
    tech: ["React", "Node.js", "Tailwind"],
    link: "https://github.com/yourusername/project2"
  },
  // Add more projects here easily!
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

      {/* Hero Section */}

      <section className="flex flex-col items-start gap-4 pt-20">
        
        {/* <Badge variant="outline" className="px-3 py-1">Available for work</Badge> */}

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-blue-600">Katlego Barayi</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
          A full-stack developer passionate about building clean, 
          performant web applications using TypeScript and React.
        </p>

        <div className="flex gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>

      </section>

      {/* Basic Project Placeholder */}
      <section id="projects" className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Card key={index} className="flex flex-col" overflow-hidden>
              <div className="relative h-48 w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noreferrer">View Code</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}