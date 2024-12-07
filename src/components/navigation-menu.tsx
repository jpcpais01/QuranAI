"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  HomeIcon, 
  BookOpenIcon, 
  MagnifyingGlassIcon, 
  BookmarkIcon,
  ChatBubbleLeftIcon
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Read", href: "/read", icon: BookOpenIcon },
  { name: "Search", href: "/search", icon: MagnifyingGlassIcon },
  { name: "Bookmarks", href: "/bookmarks", icon: BookmarkIcon },
  { name: "Chat", href: "/chat", icon: ChatBubbleLeftIcon },
]

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-around">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/" && pathname?.startsWith(item.href))
            
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-xs transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
