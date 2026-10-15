"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/Vocabulary.module.css";
import {
  SpeakerIcon,
  CheckIcon,
  XIcon,
  ImageIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@/components/Icons";
import { VocabWord } from "@/data/seedData";

interface VocabFlashcardProps {
  word: VocabWord;
  currentIndex: number;
  totalWords: number;
  isFlipped: boolean;
  status?: "mastered" | "unmastered";
  onFlip: () => void;
  onPrev: () => void;
  onNext: () => void;
  onPlayAudio: (
    e: React.MouseEvent,
    text: string,
    accent?: "us" | "uk",
  ) => void;
  onMarkMastered: (wordId: string, isMastered: boolean) => void;
}

/**
 * Highlights the target word (and common inflections: -s, -es, -ed, -ing, etc.) in the example sentence.
 */
function renderHighlightedExample(sentence: string, targetWord: string) {
  if (!sentence || !targetWord) return sentence;

  const cleanTarget = targetWord
    .trim()
    .replace(/\s*\(.*?\)\s*/g, "")
    .trim();
  if (!cleanTarget) return sentence;

  const escapeRegex = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const tokens = cleanTarget.split(/\s+/);
  let patternStr = "";

  if (tokens.length === 1) {
    const single = tokens[0];
    let stem = single;
    if (single.length > 4 && single.endsWith("e")) {
      stem = single.slice(0, -1);
    } else if (single.length > 4 && single.endsWith("y")) {
      stem = single.slice(0, -1);
    }
    patternStr = `\\b(${escapeRegex(stem)}\\w*|${escapeRegex(single)}\\w*)\\b`;
  } else {
    const phrasePattern = tokens
      .map((tok) => {
        let stem = tok;
        if (tok.length > 4 && tok.endsWith("e")) stem = tok.slice(0, -1);
        return `(${escapeRegex(stem)}\\w*|${escapeRegex(tok)}\\w*)`;
      })
      .join("\\s+");
    patternStr = `\\b${phrasePattern}\\b`;
  }

  try {
    const regex = new RegExp(patternStr, "gi");
    const parts = sentence.split(regex);
    if (parts.length <= 1) {
      const fallbackRegex = new RegExp(`(${escapeRegex(cleanTarget)})`, "gi");
      const fallbackParts = sentence.split(fallbackRegex);
      return fallbackParts.map((part, i) =>
        fallbackRegex.test(part) ? (
          <span key={i} className={styles.highlightedWord}>
            {part}
          </span>
        ) : (
          part
        ),
      );
    }

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className={styles.highlightedWord}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  } catch {
    return sentence;
  }
}

export default function VocabFlashcard({
  word,
  currentIndex,
  totalWords,
  isFlipped,
  status,
  onFlip,
  onPrev,
  onNext,
  onPlayAudio,
  onMarkMastered,
}: VocabFlashcardProps) {
  const isLocked = !!status;
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setShowDetails(false);
  }, [word.id]);

  return (
    <div className={styles.flashcardBox}>
      <div className={styles.flashcardProgressTrack}>
        <div className={styles.flashcardIndexLabel}>
          Từ số <span>{currentIndex + 1}</span>/{totalWords}
        </div>
        <div className={styles.progressBarLine}>
          <div
            className={styles.progressBarFill}
            style={{
              width: `${((currentIndex + 1) / totalWords) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className={styles.flashcardStageWrapper}>
        <button
          className={styles.btnSideNav}
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Từ trước đó"
          aria-label="Từ trước đó"
        >
          <ChevronLeftIcon size={24} />
        </button>

        <div className={styles.flipCardWrapper}>
          <div
            className={`${styles.flipCardInner} ${
              isFlipped ? styles.flipCardInnerFlipped : ""
            }`}
            onClick={onFlip}
            title="Nhấn để lật thẻ"
          >
            {/* Front */}
            <div className={styles.flipCardFront}>
              <span className={styles.partOfSpeechBadge}>
                {word.partOfSpeech}
              </span>

              <h2 className={styles.cardWordTitle}>{word.word}</h2>

              <div className={styles.cardImageBox}>
                <ImageIcon size={44} />
              </div>

              <div className={styles.cardPhonetic}>{word.phonetic}</div>

              <div className={styles.accentAudioGroup}>
                <button
                  type="button"
                  className={styles.btnAccentPill}
                  onClick={(e) => onPlayAudio(e, word.word, "uk")}
                  title="Nghe phát âm chuẩn Anh - Anh (UK)"
                >
                  <span className={styles.accentBadgeUK}>UK</span>
                  <SpeakerIcon size={15} style={{ flexShrink: 0 }} />
                  <span>Anh - Anh</span>
                </button>

                <button
                  type="button"
                  className={styles.btnAccentPill}
                  onClick={(e) => onPlayAudio(e, word.word, "us")}
                  title="Nghe phát âm chuẩn Anh - Mỹ (US)"
                >
                  <span className={styles.accentBadgeUS}>US</span>
                  <SpeakerIcon size={15} style={{ flexShrink: 0 }} />
                  <span>Anh - Mỹ</span>
                </button>
              </div>

              <div className={styles.cardClickHint}>
                <span>Nhấn để xem nghĩa</span>
              </div>
            </div>

            {/* Back */}
            <div className={styles.flipCardBack}>
              <div className={styles.flipCardBackCenter}>
                {/* 1. Loại từ & Nghĩa tiếng Việt trong 1 khung */}
                <div className={styles.cardMeaningViBox}>
                  <span className={styles.cardBackPosBadge}>
                    {word.partOfSpeech}
                  </span>
                  <h2 className={styles.cardMeaningViText}>{word.meaningVi}</h2>
                </div>

                {/* 2. English & Vietnamese example with target word in red + Audio Speaker */}
                {word.exampleEn && (
                  <div className={styles.cardBackExampleBox}>
                    <div className={styles.cardBackExampleContent}>
                      <div className={styles.cardBackExampleEn}>
                        &ldquo;{renderHighlightedExample(word.exampleEn, word.word)}&rdquo;
                      </div>
                      {word.exampleVi && (
                        <div className={styles.cardBackExampleVi}>
                          {word.exampleVi}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className={styles.btnExampleSpeaker}
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayAudio(e, word.exampleEn, "us");
                      }}
                      title="Nghe phát âm câu ví dụ tiếng Anh"
                      aria-label="Nghe câu ví dụ"
                    >
                      <SpeakerIcon size={18} />
                    </button>
                  </div>
                )}

                {/* 3. Toggle button for details */}
                <button
                  type="button"
                  className={`${styles.btnShowDetails} ${showDetails ? styles.btnShowDetailsActive : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetails((prev) => !prev);
                  }}
                  title={showDetails ? "Thu gọn chi tiết" : "Xem thêm chi tiết từ vựng"}
                >
                  <ChevronDownIcon
                    size={16}
                    style={{
                      transform: showDetails ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                  />
                  <span>{showDetails ? "Thu gọn" : "Xem thêm"}</span>
                </button>

                {/* 4. Synonyms, Antonyms & Collocations (toggled) */}
                {showDetails && (
                  <div className={styles.cardDetailsContainer}>
                    {/* 2 ô Từ đồng nghĩa & Từ trái nghĩa nằm ngang ở trên */}
                    <div className={styles.synonymsAntonymsRow}>
                      <div
                        className={`${styles.detailBox} ${styles.synonymsBox}`}
                      >
                        <div className={styles.detailBoxTitle}>Từ đồng nghĩa</div>
                        <div className={styles.tagsList}>
                          {word.synonyms && word.synonyms.length > 0 ? (
                            word.synonyms.map((syn, idx) => (
                              <span key={idx} className={styles.tagItem}>
                                {syn}
                              </span>
                            ))
                          ) : (
                            <span className={styles.tagEmpty}>Đang cập nhật</span>
                          )}
                        </div>
                      </div>

                      <div
                        className={`${styles.detailBox} ${styles.antonymsBox}`}
                      >
                        <div className={styles.detailBoxTitle}>Từ trái nghĩa</div>
                        <div className={styles.tagsList}>
                          {word.antonyms && word.antonyms.length > 0 ? (
                            word.antonyms.map((ant, idx) => (
                              <span key={idx} className={styles.tagItem}>
                                {ant}
                              </span>
                            ))
                          ) : (
                            <span className={styles.tagEmpty}>Đang cập nhật</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Ô cụm từ ở dưới hai khung đồng nghĩa và trái nghĩa */}
                    {word.collocation && (
                      <div className={styles.cardBackCollocationWrapper}>
                        <span className={styles.collocationLabelOutside}>Cụm từ:</span>
                        <div className={styles.collocationBoxInside}>{word.collocation}</div>
                      </div>
                    )}
                  </div>
                )}
                <div className={styles.cardClickHint}>
                  <span>Nhấn để xem từ vựng</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={styles.btnSideNav}
          onClick={onNext}
          title="Từ tiếp theo"
          aria-label="Từ tiếp theo"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      <div className={styles.flashcardActionBar}>
        <button
          className={`${styles.btnRectNotMastered} ${
            status === "unmastered" ? styles.btnRectNotMasteredActive : ""
          } ${isLocked && status !== "unmastered" ? styles.btnRectDisabled : ""}`}
          onClick={() => onMarkMastered(word.id, false)}
          disabled={isLocked}
          title={
            isLocked
              ? "Đã đánh dấu rồi. Bấm 'Đặt lại tiến độ' để học lại."
              : "Đánh dấu chưa thuộc"
          }
        >
          <XIcon size={18} /> Chưa thuộc
        </button>

        <button
          className={`${styles.btnRectMastered} ${
            status === "mastered" ? styles.btnRectMasteredActive : ""
          } ${isLocked && status !== "mastered" ? styles.btnRectDisabled : ""}`}
          onClick={() => onMarkMastered(word.id, true)}
          disabled={isLocked}
          title={
            isLocked
              ? "Đã đánh dấu rồi. Bấm 'Đặt lại tiến độ' để học lại."
              : "Đánh dấu đã thuộc"
          }
        >
          <CheckIcon size={18} /> Đã thuộc
        </button>
      </div>
    </div>
  );
}
