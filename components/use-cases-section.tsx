import { Heart, Truck, Briefcase, Plane, Wrench, Calendar } from "lucide-react"

const useCases = [
  {
    icon: Truck,
    title: "Delivery",
    description: "Driver numbers that expire once your package arrives safely",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Conference and meetup contacts with a natural expiration date",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Local contacts abroad that disappear when you fly home",
    color: "text-teal-500 bg-teal-50",
  },
  {
    icon: Wrench,
    title: "Services",
    description: "Plumber, electrician, moving company — gone after the job",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Briefcase,
    title: "Gig Work",
    description: "Client contacts that auto-delete when the project wraps up",
    color: "text-violet-500 bg-violet-50",
  },
  {
    icon: Heart,
    title: "Dating",
    description: "Keep numbers from dates without cluttering your contacts forever",
    color: "text-pink-500 bg-pink-50",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="border-y border-border/50 bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Use cases
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            For every temporary connection
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Six built-in labels for the most common scenarios — plus custom
            labels with premium
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl bg-background p-5 transition-shadow hover:shadow-md hover:shadow-black/3"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${useCase.color}`}>
                <useCase.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
