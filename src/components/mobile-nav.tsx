"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  BookOpenIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleLeftIcon,
  BookmarkIcon,
  HomeIcon
} from "@heroicons/react/24/outline"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
      <nav className="flex items-center justify-around p-4">
        <Link
          href="/read"
          className={cn(
            "flex flex-col items-center",
            pathname === "/read" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <BookOpenIcon className="h-6 w-6" />
        </Link>
        <Link
          href="/bookmarks"
          className={cn(
            "flex flex-col items-center",
            pathname === "/bookmarks" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <BookmarkIcon className="h-6 w-6" />
        </Link>
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center",
            pathname === "/" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <HomeIcon className="h-6 w-6" />
        </Link>
        <Link
          href="/search"
          className={cn(
            "flex flex-col items-center",
            pathname === "/search" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </Link>
        <Link
          href="/chat"
          className={cn(
            "flex flex-col items-center",
            pathname === "/chat" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  )
}
