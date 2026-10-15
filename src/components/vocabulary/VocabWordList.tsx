import React from "react";
import styles from "@/styles/Vocabulary.module.css";
import { FilterIcon, CheckIcon, XIcon, SpeakerIcon } from "@/components/Icons";
import { VocabWord } from "@/data/seedData";

interface VocabWordListProps {
  words: VocabWord[];
  listFilter: "all" | "mastered" | "unmastered" | "not_studied";
  setListFilter: (
    filter: "all" | "mastered" | "unmastered" | "not_studied",
  ) => void;
  globalProgress: Record<string, "mastered" | "unmastered">;
  masteredCount: number;
  unmasteredCount: number;
  notStudiedCount: number;
  onPlayAudio: (e: React.MouseEvent, text: string) => void;
}

export default function VocabWordList({
  words,
  listFilter,
  setListFilter,
  globalProgress,
  masteredCount,
  unmasteredCount,
  notStudiedCount,
  onPlayAudio,
}: VocabWordListProps) {
  const filteredWords = words.filter((w) => {
    const status = globalProgress[w.id];
    if (listFilter === "mastered") return status === "mastered";
    if (listFilter === "unmastered") return status === "unmastered";
    if (listFilter === "not_studied") return !status;
    return true;
  });

  return (
    <div className={styles.wordsListContainer}>
      <div className={styles.wordsFilterRow}>
        <div className={styles.wordsFilterLabel}>
          <FilterIcon size={16} /> Phân loại từ:
        </div>

        <div className={styles.wordsFilterPills}>
          <button
            className={`${styles.wordFilterPill} ${
              listFilter === "all" ? styles.pillAllActive : styles.pillInactive
            }`}
            onClick={() => setListFilter("all")}
          >
            Tất cả ({words.length})
          </button>

          <button
            className={`${styles.wordFilterPill} ${
              listFilter === "mastered"
                ? styles.pillMasteredActive
                : styles.pillInactive
            }`}
            onClick={() => setListFilter("mastered")}
          >
            <CheckIcon size={14} /> Đã thuộc ({masteredCount})
          </button>

          <button
            className={`${styles.wordFilterPill} ${
              listFilter === "unmastered"
                ? styles.pillNotMasteredActive
                : styles.pillInactive
            }`}
            onClick={() => setListFilter("unmastered")}
          >
            <XIcon size={14} /> Chưa thuộc ({unmasteredCount})
          </button>

          {notStudiedCount > 0 && (
            <button
              className={`${styles.wordFilterPill} ${
                listFilter === "not_studied"
                  ? styles.pillNotStudiedActive
                  : styles.pillInactive
              }`}
              onClick={() => setListFilter("not_studied")}
            >
              Chưa học ({notStudiedCount})
            </button>
          )}
        </div>
      </div>

      <div className={styles.wordsGrid}>
        {filteredWords.map((word) => {
          const wordStatus = globalProgress[word.id];
          const isMastered = wordStatus === "mastered";
          const isUnmastered = wordStatus === "unmastered";

          return (
            <div key={word.id} className={styles.wordCardItem}>
              <div>
                <div className={styles.wordTopRow}>
                  <div className={styles.wordTitleText}>{word.word}</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      className={`${styles.wordStatusBadge} ${
                        isMastered
                          ? styles.badgeMasteredSmall
                          : isUnmastered
                            ? styles.badgeUnmastered
                            : styles.badgeNotStudied
                      }`}
                    >
                      {isMastered
                        ? "Đã thuộc"
                        : isUnmastered
                          ? "Chưa thuộc"
                          : "Chưa học"}
                    </span>
                    <button
                      className={styles.wordSpeakerSmall}
                      onClick={(e) => onPlayAudio(e, word.word)}
                      title="Nghe phát âm"
                    >
                      <SpeakerIcon size={16} />
                    </button>
                  </div>
                </div>

                <div className={styles.wordPhoneticText}>{word.phonetic}</div>

                <div className={styles.wordMeaningBoxItem}>
                  <span className={styles.wordPosTag}>{word.partOfSpeech}</span>
                  <span className={styles.wordMeaningViItem}>
                    {word.meaningVi}
                  </span>
                </div>

                <p className={styles.wordExampleEnText}>
                  <span>&bull;</span>
                  <span>{word.exampleEn}</span>
                </p>
                <p className={styles.wordExampleViText}>{word.exampleVi}</p>
              </div>

              {word.collocation && (
                <div className={styles.wordCollocationRow}>
                  <span className={styles.wordCollocationLabel}>Cụm từ:</span>
                  <span className={styles.wordCollocationText}>
                    {word.collocation}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
