import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AndroidDownloadButton } from "@/components/android-download-button"

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
            Available on iOS &middot; Android beta
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

          <div className="mt-10 flex items-center justify-center gap-3">
            <Button size="lg" className="h-11 gap-2 rounded-full px-5 text-sm" asChild>
              <a href="https://apps.apple.com/gh/app/temp-contacts/id6760283830" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
            </Button>
            <AndroidDownloadButton
              size="lg"
              className="h-11 gap-2 rounded-full px-5 text-sm"
              label="Download for Android"
            />
          </div>
        </div>

        {/* App demo video in phone frame */}
        <div className="relative mx-auto mt-20 max-w-[280px]">
          <div className="rounded-[2.5rem] border-[6px] border-neutral-800 bg-black p-0 shadow-2xl shadow-black/20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[2rem] w-full"
              poster="/app-contact-list.png"
            >
              <source src="/app-demo.mp4" type="video/mp4" />
              {/* Fallback to static image */}
              <Image
                src="/app-contact-list.png"
                alt="Temp Contacts app — contact list showing labels, expiry timers, and quick call/message buttons"
                width={590}
                height={1278}
                className="rounded-[2rem]"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
