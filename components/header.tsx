"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icon-64x64.png"
            alt="Temp Contacts"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Temp Contacts
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#use-cases"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Use Cases
          </Link>
          <Link
            href="/#how-it-works"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="/privacy"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button size="sm" className="h-8 rounded-full px-4 text-xs font-medium" asChild>
            <a href="https://apps.apple.com/gh/app/temp-contacts/id6760283830" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4 text-foreground" />
          ) : (
            <Menu className="h-4 w-4 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            <Link
              href="/#features"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#use-cases"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/privacy"
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <div className="mt-2 flex gap-2 border-t border-border/50 pt-3">
              <Button size="sm" className="flex-1 h-9 rounded-full text-xs" asChild>
                <a href="https://apps.apple.com/gh/app/temp-contacts/id6760283830" target="_blank" rel="noopener noreferrer">
                  Download for iOS
                </a>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 h-9 rounded-full text-xs" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Android (Soon)
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
