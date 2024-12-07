"use client"

import { useSearchParams } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { surahs } from "@/data/surahs"
import { SurahPicker } from "@/components/surah-picker"
import { useState, useEffect, Suspense } from "react"
import { getQuranVerses, type QuranVerse } from "@/lib/quran-service"
import { LoadingPlaceholder } from "@/components/ui/loading"
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/24/solid"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { addBookmark as addBookmarkService, removeBookmark as removeBookmarkService, isBookmarked as isBookmarkedService } from "@/lib/bookmark-service"
import { ShareIcon } from "@heroicons/react/24/outline"

function ReadPageContent() {
  const searchParams = useSearchParams()
  const surahNumber = Number(searchParams?.get("surah") || "1")
  const [showArabic, setShowArabic] = useState(true)
  const [verses, setVerses] = useState<QuranVerse[]>([])
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  
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
          localStorage.setItem("last-read-position", JSON.stringify({
            surah: surahNumber,
            verse: verseNumber,
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

  // Load bookmarked verses
  useEffect(() => {
    const updateBookmarkedVerses = () => {
      const newBookmarkedVerses = new Set<string>()
      verses.forEach(verse => {
        const surahNumber = Math.floor(verse.number / 1000)
        if (isBookmarkedService(surahNumber, verse.numberInSurah)) {
          newBookmarkedVerses.add(`${surahNumber}-${verse.numberInSurah}`)
        }
      })
      setBookmarkedVerses(newBookmarkedVerses)
    }
    updateBookmarkedVerses()
  }, [verses])

  const isBookmarked = (verse: QuranVerse) => {
    const surahNumber = Math.floor(verse.number / 1000)
    return bookmarkedVerses.has(`${surahNumber}-${verse.numberInSurah}`)
  }

  const addBookmark = (verse: QuranVerse) => {
    const surahNumber = Math.floor(verse.number / 1000)
    addBookmarkService({ ...verse, surah: surahNumber })
    setBookmarkedVerses(prev => {
      const newSet = new Set(prev)
      newSet.add(`${surahNumber}-${verse.numberInSurah}`)
      return newSet
    })
  }

  const removeBookmark = (verse: QuranVerse) => {
    const surahNumber = Math.floor(verse.number / 1000)
    removeBookmarkService(surahNumber, verse.numberInSurah)
    setBookmarkedVerses(prev => {
      const newSet = new Set(prev)
      newSet.delete(`${surahNumber}-${verse.numberInSurah}`)
      return newSet
    })
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
              <Button variant="ghost" size="icon">
                <BookmarkOutlineIcon className="h-5 w-5" />
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
                  return (
                    <div key={verse.number} className="mb-8 relative group">
                      <div 
                        className="flex items-start justify-between gap-4 cursor-pointer"
                        onClick={() => {
                          // Update last read position when clicking a verse
                          const surahNumber = Math.floor(verse.number / 1000)
                          localStorage.setItem("last-read-position", JSON.stringify({
                            surah: surahNumber,
                            verse: verse.numberInSurah,
                            timestamp: Date.now(),
                            surahName: currentSurah?.englishName
                          }))
                        }}
                      >
                        <span className="text-sm text-muted-foreground">
                          {verse.numberInSurah}
                        </span>
                        <div className="flex-1">
                          {showArabic && (
                            <p className="text-2xl font-arabic leading-loose mb-4 text-right">
                              {verse.text}
                            </p>
                          )}
                          <p className="text-lg leading-relaxed">{verse.translation}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const isVerseBookmarked = isBookmarked(verse)
                            if (isVerseBookmarked) {
                              removeBookmark(verse)
                            } else {
                              addBookmark(verse)
                            }
                          }}
                          className={cn(
                            "opacity-0 group-hover:opacity-100 transition-opacity",
                            isBookmarked(verse) && "opacity-100"
                          )}
                        >
                          {isBookmarked(verse) ? (
                            <BookmarkSolidIcon className="h-5 w-5 text-primary" />
                          ) : (
                            <BookmarkOutlineIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
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
