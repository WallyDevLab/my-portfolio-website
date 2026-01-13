import { prisma } from "@/lib/prisma"
import { AddTestimonialForm } from "./add-form"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Testimonial } from "@prisma/client" 

async function getTestimonials() {
  return await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

type Testimonial = Awaited<ReturnType<typeof getTestimonials>>[number]

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()
  const categories = ["Mentors", "Mentees", "Colleagues"]

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight">Wall of Love</h1>
          <p className="text-muted-foreground text-lg">Testimonials from people I&apos;ve worked with.</p>
        </div>
        <AddTestimonialForm />
      </div>

      {categories.map((cat) => (
        <section key={cat} className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-2">{cat}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials
              .filter((t: Testimonial) => t.category === cat) 
              .map((t: Testimonial) => (
              <Dialog key={t.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:border-blue-500 transition-all group">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                          {t.name[0]}{t.surname[0]}
                        </div>
                        <div>
                          <p className="font-bold leading-none group-hover:text-blue-600">{t.name} {t.surname}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium italic">&quot;{t.oneLiner}&quot;</p>
                    </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                                {t.name[0]}{t.surname[0]}
                            </div>
                            <div>
                                <DialogTitle>{t.name} {t.surname}</DialogTitle>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p className="font-semibold text-lg italic text-blue-600">
                            {t.oneLiner}
                        </p>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {t.content}
                        </p>
                    </div>
                  </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}