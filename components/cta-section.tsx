import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="border-t border-border/50 bg-foreground py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Stop hoarding numbers{" "}
            <br className="hidden sm:block" />
            you&apos;ll never call again
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/60 sm:text-lg">
            Temp Contacts keeps your address book clean by automatically
            removing numbers you no longer need. Free to use, no account
            required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 w-full gap-2.5 rounded-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
              asChild
            >
              <a href="https://apps.apple.com/gh/app/temp-contacts/id6760283830" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full gap-2.5 rounded-full border-background/20 bg-transparent text-background hover:bg-background/10 sm:w-auto"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Android — Coming Soon
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
