import { Button } from "@/components/ui/button"

const contacts = [
  {
    initial: "K",
    name: "Kwame Ansah",
    phone: "+233 27 189 8933",
    label: "Gig Work",
    labelColor: "text-violet-400 bg-violet-500/20",
    ringColor: "ring-violet-500",
    time: "5d 23h",
  },
  {
    initial: "S",
    name: "Sarah Miller",
    phone: "+1 415 555 0192",
    label: "Dating",
    labelColor: "text-pink-400 bg-pink-500/20",
    ringColor: "ring-pink-500",
    time: "2d 8h",
  },
  {
    initial: "J",
    name: "James Express",
    phone: "+44 7700 900123",
    label: "Delivery",
    labelColor: "text-orange-400 bg-orange-500/20",
    ringColor: "ring-orange-500",
    time: "1h 30m",
  },
]

const filterChips = [
  { label: "Delivery", color: "text-orange-400" },
  { label: "Services", color: "text-blue-400" },
  { label: "Gig Work", color: "text-violet-400" },
  { label: "Dating", color: "text-pink-400" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available on iOS &middot; Android coming soon
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Your phone contacts
            <br />
            <span className="text-accent">shouldn&apos;t be forever</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Temp Contacts lets you save numbers with an expiry timer. They
            auto-delete when time&apos;s up — and while they&apos;re active, you get
            Caller ID, labels, and everything you need to stay organized.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-11 w-full gap-2.5 rounded-full sm:w-auto" asChild>
              <a href="https://apps.apple.com/gh/app/temp-contacts/id6760283830" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 w-full gap-2.5 rounded-full sm:w-auto" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Android — Coming Soon
              </a>
            </Button>
          </div>
        </div>

        {/* Phone mockup — matches actual app dark UI */}
        <div className="relative mx-auto mt-20 max-w-[320px]">
          <div className="rounded-[2rem] border border-neutral-700/50 bg-black p-1.5 shadow-2xl shadow-black/20">
            <div className="overflow-hidden rounded-[1.6rem] bg-black">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-2">
                <span className="text-[10px] font-semibold text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full border border-white/30" />
                  <div className="h-2.5 w-4 rounded-sm border border-white/30" />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center justify-between px-5 pt-2 pb-3">
                <h3 className="text-base font-bold text-white">Temp Contacts</h3>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800">
                    <svg className="h-3 w-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800">
                    <svg className="h-3 w-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Label filter chips */}
              <div className="flex gap-2 px-4 pb-3 overflow-x-auto">
                {filterChips.map((chip, i) => (
                  <span key={i} className={`shrink-0 rounded-full bg-neutral-800 px-3 py-1 text-[10px] font-medium ${chip.color}`}>
                    {chip.label}
                  </span>
                ))}
                <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-white/50">+</span>
              </div>

              {/* Contact count */}
              <div className="flex items-center justify-between px-5 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-3.5 w-0.5 rounded-full bg-accent" />
                  <span className="text-[10px] text-white/60">{contacts.length} contacts</span>
                </div>
              </div>

              {/* Contact cards */}
              <div className="space-y-2 px-3 pb-5">
                {contacts.map((contact, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl bg-neutral-900 p-3"
                  >
                    {/* Avatar with colored ring */}
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${contact.ringColor} bg-neutral-800 text-xs font-semibold text-white/80`}>
                      {contact.initial}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-white">{contact.name}</p>
                      <p className="text-[10px] text-white/40">{contact.phone}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className={`rounded-md px-1.5 py-0.5 text-[8px] font-semibold ${contact.labelColor}`}>
                          {contact.label}
                        </span>
                        <span className="flex items-center gap-0.5 text-[9px] text-white/30">
                          <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {contact.time}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex shrink-0 gap-1.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-600/20">
                        <svg className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/20">
                        <svg className="h-3.5 w-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAB */}
              <div className="flex justify-end px-4 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                  <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
