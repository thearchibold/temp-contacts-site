import { UserPlus, PhoneCall, Sparkles } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Add with a timer",
    description:
      "Save a number, pick a label, set how long you need it — hours, days, or months.",
  },
  {
    icon: PhoneCall,
    title: "Use it normally",
    description:
      "Call, text, and identify incoming calls directly from the app. It just works.",
  },
  {
    icon: Sparkles,
    title: "It disappears",
    description:
      "When the timer runs out, the contact is gone. Your address book stays clean.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three steps. That&apos;s it.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-secondary" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                    <step.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
