"use client"

import { useEffect, useState } from "react"
import { surahs } from "@/data/surahs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getQuranVerses, type QuranVerse } from "@/lib/quran-service"
import { BookmarkIcon } from "@heroicons/react/24/solid"
import { ShareIcon, CheckIcon, ClockIcon, BookOpenIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import cn from "classnames"

interface BookmarkedVerse extends QuranVerse {
  surahName: string
  surahEnglishName: string
  surahNumber: number
  timestamp: number
}

export default function BookmarksPage() {
  const [bookmarkedVerses, setBookmarkedVerses] = useState<BookmarkedVerse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'time' | 'quran'>('time')
  const [copiedVerseId, setCopiedVerseId] = useState<number | null>(null)
  const [expandedVerseId, setExpandedVerseId] = useState<number | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const loadBookmarkedVerses = async () => {
      const savedBookmarks = localStorage.getItem("quran-bookmarks")
      const bookmarkTimestamps = JSON.parse(localStorage.getItem("quran-bookmarks-timestamps") || "{}") as Record<number, number>
      
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
                surahNumber,
                timestamp: bookmarkTimestamps[bookmarkId] || Date.now()
              })
            }
          } catch (error) {
            console.error(`Failed to load verse ${bookmarkId}:`, error)
          }
        }
      }

      // Sort verses based on current sort method
      const sortedVerses = sortVerses(verses, sortBy)
      setBookmarkedVerses(sortedVerses)
      setIsLoading(false)
    }

    loadBookmarkedVerses()
  }, [sortBy])

  const removeBookmark = (verseId: number) => {
    const savedBookmarks = localStorage.getItem("quran-bookmarks")
    if (savedBookmarks) {
      const bookmarks = JSON.parse(savedBookmarks) as number[]
      const newBookmarks = bookmarks.filter(b => b !== verseId)
      localStorage.setItem("quran-bookmarks", JSON.stringify(newBookmarks))
      
      // Also remove from timestamps
      const timestamps = JSON.parse(localStorage.getItem("quran-bookmarks-timestamps") || "{}")
      delete timestamps[verseId]
      localStorage.setItem("quran-bookmarks-timestamps", JSON.stringify(timestamps))
      
      setBookmarkedVerses(prev => prev.filter(v => {
        const currentVerseId = (v.surahNumber * 1000) + v.numberInSurah
        return currentVerseId !== verseId
      }))
    }
  }

  const sortVerses = (verses: BookmarkedVerse[], sortMethod: 'time' | 'quran') => {
    if (sortMethod === 'time') {
      return [...verses].sort((a, b) => b.timestamp - a.timestamp)
    } else {
      return [...verses].sort((a, b) => {
        if (a.surahNumber !== b.surahNumber) {
          return a.surahNumber - b.surahNumber
        }
        return a.numberInSurah - b.numberInSurah
      })
    }
  }

  const handleSort = (method: 'time' | 'quran') => {
    setSortBy(method)
  }

  const sendVerseToChat = (verse: BookmarkedVerse, surahName: string) => {
    // Construct the verse message
    const verseMessage = `Verse from ${surahName}, Verse ${verse.numberInSurah}:\n\nArabic: ${verse.text}\n\nTranslation: ${verse.translation}`
    
    // Store the message in localStorage to be read by the chat page
    localStorage.setItem("pre-filled-chat-message", verseMessage)
    
    // Navigate to the chat page
    router.push("/chat")
  }

  return (
    <div className="container max-w-screen-2xl pb-24">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="h-6 w-6" />
            <h1 className="text-2xl font-semibold">Bookmarks</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant={sortBy === 'time' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleSort('time')}
              title="Sort by Time"
            >
              <ClockIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={sortBy === 'quran' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleSort('quran')}
              title="Sort by Order in Quran"
            >
              <BookOpenIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading bookmarks...</div>
        ) : bookmarkedVerses.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>No bookmarks yet</p>
            <p className="mt-2">Start reading and bookmark verses to see them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {bookmarkedVerses.map((verse) => {
              const verseId = (verse.surahNumber * 1000) + verse.numberInSurah
              const isExpanded = expandedVerseId === verseId

              return (
                <div 
                  key={verseId} 
                  className={cn(
                    "group relative bg-muted/50 rounded-lg p-3 sm:p-4 transition-all duration-200 cursor-pointer",
                    isExpanded && "col-span-2 sm:col-span-2 lg:col-span-3 p-4 sm:p-6"
                  )}
                  onClick={() => setExpandedVerseId(isExpanded ? null : verseId)}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <Link 
                        href={`/read?surah=${verse.surahNumber}&verse=${verse.numberInSurah}`}
                        className="font-medium hover:underline text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {verse.surahEnglishName}
                      </Link>
                      <span className="text-xs text-muted-foreground ml-1">
                        Verse {verse.numberInSurah}
                      </span>
                    </div>
                    {isExpanded && (
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
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
                          className="h-8 w-8"
                        >
                          {copiedVerseId === verseId ? (
                            <CheckIcon className="h-3 w-3 text-green-500" />
                          ) : (
                            <ShareIcon className="h-3 w-3" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            sendVerseToChat(verse, verse.surahEnglishName)
                          }}
                          className="h-8 w-8"
                          title="Send to Chat"
                        >
                          <ChatBubbleLeftIcon className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeBookmark(verseId)
                          }}
                          className="h-8 w-8"
                        >
                          <BookmarkIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className={cn(
                      "font-arabic leading-relaxed text-right transition-all duration-200",
                      isExpanded ? "text-2xl" : "text-lg line-clamp-2"
                    )}>
                      {verse.text}
                    </p>
                    <p className={cn(
                      "text-muted-foreground transition-all duration-200",
                      isExpanded ? "text-base" : "text-xs line-clamp-2"
                    )}>
                      {verse.translation}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
