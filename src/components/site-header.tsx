"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookOpenIcon } from "@heroicons/react/24/outline"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6 text-primary" />
          <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quran+
          </span>
        </Link>
        <div className="flex-1" />
        <ThemeToggle />
      </div>
    </header>
  )
}
