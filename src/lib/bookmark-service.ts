import { QuranVerse } from "@/lib/quran-service"

export interface Bookmark {
  id: string
  verseNumber: number
  surahNumber: number
  timestamp: number
  note?: string
}

// Local storage key for bookmarks
const BOOKMARKS_KEY = 'quran-plus-bookmarks'

// Get all bookmarks
export function getBookmarks(): Bookmark[] {
  if (typeof window === 'undefined') return []
  
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY)
  return bookmarks ? JSON.parse(bookmarks) : []
}

// Add a bookmark
export function addBookmark(verse: QuranVerse & { surah: number }, note?: string): Bookmark {
  const bookmarks = getBookmarks()
  
  const newBookmark: Bookmark = {
    id: `${verse.surah}-${verse.numberInSurah}`,
    verseNumber: verse.numberInSurah,
    surahNumber: verse.surah,
    timestamp: Date.now(),
    note
  }
  
  // Check if bookmark already exists
  const existingIndex = bookmarks.findIndex(b => b.id === newBookmark.id)
  if (existingIndex >= 0) {
    // Update existing bookmark
    bookmarks[existingIndex] = newBookmark
  } else {
    // Add new bookmark
    bookmarks.push(newBookmark)
  }
  
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
  return newBookmark
}

// Remove a bookmark
export function removeBookmark(surahNumber: number, verseNumber: number) {
  const bookmarks = getBookmarks()
  const filteredBookmarks = bookmarks.filter(
    b => !(b.surahNumber === surahNumber && b.verseNumber === verseNumber)
  )
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filteredBookmarks))
}

// Check if a verse is bookmarked
export function isBookmarked(surahNumber: number, verseNumber: number): boolean {
  const bookmarks = getBookmarks()
  return bookmarks.some(
    b => b.surahNumber === surahNumber && b.verseNumber === verseNumber
  )
}

// Update bookmark note
export function updateBookmarkNote(surahNumber: number, verseNumber: number, note: string) {
  const bookmarks = getBookmarks()
  const bookmark = bookmarks.find(
    b => b.surahNumber === surahNumber && b.verseNumber === verseNumber
  )
  
  if (bookmark) {
    bookmark.note = note
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
  }
}
