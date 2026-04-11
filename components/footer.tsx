import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/icon-64x64.png"
              alt="Temp Contacts"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Temp Contacts
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            <Link
              href="/#features"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#use-cases"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Use Cases
            </Link>
            <Link
              href="/#how-it-works"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Temp Contacts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
