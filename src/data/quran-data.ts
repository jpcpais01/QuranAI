// This is a sample of the first few verses of Al-Fatiha and Al-Baqarah
// You can expand this with more Quran data

export interface QuranVerse {
  number: number
  surah: number
  numberInSurah: number
  text: string
  translation: string
}

export const quranData: QuranVerse[] = [
  // Surah Al-Fatiha
  {
    number: 1,
    surah: 1,
    numberInSurah: 1,
    text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
  },
  {
    number: 2,
    surah: 1,
    numberInSurah: 2,
    text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "All praise is due to Allah, Lord of the worlds",
  },
  {
    number: 3,
    surah: 1,
    numberInSurah: 3,
    text: "الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "The Entirely Merciful, the Especially Merciful",
  },
  {
    number: 4,
    surah: 1,
    numberInSurah: 4,
    text: "مَالِكِ يَوْمِ الدِّينِ",
    translation: "Sovereign of the Day of Recompense",
  },
  {
    number: 5,
    surah: 1,
    numberInSurah: 5,
    text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    translation: "It is You we worship and You we ask for help",
  },
  {
    number: 6,
    surah: 1,
    numberInSurah: 6,
    text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    translation: "Guide us to the straight path",
  },
  {
    number: 7,
    surah: 1,
    numberInSurah: 7,
    text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    translation: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray",
  },
  // Surah Al-Baqarah
  {
    number: 8,
    surah: 2,
    numberInSurah: 1,
    text: "الم",
    translation: "Alif, Lam, Meem",
  },
  {
    number: 9,
    surah: 2,
    numberInSurah: 2,
    text: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
    translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah",
  },
  {
    number: 10,
    surah: 2,
    numberInSurah: 3,
    text: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    translation: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them",
  },
  {
    number: 11,
    surah: 2,
    numberInSurah: 4,
    text: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
    translation: "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith]",
  },
  {
    number: 12,
    surah: 2,
    numberInSurah: 5,
    text: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    translation: "Those are upon [right] guidance from their Lord, and it is those who are the successful",
  },
  {
    number: 13,
    surah: 2,
    numberInSurah: 6,
    text: "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
    translation: "Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe",
  },
  {
    number: 14,
    surah: 2,
    numberInSurah: 7,
    text: "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ",
    translation: "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil. And for them is a great punishment",
  },
  {
    number: 15,
    surah: 2,
    numberInSurah: 8,
    text: "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُم بِمُؤْمِنِينَ",
    translation: "And of the people are some who say, \"We believe in Allah and the Last Day,\" but they are not believers",
  },
  {
    number: 16,
    surah: 2,
    numberInSurah: 9,
    text: "يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنفُسَهُمْ وَمَا يَشْعُرُونَ",
    translation: "They [think to] deceive Allah and those who believe, but they deceive not except themselves and perceive [it] not",
  },
  {
    number: 17,
    surah: 2,
    numberInSurah: 10,
    text: "فِي قُلُوبِهِم مَّرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ",
    translation: "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie",
  },
  {
    number: 18,
    surah: 2,
    numberInSurah: 11,
    text: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
    translation: "And when it is said to them, \"Do not cause corruption on the earth,\" they say, \"We are but reformers.\"",
  },
  {
    number: 19,
    surah: 2,
    numberInSurah: 12,
    text: "أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَٰكِن لَّا يَشْعُرُونَ",
    translation: "Unquestionably, it is they who are the corrupters, but they perceive [it] not.",
  },
  {
    number: 20,
    surah: 2,
    numberInSurah: 13,
    text: "وَإِذَا قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا آمَنَ السُّفَهَاءُ ۗ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَٰكِن لَّا يَعْلَمُونَ",
    translation: "And when it is said to them, \"Believe as the people have believed,\" they say, \"Should we believe as the foolish have believed?\" Unquestionably, it is they who are the foolish, but they know [it] not.",
  },
  {
    number: 21,
    surah: 2,
    numberInSurah: 14,
    text: "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ",
    translation: "And when they meet those who believe, they say, \"We believe\"; but when they are alone with their evil ones, they say, \"Indeed, we are with you; we were only mockers.\"",
  },
  {
    number: 22,
    surah: 2,
    numberInSurah: 15,
    text: "اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ",
    translation: "Allah mocks them and prolongs them in their transgression [while] they wander blindly.",
  },
  {
    number: 23,
    surah: 2,
    numberInSurah: 16,
    text: "أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَت تِّجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ",
    translation: "Those are the ones who have purchased error [in exchange] for guidance, so their transaction has brought no profit, nor were they guided.",
  },
  {
    number: 24,
    surah: 2,
    numberInSurah: 17,
    text: "مَثَلُهُمْ كَمَثَلِ الَّذِي اسْتَوْقَدَ نَارًا فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ ذَهَبَ اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ لَّا يُبْصِرُونَ",
    translation: "Their example is that of one who kindled a fire, but when it illuminated what was around him, Allah took away their light and left them in darkness [so] they could not see.",
  },
  {
    number: 25,
    surah: 2,
    numberInSurah: 18,
    text: "صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ",
    translation: "Deaf, dumb and blind - so they will not return [to the right path].",
  },
  {
    number: 26,
    surah: 2,
    numberInSurah: 19,
    text: "أَوْ كَصَيِّبٍ مِّنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ ۚ وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ",
    translation: "Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning. They put their fingers in their ears against the thunderclaps in dread of death. But Allah is encompassing of the disbelievers.",
  },
  {
    number: 27,
    surah: 2,
    numberInSurah: 20,
    text: "يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ ۖ كُلَّمَا أَضَاءَ لَهُم مَّشَوْا فِيهِ وَإِذَا أَظْلَمَ عَلَيْهِمْ قَامُوا ۚ وَلَوْ شَاءَ اللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَارِهِمْ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "The lightning almost snatches away their sight. Every time it lights [the way] for them, they walk therein; but when darkness comes over them, they stand [still]. And if Allah had willed, He could have taken away their hearing and their sight. Indeed, Allah is over all things competent.",
  },
  {
    number: 28,
    surah: 2,
    numberInSurah: 21,
    text: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "O mankind, worship your Lord, who created you and those before you, that you may become righteous",
  },
  {
    number: 29,
    surah: 2,
    numberInSurah: 22,
    text: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً وَأَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ ۖ فَلَا تَجْعَلُوا لِلَّهِ أَندَادًا وَأَنتُمْ تَعْلَمُونَ",
    translation: "[He] who made for you the earth a bed [spread out] and the sky a ceiling and sent down from the sky, rain and brought forth thereby fruits as provision for you. So do not attribute to Allah equals while you know [that there is nothing similar to Him].",
  },
  {
    number: 30,
    surah: 2,
    numberInSurah: 23,
    text: "وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ وَادْعُوا شُهَدَاءَكُم مِّن دُونِ اللَّهِ إِن كُنتُمْ صَادِقِينَ",
    translation: "And if you are in doubt about what We have sent down upon Our Servant [Muhammad], then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful.",
  },
  {
    number: 31,
    surah: 2,
    numberInSurah: 24,
    text: "فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَافِرِينَ",
    translation: "But if you do not - and you will never be able to - then fear the Fire, whose fuel is men and stones, prepared for the disbelievers.",
  },
  {
    number: 32,
    surah: 2,
    numberInSurah: 25,
    text: "وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ ۖ كُلَّمَا رُزِقُوا مِنْهَا مِن ثَمَرَةٍ رِّزْقًا ۙ قَالُوا هَٰذَا الَّذِي رُزِقْنَا مِن قَبْلُ ۖ وَأُتُوا بِهِ مُتَشَابِهًا ۖ وَلَهُمْ فِيهَا أَزْوَاجٌ مُّطَهَّرَةٌ ۖ وَهُمْ فِيهَا خَالِدُونَ",
    translation: "And give good tidings to those who believe and do righteous deeds that they will have gardens [in Paradise] beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, \"This is what we were provided with before.\" And it is given to them in likeness. And they will have therein purified spouses, and they will abide therein eternally.",
  }
]
