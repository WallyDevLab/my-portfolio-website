import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

      {/* Hero Section */}

      <section className="flex flex-col items-start gap-4 pt-20">
        
        {/* <Badge variant="outline" className="px-3 py-1">Available for work</Badge> */}

        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
          Hi, I'm <span className="text-blue-600">Katlego Barayi</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-[700px]">
          A full-stack developer passionate about building clean, 
          performant web applications using TypeScript and React.
        </p>

        <div className="flex gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>

      </section>

      {/* Basic Project Placeholder */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground italic">
              Project Coming Soon
            </div>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                A brief description of the cool thing you built.
              </p>
              {/* <div className="flex gap-2">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}