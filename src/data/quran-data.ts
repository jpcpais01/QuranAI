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
  },
  {
    number: 33,
    surah: 2,
    numberInSurah: 26,
    text: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا ۚ فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللَّهُ بِهَٰذَا مَثَلًا ۘ يُضِلُّ بِهِ كَثِيرًا وَيَهْدِي بِهِ كَثِيرًا ۚ وَمَا يُضِلُّ بِهِ إِلَّا الْفَاسِقِينَ",
    translation: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it. And those who believe know that it is the truth from their Lord. But as for those who disbelieve, they say, \"What does Allah mean by this as an example?\" He misleads many thereby and guides many thereby. And He misleads not except the defiantly disobedient",
  },
  {
    number: 34,
    surah: 2,
    numberInSurah: 27,
    text: "الَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ مِن بَعْدِ مِيثَاقِهِ وَيَقْطَعُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ وَيُفْسِدُونَ فِي الْأَرْضِ ۚ أُولَٰئِكَ هُمُ الْخَاسِرُونَ",
    translation: "Those who break the covenant of Allah after contracting it and sever that which Allah has ordered to be joined and cause corruption on earth. It is those who are the losers.",
  },
  {
    number: 35,
    surah: 2,
    numberInSurah: 28,
    text: "كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنتُمْ أَمْوَاتًا فَأَحْيَاكُمْ ۖ ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    translation: "How can you disbelieve in Allah when you were lifeless and He brought you to life; then He will cause you to die, then He will bring you [back] to life, and then to Him you will be returned.",
  },
  {
    number: 36,
    surah: 2,
    numberInSurah: 29,
    text: "هُوَ الَّذِي خَلَقَ لَكُم مَّا فِي الْأَرْضِ جَمِيعًا ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ فَسَوَّاهُنَّ سَبْعَ سَمَاوَاتٍ ۚ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    translation: "It is He who created for you all of that which is on the earth. Then He directed Himself to the heaven, [His being above all creation], and made them seven heavens, and He is of all things knowing.",
  },
  {
    number: 37,
    surah: 2,
    numberInSurah: 30,
    text: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
    translation: "And [mention, O Muhammad], when your Lord said to the angels, \"Indeed, I will make upon the earth a successive authority.\" They said, \"Will You place upon it one who causes corruption therein and sheds blood, while we declare Your praise and sanctify You?\" Allah said, \"Indeed, I know that which you do not know.\"",
  },
  {
    number: 38,
    surah: 2,
    numberInSurah: 31,
    text: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَٰؤُلَاءِ إِن كُنتُمْ صَادِقِينَ",
    translation: "And He taught Adam the names - all of them. Then He showed them to the angels and said, \"Inform Me of the names of these, if you are truthful.\"",
  },
  {
    number: 39,
    surah: 2,
    numberInSurah: 32,
    text: "قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ",
    translation: "They said, \"Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise.\"",
  },
  {
    number: 40,
    surah: 2,
    numberInSurah: 33,
    text: "قَالَ يَا آدَمُ أَنبِئْهُم بِأَسْمَائِهِمْ ۖ فَلَمَّا أَنبَأَهُم بِأَسْمَائِهِمْ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّي أَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ",
    translation: "He said, \"O Adam, inform them of their names.\" And when he had informed them of their names, He said, \"Did I not tell you that I know the unseen [aspects] of the heavens and the earth? And I know what you reveal and what you have concealed.\"",
  },
  {
    number: 41,
    surah: 2,
    numberInSurah: 34,
    text: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
    translation: "And [mention] when We said to the angels, \"Prostrate before Adam\"; so they prostrated, except Iblees. He refused and was arrogant and became of the disbelievers.",
  },
  {
    number: 42,
    surah: 2,
    numberInSurah: 35,
    text: "وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ",
    translation: "And We said, \"O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance from wherever you will. But do not approach this tree, lest you be among the wrongdoers.\"",
  },
  {
    number: 43,
    surah: 2,
    numberInSurah: 36,
    text: "فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ ۖ وَقُلْنَا اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۖ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ",
    translation: "But Satan caused them to slip out of it and removed them from that [condition] in which they had been. And We said, \"Go down, [all of you], as enemies to one another, and you will have upon the earth a place of settlement and provision for a time.\"",
  },
  {
    number: 44,
    surah: 2,
    numberInSurah: 37,
    text: "فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
    translation: "Then Adam received from his Lord [some] words, and He accepted his repentance. Indeed, He is the Accepting of repentance, the Merciful.",
  },
  {
    number: 45,
    surah: 2,
    numberInSurah: 38,
    text: "قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّي هُدًى فَمَن تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "We said, \"Go down, all of you, from it, and when guidance comes to you from Me, whoever follows My guidance - there will be no fear concerning them, nor will they grieve.\"",
  },
  {
    number: 46,
    surah: 2,
    numberInSurah: 39,
    text: "وَالَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا أُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ",
    translation: "But those who disbelieve and deny Our signs - those will be companions of the Fire; they will abide therein eternally.",
  },
  {
    number: 47,
    surah: 2,
    numberInSurah: 40,
    text: "يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ وَإِيَّايَ فَارْهَبُونِ",
    translation: "O Children of Israel, remember My favor which I have bestowed upon you and fulfill My covenant [upon you] that I will fulfill your covenant [from Me], and be afraid of [only] Me.",
  },
  {
    number: 48,
    surah: 2,
    numberInSurah: 41,
    text: "وَآمِنُوا بِمَا نَزَّلْتُ مُصَدِّقًا لِّمَا مَعَكُمْ وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ ۖ وَلَا تَشْتَرُوا بِآيَاتِي ثَمَنًا قَلِيلًا وَإِيَّايَ فَاتَّقُونِ",
    translation: "And believe in what I have sent down confirming that which is [already] with you, and be not the first to disbelieve in it. And do not exchange My verses for a small price, and fear [only] Me.",
  },
  {
    number: 49,
    surah: 2,
    numberInSurah: 42,
    text: "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ",
    translation: "And do not mix the truth with falsehood or conceal the truth while you know [it].",
  },
  {
    number: 50,
    surah: 2,
    numberInSurah: 43,
    text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    translation: "And establish prayer and give zakah and bow with those who bow [in worship].",
  },
  {
    number: 51,
    surah: 2,
    numberInSurah: 44,
    text: "أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ وَأَنتُمْ تَتْلُونَ الْكِتَابَ ۚ أَفَلَا تَعْقِلُونَ",
    translation: "Do you order righteousness of the people and forget yourselves while you recite the Scripture? Then will you not reason?",
  },
  {
    number: 52,
    surah: 2,
    numberInSurah: 45,
    text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    translation: "And seek help through patience and prayer. Indeed, it is difficult except for the humbly submissive [to Allah].",
  },
  {
    number: 53,
    surah: 2,
    numberInSurah: 46,
    text: "الَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَاقُو رَبِّهِمْ وَأَنَّهُمْ إِلَيْهِ رَاجِعُونَ",
    translation: "[They are] those who are certain that they will meet their Lord and that they will return to Him.",
  },
  {
    number: 54,
    surah: 2,
    numberInSurah: 47,
    text: "يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ",
    translation: "O Children of Israel, remember My favor which I have bestowed upon you and that I preferred you over the worlds.",
  },
  {
    number: 55,
    surah: 2,
    numberInSurah: 48,
    text: "وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَلَا هُمْ يُنصَرُونَ",
    translation: "And fear a Day when no soul will suffice for another soul at all, and no compensation will be accepted from it, nor will any intercession benefit it, nor will they be aided.",
  },
  {
    number: 56,
    surah: 2,
    numberInSurah: 49,
    text: "وَإِذْ نَجَّيْنَاكُم مِّنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ ۚ وَفِي ذَٰلِكُم بَلَاءٌ مِّن رَّبِّكُمْ عَظِيمٌ",
    translation: "And [recall] when We saved you from the people of Pharaoh, who were afflicting you with the worst torment - killing your sons and keeping your women alive. And in that was a great trial from your Lord.",
  },
  {
    number: 57,
    surah: 2,
    numberInSurah: 50,
    text: "وَإِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَأَنجَيْنَاكُمْ وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ",
    translation: "And [recall] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on.",
  },
  {
    number: 58,
    surah: 2,
    numberInSurah: 51,
    text: "وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ ۖ فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ ۚ كُلُوا وَاشْرَبُوا مِن رِّزْقِ اللَّهِ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ",
    translation: "And [recall] when Moses asked for water for his people, so We said, \"Strike with your staff the stone.\" And there gushed forth from it twelve springs, and every people knew its watering place. \"Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption.\"",
  },
  {
    number: 59,
    surah: 2,
    numberInSurah: 52,
    text: "ثُمَّ عَفَوْنَا عَنكُم مِّن بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ",
    translation: "Then We pardoned you after that so perhaps you would be grateful.",
  },
  {
    number: 60,
    surah: 2,
    numberInSurah: 53,
    text: "وَإِذْ آتَيْنَا مُوسَى الْكِتَابَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ",
    translation: "And [recall] when We gave Moses the Scripture and the Criterion that perhaps you would be guided.",
  },
  {
    number: 61,
    surah: 2,
    numberInSurah: 54,
    text: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَىٰ بَارِئِكُمْ فَاقْتُلُوا أَنفُسَكُم ذَٰلِكَ خَيْرٌ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
    translation: "And [recall] when Moses said to his people, \"O my people, indeed you have wronged yourselves by your taking of the calf [for worship]. So repent to your Creator and kill yourselves. That is best for you in the sight of your Creator.\" Then He accepted your repentance; indeed, He is the Accepting of repentance, the Merciful.",
  },
  {
    number: 62,
    surah: 2,
    numberInSurah: 55,
    text: "وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى اللَّهَ جَهْرَةً فَأَخَذَتْكُمُ الصَّاعِقَةُ وَأَنتُمْ تَنظُرُونَ",
    translation: "And [recall] when you said, \"O Moses, we will never believe you until we see Allah outright\"; so the thunderbolt took you while you were looking on.",
  },
  {
    number: 63,
    surah: 2,
    numberInSurah: 56,
    text: "ثُمَّ بَعَثْنَاكُم مِّن بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
    translation: "Then We revived you after your death that perhaps you would be grateful.",
  },
  {
    number: 64,
    surah: 2,
    numberInSurah: 57,
    text: "وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ ۖ كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ ۖ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
    translation: "And We shaded you with clouds and sent down to you manna and quails, [saying], \"Eat from the good things We have provided for you.\" And they wronged Us not, but they were [only] wronging themselves.",
  },
  {
    number: 65,
    surah: 2,
    numberInSurah: 58,
    text: "وَإِذْ قُلْنَا ادْخُلُوا هَٰذِهِ الْقَرْيَةَ فَكُلُوا مِنْهَا رَغَدًا حَيْثُ شِئْتُمْ وَادْخُلُوا الْبَابَ سُجَّدًا وَقُولُوا حِطَّةٌ نَّغْفِرْ لَكُمْ خَطَايَاكُمْ ۚ وَسَنَزِيدُ الْمُحْسِنِينَ",
    translation: "And [recall] when We said, \"Enter this city and eat from it [ease and] abundance from wherever you will. And enter the gate bowing humbly and say, 'Relieve us of our burdens.' We will [then] forgive your misdeeds and increase the doers of good [in goodness].\"",
  },
  {
    number: 66,
    surah: 2,
    numberInSurah: 59,
    text: "فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ فَأَنزَلْنَا عَلَى الَّذِينَ ظَلَمُوا رِجْزًا مِّنَ السَّمَاءِ بِمَا كَانُوا يَفْسُقُونَ",
    translation: "But those who wronged changed [the words] to a statement other than that which had been said to them, so We sent down upon those who wronged a punishment from the sky for the defiantly disobedient.",
  },
  {
    number: 67,
    surah: 2,
    numberInSurah: 60,
    text: "وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ ۖ فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ ۚ كُلُوا وَاشْرَبُوا مِن رِّزْقِ اللَّهِ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ",
    translation: "And [recall] when Moses asked for water for his people, so We said, \"Strike with your staff the stone.\" And there gushed forth from it twelve springs, and every people knew its watering place. \"Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption.\"",
  },
  {
    number: 68,
    surah: 2,
    numberInSurah: 61,
    text: "وَإِذَا قُلْتُمْ يَا مُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ الْأَرْضُ مِن بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَىٰ بِالَّذِي هُوَ خَيْرٌ ۚ اهْبِطُوا مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ وَبَاءُوا بِغَضَبٍ مِّنَ اللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا يَكْفُرُونَ بِآيَاتِ اللَّهِ وَيَقْتُلُونَ النَّبِيِّينَ بِغَيْرِ الْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوْا وَّكَانُوا يَعْتَدُونَ",
    translation: "And [recall] when you said, \"O Moses, we can never endure one [kind of] food. So invoke for us your Lord to bring forth for us from the earth its herbs and its cucumbers and its garlic and its lentils and its onions.\" [Moses] said, \"Would you exchange what is better for what is worse? Go into [any] settlement and indeed, you will have what you have asked.\" And they were covered with humiliation and poverty and returned with anger from Allah [upon them]. That was because they [repeatedly] disbelieved in the signs of Allah and killed the prophets without right. That was because they disobeyed and [habitually] transgressed.",
  },
  {
    number: 69,
    surah: 2,
    numberInSurah: 62,
    text: "إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَىٰ وَالصَّابِئِينَ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَعَمِلَ صَالِحًا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Indeed, those who believed and those who were Jews and the Christians and the Sabeans - whoever believed in Allah and the Last Day and did righteousness - will have their reward with their Lord, and no fear will be upon them, nor will they grieve.",
  },
  {
    number: 70,
    surah: 2,
    numberInSurah: 63,
    text: "وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ وَاذْكُرُوا مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "And [recall] when We took your covenant and raised over you the mount, [saying], \"Take what We have given you with determination and listen.\" They said, \"We hear and disobey.\" And they were made to drink the calf [worship] into their hearts due to their disbelief. Say, \"Wretched is that which your faith enjoins upon you, if you should be believers.\"",
  },
  {
    number: 71,
    surah: 2,
    numberInSurah: 64,
    text: "ثُمَّ تَوَلَّيْتُمْ مِّن بَعْدِ ذَٰلِكَ ۖ فَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ لَكُنتُم مِّنَ الْخَاسِرِينَ",
    translation: "Then you turned away after that. And if not for the favor of Allah upon you and His mercy, you would have been among the losers.",
  },
  {
    number: 72,
    surah: 2,
    numberInSurah: 65,
    text: "وَلَقَدْ عَلِمْتُمُ الَّذِينَ اعْتَدَوْا مِنكُمْ فِي السَّبْتِ فَقُلْنَا لَهُمْ كُونُوا قِرَدَةً خَاسِئِينَ",
    translation: "And you had already known about those who transgressed among you concerning the sabbath, and We said to them, \"Be apes, despised.\"",
  },
  {
    number: 73,
    surah: 2,
    numberInSurah: 66,
    text: "فَجَعَلْنَاهَا نَكَالًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةً لِّلْمُتَّقِينَ",
    translation: "And We made it a deterrent punishment for those who were present and those who succeeded [them] and an admonition for the righteous.",
  },
  {
    number: 74,
    surah: 2,
    numberInSurah: 67,
    text: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا بَقَرَةً ۖ قَالُوا أَتَتَّخِذُنَا هُزُوًا ۖ قَالَ أَعُوذُ بِاللَّهِ أَن أَكُونَ مِنَ الْجَاهِلِينَ",
    translation: "And [recall] when Moses said to his people, \"Indeed, Allah commands you to slaughter a cow.\" They said, \"Do you take us in ridicule?\" He said, \"I seek refuge in Allah from being among the ignorant.\"",
  },
  {
    number: 75,
    surah: 2,
    numberInSurah: 68,
    text: "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ ۚ فَافْعَلُوا مَا تُؤْمَرُونَ",
    translation: "They said, \"Call upon your Lord to make clear to us what it is.\" [Moses] said, \"[Allah] says, 'It is a cow neither old nor virgin, but median between that,' so do what you are commanded.\"",
  },
  {
    number: 76,
    surah: 2,
    numberInSurah: 69,
    text: "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ النَّاظِرِينَ",
    translation: "They said, \"Call upon your Lord to make clear to us what its color is.\" He said, \"[Allah] says, 'It is a yellow cow, bright in color that delights the observers.'\"",
  },
  {
    number: 77,
    surah: 2,
    numberInSurah: 70,
    text: "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ ۚ إِنَّ الْبَقَرَ تَشَابَهَ عَلَيْنَا وَإِنَّا إِن شَاءَ اللَّهُ لَمُهْتَدُونَ",
    translation: "They said, \"Call upon your Lord to make clear to us what it is, for to us all cows look alike. And indeed, if Allah wills, we will be guided.\"",
  },
  {
    number: 78,
    surah: 2,
    numberInSurah: 71,
    text: "قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا ذَلُولٌ تُثِيرُ الْأَرْضَ وَلَا تَسْقِي الْحَرْثَ مُسَلَّمَةٌ لَّا شِيَةَ فِيهَا ۚ قَالُوا الْآنَ جِئْتَ بِالْحَقِّ ۚ فَذَبَحُوهَا وَمَا كَادُوا يَفْعَلُونَ",
    translation: "He said, \"[Allah] says, 'It is a cow not trained to plow the earth or irrigate the field, one without blemish.' \" They said, \"Now you have come with the truth.\" So they slaughtered her, though they were near to not doing it.",
  },
  {
    number: 79,
    surah: 2,
    numberInSurah: 72,
    text: "وَإِذْ قَتَلْتُمْ نَفْسًا فَادَّارَأْتُمْ فِيهَا ۖ وَاللَّهُ مُخْرِجٌ مَّا كُنتُمْ تَكْتُمُونَ",
    translation: "And [recall] when you slew a man and disputed over it, but Allah was to bring out that which you were concealing.",
  },
  {
    number: 80,
    surah: 2,
    numberInSurah: 73,
    text: "فَقُلْنَا اضْرِبُوهُ بِبَعْضِهَا ۚ كَذَٰلِكَ يُحْيِي اللَّهُ الْمَوْتَىٰ وَيُرِيكُمْ آيَاتِهِ لَعَلَّكُمْ تَعْقِلُونَ",
    translation: "So We said, \"Strike the slain man with part of it.\" Thus does Allah bring the dead to life, and He shows you His signs that you might reason.",
  },
  {
    number: 81,
    surah: 2,
    numberInSurah: 74,
    text: "ثُمَّ قَسَتْ قُلُوبُكُمْ مِن بَعْدِ ذَٰلِكَ فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً ۚ وَإِنَّ مِنَ الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْأَنْهَارُ ۚ وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ الْمَاءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِن خَشْيَةِ اللَّهِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
    translation: "Then your hearts became hardened after that, being like stones or even harder. For indeed, there are stones from which rivers burst forth, and there are some from which water emerges, and there are some that fall down for fear of Allah. And Allah is not unaware of what you do.",
  },
  {
    number: 82,
    surah: 2,
    numberInSurah: 75,
    text: "أَفَتَطْمَعُونَ أَن يُؤْمِنُوا لَكُمْ وَقَدْ كَانَ فَرِيقٌ مِّنْهُمْ يَسْمَعُونَ كَلَامَ اللَّهِ ثُمَّ يُحَرِّفُونَهُ مِن بَعْدِ مَا عَقَلُوهُ وَهُمْ يَعْلَمُونَ",
    translation: "Do you hope that they would believe you while a party of them used to hear the words of Allah and then distort it after they had understood it, while they knew [the truth]?",
  },
  {
    number: 83,
    surah: 2,
    numberInSurah: 76,
    text: "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَا بَعْضُهُمْ إِلَىٰ بَعْضٍ قَالُوا أَتُحَدِّثُونَهُم بِمَا فَتَحَ اللَّهُ عَلَيْكُمْ لِيُحَاجُّوكُم بِهِ عِندَ رَبِّكُمْ ۚ أَفَلَا تَعْقِلُونَ",
    translation: "And when they meet those who believe, they say, \"We believe\"; but when they are alone with one another, they say, \"Do you talk to them about what Allah has revealed to you so they may argue with you before your Lord?\" Then will you not reason?",
  },
  {
    number: 84,
    surah: 2,
    numberInSurah: 77,
    text: "أَوَلَا يَعْلَمُونَ أَنَّ اللَّهَ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ",
    translation: "Do they not know that Allah knows what they conceal and what they declare?",
  },
  {
    number: 85,
    surah: 2,
    numberInSurah: 78,
    text: "وَمِنْهُمْ أُمِّيُّونَ لَا يَعْلَمُونَ الْكِتَابَ إِلَّا أَمَانِيَّ وَإِنْ هُمْ إِلَّا يَظُنُّونَ",
    translation: "And among them are unlettered ones who do not know the Scripture except [through] wishful thinking, but they are not other than assuming.",
  },
  {
    number: 86,
    surah: 2,
    numberInSurah: 79,
    text: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ لِيَشْتَرُوا بِهِ ثَمَنًا قَلِيلًا ۖ فَوَيْلٌ لَّهُم مِّمَّا كَتَبَتْ أَيْدِيهِمْ وَوَيْلٌ لَّهُم مِّمَّا يَكْسِبُونَ",
    translation: "So woe to those who write the \"scripture\" with their own hands, then say, \"This is from Allah,\" in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn.",
  },
  {
    number: 87,
    surah: 2,
    numberInSurah: 80,
    text: "وَقَالُوا لَن تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً ۚ قُلْ أَتَّخَذْتُمْ عِندَ اللَّهِ عَهْدًا فَلَن يُخْلِفَ اللَّهُ عَهْدَهُ ۖ أَم تَقُولُونَ عَلَى اللَّهِ مَا لَا تَعْلَمُونَ",
    translation: "And they say, \"Never will the Fire touch us except for a few days.\" Say, \"Have you taken a covenant with Allah? For Allah will never break His covenant. Or do you say about Allah that which you do not know?\"",
  },
  {
    number: 88,
    surah: 2,
    numberInSurah: 81,
    text: "بَلَىٰ مَن كَسَبَ سَيِّئَةً وَأَحَاطَتْ بِهِ خَطِيئَتُهُ فَأُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ",
    translation: "Yes, whoever earns evil and his sin encompasses him - those are the companions of the Fire; they will abide therein eternally.",
  },
  {
    number: 89,
    surah: 2,
    numberInSurah: 82,
    text: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ ۖ هُمْ فِيهَا خَالِدُونَ",
    translation: "And those who believe and do righteous deeds - those are the companions of Paradise; they will abide therein eternally.",
  },
  {
    number: 90,
    surah: 2,
    numberInSurah: 83,
    text: "وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ لَا تَعْبُدُونَ إِلَّا اللَّهَ وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَقُولُوا لِلنَّاسِ حُسْنًا وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ وَأَنتُم مُّعْرِضُونَ",
    translation: "And [recall] when We took the covenant from the Children of Israel, [enjoining upon them], \"Do not worship except Allah; and to parents, good treatment, and to relatives, orphans, and the needy. And speak to people good [words] and establish prayer and give zakah.\" Then you turned away, except a few of you, and you were refusing.",
  },
  {
    number: 91,
    surah: 2,
    numberInSurah: 84,
    text: "وَإِذْ أَخَذْنَا مِيثَاقَكُمْ لَا تَسْفِكُونَ دِمَاءَكُمْ وَلَا تُخْرِجُونَ أَنفُسَكُم مِّن دِيَارِكُمْ ثُمَّ أَقْرَرْتُمْ وَأَنتُمْ تَشْهَدُونَ",
    translation: "And [recall] when We took your covenant, [saying], \"Do not shed each other's blood or evict one another from your homes.\" Then you acknowledged [this] while you were witnessing.",
  },
  {
    number: 92,
    surah: 2,
    numberInSurah: 85,
    text: "ثُمَّ أَنتُمْ هَٰؤُلَاءِ تَقْتُلُونَ أَنفُسَكُمْ وَتُخْرِجُونَ فَرِيقًا مِّنكُم مِّن دِيَارِهِمْ تَظَاهَرُونَ عَلَيْهِمْ بِالْإِثْمِ وَالْعُدْوَانِ ۖ وَإِن يَأْتُوكُمْ أُسَارَىٰ تُفَادُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ ۚ أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ ۚ فَمَا جَزَاءُ مَن يَفْعَلُ ذَٰلِكَ مِنكُمْ إِلَّا خِزْيٌ فِي الْحَيَاةِ الدُّنْيَا ۖ وَيَوْمَ الْقِيَامَةِ يُرَدُّونَ إِلَىٰ أَشَدِّ الْعَذَابِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
    translation: "Then you are those [same ones who are] killing one another and evicting a party of your people from their homes, cooperating against them in sin and aggression. And if they come to you as captives, you ransom them, although their eviction was forbidden to you. So do you believe in part of the Scripture and disbelieve in part? Then what is the recompense for those who do so among you except disgrace in worldly life; and on the Day of Resurrection, they will be sent back to the severest of punishment. And Allah is not unaware of what you do.",
  },
  {
    number: 93,
    surah: 2,
    numberInSurah: 86,
    text: "أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنصَرُونَ",
    translation: "Those are the ones who have bought the life of this world [in exchange] for the Hereafter, so the punishment will not be lightened for them, nor will they be helped.",
  },
  {
    number: 94,
    surah: 2,
    numberInSurah: 87,
    text: "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ وَقَفَّيْنَا مِن بَعْدِهِ بِالرُّسُلِ ۖ وَآتَيْنَا عِيسَى ابْنَ مَرْيَمَ الْبَيِّنَاتِ وَأَيَّدْنَاهُ بِرُوحِ الْقُدُسِ ۗ أَفَكُلَّمَا جَاءَكُمْ رَسُولٌ بِمَا لَا تَهْوَىٰ أَنفُسُكُمْ اسْتَكْبَرْتُمْ فَفَرِيقًا كَذَّبْتُمْ وَفَرِيقًا تَقْتُلُونَ",
    translation: "And We did certainly give Moses the Scripture and followed up after him with messengers. And We gave Jesus, the son of Mary, clear proofs, and We supported him with the Pure Spirit. But is it [not] that every time a messenger came to you with what your souls did not desire, you were arrogant? And a party [of messengers] you denied and another party you killed.",
  },
  {
    number: 95,
    surah: 2,
    numberInSurah: 88,
    text: "وَقَالُوا قُلُوبُنَا غُلْفٌ ۚ بَل لَّعَنَهُمُ اللَّهُ بِكُفْرِهِمْ فَقَلِيلًا مَّا يُؤْمِنُونَ",
    translation: "And they said, \"Our hearts are wrapped [i.e., sealed].\" But [in fact] Allah has cursed them for their disbelief, so little will they believe.",
  },
  {
    number: 96,
    surah: 2,
    numberInSurah: 89,
    text: "وَلَمَّا جَاءَهُمْ كِتَابٌ مِّنْ عِندِ اللَّهِ مُصَدِّقٌ لِّمَا مَعَهُمْ وَكَانُوا مِن قَبْلُ يَسْتَفْتِحُونَ عَلَى الَّذِينَ كَفَرُوا فَلَمَّا جَاءَهُمْ مَّا عَرَفُوا كَفَرُوا بِهِ ۚ فَلَعْنَةُ اللَّهِ عَلَى الْكَافِرِينَ",
    translation: "And when there came to them a Book from Allah confirming that which was with them - although before they used to pray for victory against those who disbelieved - but [then] when there came to them that which they recognized, they disbelieved in it. So the curse of Allah will be upon the disbelievers.",
  },
  {
    number: 97,
    surah: 2,
    numberInSurah: 90,
    text: "بِئْسَمَا اشْتَرَوْا بِهِ أَنفُسَهُمْ أَن يَكْفُرُوا بِمَا أَنزَلَ اللَّهُ بَغْيًا أَن يُنَزِّلَ اللَّهُ مِن فَضْلِهِ عَلَىٰ مَن يَشَاءُ مِنْ عِبَادِهِ ۖ فَبَاءُوا بِغَضَبٍ عَلَىٰ غَضَبٍ ۚ وَلِلْكَافِرِينَ عَذَابٌ مُّهِينٌ",
    translation: "Wretched is that for which they sold themselves - that they would disbelieve in what Allah has revealed through [their] outrage that Allah would send down His bounty upon whom He wills of His servants. So they returned with anger [upon] anger. And for the disbelievers is a humiliating punishment.",
  },
  {
    number: 98,
    surah: 2,
    numberInSurah: 91,
    text: "وَإِذَا قِيلَ لَهُمْ آمِنُوا بِمَا أَنزَلَ اللَّهُ قَالُوا نُؤْمِنُ بِمَا أُنزِلَ عَلَيْنَا وَيَكْفُرُونَ بِمَا وَرَاءَهُ وَهُوَ الْحَقُّ مُصَدِّقًا لِّمَا مَعَهُمْ ۗ قُلْ فَلِمَ تَقْتُلُونَ أَنبِيَاءَ اللَّهِ مِن قَبْلُ إِن كُنتُم مُّؤْمِنِينَ",
    translation: "And when it is said to them, \"Believe in what Allah has revealed,\" they say, \"We believe in what was revealed to us.\" And they disbelieve in what is beyond it, while it is the truth confirming that which is with them. Say, \"Then why did you kill the prophets of Allah before, if you are [truly] believers?\"",
  },
  {
    number: 99,
    surah: 2,
    numberInSurah: 92,
    text: "وَلَقَدْ جَاءَكُم مُّوسَىٰ بِالْبَيِّنَاتِ ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِن بَعْدِهِ وَأَنتُمْ ظَالِمُونَ",
    translation: "And Moses had certainly brought you clear proofs. Then you took the calf [in worship] after him, and you were wrongdoers.",
  },
  {
    number: 100,
    surah: 2,
    numberInSurah: 93,
    text: "وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ وَاذْكُرُوا مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "And [recall] when We took your covenant and raised over you the mount, [saying], \"Take what We have given you with determination and listen.\" They said, \"We hear and disobey.\" And they were made to drink the calf [worship] into their hearts due to their disbelief. Say, \"Wretched is that which your faith enjoins upon you, if you should be believers.\"",
  },
  {
    number: 101,
    surah: 2,
    numberInSurah: 94,
    text: "قُلْ إِن كَانَتْ لَكُمُ الدَّارُ الْآخِرَةُ عِندَ اللَّهِ خَالِصَةً مِّن دُونِ النَّاسِ فَتَمَنَّوُا الْمَوْتَ إِن كُنتُمْ صَادِقِينَ",
    translation: "Say, \"If the home of the Hereafter with Allah is exclusively for you and not for others, then wish for death, if you should be truthful.\"",
  },
  {
    number: 102,
    surah: 2,
    numberInSurah: 95,
    text: "وَلَن يَتَمَنَّوْهُ أَبَدًا بِمَا قَدَّمَتْ أَيْدِيهِمْ ۗ وَاللَّهُ عَلِيمٌ بِالظَّالِمِينَ",
    translation: "But they will never wish for it, ever, due to what their hands have put forth. And Allah is Knowing of the wrongdoers.",
  },
  {
    number: 103,
    surah: 2,
    numberInSurah: 96,
    text: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ لِيَشْتَرُوا بِهِ ثَمَنًا قَلِيلًا ۖ فَوَيْلٌ لَّهُم مِّمَّا كَتَبَتْ أَيْدِيهِمْ وَوَيْلٌ لَّهُم مِّمَّا يَكْسِبُونَ",
    translation: "So woe to those who write the \"scripture\" with their own hands, then say, \"This is from Allah,\" in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn.",
  },
  {
    number: 104,
    surah: 2,
    numberInSurah: 97,
    text: "قُلْ مَن كَانَ عَدُوًّا لِّجِبْرِيلَ فَإِنَّهُ نَزَّلَهُ عَلَىٰ قَلْبِكَ بِإِذْنِ اللَّهِ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَهُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ",
    translation: "Say, \"Whoever is an enemy to Gabriel - it is [none but] he who has brought the Qur'an down upon your heart, [O Muhammad], by permission of Allah, confirming what was before it and as guidance and good tidings for the believers.\"",
  },
  {
    number: 105,
    surah: 2,
    numberInSurah: 98,
    text: "مَن كَانَ عَدُوًّا لِّلَّهِ وَمَلَائِكَتِهِ وَرُسُلِهِ وَجِبْرِيلَ وَمِيكَالَ فَإِنَّ اللَّهَ عَدُوٌّ لِّلْكَافِرِينَ",
    translation: "Whoever is an enemy to Allah and His angels and His messengers and Gabriel and Michael - then indeed, Allah is an enemy to the disbelievers.",
  },
  {
    number: 106,
    surah: 2,
    numberInSurah: 99,
    text: "وَلَقَدْ أَنزَلْنَا إِلَيْكَ آيَاتٍ بَيِّنَاتٍ ۖ وَمَا يَكْفُرُ بِهَا إِلَّا الْفَاسِقُونَ",
    translation: "And We have certainly revealed to you verses [which are] clear proofs, and no one would deny them except the defiantly disobedient.",
  },
  {
    number: 107,
    surah: 2,
    numberInSurah: 100,
    text: "أَوَكُلَّمَا عَاهَدُوا عَهْدًا نَّبَذَهُ فَرِيقٌ مِّنْهُمْ ۚ بَلْ أَكْثَرُهُمْ لَا يُؤْمِنُونَ",
    translation: "Is it not [true] that every time they make a covenant, a party of them throws it aside? But most of them do not believe.",
  },
  {
    number: 108,
    surah: 2,
    numberInSurah: 101,
    text: "وَلَمَّا جَاءَهُمْ رَسُولٌ مِّنْ عِندِ اللَّهِ مُصَدِّقٌ لِّمَا مَعَهُمْ نَبَذَ فَرِيقٌ مِّنَ الَّذِينَ أُوتُوا الْكِتَابَ كِتَابَ اللَّهِ وَرَاءَ ظُهُورِهِمْ كَأَنَّهُمْ لَا يَعْلَمُونَ",
    translation: "And when there came to them a Messenger from Allah confirming that which was with them, a party of those who were given the Scripture threw the Book of Allah behind their backs as if they did not know.",
  },
  {
    number: 109,
    surah: 2,
    numberInSurah: 102,
    text: "وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ عَلَىٰ مُلْكِ سُلَيْمَانَ ۖ وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ وَمَا أُنزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوتَ وَمَارُوتَ ۚ وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّىٰ يَقُولَا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ ۖ فَيَتَعَلَّمُونَ مِنْهُمَا مَا يُفَرِّقُونَ بِهِ بَيْنَ الْمَرْءِ وَزَوْجِهِ ۚ وَمَا هُم بِضَارِّينَ بِهِ مِنْ أَحَدٍ إِلَّا بِإِذْنِ اللَّهِ ۚ وَيَتَعَلَّمُونَ مَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ ۚ وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ ۚ وَلَبِئْسَ مَا شَرَوْا بِهِ أَنفُسَهُمْ ۚ لَوْ كَانُوا يَعْلَمُونَ",
    translation: "And they followed [instead] what the devils had recited during the reign of Solomon. It was not Solomon who disbelieved, but the devils disbelieved, teaching people magic and that which was revealed to the two angels at Babylon, Harut and Marut. But the two angels do not teach anyone unless they say, \"We are a trial, so do not disbelieve.\" And [yet] they learn from them that by which they cause separation between a man and his wife. But they do not harm anyone through it except by permission of Allah. And they learn what harms them and does not benefit them. But they certainly knew that whoever purchased it would have no share in the Hereafter. And wretched is that for which they sold themselves, if they only knew.",
  },
  {
    number: 110,
    surah: 2,
    numberInSurah: 103,
    text: "وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِّنْ عِندِ اللَّهِ خَيْرٌ ۖ لَّوْ كَانُوا يَعْلَمُونَ",
    translation: "And if they had believed and feared Allah, [then] the reward from Allah would have been [far] better, if they only knew.",
  },
  {
    number: 111,
    surah: 2,
    numberInSurah: 104,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَقُولُوا رَاعِنَا وَقُولُوا انظُرْنَا وَاسْمَعُوا ۗ وَلِلْكَافِرِينَ عَذَابٌ أَلِيمٌ",
    translation: "O you who have believed, do not say [to the Prophet], \"Ra'ina\" but say, \"Unthurna\" and listen. And for the disbelievers is a painful punishment.",
  },
  {
    number: 112,
    surah: 2,
    numberInSurah: 105,
    text: "مَّا يَوَدُّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَلَا الْمُشْرِكِينَ أَن يُنَزَّلَ عَلَيْكُم مِّنْ خَيْرٍ مِّن رَّبِّكُمْ ۚ وَاللَّهُ يَخْتَصُّ بِرَحْمَتِهِ مَن يَشَاءُ ۗ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ",
    translation: "Neither those who disbelieve from the People of the Book nor the polytheists wish that any good should be sent down to you from your Lord. But Allah selects for His mercy whom He wills, and Allah is the possessor of great bounty.",
  },
  {
    number: 113,
    surah: 2,
    numberInSurah: 106,
    text: "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا ۗ أَلَمْ تَعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it or similar to it. Do you not know that Allah is over all things competent?",
  },
  {
    number: 114,
    surah: 2,
    numberInSurah: 107,
    text: "أَلَمْ تَعْلَمْ أَنَّ اللَّهَ لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۗ وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ",
    translation: "Do you not know that to Allah belongs the dominion of the heavens and the earth and [that] you have not besides Allah any protector or helper?",
  },
  {
    number: 115,
    surah: 2,
    numberInSurah: 108,
    text: "أَمْ تُرِيدُونَ أَن تَسْأَلُوا رَسُولَكُمْ كَمَا سُئِلَ مُوسَىٰ مِن قَبْلُ ۗ وَمَن يَتَبَدَّلِ الْكُفْرَ بِالْإِيمَانِ فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ",
    translation: "Or do you want to ask your Messenger as Moses was asked before? And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way.",
  },
  {
    number: 116,
    surah: 2,
    numberInSurah: 109,
    text: "وَدَّ كَثِيرٌ مِّنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُمْ مِن بَعْدِ إِيمَانِكُمْ كُفَّارًا حَسَدًا مِّنْ عِندِ أَنفُسِهِم مِّن بَعْدِ مَا تَبَيَّنَ لَهُمُ الْحَقُّ ۖ فَاعْفُوا وَاصْفَحُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ ۗ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "Many of the People of the Book wish they could turn you back to disbelief after you have believed, out of envy from themselves [even] after the truth has become clear to them. But pardon and overlook until Allah delivers His command. Indeed, Allah is over all things competent.",
  },
  {
    number: 117,
    surah: 2,
    numberInSurah: 110,
    text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ۚ وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ ۗ إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ",
    translation: "And establish prayer and give zakah. And whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah of what you do is Seeing.",
  },
  {
    number: 118,
    surah: 2,
    numberInSurah: 111,
    text: "وَقَالُوا لَن يَدْخُلَ الْجَنَّةَ إِلَّا مَن كَانَ هُودًا أَوْ نَصَارَىٰ ۗ تِلْكَ أَمَانِيُّهُمْ ۗ قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ",
    translation: "And they say, \"None will enter Paradise except one who is a Jew or a Christian.\" That is [merely] their wishful thinking. Say, \"Produce your proof, if you should be truthful.\"",
  },
  {
    number: 119,
    surah: 2,
    numberInSurah: 112,
    text: "بَلَىٰ ۚ مَنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ فَلَهُ أَجْرُهُ عِندَ رَبِّهِ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Yes [on the contrary]. Whoever submits his face [i.e., self] to Allah while being a doer of good will have his reward with his Lord. And no fear will there be concerning them, nor will they grieve.",
  },
  {
    number: 120,
    surah: 2,
    numberInSurah: 113,
    text: "وَقَالَتِ الْيَهُودُ لَيْسَتِ النَّصَارَىٰ عَلَىٰ شَيْءٍ وَقَالَتِ النَّصَارَىٰ لَيْسَتِ الْيَهُودُ عَلَىٰ شَيْءٍ وَهُمْ يَتْلُونَ الْكِتَابَ ۗ كَذَٰلِكَ قَالَ الَّذِينَ لَا يَعْلَمُونَ مِثْلَ قَوْلِهِمْ ۗ فَاللَّهُ يَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ",
    translation: "The Jews say \"The Christians have nothing [true]\" and the Christians say \"The Jews have nothing [true],\" while they [both] recite the Scripture. Thus do those who know not [i.e., the polytheists] speak the same as their words. But Allah will judge between them on the Day of Resurrection concerning that over which they used to differ.",
  },
  {
    number: 121,
    surah: 2,
    numberInSurah: 114,
    text: "وَمَنْ أَظْلَمُ مِمَّن مَّنَعَ مَسَاجِدَ اللَّهِ أَن يُذْكَرَ فِيهَا اسْمُهُ وَسَعَىٰ فِي خَرَابِهَا ۚ أُولَٰئِكَ مَا كَانَ لَهُمْ أَن يَدْخُلُوهَا إِلَّا خَائِفِينَ ۚ لَهُمْ فِي الدُّنْيَا خِزْيٌ وَلَهُمْ فِي الْآخِرَةِ عَذَابٌ عَظِيمٌ",
    translation: "And who are more unjust than those who prevent the name of Allah from being mentioned in His mosques and strive toward their destruction. It is not for them to enter them except in fear. For them in this world is disgrace, and they will have in the Hereafter a great punishment.",
  },
  {
    number: 122,
    surah: 2,
    numberInSurah: 115,
    text: "وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ ۚ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ",
    translation: "And to Allah belongs the east and the west. So wherever you [might] turn, there is the Face of Allah. Indeed, Allah is all-Encompassing and Knowing.",
  },
  {
    number: 123,
    surah: 2,
    numberInSurah: 116,
    text: "وَقَالُوا اتَّخَذَ اللَّهُ وَلَدًا ۗ سُبْحَانَهُ ۖ بَل لَّهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ كُلٌّ لَّهُ قَانِتُونَ",
    translation: "And they say, \"Allah has taken a son.\" Exalted is He! Rather, to Him belongs whatever is in the heavens and the earth. All are devoutly obedient to Him.",
  },
  {
    number: 124,
    surah: 2,
    numberInSurah: 117,
    text: "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ ۖ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ",
    translation: "Originator of the heavens and the earth. When He decrees a matter, He only says to it, \"Be,\" and it is.",
  },
  {
    number: 125,
    surah: 2,
    numberInSurah: 118,
    text: "وَقَالَ الَّذِينَ لَا يَعْلَمُونَ لَوْلَا يُكَلِّمُنَا اللَّهُ أَوْ تَأْتِينَا آيَةٌ ۗ كَذَٰلِكَ قَالَ الَّذِينَ مِن قَبْلِهِم مِّثْلَ قَوْلِهِمْ ۘ تَشَابَهَتْ قُلُوبُهُمْ ۗ قَدْ بَيَّنَّا الْآيَاتِ لِقَوْمٍ يُوقِنُونَ",
    translation: "And those who know not say, \"Why does Allah not speak to us or there come to us a sign?\" Thus [had] said those before them similar to their words. Their hearts resemble each other. We have already made clear the signs for a people who are certain [in faith].",
  },
  {
    number: 126,
    surah: 2,
    numberInSurah: 119,
    text: "إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا ۖ وَلَا تُسْأَلُ عَنْ أَصْحَابِ الْجَحِيمِ",
    translation: "Indeed, We have sent you with the truth as a bearer of good tidings and a warner. And you will not be asked about the companions of Hellfire.",
  },
  {
    number: 127,
    surah: 2,
    numberInSurah: 120,
    text: "وَلَن تَرْضَىٰ عَنكَ الْيَهُودُ وَلَا النَّصَارَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ ۗ قُلْ إِنَّ هُدَى اللَّهِ هُوَ الْهُدَىٰ ۗ وَلَئِنِ اتَّبَعْتَ أَهْوَاءَهُم بَعْدَ الَّذِي جَاءَكَ مِنَ الْعِلْمِ ۙ مَا لَكَ مِنَ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ",
    translation: "And the Jews and the Christians will never be satisfied with you until you follow their religion. Say, \"Indeed, the guidance of Allah is the [only] guidance.\" If you were to follow their desires after what has come to you of knowledge, you would have against Allah no protector or helper.",
  },
  {
    number: 128,
    surah: 2,
    numberInSurah: 121,
    text: "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَتْلُونَهُ حَقَّ تِلَاوَتِهِ أُولَٰئِكَ يُؤْمِنُونَ بِهِ ۗ وَمَن يَكْفُرْ بِهِ فَأُولَٰئِكَ هُمُ الْخَاسِرُونَ",
    translation: "Those to whom We have given the Book recite it with its true recitation. They [are the ones who] believe in it. And whoever disbelieves in it - it is they who are the losers.",
  },
  {
    number: 129,
    surah: 2,
    numberInSurah: 122,
    text: "يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ",
    translation: "O Children of Israel, remember My favor which I have bestowed upon you and that I preferred you over the worlds.",
  },
  {
    number: 130,
    surah: 2,
    numberInSurah: 123,
    text: "وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَلَا هُمْ يُنصَرُونَ",
    translation: "And fear a Day when no soul will suffice for another soul at all, and no compensation will be accepted from it, nor will any intercession benefit it, nor will they be aided.",
  },
  {
    number: 131,
    surah: 2,
    numberInSurah: 124,
    text: "وَابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ فَأَتَمَّهُنَّ ۖ قَالَ إِنِّي جَاعِلُكَ لِلنَّاسِ إِمَامًا ۖ قَالَ وَمِن ذُرِّيَّتِي ۖ قَالَ لَا يَنَالُ عَهْدِي الظَّالِمِينَ",
    translation: "And [mention, O Muhammad], when Abraham was tried by his Lord with commands and he fulfilled them. [Allah] said, \"Indeed, I will make you a leader for the people.\" [Abraham] said, \"And of my descendants?\" [Allah] said, \"My covenant does not include the wrongdoers.\"",
  },
  {
    number: 132,
    surah: 2,
    numberInSurah: 125,
    text: "وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى ۖ وَعَهِدْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَن طَهِّرَا بَيْتِيَ لِلطَّائِفِينَ وَالْعَاكِفِينَ وَالرُّكَّعِ السُّجُودِ",
    translation: "And [mention] when We made the House [i.e., the Ka'bah] a place of return for the people and [a place of] security. And take, [O believers], from the standing place of Abraham a place of prayer. And We charged Abraham and Ishmael, [saying], \"Purify My House for those who perform Tawaf and those who are staying [in i'tikaf] and those who bow and prostrate.\"",
  },
  {
    number: 133,
    surah: 2,
    numberInSurah: 126,
    text: "وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ مَنْ آمَنَ مِنْهُمْ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۖ قَالَ وَمَن كَفَرَ فَأُمَتِّعُهُ قَلِيلًا ثُمَّ أَضْطَرُّهُ إِلَىٰ عَذَابِ النَّارِ ۖ وَبِئْسَ الْمَصِيرُ",
    translation: "And [mention] when Abraham said, \"My Lord, make this a secure city and provide its people with fruits - whoever of them believes in Allah and the Last Day.\" [Allah] said, \"And whoever disbelieves - I will grant him enjoyment for a little; then I will force him to the punishment of the Fire, and wretched is the destination.\"",
  },
  {
    number: 134,
    surah: 2,
    numberInSurah: 127,
    text: "وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    translation: "And [mention] when Abraham was raising the foundations of the House with Ishmael, [saying], \"Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.\"",
  },
  {
    number: 135,
    surah: 2,
    numberInSurah: 128,
    text: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا ۖ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
    translation: "Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our [methods of] worship and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.",
  },
  {
    number: 136,
    surah: 2,
    numberInSurah: 129,
    text: "رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُزَكِّيهِمْ ۚ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
    translation: "Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.\"",
  },
  {
    number: 137,
    surah: 2,
    numberInSurah: 130,
    text: "وَمَن يَرْغَبُ عَن مِّلَّةِ إِبْرَاهِيمَ إِلَّا مَن سَفِهَ نَفْسَهُ ۚ وَلَقَدِ اصْطَفَيْنَاهُ فِي الدُّنْيَا ۖ وَإِنَّهُ فِي الْآخِرَةِ لَمِنَ الصَّالِحِينَ",
    translation: "And who would be averse to the religion of Abraham except one who makes a fool of himself. And We had chosen him in this world, and indeed he, in the Hereafter, will be among the righteous.",
  },
  {
    number: 138,
    surah: 2,
    numberInSurah: 131,
    text: "إِذْ قَالَ لَهُ رَبُّهُ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ الْعَالَمِينَ",
    translation: "When his Lord said to him, \"Submit,\" he said, \"I have submitted [in Islam] to the Lord of the worlds.\"",
  },
  {
    number: 139,
    surah: 2,
    numberInSurah: 132,
    text: "وَوَصَّىٰ بِهَا إِبْرَاهِيمُ بَنِيهِ وَيَعْقُوبُ يَا بَنِيَّ إِنَّ اللَّهَ اصْطَفَىٰ لَكُمُ الدِّينَ فَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ",
    translation: "And Abraham instructed his sons [to do the same] and [so did] Jacob, [saying], \"O my sons, indeed Allah has chosen for you this religion, so do not die except while you are Muslims.\"",
  },
  {
    number: 140,
    surah: 2,
    numberInSurah: 133,
    text: "أَمْ كُنتُمْ شُهَدَاءَ إِذْ حَضَرَ يَعْقُوبَ الْمَوْتُ إِذْ قَالَ لِبَنِيهِ مَا تَعْبُدُونَ مِن بَعْدِي ۖ قَالُوا نَعْبُدُ إِلَٰهَكَ وَإِلَٰهَ آبَائِكَ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ ۖ إِلَٰهًا وَاحِدًا وَنَحْنُ لَهُ مُسْلِمُونَ",
    translation: "Or were you witnesses when death approached Jacob, when he said to his sons, \"What will you worship after me?\" They said, \"We will worship your God and the God of your fathers, Abraham and Ishmael and Isaac - one God. And we are Muslims [in submission] to Him.\"",
  },
  {
    number: 141,
    surah: 2,
    numberInSurah: 134,
    text: "تِلْكَ أُمَّةٌ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُسْأَلُونَ عَمَّا كَانُوا يَعْمَلُونَ",
    translation: "That was a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned. And you will not be asked about what they used to do.",
  },
  {
    number: 142,
    surah: 2,
    numberInSurah: 135,
    text: "وَقَالُوا كُونُوا هُودًا أَوْ نَصَارَىٰ تَهْتَدُوا ۗ قُلْ بَلْ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا ۖ وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    translation: "And they say, \"Be Jews or Christians [so] you will be guided.\" Say, \"Rather, [we follow] the religion of Abraham, inclining toward truth, and he was not of the polytheists.\"",
  },
  {
    number: 143,
    surah: 2,
    numberInSurah: 136,
    text: "قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا وَمَا أُنزِلَ إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ وَالْأَسْبَاطِ وَمَا أُوتِيَ مُوسَىٰ وَعِيسَىٰ وَمَا أُوتِيَ النَّبِيُّونَ مِن رَّبِّهِمْ ۖ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْهُمْ ۖ وَنَحْنُ لَهُ مُسْلِمُونَ",
    translation: "Say, \"We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.\"",
  },
  {
    number: 144,
    surah: 2,
    numberInSurah: 137,
    text: "فَإِنْ آمَنُوا بِمِثْلِ مَا آمَنتُم بِهِ فَقَدِ اهْتَدَوا ۖ وَّإِن تَوَلَّوْا فَإِنَّمَا هُمْ فِي شِقَاقٍ ۖ فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: "So if they believe in the same as you believe in, then they have been [rightly] guided; but if they turn away, they are only in dissension, and Allah will be sufficient for you against them. And He is the Hearing, the Knowing.",
  },
  {
    number: 145,
    surah: 2,
    numberInSurah: 138,
    text: "صِبْغَةَ اللَّهِ ۖ وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً ۖ وَنَحْنُ لَهُ عَابِدُونَ",
    translation: "[And say, \"Ours is] the religion of Allah. And who is better than Allah in [ordaining] religion? And we are worshippers of Him.\"",
  },
  {
    number: 146,
    surah: 2,
    numberInSurah: 139,
    text: "قُلْ أَتُحَاجُّونَنَا فِي اللَّهِ وَهُوَ رَبُّنَا وَرَبُّكُمْ وَلَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ وَنَحْنُ لَهُ مُخْلِصُونَ",
    translation: "Say, [O Muhammad], \"Do you argue with us about Allah while He is our Lord and your Lord? For us are our deeds, and for you are your deeds. And we are sincere [in deed and intention] to Him.\"",
  },
  {
    number: 147,
    surah: 2,
    numberInSurah: 140,
    text: "أَمْ تَقُولُونَ إِنَّ إِبْرَٰهِيمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطَ كَانُوا۟ هُودًا أَوْ نَصَٰرَىٰ ۗ قُلْ أَأَنتُمْ أَعْلَمُ أَمِ ٱللَّهُ ۗ وَمَنْ أَظْلَمُ مِمَّن كَتَمَ شَهَٰدَةً عِندَهُۥ مِنَ ٱللَّهِ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ",
    translation: "Or do you say that Abraham and Ishmael and Isaac and Jacob and the Descendants were Jews or Christians? Say, 'Are you more knowing or is Allah?' And who is more unjust than one who conceals a testimony he has from Allah? And Allah is not unaware of what you do."
  },
  {
    number: 148,
    surah: 2,
    numberInSurah: 141,
    text: "تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُسْـَٔلُونَ عَمَّا كَانُوا۟ يَعْمَلُونَ",
    translation: "That was a nation who has passed away. Theirs is that which they earned, and yours is that which you earn. And you will not be asked about what they used to do."
  },
  {
    number: 149,
    surah: 2,
    numberInSurah: 142,
    text: "سَيَقُولُ ٱلسُّفَهَآءُ مِنَ ٱلنَّاسِ مَا وَلَّىٰهُمْ عَن قِبْلَتِهِمُ ٱلَّتِى كَانُوا۟ عَلَيْهَا ۚ قُلْ لِلَّهِ ٱلْمَشْرِقُ وَٱلْمَغْرِبُ ۚ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: "The foolish among the people will say, 'What has turned them away from their qiblah, which they used to face?' Say, 'To Allah belongs the east and the west. He guides whom He wills to a straight path.'"
  },
  {
    number: 150,
    surah: 2,
    numberInSurah: 143,
    text: "وَكَذَٰلِكَ جَعَلْنَٰكُمْ أُمَّةًۭ وَسَطًۭا لِّتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ وَيَكُونَ ٱلرَّسُولُ عَلَيْكُمْ شَهِيدًۭا ۗ وَمَا جَعَلْنَا ٱلْقِبْلَةَ ٱلَّتِى كُنتَ عَلَيْهَآ إِلَّا لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِن كَانَتْ لَكَبِيرَةً إِلَّا عَلَى ٱلَّذِينَ هَدَى ٱللَّهُ ۗ وَمَا كَانَ ٱللَّهُ لِيُضِيعَ إِيمَٰنَكُمْ ۚ إِنَّ ٱللَّهَ بِٱلنَّاسِ لَرَءُوفٌۭ رَّحِيمٌۭ",
    translation: "And thus We have made you a just community that you will be witnesses over the people and the Messenger will be a witness over you. And We did not make the qiblah which you used to face except that We might make evident who would follow the Messenger from who would turn back on his heels. And indeed, it is difficult except for those whom Allah has guided. And never would Allah have caused you to lose your faith. Indeed, Allah is, to the people, Kind and Merciful."
  },
  {
    number: 151,
    surah: 2,
    numberInSurah: 144,
    text: "قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِى ٱلسَّمَآءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةًۭ تَرْضَىٰهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ ۗ وَإِنَّ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ لَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا يَعْمَلُونَ",
    translation: "We have certainly seen the turning of your face, [O Muhammad], toward the heaven, and We will surely turn you to a qiblah with which you will be pleased. So turn your face toward al-Masjid al-Haram. And wherever you [believers] are, turn your faces toward it [in prayer]. Indeed, those who have been given the Scripture well know that it is the truth from their Lord. And Allah is not unaware of what they do."
  },
  {
    number: 152,
    surah: 2,
    numberInSurah: 145,
    text: "وَلَئِنْ أَتَيْتَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ بِكُلِّ ءَايَةٍۢ مَّا تَبِعُوا۟ قِبْلَتَكَ ۚ وَمَآ أَنتَ بِتَابِعٍۢ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُم بِتَابِعٍۢ قِبْلَةَ بَعْضٍۢ ۗ وَلَئِنِ ٱتَّبَعْتَ أَهْوَآءَهُم مِّنۢ بَعْدِ مَا جَآءَكَ مِنَ ٱلْعِلْمِ إِنَّكَ إِذًۭا لَّمِنَ ٱلظَّٰلِمِينَ",
    translation: "And if you brought to those who were given the Scripture every sign, they would not follow your qiblah. Nor will you be a follower of their qiblah. Nor would they be followers of one another's qiblah. So if you were to follow their desires after what has come to you of knowledge, indeed, you would then be among the wrongdoers."
  },
  {
    number: 153,
    surah: 2,
    numberInSurah: 146,
    text: "ٱلَّذِينَ ءَاتَيْنَٰهُمُ ٱلْكِتَٰبَ يَعْرِفُونَهُۥ كَمَا يَعْرِفُونَ أَبْنَآءَهُمْ ۖ وَإِنَّ فَرِيقًۭا مِّنْهُمْ لَيَكْتُمُونَ ٱلْحَقَّ وَهُمْ يَعْلَمُونَ",
    translation: "Those to whom We gave the Scripture know him as they know their own sons. But indeed, a party of them conceal the truth while they know [it]."
  },
  {
    number: 154,
    surah: 2,
    numberInSurah: 147,
    text: "ٱلْحَقُّ مِن رَّبِّكَ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ",
    translation: "The truth is from your Lord, so never be among the doubters."
  },
  {
    number: 155,
    surah: 2,
    numberInSurah: 148,
    text: "وَلِكُلٍّۢ وِجْهَةٌ هُوَ مُوَلِّيهَا ۖ فَٱسْتَبِقُوا۟ ٱلْخَيْرَٰتِ ۚ أَيْنَ مَا تَكُونُوا۟ يَأْتِ بِكُمُ ٱللَّهُ جَمِيعًا ۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
    translation: "For each [religious following] is a direction toward which it faces. So race to [all that is] good. Wherever you may be, Allah will bring you forth [for judgment] all together. Indeed, Allah is over all things competent."
  },
  {
    number: 156,
    surah: 2,
    numberInSurah: 149,
    text: "وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۖ وَإِنَّهُۥ لَلْحَقُّ مِن رَّبِّكَ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ",
    translation: "So from wherever you go out [for prayer, O Muhammad], turn your face toward al-Masjid al-Haram, and indeed, it is the truth from your Lord. And Allah is not unaware of what you do."
  },
  {
    number: 157,
    surah: 2,
    numberInSurah: 150,
    text: "وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۖ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ إِلَّا ٱلَّذِينَ ظَلَمُوا۟ مِنْهُمْ فَلَا تَخْشَوْهُمْ وَٱخْشَوْنِى وَلِأُتِمَّ نِعْمَتِى عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُونَ",
    translation: "And from wherever you go out [for prayer], turn your face toward al-Masjid al-Haram. And wherever you [believers] may be, turn your faces toward it in order that the people will have no argument against you, except for those of them who commit wrong; so fear them not but fear Me. And [it is] so I may complete My favor upon you and that you may be guided."
  },
  {
    number: 158,
    surah: 2,
    numberInSurah: 151,
    text: "كَمَآ أَرْسَلْنَا فِيكُمْ رَسُولًۭا مِّنكُمْ يَتْلُوا۟ عَلَيْكُمْ ءَايَٰتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ",
    translation: "Just as We have sent among you a messenger from yourselves reciting to you Our verses and purifying you and teaching you the Book and wisdom and teaching you that which you did not know."
  },
  {
    number: 159,
    surah: 2,
    numberInSurah: 152,
    text: "فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ",
    translation: "So remember Me; I will remember you. And be grateful to Me and do not deny Me."
  },
  {
    number: 160,
    surah: 2,
    numberInSurah: 153,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ",
    translation: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient."
  },
  {
    number: 161,
    surah: 2,
    numberInSurah: 154,
    text: "وَلَا تَقُولُوا۟ لِمَن يُقْتَلُ فِى سَبِيلِ ٱللَّهِ أَمْوَٰتٌۢ ۚ بَلْ أَحْيَآءٌۭ وَلَٰكِن لَّا تَشْعُرُونَ",
    translation: "And do not say about those who are killed in the way of Allah, 'They are dead.' Rather, they are alive, but you perceive [it] not."
  },
  {
    number: 162,
    surah: 2,
    numberInSurah: 155,
    text: "وَلَنَبْلُوَنَّكُم بِشَىْءٍۢ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍۢ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ وَبَشِّرِ ٱلصَّٰبِرِينَ",
    translation: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient."
  },
  {
    number: 163,
    surah: 2,
    numberInSurah: 156,
    text: "ٱلَّذِينَ إِذَآ أَصَابَتْهُم مُّصِيبَةٌۭ قَالُوٓا۟ إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ",
    translation: "Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'"
  },
  {
    number: 164,
    surah: 2,
    numberInSurah: 157,
    text: "أُو۟لَٰٓئِكَ عَلَيْهِمْ صَلَوَٰتٌۭ مِّن رَّبِّهِمْ وَرَحْمَةٌۭ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُهْتَدُونَ",
    translation: "Those are the ones upon whom are blessings from their Lord and mercy. And it is they who are [rightly] guided."
  },
  {
    number: 165,
    surah: 2,
    numberInSurah: 158,
    text: "إِنَّ ٱلصَّفَا وَٱلْمَرْوَةَ مِن شَعَآئِرِ ٱللَّهِ ۖ فَمَنْ حَجَّ ٱلْبَيْتَ أَوِ ٱعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًۭا فَإِنَّ ٱللَّهَ شَاكِرٌ عَلِيمٌ",
    translation: "Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'Umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is Appreciative and Knowing."
  },
  {
    number: 166,
    surah: 2,
    numberInSurah: 159,
    text: "إِنَّ ٱلَّذِينَ يَكْتُمُونَ مَآ أَنزَلْنَا مِنَ ٱلْبَيِّنَٰتِ وَٱلْهُدَىٰ مِنۢ بَعْدِ مَا بَيَّنَّٰهُ لِلنَّاسِ فِى ٱلْكِتَٰبِ ۙ أُو۟لَٰٓئِكَ يَلْعَنُهُمُ ٱللَّهُ وَيَلْعَنُهُمُ ٱللَّٰعِنُونَ",
    translation: "Indeed, those who conceal what We sent down of clear proofs and guidance after We made it clear for the people in the Scripture - those are cursed by Allah and cursed by those who curse."
  },
  {
    number: 167,
    surah: 2,
    numberInSurah: 160,
    text: "إِلَّا ٱلَّذِينَ تَابُوا۟ وَأَصْلَحُوا۟ وَبَيَّنُوا۟ فَأُو۟لَٰٓئِكَ أَتُوبُ عَلَيْهِمْ ۚ وَأَنَا ٱلتَّوَّابُ ٱلرَّحِيمُ",
    translation: "Except for those who repent and correct themselves and make evident [what they concealed]. Those - I will accept their repentance, and I am the Accepting of Repentance, the Merciful."
  },
  {
    number: 168,
    surah: 2,
    numberInSurah: 161,
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَمَاتُوا۟ وَهُمْ كُفَّارٌۭ أُو۟لَٰٓئِكَ عَلَيْهِمْ لَعْنَةُ ٱللَّهِ وَٱلْمَلَٰٓئِكَةِ وَٱلنَّاسِ أَجْمَعِينَ",
    translation: "Indeed, those who disbelieve and die while they are disbelievers - upon them will be the curse of Allah and of the angels and the people, all together."
  },
  {
    number: 169,
    surah: 2,
    numberInSurah: 162,
    text: "خَٰلِدِينَ فِيهَا ۖ لَا يُخَفَّفُ عَنْهُمُ ٱلْعَذَابُ وَلَا هُمْ يُنظَرُونَ",
    translation: "Abiding eternally therein. The punishment will not be lightened for them, nor will they be reprieved."
  },
  {
    number: 170,
    surah: 2,
    numberInSurah: 163,
    text: "وَإِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ لَآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ",
    translation: "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful."
  },
  {
    number: 171,
    surah: 2,
    numberInSurah: 164,
    text: "إِنَّ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ وَٱلْفُلْكِ ٱلَّتِى تَجْرِى فِى ٱلْبَحْرِ بِمَا يَنفَعُ ٱلنَّاسَ وَمَآ أَنزَلَ ٱللَّهُ مِنَ ٱلسَّمَآءِ مِن مَّآءٍۢ فَأَحْيَا بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَآبَّةٍۢ وَتَصْرِيفِ ٱلرِّيَٰحِ وَٱلسَّحَابِ ٱلْمُسَخَّرِ بَيْنَ ٱلسَّمَآءِ وَٱلْأَرْضِ لَءَايَٰتٍۢ لِّقَوْمٍۢ يَعْقِلُونَ",
    translation: "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, and the [great] ships which sail through the sea with that which benefits people, and what Allah has sent down from the heavens of rain, giving life thereby to the earth after its lifelessness and dispersing therein every [kind of] moving creature, and [His] directing of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason."
  },
  {
    number: 172,
    surah: 2,
    numberInSurah: 165,
    text: "وَمِنَ ٱلنَّاسِ مَن يَتَّخِذُ مِن دُونِ ٱللَّهِ أَندَادًۭا يُحِبُّونَهُمْ كَحُبِّ ٱللَّهِ ۖ وَٱلَّذِينَ ءَامَنُوٓا۟ أَشَدُّ حُبًّۭا لِلَّهِ ۗ وَلَوْ يَرَى ٱلَّذِينَ ظَلَمُوٓا۟ إِذْ يَرَوْنَ ٱلْعَذَابَ أَنَّ ٱلْقُوَّةَ لِلَّهِ جَمِيعًۭا وَأَنَّ ٱللَّهَ شَدِيدُ ٱلْعَذَابِ",
    translation: "And [yet], among the people are those who take other than Allah as equals [to Him]. They love them as they [should] love Allah. But those who believe are stronger in love for Allah. And if only they who have wronged would consider [that] when they see the punishment, [they will be certain] that all power belongs to Allah and that Allah is severe in punishment."
  },  
  {
    number: 173,
    surah: 2,
    numberInSurah: 166,
    text: "إِذْ تَبَرَّأَ ٱلَّذِينَ ٱتُّبِعُوا۟ مِنَ ٱلَّذِينَ ٱتَّبَعُوا۟ وَرَأَوُا۟ ٱلْعَذَابَ وَتَقَطَّعَتْ بِهِمُ ٱلْأَسْبَابُ",
    translation: "When those who were followed disassociate themselves from those who followed [them], and they [all] see the punishment, and cut off from them are the ties [of relationship]."
  },
  {
    number: 174,
    surah: 2,
    numberInSurah: 167,
    text: "وَقَالَ ٱلَّذِينَ ٱتَّبَعُوا۟ لَوْ أَنَّ لَنَا كَرَّةًۭ فَنَتَبَرَّأَ مِنْهُمْ كَمَا تَبَرَّءُوا۟ مِنَّا ۗ كَذَٰلِكَ يُرِيهِمُ ٱللَّهُ أَعْمَٰلَهُمْ حَسَرَٰتٍ عَلَيْهِمْ ۖ وَمَا هُم بِخَٰرِجِينَ مِنَ ٱلنَّارِ",
    translation: "Those who followed will say, 'If only we had another turn [at worldly life] so we could disassociate ourselves from them as they have disassociated themselves from us.' Thus will Allah show them their deeds as regrets upon them. And they are never to emerge from the Fire."
  },
  {
    number: 175,
    surah: 2,
    numberInSurah: 168,
    text: "يَٰٓأَيُّهَا ٱلنَّاسُ كُلُوا۟ مِمَّا فِى ٱلْأَرْضِ حَلَٰلًۭا طَيِّبًۭا وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌ",
    translation: "O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."
  },
  {
    number: 176,
    surah: 2,
    numberInSurah: 169,
    text: "إِنَّمَا يَأْمُرُكُم بِٱلسُّوٓءِ وَٱلْفَحْشَآءِ وَأَن تَقُولُوا۟ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ",
    translation: "He only orders you to evil and immorality and to say about Allah what you do not know."
  },
  {
    number: 177,
    surah: 2,
    numberInSurah: 170,
    text: "وَإِذَا قِيلَ لَهُمُ ٱتَّبِعُوا۟ مَآ أَنزَلَ ٱللَّهُ قَالُوا۟ بَلْ نَتَّبِعُ مَآ أَلْفَيْنَا عَلَيْهِ ءَابَآءَنَآ ۚ أَوَلَوْ كَانَ ءَابَآؤُهُمْ لَا يَعْقِلُونَ شَيْـًۭا وَلَا يَهْتَدُونَ",
    translation: "And when it is said to them, 'Follow what Allah has revealed,' they say, 'Rather, we will follow that which we found our fathers doing.' Even though their fathers understood nothing, nor were they guided?"
  },
  {
    number: 178,
    surah: 2,
    numberInSurah: 171,
    text: "وَمَثَلُ ٱلَّذِينَ كَفَرُوا۟ كَمَثَلِ ٱلَّذِى يَنْعِقُ بِمَا لَا يَسْمَعُ إِلَّا دُعَآءًۭ وَنِدَآءًۭ ۚ صُمٌّۭ بُكْمٌ عُمْىٌۭ فَهُمْ لَا يَعْقِلُونَ",
    translation: "The example of those who disbelieve is like that of one who shouts at what hears nothing but calls and cries - [they are] deaf, dumb and blind, so they do not understand."
  },
  {
    number: 179,
    surah: 2,
    numberInSurah: 172,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُلُوا۟ مِن طَيِّبَٰتِ مَا رَزَقْنَٰكُمْ وَٱشْكُرُوا۟ لِلَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    translation: "O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship."
  },
  {
    number: 180,
    surah: 2,
    numberInSurah: 173,
    text: "إِنَّمَا حَرَّمَ عَلَيْكُمُ ٱلْمَيْتَةَ وَٱلدَّمَ وَلَحْمَ ٱلْخِنزِيرِ وَمَآ أُهِلَّ بِهِۦ لِغَيْرِ ٱللَّهِ ۖ فَمَنِ ٱضْطُرَّ غَيْرَ بَاغٍۢ وَلَا عَادٍۢ فَلَآ إِثْمَ عَلَيْهِ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: "He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah. But whoever is forced [by necessity], neither desiring [it] nor transgressing [its limit], there is no sin upon him. Indeed, Allah is Forgiving and Merciful."
  },
  {
    number: 181,
    surah: 2,
    numberInSurah: 174,
    text: "إِنَّ ٱلَّذِينَ يَكْتُمُونَ مَآ أَنزَلَ ٱللَّهُ مِنَ ٱلْكِتَٰبِ وَيَشْتَرُونَ بِهِۦ ثَمَنًۭا قَلِيلًا أُو۟لَٰٓئِكَ مَا يَأْكُلُونَ فِى بُطُونِهِمْ إِلَّا ٱلنَّارَ وَلَا يُكَلِّمُهُمُ ٱللَّهُ يَوْمَ ٱلْقِيَٰمَةِ وَلَا يُزَكِّيهِمْ ۖ وَلَهُمْ عَذَابٌ أَلِيمٌۭ",
    translation: "Indeed, those who conceal what Allah has sent down of the Book and exchange it for a small price - they consume not into their bellies except the Fire. And Allah will not speak to them on the Day of Resurrection, nor will He purify them. And they will have a painful punishment."
  },
  {
    number: 182,
    surah: 2,
    numberInSurah: 175,
    text: "أُو۟لَٰٓئِكَ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلضَّلَٰلَةَ بِٱلْهُدَىٰ وَٱلْعَذَابَ بِٱلْمَغْفِرَةِ ۖ فَمَآ أَصْبَرَهُمْ عَلَى ٱلنَّارِ",
    translation: "Those are the ones who have exchanged guidance for error and forgiveness for punishment. How patient they are in pursuit of the Fire!"
  },
  {
    number: 183,
    surah: 2,
    numberInSurah: 176,
    text: "ذَٰلِكَ بِأَنَّ ٱللَّهَ نَزَّلَ ٱلْكِتَٰبَ بِٱلْحَقِّ ۗ وَإِنَّ ٱلَّذِينَ ٱخْتَلَفُوا۟ فِى ٱلْكِتَٰبِ لَفِى شِقَاقٍۢ بَعِيدٍۢ",
    translation: "That is because Allah has sent down the Book in truth. And indeed, those who differ over the Book are in extreme dissension."
  },
  {
    number: 184,
    surah: 2,
    numberInSurah: 177,
    text: "لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا۟ وُجُوهَكُمْ قِبَلَ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَلَٰكِنَّ ٱلْبِرَّ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَٱلْمَلَٰٓئِكَةِ وَٱلْكِتَٰبِ وَٱلنَّبِيِّـۧنَ وَءَاتَى ٱلْمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَٱبْنَ ٱلسَّبِيلِ وَٱلسَّآئِلِينَ وَفِى ٱلرِّقَابِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ ۚ وَٱلْمُوفُونَ بِعَهْدِهِمْ إِذَا عَٰهَدُوا۟ ۖ وَٱلصَّٰبِرِينَ فِى ٱلْبَأْسَآءِ وَٱلضَّرَّآءِ وَحِينَ ٱلْبَأْسِ ۗ أُو۟لَٰٓئِكَ ٱلَّذِينَ صَدَقُوا۟ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُتَّقُونَ",
    translation: "Righteousness is not that you turn your faces toward the east or the west, but [true] righteousness is [in] one who believes in Allah, the Last Day, the angels, the Book, and the prophets and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask [for help], and for freeing slaves; [and who] establishes prayer and gives zakah; [those who] fulfill their promise when they promise; and [those who] are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous."
  },
  {
    number: 185,
    surah: 2,
    numberInSurah: 178,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلْقِصَاصُ فِى ٱلْقَتْلَىٰ ۖ ٱلْحُرُّ بِٱلْحُرِّ وَٱلْعَبْدُ بِٱلْعَبْدِ وَٱلْأُنثَىٰ بِٱلْأُنثَىٰ ۚ فَمَنْ عُفِىَ لَهُۥ مِنْ أَخِيهِ شَىْءٌۭ فَٱتِّبَاعٌۭ بِٱلْمَعْرُوفِ وَأَدَآءٌ إِلَيْهِ بِإِحْسَٰنٍۢ ۗ ذَٰلِكَ تَخْفِيفٌۭ مِّن رَّبِّكُمْ وَرَحْمَةٌۭ ۗ فَمَنِ ٱعْتَدَىٰ بَعْدَ ذَٰلِكَ فَلَهُۥ عَذَابٌ أَلِيمٌۭ",
    translation: "O you who have believed, prescribed for you is legal retribution for those murdered - the free for the free, the slave for the slave, and the female for the female. But if the killer is forgiven by the brother of the slain, then grant [him] any reasonable demand and compensate him with good conduct. This is an alleviation from your Lord and a mercy. But whoever transgresses after that will have a painful punishment."
  },
  {
    number: 186,
    surah: 2,
    numberInSurah: 179,
    text: "وَلَكُمْ فِى ٱلْقِصَاصِ حَيَوٰةٌۭ يَٰٓأُو۟لِى ٱلْأَلْبَٰبِ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "And there is for you in legal retribution [saving of] life, O you [people] of understanding, that you may become righteous."
  },
  {
    number: 187,
    surah: 2,
    numberInSurah: 180,
    text: "كُتِبَ عَلَيْكُمْ إِذَا حَضَرَ أَحَدَكُمُ ٱلْمَوْتُ إِن تَرَكَ خَيْرًا ٱلْوَصِيَّةُ لِلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ بِٱلْمَعْرُوفِ ۖ حَقًّا عَلَى ٱلْمُتَّقِينَ",
    translation: "Prescribed for you when death approaches [any] one of you if he leaves wealth [is that he should make] a bequest for the parents and near relatives according to what is acceptable - a duty upon the righteous."
  },
  {
    number: 188,
    surah: 2,
    numberInSurah: 181,
    text: "فَمَنْ بَدَّلَهُۥ بَعْدَمَا سَمِعَهُۥ فَإِنَّمَآ إِثْمُهُۥ عَلَى ٱلَّذِينَ يُبَدِّلُونَهُۥٓ ۚ إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ",
    translation: "Then whoever alters the bequest after he has heard it - the sin is only upon those who have altered it. Indeed, Allah is Hearing and Knowing."
  },
  {
    number: 189,
    surah: 2,
    numberInSurah: 182,
    text: "فَمَنْ خَافَ مِن مُّوصٍۢ جَنَفًا أَوْ إِثْمًۭا فَأَصْلَحَ بَيْنَهُمْ فَلَآ إِثْمَ عَلَيْهِ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: "But if one fears from the bequeather [some] error or sin and corrects that which is between them, there is no sin upon him. Indeed, Allah is Forgiving and Merciful."
  },
  {
    number: 190,
    surah: 2,
    numberInSurah: 183,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
  },
  {
    number: 191,
    surah: 2,
    numberInSurah: 184,
    text: "أَيَّامًۭا مَّعْدُودَٰتٍۭ ۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍۢ فَعِدَّةٌۭ مِّنْ أَيَّامٍ أُخَرَ ۚ وَعَلَى ٱلَّذِينَ يُطِيقُونَهُۥ فِدْيَةٌۭ طَعَامُ مِسْكِينٍۢ ۖ فَمَن تَطَوَّعَ خَيْرًۭا فَهُوَ خَيْرٌۭ لَّهُۥ ۚ وَأَن تَصُومُوا۟ خَيْرٌۭ لَّكُمْ ۖ إِن كُنتُمْ تَعْلَمُونَ",
    translation: "[Fasting for] a limited number of days. So whoever among you is ill or on a journey [during them] - then an equal number of days [are to be made up]. And upon those who are able [to fast, but with hardship] - a ransom [as substitute] of feeding a poor person [each day]. And whoever volunteers excess - it is better for him. But to fast is best for you, if you only knew."
  },
  {
    number: 192,
    surah: 2,
    numberInSurah: 185,
    text: "شَهْرُ رَمَضَانَ ٱلَّذِىٓ أُنزِلَ فِيهِ ٱلْقُرْءَانُ هُدًۭى لِّلنَّاسِ وَبَيِّنَٰتٍۢ مِّنَ ٱلْهُدَىٰ وَٱلْفُرْقَانِ ۚ فَمَن شَهِدَ مِنكُمُ ٱلشَّهْرَ فَلْيَصُمْهُۥ ۖ وَمَن كَانَ مَرِيضًا أَوْ عَلَىٰ سَفَرٍۢ فَعِدَّةٌۭ مِّنْ أَيَّامٍ أُخَرَ ۗ يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ وَلِتُكْمِلُوا۟ ٱلْعِدَّةَ وَلِتُكَبِّرُوا۟ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ",
    translation: "The month of Ramadan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion. So whoever sights [the new moon of] the month, let him fast it; and whoever is ill or on a journey - then an equal number of other days. Allah intends for you ease and does not intend for you hardship and [wants] for you to complete the period and to glorify Allah for that [to] which He has guided you, and perhaps you will be grateful."
  },
  {
    number: 193,
    surah: 2,
    numberInSurah: 186,
    text: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌۭ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا۟ لِى وَلْيُؤْمِنُوا۟ بِى لَعَلَّهُمْ يَرْشُدُونَ",
    translation: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided."
  },
  {
    number: 194,
    surah: 2,
    numberInSurah: 187,
    text: "أُحِلَّ لَكُمْ لَيْلَةَ ٱلصِّيَامِ ٱلرَّفَثُ إِلَىٰ نِسَآئِكُمْ ۚ هُنَّ لِبَاسٌۭ لَّكُمْ وَأَنتُمْ لِبَاسٌۭ لَّهُنَّ ۗ عَلِمَ ٱللَّهُ أَنَّكُمْ كُنتُمْ تَخْتَانُونَ أَنفُسَكُمْ فَتَابَ عَلَيْكُمْ وَعَفَا عَنكُمْ ۖ فَٱلْـَٰٔنَ بَٰشِرُوهُنَّ وَٱبْتَغُوا۟ مَا كَتَبَ ٱللَّهُ لَكُمْ ۚ وَكُلُوا۟ وَٱشْرَبُوا۟ حَتَّىٰ يَتَبَيَّنَ لَكُمُ ٱلْخَيْطُ ٱلْأَبْيَضُ مِنَ ٱلْخَيْطِ ٱلْأَسْوَدِ مِنَ ٱلْفَجْرِ ۖ ثُمَّ أَتِمُّوا۟ ٱلصِّيَامَ إِلَى ٱلَّيْلِ ۚ وَلَا تُبَٰشِرُوهُنَّ وَأَنتُمْ عَٰكِفُونَ فِى ٱلْمَسَٰجِدِ ۗ تِلْكَ حُدُودُ ٱللَّهِ فَلَا تَقْرَبُوهَا ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ ءَايَٰتِهِۦ لِلنَّاسِ لَعَلَّهُمْ يَتَّقُونَ",
    translation: "It has been made permissible for you the night preceding fasting to go to your wives [for sexual relations]. They are clothing for you, and you are clothing for them. Allah knows that you used to deceive yourselves, so He accepted your repentance and forgave you. So now, have relations with them and seek that which Allah has decreed for you. And eat and drink until the white thread of dawn becomes distinct to you from the black thread [of night]. Then complete the fast until the sunset. And do not have relations with them as long as you are staying for worship in the mosques. These are the limits [set by] Allah, so do not approach them. Thus does Allah make clear His ordinances to the people that they may become righteous."
  },
  {
    number: 195,
    surah: 2,
    numberInSurah: 188,
    text: "وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَٰطِلِ وَتُدْلُوا۟ بِهَآ إِلَى ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ ٱلنَّاسِ بِٱلْإِثْمِ وَأَنتُمْ تَعْلَمُونَ",
    translation: "And do not consume one another's wealth unjustly or send it [in bribery] to the rulers in order that [they might aid] you to consume a portion of the wealth of the people in sin, while you know [it is unlawful]."
  },
  {
    number: 196,
    surah: 2,
    numberInSurah: 189,
    text: "يَسْـَٔلُونَكَ عَنِ ٱلْأَهِلَّةِ قُلْ هِىَ مَوَٰقِيتُ لِلنَّاسِ وَٱلْحَجِّ ۗ وَلَيْسَ ٱلْبِرُّ بِأَن تَأْتُوا۟ ٱلْبُيُوتَ مِن ظُهُورِهَا وَلَٰكِنَّ ٱلْبِرَّ مَنِ ٱتَّقَىٰ ۗ وَأْتُوا۟ ٱلْبُيُوتَ مِنْ أَبْوَٰبِهَا ۚ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
    translation: "They ask you about the new moons. Say, 'They are measurements of time for the people and for Hajj.' And it is not righteousness to enter houses from the back, but righteousness is [in] one who fears Allah. And enter houses from their doors. And fear Allah that you may succeed."
  },
  {
    number: 197,
    surah: 2,
    numberInSurah: 190,
    text: "وَقَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ ٱلَّذِينَ يُقَٰتِلُونَكُمْ وَلَا تَعْتَدُوٓا۟ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْمُعْتَدِينَ",
    translation: "Fight in the way of Allah those who fight you but do not transgress. Indeed. Allah does not like transgressors."
  },
  {
    number: 198,
    surah: 2,
    numberInSurah: 191,
    text: "وَٱقْتُلُوهُمْ حَيْثُ ثَقِفْتُمُوهُمْ وَأَخْرِجُوهُم مِّنْ حَيْثُ أَخْرَجُوكُمْ ۚ وَٱلْفِتْنَةُ أَشَدُّ مِنَ ٱلْقَتْلِ ۚ وَلَا تُقَٰتِلُوهُمْ عِندَ ٱلْمَسْجِدِ ٱلْحَرَامِ حَتَّىٰ يُقَٰتِلُوكُمْ فِيهِ ۖ فَإِن قَٰتَلُوكُمْ فَٱقْتُلُوهُمْ ۗ كَذَٰلِكَ جَزَآءُ ٱلْكَٰفِرِينَ",
    translation: "And kill them wherever you overtake them and expel them from wherever they have expelled you, and fitnah is worse than killing. And do not fight them at al-Masjid al-Haram until they fight you there. But if they fight you, then kill them. Such is the recompense of the disbelievers."
  },
  {
    number: 199,
    surah: 2,
    numberInSurah: 192,
    text: "فَإِنِ ٱنتَهَوْا۟ فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: "And if they cease, then indeed, Allah is Forgiving and Merciful."
  },
  {
    number: 200,
    surah: 2,
    numberInSurah: 193,
    text: "وَقَٰتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌۭ وَيَكُونَ ٱلدِّينُ لِلَّهِ ۖ فَإِنِ ٱنتَهَوْا۟ فَلَا عُدْوَٰنَ إِلَّا عَلَى ٱلظَّٰلِمِينَ",
    translation: "Fight them until there is no [more] fitnah and [until] religion [all of it] is for Allah. And if they cease, then there is to be no aggression except against the oppressors."
  },
  {
    number: 201,
    surah: 2,
    numberInSurah: 194,
    text: "ٱلشَّهْرُ ٱلْحَرَامُ بِٱلشَّهْرِ ٱلْحَرَامِ وَٱلْحُرُمَٰتُ قِصَاصٌۭ ۚ فَمَنِ ٱعْتَدَىٰ عَلَيْكُمْ فَٱعْتَدُوا۟ عَلَيْهِ بِمِثْلِ مَا ٱعْتَدَىٰ عَلَيْكُمْ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ مَعَ ٱلْمُتَّقِينَ",
    translation: "[Fighting in] the sacred month is for [aggression committed in] the sacred month, and for [all] violations is legal retribution. So whoever has assaulted you, then assault him in the same way that he has assaulted you. And fear Allah and know that Allah is with those who fear Him."
  },
  {
    number: 202,
    surah: 2,
    numberInSurah: 195,
    text: "وَأَنفِقُوا۟ فِى سَبِيلِ ٱللَّهِ وَلَا تُلْقُوا۟ بِأَيْدِيكُمْ إِلَى ٱلتَّهْلُكَةِ ۛ وَأَحْسِنُوٓا۟ ۛ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ",
    translation: "And spend in the way of Allah and do not throw [yourselves] with your [own] hands into destruction [by refraining]. And do good; indeed, Allah loves the doers of good."
  },  
  {
    number: 203,
    surah: 2,
    numberInSurah: 196,
    text: "وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ ۖ فَإِنْ أُحْصِرْتُمْ فَمَا ٱسْتَيْسَرَ مِنَ ٱلْهَدْىِ ۖ وَلَا تَحْلِقُوا۟ رُءُوسَكُمْ حَتَّىٰ يَبْلُغَ ٱلْهَدْىُ مَحِلَّهُۥ ۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ بِهِۦٓ أَذًۭى مِّن رَّأْسِهِۦ فَفِدْيَةٌۭ مِّن صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍۢ ۚ فَإِذَآ أَمِنتُمْ فَمَن تَمَتَّعَ بِٱلْعُمْرَةِ إِلَى ٱلْحَجِّ فَمَا ٱسْتَيْسَرَ مِنَ ٱلْهَدْىِ ۚ فَمَن لَّمْ يَجِدْ فَصِيَامُ ثَلَٰثَةِ أَيَّامٍۢ فِى ٱلْحَجِّ وَسَبْعَةٍ إِذَا رَجَعْتُمْ ۗ تِلْكَ عَشَرَةٌۭ كَامِلَةٌۭ ۗ ذَٰلِكَ لِمَن لَّمْ يَكُنْ أَهْلُهُۥ حَاضِرِى ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ",
    translation: "And complete the Hajj and 'umrah for Allah. But if you are prevented, then [offer] what can be obtained with ease of sacrificial animals. And do not shave your heads until the sacrificial animal has reached its place of slaughter. And whoever among you is ill or has an ailment of the head [making shaving necessary must offer] a ransom of fasting [three days] or charity or sacrifice. And when you are secure, then whoever performs 'umrah [during the Hajj months] followed by Hajj [offers] what can be obtained with ease of sacrificial animals. And whoever cannot find [or afford such an animal] - then a fast of three days during Hajj and of seven when you have returned [home]. Those are ten complete [days]. This is for those whose family is not in the area of al-Masjid al-Haram. And fear Allah and know that Allah is severe in penalty."
  },
  {
    number: 204,
    surah: 2,
    numberInSurah: 197,
    text: "ٱلْحَجُّ أَشْهُرٌۭ مَّعْلُومَٰتٌۭ ۚ فَمَن فَرَضَ فِيهِنَّ ٱلْحَجَّ فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِى ٱلْحَجِّ ۗ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ يَعْلَمْهُ ٱللَّهُ ۗ وَتَزَوَّدُوا۟ فَإِنَّ خَيْرَ ٱلزَّادِ ٱلتَّقْوَىٰ ۚ وَٱتَّقُونِ يَٰٓأُو۟لِى ٱلْأَلْبَٰبِ",
    translation: "Hajj is [during] well-known months, so whoever has made Hajj obligatory upon himself therein [by entering the state of ihram], there is [to be for him] no sexual relations and no disobedience and no disputing during Hajj. And whatever good you do - Allah knows it. And take provisions, but indeed, the best provision is fear of Allah. And fear Me, O you of understanding."
  },
  {
    number: 205,
    surah: 2,
    numberInSurah: 198,
    text: "لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا۟ فَضْلًۭا مِّن رَّبِّكُمْ ۚ فَإِذَآ أَفَضْتُم مِّنْ عَرَفَٰتٍۢ فَٱذْكُرُوا۟ ٱللَّهَ عِندَ ٱلْمَشْعَرِ ٱلْحَرَامِ ۖ وَٱذْكُرُوهُ كَمَا هَدَىٰكُمْ وَإِن كُنتُم مِّن قَبْلِهِۦ لَمِنَ ٱلضَّآلِّينَ",
    translation: "There is no blame upon you for seeking bounty from your Lord [during Hajj]. But when you depart from 'Arafat, remember Allah at al-Mash'ar al-Haram. And remember Him, as He has guided you, for indeed, you were before that among those astray."
  },
  {
    number: 206,
    surah: 2,
    numberInSurah: 199,
    text: "ثُمَّ أَفِيضُوا۟ مِنْ حَيْثُ أَفَاضَ ٱلنَّاسُ وَٱسْتَغْفِرُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: "Then depart from the place from where [all] the people depart and ask forgiveness of Allah. Indeed, Allah is Forgiving and Merciful."
  },
  {
    number: 207,
    surah: 2,
    numberInSurah: 200,
    text: "فَإِذَا قَضَيْتُم مَّنَٰسِكَكُمْ فَٱذْكُرُوا۟ ٱللَّهَ كَذِكْرِكُمْ ءَابَآءَكُمْ أَوْ أَشَدَّ ذِكْرًۭا ۗ فَمِنَ ٱلنَّاسِ مَن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا وَمَا لَهُۥ فِى ٱلْءَاخِرَةِ مِنْ خَلَٰقٍۢ",
    translation: "And when you have completed your rites, remember Allah like your [previous] remembrance of your fathers or with [much] greater remembrance. And among the people is he who says, 'Our Lord, give us in this world,' and he will have in the Hereafter no share."
  },
  {
    number: 208,
    surah: 2,
    numberInSurah: 201,
    text: "وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
    translation: "But among them is he who says, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'"
  },
  {
    number: 209,
    surah: 2,
    numberInSurah: 202,
    text: "أُو۟لَٰٓئِكَ لَهُمْ نَصِيبٌۭ مِّمَّا كَسَبُوا۟ ۚ وَٱللَّهُ سَرِيعُ ٱلْحِسَابِ",
    translation: "Those will have a share of what they have earned, and Allah is swift in account."
  },
  {
    number: 210,
    surah: 2,
    numberInSurah: 203,
    text: "وَٱذْكُرُوا۟ ٱللَّهَ فِىٓ أَيَّامٍۢ مَّعْدُودَٰتٍۢ ۚ فَمَن تَعَجَّلَ فِى يَوْمَيْنِ فَلَآ إِثْمَ عَلَيْهِ ۚ وَمَن تَأَخَّرَ فَلَآ إِثْمَ عَلَيْهِ لِمَنِ ٱتَّقَىٰ ۗ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّكُمْ إِلَيْهِ تُحْشَرُونَ",
    translation: "And remember Allah during [specific] numbered days. Then whoever hastens [his departure] in two days - there is no sin upon him; and whoever delays [until the third] - there is no sin upon him - for him who fears Allah. And fear Allah and know that unto Him you will be gathered."
  },
  {
    number: 211,
    surah: 2,
    numberInSurah: 204,
    text: "وَمِنَ ٱلنَّاسِ مَن يُعْجِبُكَ قَوْلُهُۥ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَيُشْهِدُ ٱللَّهَ عَلَىٰ مَا فِى قَلْبِهِۦ وَهُوَ أَلَدُّ ٱلْخِصَامِ",
    translation: "And of the people is he whose speech pleases you in worldly life, and he calls Allah to witness as to what is in his heart, yet he is the fiercest of opponents."
  },
  {
    number: 212,
    surah: 2,
    numberInSurah: 205,
    text: "وَإِذَا تَوَلَّىٰ سَعَىٰ فِى ٱلْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ ٱلْحَرْثَ وَٱلنَّسْلَ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلْفَسَادَ",
    translation: "And when he goes away, he strives throughout the land to cause corruption therein and destroy crops and animals. And Allah does not like corruption."
  },
  {
    number: 213,
    surah: 2,
    numberInSurah: 206,
    text: "وَإِذَا قِيلَ لَهُ ٱتَّقِ ٱللَّهَ أَخَذَتْهُ ٱلْعِزَّةُ بِٱلْإِثْمِ ۚ فَحَسْبُهُۥ جَهَنَّمُ ۚ وَلَبِئْسَ ٱلْمِهَادُ",
    translation: "And when it is said to him, 'Fear Allah,' pride in the sin takes hold of him. Sufficient for him is Hellfire, and how wretched is the resting place."
  },
  {
    number: 214,
    surah: 2,
    numberInSurah: 207,
    text: "وَمِنَ ٱلنَّاسِ مَن يَشْرِى نَفْسَهُ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ ۗ وَٱللَّهُ رَءُوفٌۭ بِٱلْعِبَادِ",
    translation: "And of the people is he who sells himself, seeking means to the approval of Allah. And Allah is kind to [His] servants."
  },
  {
    number: 215,
    surah: 2,
    numberInSurah: 208,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱدْخُلُوا۟ فِى ٱلسِّلْمِ كَآفَّةًۭ وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌ",
    translation: "O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."
  },
  {
    number: 216,
    surah: 2,
    numberInSurah: 209,
    text: "فَإِن زَلَلْتُم مِّنۢ بَعْدِ مَا جَآءَتْكُمُ ٱلْبَيِّنَٰتُ فَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ",
    translation: "But if you deviate after clear proofs have come to you, then know that Allah is Exalted in Might and Wise."
  },
  {
    number: 217,
    surah: 2,
    numberInSurah: 210,
    text: "هَلْ يَنظُرُونَ إِلَّآ أَن يَأْتِيَهُمُ ٱللَّهُ فِى ظُلَلٍۢ مِّنَ ٱلْغَمَامِ وَٱلْمَلَٰٓئِكَةُ وَقُضِىَ ٱلْأَمْرُ ۚ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ",
    translation: "Do they await but that Allah should come to them in covers of clouds and the angels [as well] and the matter is [then] decided? And to Allah [all] matters are returned."
  },
  {
    number: 218,
    surah: 2,
    numberInSurah: 211,
    text: "سَلْ بَنِىٓ إِسْرَٰٓءِيلَ كَمْ ءَاتَيْنَٰهُم مِّنْ ءَايَةٍۢ بَيِّنَةٍۢ ۗ وَمَن يُبَدِّلْ نِعْمَةَ ٱللَّهِ مِنۢ بَعْدِ مَا جَآءَتْهُ فَإِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ",
    translation: "Ask the Children of Israel how many a sign of evidence We have given them. And whoever exchanges the favor of Allah [for disbelief] after it has come to him - then indeed, Allah is severe in penalty."
  },
  {
    number: 219,
    surah: 2,
    numberInSurah: 212,
    text: "زُيِّنَ لِلَّذِينَ كَفَرُوا۟ ٱلْحَيَوٰةُ ٱلدُّنْيَا وَيَسْخَرُونَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ ۘ وَٱلَّذِينَ ٱتَّقَوْا۟ فَوْقَهُمْ يَوْمَ ٱلْقِيَٰمَةِ ۗ وَٱللَّهُ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍۢ",
    translation: "Beautified for those who disbelieve is the life of this world, and they ridicule those who believe. But those who fear Allah are above them on the Day of Resurrection. And Allah gives provision to whom He wills without account."
  },
  {
    number: 220,
    surah: 2,
    numberInSurah: 213,
    text: "كَانَ ٱلنَّاسُ أُمَّةًۭ وَٰحِدَةًۭ فَبَعَثَ ٱللَّهُ ٱلنَّبِيِّـۧنَ مُبَشِّرِينَ وَمُنذِرِينَ وَأَنزَلَ مَعَهُمُ ٱلْكِتَٰبَ بِٱلْحَقِّ لِيَحْكُمَ بَيْنَ ٱلنَّاسِ فِيمَا ٱخْتَلَفُوا۟ فِيهِ ۚ وَمَا ٱخْتَلَفَ فِيهِ إِلَّا ٱلَّذِينَ أُوتُوهُ مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ بَغْيًۢا بَيْنَهُمْ ۖ فَهَدَى ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ لِمَا ٱخْتَلَفُوا۟ فِيهِ مِنَ ٱلْحَقِّ بِإِذْنِهِۦ ۗ وَٱللَّهُ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: "Mankind was [of] one religion [before their deviation]; then Allah sent the prophets as bringers of good tidings and warners and sent down with them the Scripture in truth to judge between the people concerning that in which they differed. And none differed over the Scripture except those who were given it - after the clear proofs came to them - out of jealous animosity among themselves. And Allah guided those who believed to the truth concerning that over which they had differed, by His permission. And Allah guides whom He wills to a straight path."
  },
  {
    number: 221,
    surah: 2,
    numberInSurah: 214,
    text: "أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ",
    translation: "Or do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until [even their] messenger and those who believed with him said, 'When is the help of Allah?' Unquestionably, the help of Allah is near."
  },
  {
    number: 222,
    surah: 2,
    numberInSurah: 215,
    text: "يَسْـَٔلُونَكَ مَاذَا يُنفِقُونَ ۖ قُلْ مَآ أَنفَقْتُم مِّنْ خَيْرٍۢ فَلِلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَٱبْنِ ٱلسَّبِيلِ ۗ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌۭ",
    translation: "They ask you, [O Muhammad], what they should spend. Say, 'Whatever you spend of good is [to be] for parents and relatives and orphans and the needy and the traveler. And whatever you do of good - indeed, Allah is Knowing of it.'"
  },
  {
    number: 223,
    surah: 2,
    numberInSurah: 216,
    text: "كُتِبَ عَلَيْكُمُ ٱلْقِتَالُ وَهُوَ كُرْهٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭا وَهُوَ خَيْرٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تُحِبُّوا۟ شَيْـًۭا وَهُوَ شَرٌّۭ لَّكُمْ ۗ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
    translation: "Fighting has been enjoined upon you while it is hateful to you. But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah knows, while you know not."
  },
  {
    number: 224,
    surah: 2,
    numberInSurah: 217,
    text: "يَسْـَٔلُونَكَ عَنِ ٱلشَّهْرِ ٱلْحَرَامِ قِتَالٍۢ فِيهِ ۖ قُلْ قِتَالٌۭ فِيهِ كَبِيرٌۭ ۖ وَصَدٌّ عَن سَبِيلِ ٱللَّهِ وَكُفْرٌۢ بِهِۦ وَٱلْمَسْجِدِ ٱلْحَرَامِ وَإِخْرَاجُ أَهْلِهِۦ مِنْهُ أَكْبَرُ عِندَ ٱللَّهِ ۚ وَٱلْفِتْنَةُ أَشَدُّ مِنَ ٱلْقَتْلِ ۗ وَلَا يَزَالُونَ يُقَٰتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ إِنِ ٱسْتَطَٰعُوا۟ ۚ وَمَن يَرْتَدِدْ مِنكُمْ عَن دِينِهِۦ فَيَمُتْ وَهُوَ كَافِرٌۭ فَأُو۟لَٰٓئِكَ حَبِطَتْ أَعْمَٰلُهُمْ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۖ وَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ",
    translation: "They ask you about the sacred month - about fighting therein. Say, 'Fighting therein is great [sin], but averting [people] from the way of Allah and disbelief in Him and [preventing access to] al-Masjid al-Haram and the expulsion of its people therefrom are greater [evil] in the sight of Allah. And fitnah is greater than killing.' And they will continue to fight you until they turn you back from your religion if they are able. And whoever of you reverts from his religion [to disbelief] and dies while he is a disbeliever - for those, their deeds have become worthless in this world and the Hereafter, and those are the companions of the Fire; they will abide therein eternally."
  },
  {
    number: 225,
    surah: 2,
    numberInSurah: 218,
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَاجَرُوا۟ وَجَٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ أُو۟لَٰٓئِكَ يَرْجُونَ رَحْمَتَ ٱللَّهِ ۚ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌ",
    translation: "Indeed, those who have believed and those who have emigrated and fought in the cause of Allah - those expect the mercy of Allah. And Allah is Forgiving and Merciful."
  },
  {
    number: 226,
    surah: 2,
    numberInSurah: 219,
    text: "يَسْـَٔلُونَكَ عَنِ ٱلْخَمْرِ وَٱلْمَيْسِرِ ۖ قُلْ فِيهِمَآ إِثْمٌۭ كَبِيرٌۭ وَمَنَٰفِعُ لِلنَّاسِ وَإِثْمُهُمَآ أَكْبَرُ مِن نَّفْعِهِمَا ۗ وَيَسْـَٔلُونَكَ مَاذَا يُنفِقُونَ ۖ قُلِ ٱلْعَفْوَ ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلْءَايَٰتِ لَعَلَّكُمْ تَتَفَكَّرُونَ",
    translation: "They ask you about wine and gambling. Say, 'In them is great sin and [yet, some] benefit for people. But their sin is greater than their benefit.' And they ask you what they should spend. Say, 'The excess [beyond needs].' Thus Allah makes clear to you the verses [of revelation] that you might give thought."
  },
  {
    number: 227,
    surah: 2,
    numberInSurah: 220,
    text: "فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۗ وَيَسْـَٔلُونَكَ عَنِ ٱلْيَتَٰمَىٰ ۖ قُلْ إِصْلَٰحٌۭ لَّهُمْ خَيْرٌۭ ۖ وَإِن تُخَالِطُوهُمْ فَإِخْوَٰنُكُمْ ۚ وَٱللَّهُ يَعْلَمُ ٱلْمُفْسِدَ مِنَ ٱلْمُصْلِحِ ۚ وَلَوْ شَآءَ ٱللَّهُ لَأَعْنَتَكُمْ ۚ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ",
    translation: "To this world and the Hereafter. And they ask you about orphans. Say, 'Improvement for them is best. And if you mix your affairs with theirs - they are your brothers. And Allah knows the corrupter from the amender. And if Allah had willed, He could have put you in difficulty. Indeed, Allah is Exalted in Might and Wise.'"
  },
  {
    number: 228,
    surah: 2,
    numberInSurah: 221,
    text: "وَلَا تَنكِحُوا۟ ٱلْمُشْرِكَٰتِ حَتَّىٰ يُؤْمِنَّ ۚ وَلَأَمَةٌۭ مُّؤْمِنَةٌ خَيْرٌۭ مِّن مُّشْرِكَةٍۢ وَلَوْ أَعْجَبَتْكُمْ ۗ وَلَا تُنكِحُوا۟ ٱلْمُشْرِكِينَ حَتَّىٰ يُؤْمِنُوا۟ ۚ وَلَعَبْدٌۭ مُّؤْمِنٌ خَيْرٌۭ مِّن مُّشْرِكٍۢ وَلَوْ أَعْجَبَكُمْ ۗ أُو۟لَٰٓئِكَ يَدْعُونَ إِلَى ٱلنَّارِ ۖ وَٱللَّهُ يَدْعُوٓا۟ إِلَى ٱلْجَنَّةِ وَٱلْمَغْفِرَةِ بِإِذْنِهِۦ ۖ وَيُبَيِّنُ ءَايَٰتِهِۦ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُونَ",
    translation: "And do not marry polytheistic women until they believe. And a believing slave woman is better than a polytheist, even though she might please you. And do not marry polytheistic men [to your women] until they believe. And a believing slave is better than a polytheist, even though he might please you. Those invite [you] to the Fire, but Allah invites to Paradise and to forgiveness, by His permission. And He makes clear His verses to the people that they may remember."
  },
  {
    number: 229,
    surah: 2,
    numberInSurah: 222,
    text: "وَيَسْـَٔلُونَكَ عَنِ ٱلْمَحِيضِ ۖ قُلْ هُوَ أَذًۭى فَٱعْتَزِلُوا۟ ٱلنِّسَآءَ فِى ٱلْمَحِيضِ وَلَا تَقْرَبُوهُنَّ حَتَّىٰ يَطْهُرْنَ ۖ فَإِذَا تَطَهَّرْنَ فَأْتُوهُنَّ مِنْ حَيْثُ أَمَرَكُمُ ٱللَّهُ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّٰبِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ",
    translation: "And they ask you about menstruation. Say, 'It is harm, so keep away from wives during menstruation. And do not approach them until they are pure. And when they have purified themselves, then come to them from where Allah has ordained for you. Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.'"
  },  
  {
    number: 230,
    surah: 2,
    numberInSurah: 223,
    text: "نِسَآؤُكُمْ حَرْثٌۭ لَّكُمْ فَأْتُوا۟ حَرْثَكُمْ أَنَّىٰ شِئْتُمْ ۖ وَقَدِّمُوا۟ لِأَنفُسِكُمْ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّكُم مُّلَٰقُوهُ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ",
    translation: "Your wives are a place of sowing of seed for you, so come to your place of cultivation however you wish and put forth [righteousness] for yourselves. And fear Allah and know that you will meet Him. And give good tidings to the believers."
  },
  {
    number: 231,
    surah: 2,
    numberInSurah: 224,
    text: "وَلَا تَجْعَلُوا۟ ٱللَّهَ عُرْضَةًۭ لِّأَيْمَٰنِكُمْ أَن تَبَرُّوا۟ وَتَتَّقُوا۟ وَتُصْلِحُوا۟ بَيْنَ ٱلنَّاسِ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
    translation: "And do not make [your oath by] Allah an excuse against being righteous and fearing Allah and making peace among people. And Allah is Hearing and Knowing."
  },
  {
    number: 232,
    surah: 2,
    numberInSurah: 225,
    text: "لَّا يُؤَاخِذُكُمُ ٱللَّهُ بِٱللَّغْوِ فِىٓ أَيْمَٰنِكُمْ وَلَٰكِن يُؤَاخِذُكُم بِمَا كَسَبَتْ قُلُوبُكُمْ ۗ وَٱللَّهُ غَفُورٌ حَلِيمٌ",
    translation: "Allah does not impose blame upon you for what is unintentional in your oaths, but He imposes blame upon you for what your hearts have earned. And Allah is Forgiving and Forbearing."
  },
  {
    number: 233,
    surah: 2,
    numberInSurah: 226,
    text: "لِلَّذِينَ يُؤْلُونَ مِن نِّسَآئِهِمْ تَرَبُّصُ أَرْبَعَةِ أَشْهُرٍۢ ۖ فَإِن فَآءُو فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: "For those who swear not to have sexual relations with their wives is a waiting time of four months. But if they return [to normal relations] - then indeed, Allah is Forgiving and Merciful."
  },
  {
    number: 234,
    surah: 2,
    numberInSurah: 227,
    text: "وَإِنْ عَزَمُوا۟ ٱلطَّلَٰقَ فَإِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌ",
    translation: "And if they decide on divorce - then indeed, Allah is Hearing and Knowing."
  },
  {
    number: 235,
    surah: 2,
    numberInSurah: 228,
    text: "وَٱلْمُطَلَّقَٰتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَٰثَةَ قُرُوٓءٍۢ ۚ وَلَا يَحِلُّ لَهُنَّ أَن يَكْتُمْنَ مَا خَلَقَ ٱللَّهُ فِىٓ أَرْحَامِهِنَّ إِن كُنَّ يُؤْمِنَّ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۚ وَبُعُولَتُهُنَّ أَحَقُّ بِرَدِّهِنَّ فِى ذَٰلِكَ إِنْ أَرَادُوٓا۟ إِصْلَٰحًۭا ۚ وَلَهُنَّ مِثْلُ ٱلَّذِى عَلَيْهِنَّ بِٱلْمَعْرُوفِ ۚ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌۭ ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌۭ",
    translation: "Divorced women remain in waiting for three periods, and it is not lawful for them to conceal what Allah has created in their wombs if they believe in Allah and the Last Day. And their husbands have more right to take them back in this [period] if they want reconciliation. And due to them [the wives] is similar to what is expected of them, according to what is reasonable. But the men have a degree over them [in responsibility and authority]. And Allah is Exalted in Might and Wise."
  },
  {
    number: 236,
    surah: 2,
    numberInSurah: 229,
    text: "ٱلطَّلَٰقُ مَرَّتَانِۖ فَإِمْسَاكٌۢ بِمَعْرُوفٍ أَوْ تَسْرِيحٌۢ بِإِحْسَٰنٍۢ ۗ وَلَا يَحِلُّ لَكُمْ أَن تَأْخُذُوا۟ مِمَّآ ءَاتَيْتُمُوهُنَّ شَيْـًۭا إِلَّآ أَن يَخَافَآ أَلَّا يُقِيمَا حُدُودَ ٱللَّهِ ۖ فَإِنْ خِفْتُمْ أَلَّا يُقِيمَا حُدُودَ ٱللَّهِ فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا ٱفْتَدَتْ بِهِۦ ۗ تِلْكَ حُدُودُ ٱللَّهِ فَلَا تَعْتَدُوهَا ۚ وَمَن يَتَعَدَّ حُدُودَ ٱللَّهِ فَأُو۟لَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ",
    translation: "Divorce is twice. Then, either keep [her] in an acceptable manner or release [her] with good treatment. And it is not lawful for you to take anything of what you have given them unless both fear that they will not be able to keep [within] the limits of Allah. But if you fear that they will not keep [within] the limits of Allah, then there is no blame upon either of them concerning that by which she ransoms herself. These are the limits of Allah, so do not transgress them. And whoever transgresses the limits of Allah - it is those who are the wrongdoers."
  },
  {
    number: 237,
    surah: 2,
    numberInSurah: 230,
    text: "فَإِن طَلَّقَهَا فَلَا تَحِلُّ لَهُۥ مِنۢ بَعْدُ حَتَّىٰ تَنكِحَ زَوْجًا غَيْرَهُۥ ۗ فَإِن طَلَّقَهَا فَلَا جُنَاحَ عَلَيْهِمَآ أَن يَتَرَاجَعَآ إِن ظَنَّآ أَن يُقِيمَا حُدُودَ ٱللَّهِ ۗ وَتِلْكَ حُدُودُ ٱللَّهِ يُبَيِّنُهَا لِقَوْمٍۢ يَعْلَمُونَ",
    translation: "And if he has divorced her [for the third time], then she is not lawful to him afterward until [after] she marries a husband other than him. And if the latter husband divorces her [or dies], there is no blame upon the two of them if they return to each other if they think that they can keep [within] the limits of Allah. These are the limits of Allah, which He makes clear to a people who know."
  },
  {
    number: 238,
    surah: 2,
    numberInSurah: 231,
    text: "وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ فَبَلَغْنَ أَجَلَهُنَّ فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ أَوْ سَرِّحُوهُنَّ بِمَعْرُوفٍۭ ۚ وَلَا تُمسِكُوهُنَّ ضِرَارًۢا لِّتَعْتَدُوا۟ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَقَدْ ظَلَمَ نَفْسَهُۥ ۚ وَلَا تَتَّخِذُوٓا۟ ءَايَٰتِ ٱللَّهِ هُزُوًۭا ۚ وَٱذْكُرُوا۟ نِعْمَتَ ٱللَّهِ عَلَيْكُمْ وَمَآ أَنزَلَ عَلَيْكُم مِّنَ ٱلْكِتَٰبِ وَٱلْحِكْمَةِ يَعِظُكُم بِهِۦ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِكُلِّ شَىْءٍۢ عَلِيمٌۭ",
    translation: "And when you divorce women and they have fulfilled their term, either retain them according to acceptable terms or release them according to acceptable terms. And do not keep them, intending harm, to transgress [against them]. And whoever does that has certainly wronged himself. And do not take the verses of Allah in jest. And remember the favor of Allah upon you and what has been revealed to you of the Book and wisdom by which He instructs you. And fear Allah and know that Allah is Knowing of all things."
  },  
  {
    number: 239,
    surah: 2,
    numberInSurah: 232,
    text: "وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ فَبَلَغْنَ أَجَلَهُنَّ فَلَا تَعْضُلُوهُنَّ أَن يَنكِحْنَ أَزْوَٰجَهُنَّ إِذَا تَرَاضَوْا۟ بَيْنَهُم بِٱلْمَعْرُوفِ ۗ ذَٰلِكَ يُوعَظُ بِهِۦ مَن كَانَ مِنكُمْ يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۗ ذَٰلِكُمْ أَزْكَىٰ لَكُمْ وَأَطْهَرُ ۗ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
    translation: "And when you divorce women and they have fulfilled their term, do not prevent them from remarrying their [former] husbands if they agree among themselves on an acceptable basis. That is instructed to whoever of you believes in Allah and the Last Day. That is better for you and purer, and Allah knows and you know not."
  },
  {
    number: 240,
    surah: 2,
    numberInSurah: 233,
    text: "وَٱلْوَٰلِدَٰتُ يُرْضِعْنَ أَوْلَٰدَهُنَّ حَوْلَيْنِ كَامِلَيْنِ ۖ لِمَنْ أَرَادَ أَن يُتِمَّ ٱلرَّضَاعَةَ ۚ وَعَلَى ٱلْمَوْلُودِ لَهُۥ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِٱلْمَعْرُوفِ ۚ لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا ۚ لَا تُضَآرَّ وَٰلِدَةٌۭ بِوَلَدِهَا وَلَا مَوْلُودٌۭ لَّهُۥ بِوَلَدِهِۦ ۚ وَعَلَى ٱلْوَارِثِ مِثْلُ ذَٰلِكَ ۗ فَإِنْ أَرَادَا فِصَالًۭا عَن تَرَاضٍۢ مِّنْهُمَا وَتَشَاوُرٍۢ فَلَا جُنَاحَ عَلَيْهِمَا ۗ وَإِنْ أَرَدتُّمْ أَن تَسْتَرْضِعُوٓا۟ أَوْلَٰدَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ إِذَا سَلَّمْتُم مَّآ ءَاتَيْتُم بِٱلْمَعْرُوفِ ۗ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
    translation: "Mothers may nurse their children two complete years for whoever wishes to complete the nursing [period]. Upon the father is their provision and their clothing according to what is acceptable. No person is charged with more than his capacity. No mother should be harmed through her child, and no father through his child. And upon the [father's] heir is [a duty] like that. And if they both desire weaning through mutual consent from both of them and consultation, there is no blame upon either of them. And if you wish to have your children nursed by a substitute, there is no blame upon you as long as you give payment according to what is acceptable. And fear Allah and know that Allah is Seeing of what you do."
  },
  {
    number: 241,
    surah: 2,
    numberInSurah: 234,
    text: "وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَٰجًۭا يَتَرَبَّصْنَ بِأَنفُسِهِنَّ أَرْبَعَةَ أَشْهُرٍۢ وَعَشْرًۭا ۖ فَإِذَا بَلَغْنَ أَجَلَهُنَّ فَلَا جُنَاحَ عَلَيْكُمْ فِيمَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ بِٱلْمَعْرُوفِ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌۭ",
    translation: "And those who are taken in death among you and leave wives behind - they, [the wives,] shall wait four months and ten [days]. And when they have fulfilled their term, then there is no blame upon you for what they do with themselves in an acceptable manner. And Allah is [fully] Acquainted with what you do."
  },
  {
    number: 242,
    surah: 2,
    numberInSurah: 235,
    text: "وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا عَرَّضْتُم بِهِۦ مِنْ خِطْبَةِ ٱلنِّسَآءِ أَوْ أَكْنَنتُمْ فِىٓ أَنفُسِكُمْ ۚ عَلِمَ ٱللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ وَلَٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّۭا إِلَّآ أَن تَقُولُوا۟ قَوْلًۭا مَّعْرُوفًۭا ۚ وَلَا تَعْزِمُوا۟ عُقْدَةَ ٱلنِّكَاحِ حَتَّىٰ يَبْلُغَ ٱلْكِتَٰبُ أَجَلَهُۥ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ يَعْلَمُ مَا فِىٓ أَنفُسِكُمْ فَٱحْذَرُوهُ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٌۭ",
    translation: "There is no blame upon you for that to which you [indirectly] allude concerning a proposal to women or for what you conceal within yourselves. Allah knows that you will have them in mind. But do not promise them secretly except for saying a proper saying. And do not determine to undertake a marriage contract until the decreed period reaches its end. And know that Allah knows what is within yourselves, so beware of Him. And know that Allah is Forgiving and Forbearing."
  },
  {
    number: 243,
    surah: 2,
    numberInSurah: 236,
    text: "لَّا جُنَاحَ عَلَيْكُمْ إِن طَلَّقْتُمُ ٱلنِّسَآءَ مَا لَمْ تَمَسُّوهُنَّ أَوْ تَفْرِضُوا۟ لَهُنَّ فَرِيضَةًۭ ۚ وَمَتِّعُوهُنَّ عَلَى ٱلْمُوسِعِ قَدَرُهُۥ وَعَلَى ٱلْمُقْتِرِ قَدَرُهُۥ مَتَٰعًۭا بِٱلْمَعْرُوفِ ۖ حَقًّۭا عَلَى ٱلْمُحْسِنِينَ",
    translation: "There is no blame upon you if you divorce women you have not touched nor specified for them an obligation. But give them a gift of compensation - the wealthy according to his capability and the poor according to his capability - a provision according to what is acceptable, a duty upon the doers of good."
  },
  {
    number: 244,
    surah: 2,
    numberInSurah: 237,
    text: "وَإِن طَلَّقْتُمُوهُنَّ مِن قَبْلِ أَن تَمَسُّوهُنَّ وَقَدْ فَرَضْتُمْ لَهُنَّ فَرِيضَةًۭ فَنِصْفُ مَا فَرَضْتُمْ إِلَّآ أَن يَعْفُونَ أَوْ يَعْفُوَا۟ ٱلَّذِى بِيَدِهِۦ عُقْدَةُ ٱلنِّكَاحِ ۚ وَأَن تَعْفُوٓا۟ أَقْرَبُ لِلتَّقْوَىٰ ۚ وَلَا تَنسَوُا۟ ٱلْفَضْلَ بَيْنَكُمْ ۗ إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
    translation: "And if you divorce them before you have touched them and you have already specified for them an obligation, then [give them] half of what you specified - unless they forego the right or the one in whose hand is the marriage contract foregoes it. And to forego it is nearer to righteousness. And do not forget graciousness between you. Indeed Allah, of whatever you do, is Seeing."
  },
  {
    number: 245,
    surah: 2,
    numberInSurah: 238,
    text: "حَٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَٰنِتِينَ",
    translation: "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient."
  },
  {
    number: 246,
    surah: 2,
    numberInSurah: 239,
    text: "فَإِنْ خِفْتُمْ فَرِجَالًا أَوْ رُكْبَانًۭا ۖ فَإِذَآ أَمِنتُمْ فَٱذْكُرُوا۟ ٱللَّهَ كَمَا عَلَّمَكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ",
    translation: "And if you fear [an enemy, then pray] on foot or riding. But when you are secure, then remember Allah, as He has taught you that which you did not [previously] know."
  },
  {
    number: 247,
    surah: 2,
    numberInSurah: 240,
    text: "وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَٰجًۭا وَصِيَّةًۭ لِأَزْوَٰجِهِم مَّتَٰعًا إِلَى ٱلْحَوْلِ غَيْرَ إِخْرَاجٍۢ ۚ فَإِنْ خَرَجْنَ فَلَا جُنَاحَ عَلَيْكُمْ فِيمَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ مِن مَّعْرُوفٍۢ ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌۭ",
    translation: "And those who are taken in death among you and leave wives behind - for their wives is a bequest: maintenance for one year without turning [them] out. But if they leave [of their own accord], then there is no blame upon you for what they do with themselves in an acceptable way. And Allah is Exalted in Might and Wise."
  },
  {
    number: 248,
    surah: 2,
    numberInSurah: 241,
    text: "وَلِلْمُطَلَّقَٰتِ مَتَٰعٌۭ بِٱلْمَعْرُوفِ ۖ حَقًّۭا عَلَى ٱلْمُتَّقِينَ",
    translation: "And for divorced women is a provision according to what is acceptable - a duty upon the righteous."
  },
  {
    number: 249,
    surah: 2,
    numberInSurah: 242,
    text: "كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمْ ءَايَٰتِهِۦ لَعَلَّكُمْ تَعْقِلُونَ",
    translation: "Thus does Allah make clear to you His verses that you might use reason."
  },
  {
    number: 250,
    surah: 2,
    numberInSurah: 243,
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ خَرَجُوا۟ مِن دِيَٰرِهِمْ وَهُمْ أُلُوفٌ حَذَرَ ٱلْمَوْتِ فَقَالَ لَهُمُ ٱللَّهُ مُوتُوا۟ ثُمَّ أَحْيَٰهُمْ ۚ إِنَّ ٱللَّهَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَشْكُرُونَ",
    translation: "Have you not considered those who left their homes in many thousands, fearing death? Allah said to them, 'Die'; then He restored them to life. And Allah is full of bounty to the people, but most of the people do not show gratitude."
  },
  {
    number: 251,
    surah: 2,
    numberInSurah: 244,
    text: "وَقَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ",
    translation: "And fight in the cause of Allah and know that Allah is Hearing and Knowing."
  },
  {
    number: 252,
    surah: 2,
    numberInSurah: 245,
    text: "مَّن ذَا ٱلَّذِى يُقْرِضُ ٱللَّهَ قَرْضًا حَسَنًۭا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضْعَٰفًۭا كَثِيرَةًۭ ۚ وَٱللَّهُ يَقْبِضُ وَيَبْسُطُ ۖ وَإِلَيْهِ تُرْجَعُونَ",
    translation: "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who withholds and grants abundance, and to Him you will be returned."
  },
  {
    number: 253,
    surah: 2,
    numberInSurah: 246,
    text: "أَلَمْ تَرَ إِلَى ٱلْمَلَإِ مِنۢ بَنِىٓ إِسْرَٰٓءِيلَ مِنۢ بَعْدِ مُوسَىٰٓ إِذْ قَالُوا۟ لِنَبِىٍّۢ لَّهُمُ ٱبْعَثْ لَنَا مَلِكًۭا نُقَٰتِلْ فِى سَبِيلِ ٱللَّهِ ۖ قَالَ هَلْ عَسَيْتُمْ إِن كُتِبَ عَلَيْكُمُ ٱلْقِتَالُ أَلَّا تُقَٰتِلُوا۟ ۖ قَالُوا۟ وَمَا لَنَآ أَلَّا نُقَٰتِلَ فِى سَبِيلِ ٱللَّهِ وَقَدْ أُخْرِجْنَا مِن دِيَٰرِنَا وَأَبْنَآئِنَا ۖ فَلَمَّا كُتِبَ عَلَيْهِمُ ٱلْقِتَالُ تَوَلَّوْا۟ إِلَّا قَلِيلًۭا مِّنْهُمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلظَّٰلِمِينَ",
    translation: "Have you not considered the assembly of the Children of Israel after Moses when they said to a prophet of theirs, 'Send to us a king, and we will fight in the way of Allah'? He said, 'Would you perhaps refrain from fighting if fighting was prescribed for you?' They said, 'And why should we not fight in the cause of Allah when we have been driven out from our homes and from our children?' But when fighting was prescribed for them, they turned away, except for a few of them. And Allah is Knowing of the wrongdoers."
  },
  {
    number: 254,
    surah: 2,
    numberInSurah: 247,
    text: "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ٱللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ مَلِكًۭا ۚ قَالُوٓا۟ أَنَّىٰ يَكُونُ لَهُ ٱلْمُلْكُ عَلَيْنَا وَنَحْنُ أَحَقُّ بِٱلْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةًۭ مِّنَ ٱلْمَالِ ۚ قَالَ إِنَّ ٱللَّهَ ٱصْطَفَىٰهُ عَلَيْكُمْ وَزَادَهُۥ بَسْطَةًۭ فِى ٱلْعِلْمِ وَٱلْجِسْمِ ۖ وَٱللَّهُ يُؤْتِى مُلْكَهُۥ مَن يَشَآءُ ۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ",
    translation: "And their prophet said to them, 'Indeed, Allah has sent to you Saul as a king.' They said, 'How can he have kingship over us while we are more worthy of kingship than him and he has not been given any measure of wealth?' He said, 'Indeed, Allah has chosen him over you and has increased him abundantly in knowledge and stature. And Allah gives His sovereignty to whom He wills. And Allah is all-Encompassing and Knowing.'"
  },
  {
    number: 255,
    surah: 2,
    numberInSurah: 248,
    text: "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ءَايَةَ مُلْكِهِۦٓ أَن يَأْتِيَكُمُ ٱلتَّابُوتُ فِيهِ سَكِينَةٌۭ مِّن رَّبِّكُمْ وَبَقِيَّةٌۭ مِّمَّا تَرَكَ ءَالُ مُوسَىٰ وَءَالُ هَٰرُونَ تَحْمِلُهُ ٱلْمَلَـٰٓئِكَةُ ۚ إِنَّ فِى ذَٰلِكَ لَءَايَةًۭ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ",
    translation: "And their prophet said to them, 'Indeed, a sign of his kingship is that the chest will come to you in which is assurance from your Lord and a remnant of what the family of Moses and the family of Aaron had left, carried by the angels. Indeed, in that is a sign for you, if you are believers.'"
  },
  {
    number: 256,
    surah: 2,
    numberInSurah: 249,
    text: "فَلَمَّا فَصَلَ طَالُوتُ بِٱلْجُنُودِ قَالَ إِنَّ ٱللَّهَ مُبْتَلِيكُم بِنَهَرٍۢ ۖ فَمَنْ شَرِبَ مِنْهُ فَلَيْسَ مِنِّى وَمَن لَّمْ يَطْعَمْهُ فَإِنَّهُۥ مِنِّىٓ إِلَّا مَنِ ٱغْتَرَفَ غُرْفَةًۭ بِيَدِهِۦ ۚ فَشَرِبُوا۟ مِنْهُ إِلَّا قَلِيلًۭا مِّنْهُمْ ۚ فَلَمَّا جَاوَزَهُۥ هُوَ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ قَالُوا۟ لَا طَاقَةَ لَنَا ٱلْيَوْمَ بِجَالُوتَ وَجُنُودِهِۦ ۚ قَالَ ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَـٰقُوا۟ ٱللَّهِ كَم مِّن فِئَةٍۢ قَلِيلَةٍ غَلَبَتْ فِئَةًۭ كَثِيرَةًۢ بِإِذْنِ ٱللَّهِ ۗ وَٱللَّهُ مَعَ ٱلصَّٰبِرِينَ",
    translation: "And when Saul went forth with the soldiers, he said, 'Indeed, Allah will be testing you with a river. So whoever drinks from it is not of me, and whoever does not taste it is indeed of me, excepting one who takes [from it] in the hollow of his hand.' But they drank from it, except a [very] few of them. Then when he had crossed it along with those who believed with him, they said, 'There is no power for us today against Goliath and his soldiers.' But those who were certain that they would meet Allah said, 'How many a small company has overcome a large company by permission of Allah. And Allah is with the patient.'"
  },
  {
    number: 257,
    surah: 2,
    numberInSurah: 250,
    text: "وَلَمَّا بَرَزُوا۟ لِجَالُوتَ وَجُنُودِهِۦ قَالُوا۟ رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
    translation: "And when they went forth to [face] Goliath and his soldiers, they said, 'Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.'"
  },
  {
    number: 258,
    surah: 2,
    numberInSurah: 251,
    text: "فَهَزَمُوهُم بِإِذْنِ ٱللَّهِ وَقَتَلَ دَاوُۥدُ جَالُوتَ وَءَاتَىٰهُ ٱللَّهُ ٱلْمُلْكَ وَٱلْحِكْمَةَ وَعَلَّمَهُۥ مِمَّا يَشَآءُ ۗ وَلَوْلَا دَفْعُ ٱللَّهِ ٱلنَّاسَ بَعْضَهُم بِبَعْضٍۢ لَّفَسَدَتِ ٱلْأَرْضُ وَلَٰكِنَّ ٱللَّهَ ذُو فَضْلٍ عَلَى ٱلْعَٰلَمِينَ",
    translation: "So they defeated them by permission of Allah, and David killed Goliath, and Allah gave him the kingship and wisdom and taught him of that which He willed. And if it were not for Allah checking [some] people by means of others, the earth would have been corrupted, but Allah is full of bounty to the worlds."
  },
  {
    number: 259,
    surah: 2,
    numberInSurah: 252,
    text: "تِلْكَ ءَايَٰتُ ٱللَّهِ نَتْلُوهَا عَلَيْكَ بِٱلْحَقِّ ۚ وَإِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ",
    translation: "These are the verses of Allah which We recite to you, [O Muhammad], in truth. And indeed, you are from among the messengers."
  },
  {
    number: 260,
    surah: 2,
    numberInSurah: 253,
    text: "تِلْكَ ٱلرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍۢ ۘ مِّنْهُم مَّن كَلَّمَ ٱللَّهُ وَرَفَعَ بَعْضَهُمْ دَرَجَٰتٍۢ ۖ وَءَاتَيْنَا عِيسَى ٱبْنَ مَرْيَمَ ٱلْبَيِّنَٰتِ وَأَيَّدْنَٰهُ بِرُوحِ ٱلْقُدُسِ ۗ وَلَوْ شَآءَ ٱللَّهُ مَا ٱقْتَتَلَ ٱلَّذِينَ مِنۢ بَعْدِهِم مِّنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ وَلَٰكِنِ ٱخْتَلَفُوا۟ فَمِنْهُم مَّنْ ءَامَنَ وَمِنْهُم مَّن كَفَرَ ۚ وَلَوْ شَآءَ ٱللَّهُ مَا ٱقْتَتَلُوا۟ وَلَٰكِنَّ ٱللَّهَ يَفْعَلُ مَا يُرِيدُ",
    translation: "Those messengers - some of them We caused to exceed others. Among them were those to whom Allah spoke, and He raised some of them in degree. And We gave Jesus, the Son of Mary, clear proofs, and We supported him with the Pure Spirit. If Allah had willed, those [generations] succeeding them would not have fought each other after the clear proofs had come to them. But they differed, and some of them believed, and some of them disbelieved. And if Allah had willed, they would not have fought each other, but Allah does what He intends."
  },
  {
    number: 261,
    surah: 2,
    numberInSurah: 254,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَنفِقُوا۟ مِمَّا رَزَقْنَٰكُم مِّن قَبْلِ أَن يَأْتِىَ يَوْمٌۭ لَّا بَيْعٌۭ فِيهِ وَلَا خُلَّةٌۭ وَلَا شَفَٰعَةٌۭ ۗ وَٱلْكَٰفِرُونَ هُمُ ٱلظَّٰلِمُونَ",
    translation: "O you who have believed, spend from that which We have provided for you before there comes a Day in which there is no exchange and no friendship and no intercession. And the disbelievers - they are the wrongdoers."
  },
  {
    number: 262,
    surah: 2,
    numberInSurah: 255,
    text: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."
  },
  {
    number: 263,
    surah: 2,
    numberInSurah: 256,
    text: "لَآ إِكْرَاهَ فِى ٱلدِّينِ ۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ ٱلْغَىِّ ۚ فَمَن يَكْفُرْ بِٱلطَّٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ لَهَا ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
    translation: "There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing."
  },
  {
    number: 264,
    surah: 2,
    numberInSurah: 257,
    text: "ٱللَّهُ وَلِىُّ ٱلَّذِينَ ءَامَنُوا۟ يُخْرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ ۖ وَٱلَّذِينَ كَفَرُوٓا۟ أَوْلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخْرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِ ۗ أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ",
    translation: "Allah is the ally of those who believe. He brings them out from darknesses into the light. And those who disbelieve - their allies are Taghut. They take them out of the light into darknesses. Those are the companions of the Fire; they will abide eternally therein."
  },
  {
    number: 265,
    surah: 2,
    numberInSurah: 258,
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِى حَآجَّ إِبْرَٰهِيمَ فِى رَبِّهِۦٓ أَنْ ءَاتَىٰهُ ٱللَّهُ ٱلْمُلْكَ إِذْ قَالَ إِبْرَٰهِيمُ رَبِّىَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ ۖ قَالَ أَنَا۠ أُحْىِۦ وَأُمِيتُ ۖ قَالَ إِبْرَٰهِيمُ فَإِنَّ ٱللَّهَ يَأْتِى بِٱلشَّمْسِ مِنَ ٱلْمَشْرِقِ فَأْتِ بِهَا مِنَ ٱلْمَغْرِبِ فَبُهِتَ ٱلَّذِى كَفَرَ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّٰلِمِينَ",
    translation: "Have you not considered the one who argued with Abraham about his Lord [merely] because Allah had given him kingship? When Abraham said, 'My Lord is the one who gives life and causes death,' he said, 'I give life and cause death.' Abraham said, 'Indeed, Allah brings up the sun from the east, so bring it up from the west.' So the disbeliever was overwhelmed [by astonishment], and Allah does not guide the wrongdoing people."
  },
  {
    number: 266,
    surah: 2,
    numberInSurah: 259,
    text: "أَوْ كَٱلَّذِى مَرَّ عَلَىٰ قَرْيَةٍۢ وَهِىَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا قَالَ أَنَّىٰ يُحْىِۦ هَٰذِهِ ٱللَّهُ بَعْدَ مَوْتِهَا ۖ فَأَمَاتَهُ ٱللَّهُ مِا۟ئَةَ عَامٍۢ ثُمَّ بَعَثَهُۥ ۖ قَالَ كَمْ لَبِثْتَ ۖ قَالَ لَبِثْتُ يَوْمًا أَوْ بَعْضَ يَوْمٍۢ ۖ قَالَ بَل لَّبِثْتَ مِا۟ئَةَ عَامٍۢ فَٱنظُرْ إِلَىٰ طَعَامِكَ وَشَرَابِكَ لَمْ يَتَسَنَّهْ ۖ وَٱنظُرْ إِلَىٰ حِمَارِكَ وَلِنَجْعَلَكَ ءَايَةًۭ لِّلنَّاسِ ۖ وَٱنظُرْ إِلَى ٱلْعِظَٰمِ كَيْفَ نُنشِزُهَا ثُمَّ نَكْسُوهَا لَحْمًۭا ۚ فَلَمَّا تَبَيَّنَ لَهُۥ قَالَ أَعْلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
    translation: "Or [consider such an example] as the one who passed by a township which had fallen into ruin. He said, 'How will Allah bring this to life after its death?' So Allah caused him to die for a hundred years; then He revived him. He said, 'How long have you remained?' The man said, 'I have remained a day or part of a day.' He said, 'Rather, you have remained one hundred years. Look at your food and your drink; it has not changed with time. And look at your donkey; and We will make you a sign for the people. And look at the bones [of this donkey] - how We raise them and then We cover them with flesh.' And when it became clear to him, he said, 'I know that Allah is over all things competent.'"
  },
  {
    number: 267,
    surah: 2,
    numberInSurah: 260,
    text: "وَإِذْ قَالَ إِبْرَٰهِيمُ رَبِّ أَرِنِى كَيْفَ تُحْىِ ٱلْمَوْتَىٰ ۖ قَالَ أَوَلَمْ تُؤْمِن ۖ قَالَ بَلَىٰ وَلَٰكِن لِّيَطْمَئِنَّ قَلْبِى ۖ قَالَ فَخُذْ أَرْبَعَةًۭ مِّنَ ٱلطَّيْرِ فَصُرْهُنَّ إِلَيْكَ ثُمَّ ٱجْعَلْ عَلَىٰ كُلِّ جَبَلٍۢ مِّنْهُنَّ جُزْءًاۭ ثُمَّ ٱدْعُهُنَّ يَأْتِينَكَ سَعْيًۭا ۚ وَٱعْلَمْ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ",
    translation: "And [mention] when Abraham said, 'My Lord, show me how You give life to the dead.' [Allah] said, 'Have you not believed?' He said, 'Yes, but [I ask] only that my heart may be satisfied.' [Allah] said, 'Take four birds and commit them to yourself. Then [after slaughtering them] put on each hill a portion of them; then call them - they will come [flying] to you in haste. And know that Allah is Exalted in Might and Wise.'"
  },
  {
    number: 268,
    surah: 2,
    numberInSurah: 261,
    text: "مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِى كُلِّ سُنبُلَةٍۢ مِّا۟ئَةُ حَبَّةٍۢ ۗ وَٱللَّهُ يُضَٰعِفُ لِمَن يَشَآءُ ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ",
    translation: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] that sprouts seven ears; in every ear is a hundred grains. And Allah multiplies [His reward] for whom He wills. And Allah is all-Encompassing and Knowing."
  },
  {
    number: 269,
    surah: 2,
    numberInSurah: 262,
    text: "ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ ثُمَّ لَا يُتْبِعُونَ مَآ أَنفَقُوا۟ مَنًّۭا وَلَآ أَذًۭى ۙ لَّهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۖ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Those who spend their wealth in the way of Allah and do not follow up what they have spent with reminders [of it] or [other] injury will have their reward with their Lord, and there will be no fear concerning them, nor will they grieve."
  },
  {
    number: 270,
    surah: 2,
    numberInSurah: 263,
    text: "قَوْلٌۭ مَّعْرُوفٌۭ وَمَغْفِرَةٌ خَيْرٌۭ مِّن صَدَقَةٍۢ يَتْبَعُهَآ أَذًۭى ۗ وَٱللَّهُ غَنِىٌّ حَلِيمٌۭ",
    translation: "Kind speech and forgiveness are better than charity followed by injury. And Allah is Free of need and Forbearing."
  },
  {
    number: 271,
    surah: 2,
    numberInSurah: 264,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُبْطِلُوا۟ صَدَقَٰتِكُم بِٱلْمَنِّ وَٱلْأَذَىٰ كَٱلَّذِى يُنفِقُ مَالَهُۥ رِئَآءَ ٱلنَّاسِ وَلَا يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۖ فَمَثَلُهُۥ كَمَثَلِ صَفْوَانٍ عَلَيْهِۦ تُرَابٌۭ فَأَصَابَهُۥ وَابِلٌۭ فَتَرَكَهُۥ صَلْدًۭا ۖ لَّا يَقْدِرُونَ عَلَىٰ شَىْءٍۢ مِّمَّا كَسَبُوا۟ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلْكَٰفِرِينَ",
    translation: "O you who have believed, do not invalidate your charities with reminders or injury as does one who spends his wealth [only] to be seen by the people and does not believe in Allah and the Last Day. His example is like that of a [large] smooth stone upon which is dust and is hit by a downpour that leaves it bare. They are unable [to keep] anything of what they have earned. And Allah does not guide the disbelieving people."
  },
  {
    number: 272,
    surah: 2,
    numberInSurah: 265,
    text: "وَمَثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمُ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ وَتَثْبِيتًۭا مِّنْ أَنفُسِهِمْ كَمَثَلِ جَنَّةٍۢ بِرَبْوَةٍ أَصَابَهَا وَابِلٌۭ فَءَاتَتْ أُكُلَهَا ضِعْفَيْنِ ۚ فَإِن لَّمْ يُصِبْهَا وَابِلٌۭ فَطَلٌۭ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    translation: "And the example of those who spend their wealth seeking means to the approval of Allah and assuring [reward for] themselves is like a garden on high ground which is hit by a downpour - so it yields its fruit in double. And [even] if it is not hit by a downpour, then a drizzle [is sufficient]. And Allah, of what you do, is Seeing."
  },
  {
    number: 273,
    surah: 2,
    numberInSurah: 266,
    text: "أَيَوَدُّ أَحَدُكُمْ أَن تَكُونَ لَهُۥ جَنَّةٌۭ مِّن نَّخِيلٍۢ وَأَعْنَابٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ لَهُۥ فِيهَا مِن كُلِّ ٱلثَّمَرَٰتِ وَأَصَابَهُ ٱلْكِبَرُ وَلَهُۥ ذُرِّيَّةٌۭ ضُعَفَآءُ فَأَصَابَهَآ إِعْصَارٌۭ فِيهِ نَارٌۭ فَٱحْتَرَقَتْ ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلْءَايَٰتِ لَعَلَّكُمْ تَتَفَكَّرُونَ",
    translation: "Would any of you wish to have a garden with palm trees and grapevines under which rivers flow in which he has from every fruit? But he is afflicted with old age and has weak offspring, and it is hit by a whirlwind containing fire and is burned. Thus does Allah make clear to you [His] verses that you might give thought."
  },
  {
    number: 274,
    surah: 2,
    numberInSurah: 267,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَنفِقُوا۟ مِن طَيِّبَٰتِ مَا كَسَبْتُمْ وَمِمَّآ أَخْرَجْنَا لَكُم مِّنَ ٱلْأَرْضِ ۖ وَلَا تَيَمَّمُوا۟ ٱلْخَبِيثَ مِنْهُ تُنفِقُونَ وَلَسْتُم بِـَٔاخِذِيهِ إِلَّآ أَن تُغْمِضُوا۟ فِيهِ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌۭ",
    translation: "O you who have believed, spend from the good things which you have earned and from that which We have produced for you from the earth. And do not aim toward the defective therefrom, spending [from that] while you would not take it [yourself] except with closed eyes. And know that Allah is Free of need and Praiseworthy."
  },
  {
    number: 275,
    surah: 2,
    numberInSurah: 268,
    text: "ٱلشَّيْطَٰنُ يَعِدُكُمُ ٱلْفَقْرَ وَيَأْمُرُكُم بِٱلْفَحْشَآءِ ۖ وَٱللَّهُ يَعِدُكُم مَّغْفِرَةًۭ مِّنْهُ وَفَضْلًۭا ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ",
    translation: "Satan threatens you with poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty. And Allah is all-Encompassing and Knowing."
  },
  {
    number: 276,
    surah: 2,
    numberInSurah: 269,
    text: "يُؤْتِى ٱلْحِكْمَةَ مَن يَشَآءُ ۚ وَمَن يُؤْتَ ٱلْحِكْمَةَ فَقَدْ أُوتِىَ خَيْرًا كَثِيرًۭا ۗ وَمَا يَذَّكَّرُ إِلَّآ أُو۟لُو ٱلْأَلْبَٰبِ",
    translation: "He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good. And none will remember except those of understanding."
  },
  {
    number: 277,
    surah: 2,
    numberInSurah: 270,
    text: "وَمَآ أَنفَقْتُم مِّن نَّفَقَةٍ أَوْ نَذَرْتُم مِّن نَّذْرٍۢ فَإِنَّ ٱللَّهَ يَعْلَمُهُۥ ۗ وَمَا لِلظَّٰلِمِينَ مِنْ أَنصَارٍۢ",
    translation: "And whatever you spend of expenditures or make of vows - indeed, Allah knows of it. And for the wrongdoers there are no helpers."
  },
  {
    number: 278,
    surah: 2,
    numberInSurah: 271,
    text: "إِن تُبْدُوا۟ ٱلصَّدَقَٰتِ فَنِعِمَّا هِىَ ۖ وَإِن تُخْفُوهَا وَتُؤْتُوهَا ٱلْفُقَرَآءَ فَهُوَ خَيْرٌۭ لَّكُمْ ۚ وَيُكَفِّرُ عَنكُم مِّن سَيِّـَٔاتِكُمْ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌۭ",
    translation: "If you disclose your charitable expenditures, they are good; but if you conceal them and give them to the poor, it is better for you, and He will remove from you some of your misdeeds [thereby]. And Allah, with what you do, is [fully] Acquainted."
  },
  {
    number: 279,
    surah: 2,
    numberInSurah: 272,
    text: "لَيْسَ عَلَيْكَ هُدَىٰهُمْ وَلَٰكِنَّ ٱللَّهَ يَهْدِى مَن يَشَآءُ ۗ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ ۚ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لَا تُظْلَمُونَ",
    translation: "Not upon you, [O Muhammad], is [responsibility for] their guidance, but Allah guides whom He wills. And whatever good you [believers] spend is for yourselves. And you do not spend except seeking the countenance of Allah. And whatever you spend of good - it will be fully repaid to you, and you will not be wronged."
  },
  {
    number: 280,
    surah: 2,
    numberInSurah: 273,
    text: "لِلْفُقَرَآءِ ٱلَّذِينَ أُحْصِرُوا۟ فِى سَبِيلِ ٱللَّهِ لَا يَسْتَطِيعُونَ ضَرْبًۭا فِى ٱلْأَرْضِ يَحْسَبُهُمُ ٱلْجَاهِلُ أَغْنِيَآءَ مِنَ ٱلتَّعَفُّفِ تَعْرِفُهُم بِسِيمَىٰهُمْ لَا يَسْـَٔلُونَ ٱلنَّاسَ إِلْحَافًۭا ۗ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌۭ",
    translation: "[Charity is] for the poor who have been restricted for the cause of Allah, unable to move about in the land. An ignorant [person] would think them self-sufficient because of their restraint, but you will know them by their [characteristic] sign. They do not ask people persistently [or at all]. And whatever you spend of good - indeed, Allah knows of it."
  },
  {
    number: 281,
    surah: 2,
    numberInSurah: 274,
    text: "ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُم بِٱلَّيْلِ وَٱلنَّهَارِ سِرًّۭا وَعَلَانِيَةًۭ فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۖ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Those who spend their wealth [in Allah's way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve."
  },
  {
    number: 282,
    surah: 2,
    numberInSurah: 275,
    text: "ٱلَّذِينَ يَأْكُلُونَ ٱلرِّبَوٰا۟ لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ ٱلَّذِى يَتَخَبَّطُهُ ٱلشَّيْطَٰنُ مِنَ ٱلْمَسِّ ۚ ذَٰلِكَ بِأَنَّهُمْ قَالُوٓا۟ إِنَّمَا ٱلْبَيْعُ مِثْلُ ٱلرِّبَوٰا۟ ۗ وَأَحَلَّ ٱللَّهُ ٱلْبَيْعَ وَحَرَّمَ ٱلرِّبَوٰا۟ ۚ فَمَن جَآءَهُۥ مَوْعِظَةٌۭ مِّن رَّبِّهِۦ فَٱنتَهَىٰ فَلَهُۥ مَا سَلَفَ وَأَمْرُهُۥٓ إِلَى ٱللَّهِ ۖ وَمَنْ عَادَ فَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ",
    translation: "Those who consume interest cannot stand [on the Day of Resurrection] except as one stands who is being beaten by Satan into insanity. That is because they say, 'Trade is [just] like interest.' But Allah has permitted trade and has forbidden interest. So whoever has received an admonition from his Lord and desists may have what is past, and his affair rests with Allah. But whoever returns [to dealing in interest or usury] - those are the companions of the Fire; they will abide eternally therein."
  },
  {
    number: 283,
    surah: 2,
    numberInSurah: 276,
    text: "يَمْحَقُ ٱللَّهُ ٱلرِّبَوٰا۟ وَيُرْبِى ٱلصَّدَقَٰتِ ۗ وَٱللَّهُ لَا يُحِبُّ كُلَّ كَفَّارٍ أَثِيمٍۢ",
    translation: "Allah destroys interest and gives increase for charities. And Allah does not like every sinning disbeliever."
  },
  {
    number: 284,
    surah: 2,
    numberInSurah: 277,
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَءَاتَوُا۟ ٱلزَّكَوٰةَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۖ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Indeed, those who believe and do righteous deeds and establish prayer and give zakah will have their reward with their Lord, and there will be no fear concerning them, nor will they grieve."
  },
  {
    number: 285,
    surah: 2,
    numberInSurah: 278,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَذَرُوا۟ مَا بَقِىَ مِنَ ٱلرِّبَوٰا۟ إِن كُنتُم مُّؤْمِنِينَ",
    translation: "O you who have believed, fear Allah and give up what remains [due to you] of interest, if you should be believers."
  },
  {
    number: 286,
    surah: 2,
    numberInSurah: 279,
    text: "فَإِن لَّمْ تَفْعَلُوا۟ فَأْذَنُوا۟ بِحَرْبٍۢ مِّنَ ٱللَّهِ وَرَسُولِهِۦ ۖ وَإِن تُبْتُمْ فَلَكُمْ رُءُوسُ أَمْوَٰلِكُمْ لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ",
    translation: "And if you do not, then be informed of a war [against you] from Allah and His Messenger. But if you repent, you may have your principal - [thus] you do no wrong, nor are you wronged."
  },
  {
    number: 287,
    surah: 2,
    numberInSurah: 280,
    text: "وَإِن كَانَ ذُو عُسْرَةٍۢ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍۢ ۚ وَأَن تَصَدَّقُوا۟ خَيْرٌۭ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
    translation: "And if someone is in hardship, then [let there be] postponement until [a time of] ease. But if you give [from your right as] charity, then it is better for you, if you only knew."
  },
  {
    number: 288,
    surah: 2,
    numberInSurah: 281,
    text: "وَٱتَّقُوا۟ يَوْمًۭا تُرْجَعُونَ فِيهِ إِلَى ٱللَّهِ ۖ ثُمَّ تُوَفَّىٰ كُلُّ نَفْسٍۢ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ",
    translation: "And fear a Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be wronged."
  },
  {
    number: 289,
    surah: 2,
    numberInSurah: 282,
    text: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى فَٱكْتُبُوهُ ۚ وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌۭ بِٱلْعَدْلِ ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ ٱللَّهُ ۚ فَلْيَكْتُبْ وَلْيُمْلِلِ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ وَلَا يَبْخَسْ مِنْهُ شَيْـًۭا ۚ فَإِن كَانَ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ سَفِيهًا أَوْ ضَعِيفًا أَوْ لَا يَسْتَطِيعُ أَن يُمِلَّ هُوَ فَلْيُمْلِلْ وَلِيُّهُۥ بِٱلْعَدْلِ ۚ وَٱسْتَشْهِدُوا۟ شَهِيدَيْنِ مِن رِّجَالِكُمْ ۖ فَإِن لَّمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌۭ وَٱمْرَأَتَانِ مِمَّن تَرْضَوْنَ مِنَ ٱلشُّهَدَآءِ أَن تَضِلَّ إِحْدَىٰهُمَا فَتُذَكِّرَ إِحْدَىٰهُمَا ٱلْأُخْرَىٰ ۚ وَلَا يَأْبَ ٱلشُّهَدَآءُ إِذَا مَا دُعُوا۟ ۚ وَلَا تَسْـَٔمُوٓا۟ أَن تَكْتُبُوهُ صَغِيرًا أَوْ كَبِيرًا إِلَىٰٓ أَجَلِهِۦ ۚ ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟ ۖ إِلَّآ أَن تَكُونَ تِجَٰرَةً حَاضِرَةًۭ تُدِيرُونَهَا بَيْنَكُمْ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَلَّا تَكْتُبُوهَا ۗ وَأَشْهِدُوٓا۟ إِذَا تَبَايَعْتُمْ ۚ وَلَا يُضَآرَّ كَاتِبٌۭ وَلَا شَهِيدٌۭ ۚ وَإِن تَفْعَلُوا۟ فَإِنَّهُۥ فُسُوقٌۭ بِكُمْ ۗ وَٱتَّقُوا۟ ٱللَّهَ ۖ وَيُعَلِّمُكُمُ ٱللَّهُ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ",
    translation: "O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write [it] between you in justice. Let no scribe refuse to write as Allah has taught him. So let him write and let the one who has the obligation dictate. And let him fear Allah, his Lord, and not leave anything out of it. But if the one who has the obligation is of limited understanding or weak or unable to dictate himself, then let his guardian dictate in justice. And bring to witness two witnesses from among your men. And if there are not two men [available], then a man and two women from those whom you accept as witnesses - so that if one of them errs, the other can remind her. And let not the witnesses refuse when they are called upon. And do not be [too] weary to write it, whether it is small or large, for its [specified] term. That is more just in the sight of Allah and stronger as evidence and more likely to prevent doubt between you, except when it is an immediate transaction which you conduct among yourselves. For [then] there is no blame upon you if you do not write it. And take witnesses when you conclude a contract. Let no scribe be harmed or any witness. For if you do so, indeed, it is [grave] disobedience in you. And fear Allah. And Allah teaches you. And Allah is Knowing of all things."
  },
  {
    number: 290,
    surah: 2,
    numberInSurah: 283,
    text: "وَإِن كُنتُمْ عَلَىٰ سَفَرٍۢ وَلَمْ تَجِدُوا۟ كَاتِبًۭا فَرِهَٰنٌۭ مَّقْبُوضَةٌۭ ۖ فَإِنْ أَمِنَ بَعْضُكُم بَعْضًۭا فَلْيُؤَدِّ ٱلَّذِى ٱؤْتُمِنَ أَمَٰنَتَهُۥ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ ۗ وَلَا تَكْتُمُوا۟ ٱلشَّهَٰدَةَ ۚ وَمَن يَكْتُمْهَا فَإِنَّهُۥٓ ءَاثِمٌۭ قَلْبُهُۥ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ عَلِيمٌۭ",
    translation: "And if you are on a journey and cannot find a scribe, then a security deposit [should be] taken. And if one of you entrusts another, then let him who is entrusted discharge his trust [faithfully] and let him fear Allah, his Lord. And do not conceal testimony, for whoever conceals it - his heart is indeed sinful, and Allah is Knowing of what you do."
  },
  {
    number: 291,
    surah: 2,
    numberInSurah: 284,
    text: "لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَإِن تُبْدُوا۟ مَا فِىٓ أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ ٱللَّهُ ۖ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
    translation: "To Allah belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allah is over all things competent."
  },
  {
    number: 292,
    surah: 2,
    numberInSurah: 285,
    text: "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
    translation: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.' And they say, 'We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.'"
  },
  {
    number: 293,
    surah: 2,
    numberInSurah: 286,
    text: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَا ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
    translation: "Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. 'Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.'"
  },
  // Surah Aal-E-Imran
  {
    number: 294,
    surah: 3,
    numberInSurah: 1,
    text: "الم",
    translation: "Alif, Lam, Meem."
  },
  {
    number: 295,
    surah: 3,
    numberInSurah: 2,
    text: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ",
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence."
  },
  {
    number: 296,
    surah: 3,
    numberInSurah: 3,
    text: "نَزَّلَ عَلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ مُصَدِّقًۭا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ ٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ",
    translation: "He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel."
  },
  {
    number: 297,
    surah: 3,
    numberInSurah: 4,
    text: "مِن قَبْلُ هُدًۭى لِّلنَّاسِ وَأَنزَلَ ٱلْفُرْقَانَ ۗ إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِ ٱللَّهِ لَهُمْ عَذَابٌۭ شَدِيدٌۭ ۗ وَٱللَّهُ عَزِيزٌۭ ذُو ٱنتِقَامٍ",
    translation: "Before as guidance for the people. And He revealed the Criterion [of judgment between right and wrong]. Indeed, those who disbelieve in the verses of Allah will have a severe punishment, and Allah is Exalted in Might, the Owner of Retribution."
  },
  {
    number: 298,
    surah: 3,
    numberInSurah: 5,
    text: "إِنَّ ٱللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَىْءٌۭ فِى ٱلْأَرْضِ وَلَا فِى ٱلسَّمَآءِ",
    translation: "Indeed, from Allah nothing is hidden in the earth nor in the heaven."
  },
  {
    number: 299,
    surah: 3,
    numberInSurah: 6,
    text: "هُوَ ٱلَّذِى يُصَوِّرُكُمْ فِى ٱلْأَرْحَامِ كَيْفَ يَشَآءُ ۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
    translation: "It is He who forms you in the wombs however He wills. There is no deity except Him, the Exalted in Might, the Wise."
  },
  {
    number: 300,
    surah: 3,
    numberInSurah: 7,
    text: "هُوَ ٱلَّذِىٓ أَنزَلَ عَلَيْكَ ٱلْكِتَٰبَ مِنْهُ ءَايَٰتٌۭ مُّحْكَمَٰتٌ هُنَّ أُمُّ ٱلْكِتَٰبِ وَأُخَرُ مُتَشَٰبِهَٰتٌۭ ۖ فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌۭ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنْهُ ٱبْتِغَآءَ ٱلْفِتْنَةِ وَٱبْتِغَآءَ تَأْوِيلِهِۦ ۖ وَمَا يَعْلَمُ تَأْوِيلَهُۥٓ إِلَّا ٱللَّهُ ۗ وَٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ يَقُولُونَ ءَامَنَّا بِهِۦ كُلٌّۭ مِّنْ عِندِ رَبِّنَا ۗ وَمَا يَذَّكَّرُ إِلَّآ أُو۟لُو ٱلْأَلْبَٰبِ",
    translation: "It is He who has sent down to you, [O Muhammad], the Book; in it are verses [that are] precise - they are the foundation of the Book - and others unspecific. As for those in whose hearts is deviation [from truth], they will follow that of it which is unspecific, seeking discord and seeking an interpretation [suitable to them]. And no one knows its [true] interpretation except Allah. But those firm in knowledge say, 'We believe in it. All [of it] is from our Lord.' And no one will be reminded except those of understanding."
  },
  {
    number: 301,
    surah: 3,
    numberInSurah: 8,
    text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ",
    translation: "[Who say], 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.'"
  },
  {
    number: 302,
    surah: 3,
    numberInSurah: 9,
    text: "رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوْمٍۢ لَّا رَيْبَ فِيهِ ۚ إِنَّ ٱللَّهَ لَا يُخْلِفُ ٱلْمِيعَادَ",
    translation: "Our Lord, surely You will gather the people for a Day about which there is no doubt. Indeed, Allah does not fail in His promise."
  },
  {
    number: 303,
    surah: 3,
    numberInSurah: 10,
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ لَن تُغْنِىَ عَنْهُمْ أَمْوَٰلُهُمْ وَلَآ أَوْلَٰدُهُم مِّنَ ٱللَّهِ شَيْـًۭا ۖ وَأُو۟لَٰٓئِكَ هُمْ وَقُودُ ٱلنَّارِ",
    translation: "Indeed, those who disbelieve - never will their wealth or their children avail them against Allah at all. And it is they who are fuel for the Fire."
  }  
]
