import Image from "next/image"
import { Clock, Phone, Tag, Archive, Smartphone, PhoneIncoming } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Not just a timer.{" "}
            <br className="hidden sm:block" />
            A smarter way to manage contacts.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Expiry is just the beginning. Caller ID, labels, archiving, and more
            — built for people who collect numbers they only need temporarily.
          </p>
        </div>

        {/* Caller ID — hero feature */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-foreground p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                <PhoneIncoming className="h-3.5 w-3.5" />
                Star feature
              </div>
              <h3 className="mt-4 text-2xl font-bold text-background sm:text-3xl">
                Caller ID for temporary numbers
              </h3>
              <p className="mt-3 text-base leading-relaxed text-background/60">
                When a temporary contact calls you, you&apos;ll see their name, label,
                and expiry status — right on your lock screen. No more
                &ldquo;who is this?&rdquo; moments. You always know who&apos;s calling
                and why you have their number.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Shows contact name on incoming calls",
                  "Displays the label (Dating, Delivery, etc.)",
                  "Works even when the app is in the background",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-background/70">
                    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Real app screenshot — contact list showing caller ID context */}
            <div className="flex justify-center">
              <div className="w-full max-w-[200px] rounded-[2rem] border-[4px] border-neutral-700 bg-black shadow-xl">
                <Image
                  src="/app-contact-list.png"
                  alt="Contact list with Caller ID labels and expiry timers"
                  width={590}
                  height={1278}
                  className="rounded-[1.7rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Remaining features grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Expiry timer",
              description:
                "Set a timer from hours to months when you save a contact. When it runs out, the contact auto-deletes.",
            },
            {
              icon: Tag,
              title: "Smart labels",
              description:
                "Six default labels — Delivery, Events, Travel, Services, Gig Work, and Dating. Create custom labels with premium.",
            },
            {
              icon: Phone,
              title: "Call & message",
              description:
                "Call and text directly from the app without saving to your phone book.",
            },
            {
              icon: Archive,
              title: "Archive, don't lose",
              description:
                "Archive contacts before they expire. Retrieve them whenever you need.",
            },
            {
              icon: Smartphone,
              title: "Cloud sync",
              description:
                "Sync across all your devices with premium. Switch phones seamlessly.",
            },
            {
              icon: Clock,
              title: "Extended expiry",
              description:
                "Premium unlocks extended durations and custom expiry options.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-transparent bg-secondary/50 p-5 transition-all duration-200 hover:border-border hover:bg-background hover:shadow-lg hover:shadow-black/[0.03]"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
