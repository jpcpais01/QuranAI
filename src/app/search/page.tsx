"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { surahs } from "@/data/surahs"
import { useDebouncedSearch } from "@/hooks/use-debounced-search"
import type { QuranVerse } from "@/lib/quran-service"

interface SearchResult extends QuranVerse {
  score: number
  surahNumber: number
}

export default function SearchPage() {
  const [sortBy, setSortBy] = useState<"relevance" | "surah">("relevance")
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error
  } = useDebouncedSearch()

  const sortResults = (results: SearchResult[]) => {
    if (sortBy === "relevance") {
      return [...results].sort((a, b) => b.score - a.score)
    } else {
      return [...results].sort((a, b) => {
        if (a.surahNumber === b.surahNumber) {
          return a.numberInSurah - b.numberInSurah
        }
        return a.surahNumber - b.surahNumber
      })
    }
  }

  const filteredAndSortedResults = sortResults(searchResults)

  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Search the Quran</h1>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search for verses..."
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4 items-center text-sm">
            <div className="space-x-2">
              <span className="text-muted-foreground">Sort by:</span>
              <Button
                variant={sortBy === "relevance" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("relevance")}
              >
                Relevance
              </Button>
              <Button
                variant={sortBy === "surah" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("surah")}
              >
                Surah Order
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8 text-muted-foreground">
              Searching...
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-8 text-destructive">
              {error}
            </div>
          )}

          {/* Results */}
          {!loading && !error && searchQuery.trim() && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">
                {searchResults.length} Results
              </h2>
              <div className="rounded-md border p-4">
                <div className="space-y-8">
                  {filteredAndSortedResults.map((result) => {
                    return (
                      <div key={`${result.surahNumber}-${result.numberInSurah}`}>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div className="flex-1">
                              {/* Arabic Text */}
                              <p className="text-xl font-arabic leading-loose text-right mb-2">
                                {result.text}
                              </p>
                              {/* Translation */}
                              <p className="text-gray-600 dark:text-gray-400">
                                {result.translation}
                              </p>
                            </div>
                            {/* Surah Info */}
                            <div className="text-sm text-muted-foreground">
                              <Link href={`/read?surah=${result.surahNumber}&verse=${result.numberInSurah}`}>
                                {surahs.find(s => s.number === result.surahNumber)?.englishName} - 
                                Verse {result.numberInSurah}
                              </Link>
                            </div>
                          </div>
                          <Separator className="mt-4" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
