export interface Verse {
  id: number
  verse_number: number
  arabic_text: string
  translation: string
  transliteration?: string
}

export interface Surah {
  id: number
  name: string
  english_name: string
  english_name_translation: string
  number_of_ayahs: number
  revelation_type: "Meccan" | "Medinan"
  verses: Verse[]
}

export interface Commentary {
  verse_id: number
  text: string
  source: string
  timestamp: string
}
