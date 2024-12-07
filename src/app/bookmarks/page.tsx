"use client"

import { useEffect, useState } from "react"
import { surahs } from "@/data/surahs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getQuranVerses, type QuranVerse } from "@/lib/quran-service"
import { BookmarkIcon } from "@heroicons/react/24/solid"
import { ShareIcon, CheckIcon } from "@heroicons/react/24/outline"
import { useToast } from "@/components/ui/use-toast"

interface BookmarkedVerse extends QuranVerse {
  surahName: string
  surahEnglishName: string
  surahNumber: number
}

export default function BookmarksPage() {
  const [bookmarkedVerses, setBookmarkedVerses] = useState<BookmarkedVerse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copiedVerseId, setCopiedVerseId] = useState<number | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const loadBookmarkedVerses = async () => {
      const savedBookmarks = localStorage.getItem("quran-bookmarks")
      if (!savedBookmarks) {
        setIsLoading(false)
        return
      }

      const bookmarkIds = JSON.parse(savedBookmarks) as number[]
      const verses: BookmarkedVerse[] = []

      for (const bookmarkId of bookmarkIds) {
        const surahNumber = Math.floor(bookmarkId / 1000)
        const verseNumber = bookmarkId % 1000
        const surah = surahs.find(s => s.number === surahNumber)
        
        if (surah) {
          try {
            const surahVerses = await getQuranVerses(surahNumber)
            const verse = surahVerses.find(v => v.numberInSurah === verseNumber)
            if (verse) {
              verses.push({
                ...verse,
                surahName: surah.name,
                surahEnglishName: surah.englishName,
                surahNumber
              })
            }
          } catch (error) {
            console.error(`Failed to load verse ${bookmarkId}:`, error)
          }
        }
      }

      setBookmarkedVerses(verses)
      setIsLoading(false)
    }

    loadBookmarkedVerses()
  }, [])

  const removeBookmark = (verseId: number) => {
    const savedBookmarks = localStorage.getItem("quran-bookmarks")
    if (savedBookmarks) {
      const bookmarks = JSON.parse(savedBookmarks) as number[]
      const newBookmarks = bookmarks.filter(b => b !== verseId)
      localStorage.setItem("quran-bookmarks", JSON.stringify(newBookmarks))
      setBookmarkedVerses(prev => prev.filter(v => {
        const currentVerseId = (v.surahNumber * 1000) + v.numberInSurah
        return currentVerseId !== verseId
      }))
    }
  }

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-8">
        <BookmarkIcon className="h-6 w-6" />
        <h1 className="text-2xl font-semibold">Bookmarks</h1>
      </div>

      {isLoading ? (
        <div className="text-center text-muted-foreground">Loading bookmarks...</div>
      ) : bookmarkedVerses.length === 0 ? (
        <div className="text-center text-muted-foreground">
          <p>No bookmarks yet</p>
          <p className="mt-2">Start reading and bookmark verses to see them here</p>
        </div>
      ) : (
        <div className="space-y-8">
          {bookmarkedVerses.map((verse) => {
            const verseId = (verse.surahNumber * 1000) + verse.numberInSurah
            return (
              <div key={verseId} className="group relative bg-muted/50 rounded-lg p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Link 
                      href={`/read?surah=${verse.surahNumber}&verse=${verse.numberInSurah}`}
                      className="font-medium hover:underline"
                    >
                      {verse.surahEnglishName}
                    </Link>
                    <span className="text-sm text-muted-foreground ml-2">
                      Verse {verse.numberInSurah}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const textToCopy = `${verse.text}\n\n${verse.translation}\n\n- ${verse.surahEnglishName}, Verse ${verse.numberInSurah}`
                        navigator.clipboard.writeText(textToCopy)
                          .then(() => {
                            setCopiedVerseId(verseId)
                            toast({
                              description: "Verse copied to clipboard",
                              duration: 2000,
                            })
                            setTimeout(() => setCopiedVerseId(null), 2000)
                          })
                          .catch(() => {
                            toast({
                              description: "Failed to copy verse",
                              variant: "destructive",
                              duration: 2000,
                            })
                          })
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedVerseId === verseId ? (
                        <CheckIcon className="h-4 w-4 text-green-500" />
                      ) : (
                        <ShareIcon className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeBookmark(verseId)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-2xl font-arabic leading-loose text-right">
                    {verse.text}
                  </p>
                  <p className="text-muted-foreground">
                    {verse.translation}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
