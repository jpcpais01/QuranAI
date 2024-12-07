"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getSurahInfo } from "@/data/surahs"
import { getQuranVerses } from "@/lib/quran-service"
import { 
  BookOpenIcon, 
  ArrowRightIcon,
  StarIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline"

interface Chapter {
  number: number;
}

interface Verse {
  chapter: number;
  number: number;
}

export default function Home() {
  const [lastRead, setLastRead] = useState<{
    surah: number;
    verse: number;
    timestamp: number;
    surahName: string;
  } | null>(null)
  const [verseOfDay, setVerseOfDay] = useState<{
    number: number;
    surah: number;
    numberInSurah: number;
    text: string;
    translation: string;
  } | null>(null)
  const [recentBookmarks, setRecentBookmarks] = useState<{
    surah: number;
    verse: number;
    text: string;
    translation: string;
    surahName: string;
  }[]>([])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load last read position from localStorage
    const lastPosition = localStorage.getItem("last-read-position")
    if (lastPosition) {
      setLastRead(JSON.parse(lastPosition))
    }
  }, [])

  // Load verse of the day
  useEffect(() => {
    const loadVerseOfDay = async () => {
      // For demo, let's use a fixed verse. In production, this could be
      // randomly selected or curated daily
      const verses = await getQuranVerses(1) // Al-Fatiha
      if (verses && verses.length > 0) {
        setVerseOfDay(verses[0])
      }
    }
    loadVerseOfDay()
  }, [])

  // Load recent bookmarks
  useEffect(() => {
    const loadRecentBookmarks = async () => {
      const savedBookmarks = localStorage.getItem("quran-bookmarks")
      if (!savedBookmarks) return

      const bookmarkIds = JSON.parse(savedBookmarks) as number[]
      const recentBookmarkIds = bookmarkIds.slice(-3).reverse() // Get last 3 bookmarks
      const bookmarks = []

      for (const bookmarkId of recentBookmarkIds) {
        const surahNumber = Math.floor(bookmarkId / 1000)
        const verseNumber = bookmarkId % 1000
        const surah = getSurahInfo(surahNumber)
        
        if (surah) {
          try {
            const verses = await getQuranVerses(surahNumber)
            const verse = verses.find(v => v.numberInSurah === verseNumber)
            if (verse) {
              bookmarks.push({
                surah: surahNumber,
                verse: verseNumber,
                text: verse.text,
                translation: verse.translation,
                surahName: surah.englishName
              })
            }
          } catch (error) {
            console.error(`Failed to load verse ${bookmarkId}:`, error)
          }
        }
      }

      setRecentBookmarks(bookmarks)
    }

    loadRecentBookmarks()
  }, [])

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
    <div className="flex-1 min-h-screen bg-gradient-to-b from-background to-muted pb-8">
      <main className="container px-4 py-8">
        {/* Verse of the Day */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <StarIcon className="h-6 w-6 text-primary" />
              Verse of the Day
            </h2>
          </div>
          {verseOfDay && (
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="space-y-4">
                <p className="text-2xl font-arabic leading-loose text-right">
                  {verseOfDay.text}
                </p>
                <p className="text-lg leading-relaxed">
                  {verseOfDay.translation}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">
                    {getSurahInfo(verseOfDay.surah)?.englishName} - Verse {verseOfDay.numberInSurah}
                  </span>
                  <Link href={`/read?surah=${verseOfDay.surah}&verse=${verseOfDay.numberInSurah}`}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </section>

        {/* Continue Reading */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-primary" />
            Continue Reading
          </h2>
          <Card className="p-6">
            {lastRead ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {lastRead.surahName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Verse {lastRead.verse}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last read {formatTimestamp(lastRead.timestamp)}
                  </p>
                </div>
                <Link href={lastRead.surah >= 1 && lastRead.surah <= 114 
                  ? `/read?surah=${lastRead.surah}&verse=${lastRead.verse}`
                  : '/read?surah=1'}>
                  <Button className="w-full gap-2">
                    Continue Reading <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">Start your journey with the Quran</p>
                <Link href="/read?surah=1">
                  <Button>Start Reading</Button>
                </Link>
              </div>
            )}
          </Card>
        </section>

        {/* Recent Bookmarks */}
        {recentBookmarks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookmarkIcon className="h-6 w-6 text-primary" />
              Recent Bookmarks
            </h2>
            <div className="space-y-4">
              {recentBookmarks.map((bookmark, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {bookmark.surahName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Verse {bookmark.verse}
                      </p>
                    </div>
                    <p className="text-2xl font-arabic leading-loose text-right">
                      {bookmark.text}
                    </p>
                    <p className="text-muted-foreground">
                      {bookmark.translation}
                    </p>
                    <Link href={`/read?surah=${bookmark.surah}&verse=${bookmark.verse}`}>
                      <Button variant="outline" className="w-full gap-2">
                        Go to Verse <ArrowRightIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
              <div className="flex flex-col items-center gap-4 mt-4 mb-2">
                <Link href="/bookmarks">
                  <Button variant="ghost" className="gap-2">
                    View All Bookmarks <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-center text-muted-foreground">
                  <p className="text-2xl font-arabic mb-1">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                  <p className="text-sm">May you all benefit from this app.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
