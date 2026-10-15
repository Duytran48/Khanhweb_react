"use client";

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
  // Categorize words into groups strictly ordered:
  // 1. Chưa học (not studied)
  // 2. Chưa thuộc (unmastered)
  // 3. Đã thuộc (mastered)
  const notStudiedWords = words.filter((w) => !globalProgress[w.id]);
  const unmasteredWords = words.filter(
    (w) => globalProgress[w.id] === "unmastered",
  );
  const masteredWords = words.filter(
    (w) => globalProgress[w.id] === "mastered",
  );

  const filteredWords = words.filter((w) => {
    const status = globalProgress[w.id];
    if (listFilter === "mastered") return status === "mastered";
    if (listFilter === "unmastered") return status === "unmastered";
    if (listFilter === "not_studied") return !status;
    return true;
  });

  const renderWordCard = (word: VocabWord) => {
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
                title="Nghe phát âm từ"
              >
                <SpeakerIcon size={16} />
              </button>
            </div>
          </div>

          <div className={styles.wordPhoneticText}>{word.phonetic}</div>

          <div className={styles.wordMeaningBoxItem}>
            <span className={styles.wordPosTag}>{word.partOfSpeech}</span>
            <span className={styles.wordMeaningViItem}>{word.meaningVi}</span>
          </div>

          {word.exampleEn && (
            <p className={styles.wordExampleEnText}>
              <span>&bull;</span>
              <span>{word.exampleEn}</span>
              <button
                type="button"
                className={styles.wordSpeakerSmall}
                onClick={(e) => onPlayAudio(e, word.exampleEn)}
                title="Nghe ví dụ tiếng Anh"
                style={{
                  width: "22px",
                  height: "22px",
                  marginLeft: "6px",
                  verticalAlign: "middle",
                  display: "inline-flex",
                }}
              >
                <SpeakerIcon size={12} />
              </button>
            </p>
          )}
          {word.exampleVi && (
            <p className={styles.wordExampleViText}>{word.exampleVi}</p>
          )}
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
  };

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

      {listFilter === "all" ? (
        <div className={styles.wordGroupsContainer}>
          {notStudiedWords.length > 0 && (
            <div className={styles.wordStatusSection}>
              <div
                className={`${styles.wordSectionHeader} ${styles.sectionNotStudied}`}
              >
                <div className={styles.wordSectionTitle}>
                  <span className={styles.statusDotGray} />
                  <span>Từ chưa học</span>
                  <span className={styles.sectionCountPill}>
                    {notStudiedWords.length}
                  </span>
                </div>
                <span className={styles.sectionSubtext}>
                  Chưa bắt đầu học
                </span>
              </div>
              <div className={styles.wordsGrid}>
                {notStudiedWords.map(renderWordCard)}
              </div>
            </div>
          )}

          {unmasteredWords.length > 0 && (
            <div className={styles.wordStatusSection}>
              <div
                className={`${styles.wordSectionHeader} ${styles.sectionUnmastered}`}
              >
                <div className={styles.wordSectionTitle}>
                  <XIcon size={16} />
                  <span>Từ chưa thuộc</span>
                  <span className={styles.sectionCountPill}>
                    {unmasteredWords.length}
                  </span>
                </div>
                <span className={styles.sectionSubtext}>
                  Cần ôn luyện thêm
                </span>
              </div>
              <div className={styles.wordsGrid}>
                {unmasteredWords.map(renderWordCard)}
              </div>
            </div>
          )}

          {masteredWords.length > 0 && (
            <div className={styles.wordStatusSection}>
              <div
                className={`${styles.wordSectionHeader} ${styles.sectionMastered}`}
              >
                <div className={styles.wordSectionTitle}>
                  <CheckIcon size={16} />
                  <span>Từ đã thuộc</span>
                  <span className={styles.sectionCountPill}>
                    {masteredWords.length}
                  </span>
                </div>
                <span className={styles.sectionSubtext}>
                  Đã ghi nhớ thành thạo
                </span>
              </div>
              <div className={styles.wordsGrid}>
                {masteredWords.map(renderWordCard)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.wordsGrid}>
          {filteredWords.map(renderWordCard)}
        </div>
      )}
    </div>
  );
}
