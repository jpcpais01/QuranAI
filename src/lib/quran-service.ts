import { quranData, type QuranVerse } from "@/data/quran-data"

export type { QuranVerse }

export interface Surah {
  number: number
  verses: QuranVerse[]
}

export async function fetchSurah(surahNumber: number): Promise<Surah> {
  return new Promise((resolve, reject) => {
    const verses = quranData.filter(verse => verse.surah === surahNumber);
    if (verses.length > 0) {
      resolve({
        number: surahNumber,
        verses
      });
    } else {
      reject(new Error(`Surah ${surahNumber} not found`));
    }
  });
}

export async function getQuranVerses(surahNumber: number): Promise<QuranVerse[]> {
  // Simulate API delay for smoother loading states
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const surah = await fetchSurah(surahNumber);
  return surah.verses;
}

export async function searchQuran(query: string): Promise<Array<QuranVerse & { score: number, surahNumber: number }>> {
  if (!query) return []
  
  const normalizedQuery = query.toLowerCase()
  const results: Array<QuranVerse & { score: number, surahNumber: number }> = []
  
  // Get all surahs (we're assuming surah numbers are 1-114)
  for (let i = 1; i <= 114; i++) {
    try {
      const surah = await fetchSurah(i)
      surah.verses.forEach(verse => {
        if (verse.text.toLowerCase().includes(normalizedQuery) ||
            verse.translation.toLowerCase().includes(normalizedQuery)) {
          results.push({
            ...verse,
            surahNumber: surah.number,
            score: (
              (verse.text.toLowerCase().includes(normalizedQuery) ? 1 : 0) +
              (verse.translation.toLowerCase().includes(normalizedQuery) ? 1 : 0)
            )
          })
        }
      })
    } catch (error) {
      console.error(`Error searching surah ${i}:`, error)
    }
  }
  
  return results.sort((a, b) => b.score - a.score)
}

// Cache for storing fetched surahs
const surahCache = new Map<number, Surah>()

export async function getCachedSurah(surahNumber: number): Promise<Surah> {
  // Check if surah is already in cache
  const cachedSurah = surahCache.get(surahNumber)
  if (cachedSurah) {
    return cachedSurah
  }

  // If not in cache, fetch the surah
  const surah = await fetchSurah(surahNumber)
  
  // Cache the surah for future use
  surahCache.set(surahNumber, surah)
  
  return surah
}
