export interface Surah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: "Meccan" | "Medinan"
}

export const surahs: Surah[] = [
  {
    number: 1,
    name: "الفاتحة",
    englishName: "Al-Fatiha",
    englishNameTranslation: "The Opening",
    numberOfAyahs: 7,
    revelationType: "Meccan"
  },
  {
    number: 2,
    name: "البقرة",
    englishName: "Al-Baqarah",
    englishNameTranslation: "The Cow",
    numberOfAyahs: 286,
    revelationType: "Medinan"
  },
  {
    number: 3,
    name: "آل عمران",
    englishName: "Aal-E-Imran",
    englishNameTranslation: "The Family of Imran",
    numberOfAyahs: 200,
    revelationType: "Medinan"
  },
  {
    number: 4,
    name: "النساء",
    englishName: "An-Nisa",
    englishNameTranslation: "The Women",
    numberOfAyahs: 176,
    revelationType: "Medinan"
  },
  {
    number: 5,
    name: "المائدة",
    englishName: "Al-Ma'idah",
    englishNameTranslation: "The Table Spread",
    numberOfAyahs: 120,
    revelationType: "Medinan"
  },
  {
    number: 6,
    name: "الأنعام",
    englishName: "Al-An'am",
    englishNameTranslation: "The Cattle",
    numberOfAyahs: 165,
    revelationType: "Meccan"
  },
  {
    number: 7,
    name: "الأعراف",
    englishName: "Al-A'raf",
    englishNameTranslation: "The Heights",
    numberOfAyahs: 206,
    revelationType: "Meccan"
  },
  {
    number: 8,
    name: "الأنفال",
    englishName: "Al-Anfal",
    englishNameTranslation: "The Spoils of War",
    numberOfAyahs: 75,
    revelationType: "Medinan"
  },
  {
    number: 9,
    name: "التوبة",
    englishName: "At-Tawbah",
    englishNameTranslation: "The Repentance",
    numberOfAyahs: 129,
    revelationType: "Medinan"
  },
  {
    number: 10,
    name: "يونس",
    englishName: "Yunus",
    englishNameTranslation: "Jonah",
    numberOfAyahs: 109,
    revelationType: "Meccan"
  },
  {
    number: 11,
    name: "هود",
    englishName: "Hud",
    englishNameTranslation: "Hud",
    numberOfAyahs: 123,
    revelationType: "Meccan"
  },
  {
    number: 12,
    name: "يوسف",
    englishName: "Yusuf",
    englishNameTranslation: "Joseph",
    numberOfAyahs: 111,
    revelationType: "Meccan"
  },
  {
    number: 13,
    name: "الرعد",
    englishName: "Ar-Ra'd",
    englishNameTranslation: "The Thunder",
    numberOfAyahs: 43,
    revelationType: "Medinan"
  },
  {
    number: 14,
    name: "ابراهيم",
    englishName: "Ibrahim",
    englishNameTranslation: "Abraham",
    numberOfAyahs: 52,
    revelationType: "Meccan"
  },
  {
    number: 15,
    name: "الحجر",
    englishName: "Al-Hijr",
    englishNameTranslation: "The Rocky Tract",
    numberOfAyahs: 99,
    revelationType: "Meccan"
  }
]

export function getSurahInfo(number: number): Surah | undefined {
  return surahs.find(surah => surah.number === number)
}
