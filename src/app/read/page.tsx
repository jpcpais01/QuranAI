"use client"

import { useSearchParams } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { surahs } from "@/data/surahs"
import { SurahPicker } from "@/components/surah-picker"
import { useState, useEffect, Suspense } from "react"
import { getQuranVerses, type QuranVerse } from "@/lib/quran-service"
import { LoadingPlaceholder } from "@/components/ui/loading"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ShareIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/24/solid"

function ReadPageContent() {
  const searchParams = useSearchParams()
  const surahNumber = Number(searchParams?.get("surah") || "1")
  const [showArabic, setShowArabic] = useState(true)
  const [verses, setVerses] = useState<QuranVerse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [bookmarks, setBookmarks] = useState<number[]>([])
  const [lastReadVerse, setLastReadVerse] = useState<number>(0)
  
  const currentSurah = surahs.find(s => s.number === surahNumber)

  const nextSurah = currentSurah ? surahs.find(s => s.number === surahNumber + 1) : null
  const previousSurah = currentSurah ? surahs.find(s => s.number === surahNumber - 1) : null

  useEffect(() => {
    const loadVerses = async () => {
      if (currentSurah) {
        setIsLoading(true)
        try {
          const data = await getQuranVerses(currentSurah.number)
          setVerses(data)
          // Save last read position
          const verseNumber = Number(searchParams?.get("verse")) || 1
          const surahNumber = Math.floor(verseNumber / 1000)
          const actualVerseNumber = verseNumber % 1000
          localStorage.setItem("last-read-position", JSON.stringify({
            surah: surahNumber,
            verse: actualVerseNumber,
            timestamp: Date.now(),
            surahName: currentSurah?.englishName
          }))
        } catch (error) {
          console.error("Failed to load verses:", error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    loadVerses()
  }, [surahNumber, currentSurah, searchParams])

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("quran-bookmarks")
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }
  }, [])

  useEffect(() => {
    // Set up intersection observer for middle of screen tracking
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const verseElement = entry.target as HTMLElement
          const verseNumber = parseInt(verseElement.dataset.verseId || "0")
          if (verseNumber) {
            setLastReadVerse(verseNumber)
            // Save last read position
            const surahNumber = Math.floor(verseNumber / 1000)
            const actualVerseNumber = verseNumber % 1000
            localStorage.setItem("last-read-position", JSON.stringify({
              surah: surahNumber,
              verse: actualVerseNumber,
              timestamp: Date.now(),
              surahName: currentSurah?.englishName
            }))
          }
        }
      })
    }

    // Create observer with threshold at middle of screen
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0
    })

    // Observe all verse elements
    document.querySelectorAll('[data-verse-id]').forEach(verse => {
      observer.observe(verse)
    })

    return () => observer.disconnect()
  }, [verses, currentSurah])

  const toggleBookmark = (verseId: number) => {
    const newBookmarks = bookmarks.includes(verseId)
      ? bookmarks.filter(b => b !== verseId)
      : [...bookmarks, verseId]
    
    setBookmarks(newBookmarks)
    localStorage.setItem("quran-bookmarks", JSON.stringify(newBookmarks))
  }

  if (!currentSurah) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Surah not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-32">
      <div className="sticky top-0 z-10 backdrop-blur-lg border-b bg-background/80">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h1 className="text-xl font-semibold truncate">
              {currentSurah.englishName}
              <span className="ml-2 text-sm text-muted-foreground">
                ({currentSurah.englishNameTranslation})
              </span>
            </h1>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowArabic(!showArabic)}
              >
                {showArabic ? "Hide Arabic" : "Show Arabic"}
              </Button>
            </div>
          </div>
          <SurahPicker currentSurah={surahNumber} />
        </div>
      </div>
      
      <main className="container py-8">
        {isLoading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <LoadingPlaceholder key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center space-y-4 bg-primary/5 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="font-arabic text-4xl leading-loose">{currentSurah.name}</h2>
              <p className="text-sm text-muted-foreground">
                {currentSurah.revelationType} • {currentSurah.numberOfAyahs} verses
              </p>
            </div>

            <ScrollArea className="h-full rounded-lg">
              <div className="space-y-8">
                {verses.map((verse) => {
                  const verseId = (currentSurah.number * 1000) + verse.numberInSurah
                  const isBookmarked = bookmarks.includes(verseId)
                  
                  return (
                    <div 
                      key={verse.numberInSurah} 
                      className="space-y-4 relative group"
                      data-verse-id={verseId}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-muted-foreground">
                          {verse.numberInSurah}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleBookmark(verseId)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {isBookmarked ? (
                              <BookmarkSolidIcon className="h-4 w-4" />
                            ) : (
                              <BookmarkOutlineIcon className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ShareIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      {showArabic && (
                        <p className="text-2xl font-arabic leading-loose text-right">
                          {verse.text}
                        </p>
                      )}
                      <p className="text-muted-foreground">
                        {verse.translation}
                      </p>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
          </div>
        )}
      </main>

      {/* Previous/Next Navigation */}
      <div className="fixed bottom-16 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {previousSurah && (
            <Link 
              href={`/read?surah=${previousSurah.number}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              {previousSurah.englishName}
            </Link>
          )}
          {nextSurah && (
            <Link 
              href={`/read?surah=${nextSurah.number}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              {nextSurah.englishName}
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ReadPage() {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <ReadPageContent />
    </Suspense>
  )
}
