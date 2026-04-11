import { Clock, Phone, Tag, Archive, PhoneIncoming, Smartphone } from "lucide-react"

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

            {/* Caller ID visual */}
            <div className="flex justify-center">
              <div className="w-full max-w-[240px] rounded-2xl bg-background/10 p-5 backdrop-blur">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    J
                  </div>
                  <p className="text-xs text-background/40">Incoming call</p>
                  <p className="mt-1 text-lg font-bold text-background">Delivery — James</p>
                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                    <span className="text-xs text-background/50">Delivery &middot; 2h left</span>
                  </div>
                </div>
                <div className="mt-5 flex justify-center gap-8">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/90">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-background/40">Decline</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/90">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-background/40">Accept</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other features grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Expiry timer",
              description:
                "Set a timer from hours to months when you save a contact. When it runs out, the contact auto-deletes — no cleanup needed.",
            },
            {
              icon: Tag,
              title: "Labels & categories",
              description:
                "Six default labels — Delivery, Events, Travel, Services, Gig Work, and Dating. Create your own custom labels with premium.",
            },
            {
              icon: Phone,
              title: "Call & message",
              description:
                "Call and text directly from the app without saving numbers to your phone's address book. Keep your phone book clean.",
            },
            {
              icon: Archive,
              title: "Archive, don't lose",
              description:
                "Changed your mind before a contact expires? Archive it instead. Retrieve archived contacts whenever you need them.",
            },
            {
              icon: Smartphone,
              title: "Cloud sync",
              description:
                "Sync your temporary contacts across all your devices with premium. Switch phones without losing anything.",
            },
            {
              icon: Clock,
              title: "Extended expiry",
              description:
                "Need more time? Premium unlocks extended expiry options and custom durations beyond the default range.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-transparent bg-secondary/50 p-6 transition-all duration-200 hover:border-border hover:bg-background hover:shadow-lg hover:shadow-black/[0.03]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <feature.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
