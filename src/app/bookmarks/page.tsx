"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getBookmarks, removeBookmark, Bookmark } from "@/lib/bookmark-service"
import { surahs } from "@/data/surahs"
import { 
  ArrowsUpDownIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline"

type SortOption = "time" | "verse"

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("time")

  const loadBookmarks = useCallback(() => {
    const bookmarks = getBookmarks()
    setBookmarks(bookmarks)
  }, [])

  useEffect(() => {
    loadBookmarks()
  }, [loadBookmarks])

  const sortBookmarks = (bookmarks: Bookmark[], sortOption: SortOption) => {
    return [...bookmarks].sort((a, b) => {
      if (sortOption === "time") {
        return b.timestamp - a.timestamp // Most recent first
      } else {
        // Sort by surah number first, then verse number
        if (a.surahNumber !== b.surahNumber) {
          return a.surahNumber - b.surahNumber
        }
        return a.verseNumber - b.verseNumber
      }
    })
  }

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    setBookmarks(sortBookmarks(bookmarks, option))
  }

  const handleRemoveBookmark = (surahNumber: number, verseNumber: number) => {
    removeBookmark(surahNumber, verseNumber)
    loadBookmarks()
  }

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - timestamp) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      // If less than 24 hours ago, show relative time
      if (diffInHours < 1) {
        const minutes = Math.floor(diffInHours * 60)
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
      }
      const hours = Math.floor(diffInHours)
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    } else if (diffInHours < 48) {
      return 'Yesterday'
    } else {
      // Otherwise show the date
      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Your Bookmarks</h1>
        <div className="flex gap-2">
          <Button
            variant={sortBy === "time" ? "default" : "outline"}
            size="sm"
            onClick={() => handleSort("time")}
            className="gap-2"
          >
            <ClockIcon className="h-4 w-4" />
            By Time
          </Button>
          <Button
            variant={sortBy === "verse" ? "default" : "outline"}
            size="sm"
            onClick={() => handleSort("verse")}
            className="gap-2"
          >
            <BookOpenIcon className="h-4 w-4" />
            By Verse
          </Button>
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold mb-4">No bookmarks yet</h2>
          <p className="text-muted-foreground mb-6">
            Start reading the Quran and bookmark verses to save them here
          </p>
          <Link href="/read">
            <Button>Start Reading</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {bookmarks.map((bookmark) => {
            const surah = surahs[bookmark.surahNumber - 1]
            return (
              <div
                key={bookmark.id}
                className="flex items-center justify-between rounded-lg border bg-card text-card-foreground shadow-sm p-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {surah?.englishName} - Verse {bookmark.verseNumber}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formatTimestamp(bookmark.timestamp)}
                  </p>
                  {bookmark.note && (
                    <p className="text-sm mt-2 text-muted-foreground">{bookmark.note}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link href={`/read?surah=${bookmark.surahNumber}&verse=${bookmark.verseNumber}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveBookmark(bookmark.surahNumber, bookmark.verseNumber)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
