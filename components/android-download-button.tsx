"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ANDROID_IN_PRODUCTION, ANDROID_URLS } from "@/lib/config"
import { useState } from "react"

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
)

interface AndroidDownloadButtonProps {
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  label: string
}

export function AndroidDownloadButton({
  size = "lg",
  className,
  label,
}: AndroidDownloadButtonProps) {
  const [open, setOpen] = useState(false)

  if (ANDROID_IN_PRODUCTION) {
    return (
      <Button size={size} variant="outline" className={className} asChild>
        <a
          href={ANDROID_URLS.playStore}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlayStoreIcon className="h-4 w-4" />
          {label}
        </a>
      </Button>
    )
  }

  return (
    <>
      <Button
        size={size}
        variant="outline"
        className={className}
        onClick={() => setOpen(true)}
      >
        <PlayStoreIcon className="h-4 w-4" />
        {label}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Android Beta</DialogTitle>
            <DialogDescription>
              Temp Contacts for Android is in beta testing. Follow these two
              steps to get access:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                1
              </span>
              <div>
                <p className="text-sm font-medium">Join the testers group</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Join our Google Group so you get access to the beta.
                </p>
                <Button size="sm" className="mt-2 h-8 rounded-full text-xs" asChild>
                  <a
                    href={ANDROID_URLS.testersGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Group
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-t border-border" />

            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                2
              </span>
              <div>
                <p className="text-sm font-medium">Download from Play Store</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  After joining the group, install the app from the Play Store.
                </p>
                <Button size="sm" className="mt-2 h-8 rounded-full text-xs" asChild>
                  <a
                    href={ANDROID_URLS.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Beta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
