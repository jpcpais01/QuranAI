import { useState, useEffect, useCallback } from "react"
import { debounce } from "lodash"
import { searchQuran, type QuranVerse } from "@/lib/quran-service"

interface SearchResult extends QuranVerse {
  score: number
  surahNumber: number
}

export function useDebouncedSearch(delay: number = 300) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const debouncedSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setError(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    searchQuran(searchQuery)
      .then((results) => {
        setSearchResults(results as SearchResult[])
      })
      .catch((err) => {
        setError("Failed to search. Please try again.")
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      });
  }, [searchQuery])

  // Call debounced search whenever searchQuery changes
  useEffect(() => {
    const debounced = debounce(debouncedSearch, delay)
    debounced()
    // Cancel the debounced call on cleanup
    return () => debounced.cancel()
  }, [searchQuery, delay, debouncedSearch])

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
  }
}
