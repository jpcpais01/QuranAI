"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Quran+</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/read"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/read" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Read
        </Link>
        <Link
          href="/search"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/search" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Search
        </Link>
        <Link
          href="/bookmarks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/bookmarks" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Bookmarks
        </Link>
      </nav>
    </div>
  )
}
