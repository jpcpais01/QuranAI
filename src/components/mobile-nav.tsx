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
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <nav className="container flex items-center justify-around p-4 max-w-screen-2xl mx-auto">
        <Link
          href="/read"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/read" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          <BookOpenIcon className="h-6 w-6" />
          <span className="text-xs">Read</span>
        </Link>
        <Link
          href="/bookmarks"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/bookmarks" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          <BookmarkIcon className="h-6 w-6" />
          <span className="text-xs">Bookmarks</span>
        </Link>
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/search"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/search" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          href="/chat"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/chat" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
          <span className="text-xs">Chat</span>
        </Link>
      </nav>
    </div>
  )
}
