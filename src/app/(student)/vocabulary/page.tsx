"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import styles from "@/styles/Vocabulary.module.css";
import {
  ChevronLeftIcon,
  BookIcon,
  DollarIcon,
  BriefcaseIcon,
  FileTextIcon,
  UsersIcon,
  PlaneIcon,
  PackageIcon,
  MenuIcon,
} from "@/components/Icons";
import {
  seedVocabList,
  seedExamSeriesList,
  VocabTopic,
  VocabWord,
  ExamSeriesItem,
  ExamTestSet,
  ExamPartItem,
} from "@/data/seedData";
import VocabFlashcard from "@/components/vocabulary/VocabFlashcard";
import VocabWordList from "@/components/vocabulary/VocabWordList";
import VocabSideMenu from "@/components/vocabulary/VocabSideMenu";
import VocabCatalogView from "@/components/vocabulary/VocabCatalogView";

const DEFAULT_FALLBACK_WORDS: VocabWord[] = [
  {
    id: "w_demo_1",
    word: "slice",
    phonetic: "/slaɪs/",
    partOfSpeech: "verb (v)",
    meaningVi: "Cắt lát, thái thành từng miếng mỏng",
    exampleEn: "The chef is slicing vegetables on the kitchen board.",
    exampleVi: "Đầu bếp đang thái lát rau củ trên thớt.",
    collocation: "slice thinly / a slice of cake",
    synonyms: ["chop", "cut", "carve"],
    antonyms: ["combine", "unite", "join"],
    isMastered: false,
  },
  {
    id: "w_demo_2",
    word: "scrub",
    phonetic: "/skrʌb/",
    partOfSpeech: "verb (v)",
    meaningVi: "Cọ rửa, chà sạch vết bẩn",
    exampleEn: "She scrubbed the counters thoroughly before opening.",
    exampleVi: "Cô ấy đã cọ rửa sạch sẽ các quầy trước khi mở cửa.",
    collocation: "scrub the counter / scrub clean",
    synonyms: ["clean", "scour", "wash"],
    antonyms: ["dirty", "stain", "soil"],
    isMastered: false,
  },
  {
    id: "w_demo_3",
    word: "stroll",
    phonetic: "/stroʊl/",
    partOfSpeech: "verb (v)",
    meaningVi: "Đi dạo thong thả, tản bộ",
    exampleEn: "Pedestrians are strolling along the riverbank path.",
    exampleVi: "Người đi bộ đang tản bộ dọc theo con đường ven sông.",
    collocation: "stroll along the path",
    synonyms: ["walk", "wander", "amble"],
    antonyms: ["run", "sprint", "rush"],
    isMastered: false,
  },
];

const getTopicIcon = (type: string) => {
  switch (type) {
    case "contract":
      return <FileTextIcon size={24} color="#059669" />;
    case "finance":
      return <DollarIcon size={24} color="#059669" />;
    case "business":
      return <BriefcaseIcon size={24} color="#059669" />;
    case "personnel":
      return <UsersIcon size={24} color="#059669" />;
    case "travel":
      return <PlaneIcon size={24} color="#64748b" />;
    case "shopping":
      return <PackageIcon size={24} color="#64748b" />;
    default:
      return <BookIcon size={24} color="#059669" />;
  }
};

const createPartTopic = (
  test: ExamTestSet,
  part: ExamPartItem,
  seriesLabel: string,
): VocabTopic => ({
  id: `${test.id}-p${part.partNumber}`,
  title: `${test.title} · ${part.partTitle}`,
  description: part.description,
  targetLevel: "Mục tiêu đề thi TOEIC",
  status: part.status,
  memorizedCount: part.memorizedCount,
  totalCount: part.totalCount,
  iconType: part.partNumber <= 4 ? "business" : "contract",
  category: "part",
  examSetId: test.id,
  examSetName: `${seriesLabel} – ${test.title}`,
  partLabel: `Part ${part.partNumber}`,
  words:
    part.words && part.words.length > 0 ? part.words : DEFAULT_FALLBACK_WORDS,
});

export default function VocabularyPage() {
  const [activeTopic, setActiveTopic] = useState<VocabTopic | null>(null);
  const [studyMode, setStudyMode] = useState<"flashcard" | "list">("flashcard");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [listFilter, setListFilter] = useState<
    "all" | "mastered" | "unmastered" | "not_studied"
  >("all");

  const [selectedSeries, setSelectedSeries] = useState<ExamSeriesItem | null>(
    seedExamSeriesList[0],
  );
  const [selectedTest, setSelectedTest] = useState<ExamTestSet | null>(null);
  const [selectedPart, setSelectedPart] = useState<ExamPartItem | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<"topic" | "part">(
    "topic",
  );
  const [catalogStatusFilter, setCatalogStatusFilter] = useState<string>("all");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const [globalProgress, setGlobalProgress] = useState<
    Record<string, "mastered" | "unmastered">
  >({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("toeic_vocab_learning_progress");
      if (saved) {
        setGlobalProgress(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const [topicWords, setTopicWords] = useState<VocabWord[]>([]);
  const audioCacheRef = useRef<Record<string, HTMLAudioElement>>({});

  const handleSelectTopic = useCallback(
    (topic: VocabTopic) => {
      setActiveTopic(topic);
      setStudyMode("flashcard");
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const rawWords = topic.words ? [...topic.words] : [];
      const syncedWords = rawWords.map((word) => ({
        ...word,
        isMastered: globalProgress[word.id] === "mastered",
      }));
      setTopicWords(syncedWords);
      setCurrentWordIndex(0);
      setIsFlipped(false);
    },
    [globalProgress],
  );

  const handleStartLearnTest = useCallback(
    (
      test: ExamTestSet,
      series: ExamSeriesItem | null,
      initialStudyMode: "flashcard" | "list" = "flashcard",
    ) => {
      if (series) setSelectedSeries(series);
      setSelectedTest(test);
      const firstPart = test.parts[0] || {
        id: `${test.id}-p1`,
        partNumber: 1,
        partTitle: "Part 1",
        skillType: "Listening" as const,
        description: "Từ vựng Part 1",
        totalCount: 37,
        memorizedCount: 0,
        status: "not_started" as const,
        words: [],
      };
      setSelectedPart(firstPart);
      handleSelectTopic(
        createPartTopic(test, firstPart, series?.shortLabel || ""),
      );
      setStudyMode(initialStudyMode);
    },
    [handleSelectTopic],
  );

  const handleSwitchPartInTest = useCallback(
    (part: ExamPartItem) => {
      setSelectedPart(part);
      if (!selectedTest) return;
      handleSelectTopic(
        createPartTopic(selectedTest, part, selectedSeries?.shortLabel || ""),
      );
    },
    [selectedTest, selectedSeries, handleSelectTopic],
  );

  const playSpeechFallback = useCallback(
    (text: string, accent: "us" | "uk" = "us") => {
      if (typeof window === "undefined" || !("speechSynthesis" in window))
        return;

      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = accent === "uk" ? "en-GB" : "en-US";
        utterance.rate = 0.92;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const targetLang = accent === "uk" ? "en-GB" : "en-US";
        const preferredVoice =
          voices.find(
            (v) =>
              v.lang === targetLang &&
              (v.name.includes("Natural") ||
                v.name.includes("Jenny") ||
                v.name.includes("Guy") ||
                v.name.includes("Sonia") ||
                v.name.includes("Ryan") ||
                v.name.includes("George") ||
                v.name.includes("Oliver") ||
                v.name.includes("Samantha") ||
                !v.name.includes("Desktop")),
          ) ||
          voices.find((v) =>
            v.lang.startsWith(accent === "uk" ? "en-GB" : "en"),
          );

        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
      } catch {
        // ignore
      }
    },
    [],
  );

  const handlePlayAudio = useCallback(
    (e: React.MouseEvent, text: string, accent: "us" | "uk" = "us") => {
      e.stopPropagation();

      const cleanText = text.trim();
      if (!cleanText) return;

      const cacheKey = `${accent}_${cleanText}`;

      if (audioCacheRef.current[cacheKey]) {
        const cached = audioCacheRef.current[cacheKey];
        cached.currentTime = 0;
        cached.play().catch(() => playSpeechFallback(cleanText, accent));
        return;
      }

      const ttsUrl = `/api/tts?text=${encodeURIComponent(cleanText)}&accent=${accent}`;
      const audio = new Audio(ttsUrl);

      audio.oncanplaythrough = () => {
        audioCacheRef.current[cacheKey] = audio;
      };

      audio.play().catch(() => {
        const youdaoType = accent === "uk" ? "1" : "2";
        const directUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&type=${youdaoType}`;
        const directAudio = new Audio(directUrl);

        directAudio.play().catch(() => {
          playSpeechFallback(cleanText, accent);
        });
      });
    },
    [playSpeechFallback],
  );

  const activeWord = topicWords[currentWordIndex] || topicWords[0];

  const handleNextCard = useCallback(() => {
    setCurrentWordIndex((prev) =>
      prev < topicWords.length - 1 ? prev + 1 : 0,
    );
    setIsFlipped(false);
  }, [topicWords.length]);

  const handlePrevCard = useCallback(() => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentWordIndex]);

  const handleMarkMastered = useCallback(
    (wordId: string, isMastered: boolean) => {
      const statusValue = isMastered ? "mastered" : "unmastered";

      setGlobalProgress((prev) => {
        const next: Record<string, "mastered" | "unmastered"> = {
          ...prev,
          [wordId]: statusValue,
        };
        try {
          localStorage.setItem(
            "toeic_vocab_learning_progress",
            JSON.stringify(next),
          );
        } catch {
          // ignore
        }
        return next;
      });

      setTopicWords((prevWords) =>
        prevWords.map((item) =>
          item.id === wordId ? { ...item, isMastered } : item,
        ),
      );

      setTimeout(() => {
        setCurrentWordIndex((prev) =>
          prev < topicWords.length - 1 ? prev + 1 : prev,
        );
        setIsFlipped(false);
      }, 400);
    },
    [topicWords.length],
  );

  const handleResetProgress = useCallback(() => {
    setTopicWords((prevWords) =>
      prevWords.map((item) => ({ ...item, isMastered: false })),
    );

    setGlobalProgress((prev) => {
      const next = { ...prev };
      topicWords.forEach((w) => {
        delete next[w.id];
      });
      try {
        localStorage.setItem(
          "toeic_vocab_learning_progress",
          JSON.stringify(next),
        );
      } catch {
        // ignore
      }
      return next;
    });

    setCurrentWordIndex(0);
    setIsFlipped(false);
  }, [topicWords]);

  const {
    masteredCount,
    unmasteredCount,
    notStudiedCount,
    progressPercent,
  } = useMemo(() => {
    let mastered = 0;
    let unmastered = 0;
    let notStudied = 0;

    topicWords.forEach((w) => {
      const status = globalProgress[w.id];
      if (status === "mastered") {
        mastered++;
      } else if (status === "unmastered") {
        unmastered++;
      } else {
        notStudied++;
      }
    });

    const total = topicWords.length;
    return {
      masteredCount: mastered,
      unmasteredCount: unmastered,
      notStudiedCount: notStudied,
      progressPercent:
        total > 0
          ? mastered === total
            ? 100
            : Math.floor((mastered / total) * 100)
          : 0,
    };
  }, [topicWords, globalProgress]);

  const filteredTopics = useMemo(() => {
    return seedVocabList
      .map((topic) => {
        const words = topic.words || [];
        const total = words.length;
        const mastered = words.filter(
          (w) => globalProgress[w.id] === "mastered",
        ).length;

        let calculatedStatus: "completed" | "in_progress" | "not_started" =
          "not_started";
        if (total > 0 && mastered === total) {
          calculatedStatus = "completed";
        } else if (mastered > 0) {
          calculatedStatus = "in_progress";
        }

        const calculatedPercent =
          total > 0
            ? mastered === total
              ? 100
              : Math.floor((mastered / total) * 100)
            : 0;

        return {
          ...topic,
          memorizedCount: mastered,
          totalCount: total > 0 ? total : topic.totalCount,
          status: calculatedStatus,
          percent: calculatedPercent,
        };
      })
      .filter((topic) => {
        const topicCategory = topic.category || "topic";
        const matchesCategory = topicCategory === selectedCategory;
        const matchesStatus =
          catalogStatusFilter === "all" ||
          (catalogStatusFilter === "completed" &&
            topic.status === "completed") ||
          (catalogStatusFilter === "in_progress" &&
            topic.status === "in_progress");

        return matchesCategory && matchesStatus;
      });
  }, [selectedCategory, catalogStatusFilter, globalProgress]);

  const topicCount = useMemo(
    () =>
      seedVocabList.filter((t) => (t.category || "topic") === "topic").length,
    [],
  );

  return (
    <div className={styles.pageWrapper}>
      {activeTopic ? (
        <div>
          <div className={styles.studyContainer}>
            <VocabSideMenu
              isOpen={isSideMenuOpen}
              onClose={() => setIsSideMenuOpen(false)}
              selectedCategory={selectedCategory}
              selectedTest={selectedTest}
              selectedPart={selectedPart}
              activeTopic={activeTopic}
              studyMode={studyMode}
              setStudyMode={setStudyMode}
              totalWords={topicWords.length}
              masteredCount={masteredCount}
              unmasteredCount={unmasteredCount}
              notStudiedCount={notStudiedCount}
              progressPercent={progressPercent}
              onSwitchPartInTest={handleSwitchPartInTest}
              onResetProgress={handleResetProgress}
            />

            <main className={styles.studyMainArea}>
              <div className={styles.studyTopBar}>
                <div className={styles.mobileActionsRow}>
                  <button
                    className={styles.btnMobileSideMenuToggle}
                    onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                    aria-label="Mở menu chế độ học và tiến độ"
                    title="Mở menu"
                  >
                    <MenuIcon size={18} />
                    <span>Menu</span>
                  </button>

                  <button
                    className={styles.btnBackToTopicsMobile}
                    onClick={() => setActiveTopic(null)}
                  >
                    <ChevronLeftIcon size={18} />
                    <span>Quay lại</span>
                  </button>
                </div>

                <div className={styles.topicHeaderCard}>
                  <button
                    className={styles.btnBackToTopics}
                    onClick={() => setActiveTopic(null)}
                  >
                    <ChevronLeftIcon size={18} />
                    <span>Quay lại</span>
                  </button>

                  <div className={styles.topicHeaderTitleBox}>
                    <div className={styles.topicHeaderIcon}>
                      {getTopicIcon(activeTopic.iconType)}
                    </div>
                    <h1 className={styles.topicHeaderTitle}>
                      {activeTopic.title}
                    </h1>
                  </div>
                </div>
              </div>

              {studyMode === "flashcard" && activeWord && (
                <VocabFlashcard
                  word={activeWord}
                  currentIndex={currentWordIndex}
                  totalWords={topicWords.length}
                  isFlipped={isFlipped}
                  status={globalProgress[activeWord.id]}
                  onFlip={() => setIsFlipped((prev) => !prev)}
                  onPrev={handlePrevCard}
                  onNext={handleNextCard}
                  onPlayAudio={handlePlayAudio}
                  onMarkMastered={handleMarkMastered}
                />
              )}

              {studyMode === "list" && (
                <VocabWordList
                  words={topicWords}
                  listFilter={listFilter}
                  setListFilter={setListFilter}
                  globalProgress={globalProgress}
                  masteredCount={masteredCount}
                  unmasteredCount={unmasteredCount}
                  notStudiedCount={notStudiedCount}
                  onPlayAudio={handlePlayAudio}
                />
              )}
            </main>
          </div>
        </div>
      ) : (
        <VocabCatalogView
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          catalogStatusFilter={catalogStatusFilter}
          setCatalogStatusFilter={setCatalogStatusFilter}
          filteredTopics={filteredTopics}
          topicCount={topicCount}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          setSelectedTest={setSelectedTest}
          onSelectTopic={handleSelectTopic}
          onStartLearnTest={handleStartLearnTest}
        />
      )}
    </div>
  );
}
