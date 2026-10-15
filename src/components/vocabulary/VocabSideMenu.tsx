import React, { useState, useEffect } from "react";
import styles from "@/styles/Vocabulary.module.css";
import {
  CardsIcon,
  ListIcon,
  RotateCcwIcon,
  XIcon,
  ChevronDownIcon,
} from "@/components/Icons";
import { VocabTopic, ExamTestSet, ExamPartItem } from "@/data/seedData";

interface VocabSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: "topic" | "part";
  selectedTest: ExamTestSet | null;
  selectedPart: ExamPartItem | null;
  activeTopic: VocabTopic | null;
  studyMode: "flashcard" | "list";
  setStudyMode: (mode: "flashcard" | "list") => void;
  totalWords: number;
  masteredCount: number;
  unmasteredCount: number;
  notStudiedCount: number;
  progressPercent: number;
  onSwitchPartInTest: (part: ExamPartItem) => void;
  onResetProgress: () => void;
}

export default function VocabSideMenu({
  isOpen,
  onClose,
  selectedCategory,
  selectedTest,
  selectedPart,
  activeTopic,
  studyMode,
  setStudyMode,
  totalWords,
  masteredCount,
  unmasteredCount,
  notStudiedCount,
  progressPercent,
  onSwitchPartInTest,
  onResetProgress,
}: VocabSideMenuProps) {
  const [isPartsExpanded, setIsPartsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  const activePart =
    selectedTest?.parts.find(
      (p) =>
        selectedPart?.id === p.id ||
        activeTopic?.partLabel === `Part ${p.partNumber}`,
    ) || selectedTest?.parts[0];

  return (
    <>
      <div
        className={`${styles.sideMenuOverlay} ${
          isOpen ? styles.sideMenuOverlayVisible : ""
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={`${styles.sideMenu} ${
          isOpen ? styles.sideMenuDrawerOpen : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className={styles.sideMenuMobileHeader}>
          <span className={styles.sideMenuMobileTitle}>Chế độ & Tiến độ</span>
          <button
            className={styles.sideMenuCloseBtn}
            onClick={onClose}
            aria-label="Đóng menu"
          >
            <XIcon size={18} />
          </button>
        </div>

        {selectedCategory === "part" && selectedTest ? (
          <div>
            <div className={styles.testStudySideHeader}>
              <div>
                <div className={styles.testStudySideTitle}>{selectedTest.title}</div>
                <div className={styles.testStudySideSub}>
                  {selectedTest.parts.length} phần · {selectedTest.totalWords} từ
                </div>
              </div>
              <button
                type="button"
                className={styles.btnToggleParts}
                onClick={() => setIsPartsExpanded((prev) => !prev)}
                title={isPartsExpanded ? "Thu gọn danh sách Part" : "Đổi Part thi"}
              >
                <span>{isPartsExpanded ? "Thu gọn" : "Đổi Part"}</span>
                <ChevronDownIcon
                  size={14}
                  style={{
                    transform: isPartsExpanded ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
            </div>

            <div className={styles.partSideNavList}>
              {isPartsExpanded ? (
                selectedTest.parts.map((p) => {
                  const isActivePart =
                    selectedPart?.id === p.id ||
                    activeTopic?.partLabel === `Part ${p.partNumber}`;
                  return (
                    <button
                      key={p.id}
                      className={`${styles.partSideNavItem} ${
                        isActivePart ? styles.partSideNavItemActive : ""
                      }`}
                      onClick={() => {
                        onSwitchPartInTest(p);
                        setIsPartsExpanded(false);
                      }}
                    >
                      <div className={styles.partSideNavLeft}>
                        <span className={styles.partNumCircle}>
                          {p.partNumber}
                        </span>
                        <span>{p.partTitle}</span>
                      </div>
                      <span className={styles.partCountBadge}>{p.totalCount}</span>
                    </button>
                  );
                })
              ) : (
                activePart && (
                  <button
                    className={`${styles.partSideNavItem} ${styles.partSideNavItemActive}`}
                    onClick={() => setIsPartsExpanded(true)}
                    title="Nhấn để mở danh sách chọn Part khác"
                  >
                    <div className={styles.partSideNavLeft}>
                      <span className={styles.partNumCircle}>
                        {activePart.partNumber}
                      </span>
                      <span>{activePart.partTitle}</span>
                    </div>
                    <span className={styles.partCountBadge}>
                      {activePart.totalCount}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className={styles.sideMenuDivider} />

            <button
              className={`${styles.sideMenuItem} ${
                studyMode === "flashcard" ? styles.sideMenuItemActive : ""
              }`}
              onClick={() => {
                setStudyMode("flashcard");
                onClose();
              }}
              style={{ marginBottom: "8px" }}
            >
              <div className={styles.sideMenuLabelBox}>
                <CardsIcon size={18} />
                <span>Học Flashcard</span>
              </div>
            </button>

            <button
              className={`${styles.sideMenuItem} ${
                studyMode === "list" ? styles.sideMenuItemActive : ""
              }`}
              onClick={() => {
                setStudyMode("list");
                onClose();
              }}
            >
              <div className={styles.sideMenuLabelBox}>
                <ListIcon size={18} />
                <span>Danh sách từ ({totalWords})</span>
              </div>
            </button>

            <div className={styles.sideMenuDivider} />

            <div className={styles.sideStatsBox}>
              <div className={styles.sideStatsTitle}>
                Tiến độ {selectedPart?.partTitle || "bộ đề"}
              </div>
              <div className={styles.sideStatsRow}>
                <span>Tổng số từ:</span>
                <span className={styles.sideStatsNumber}>{totalWords}</span>
              </div>
              <div className={styles.sideStatsRow}>
                <span>Đã thuộc:</span>
                <span className={styles.sideStatsNumber} style={{ color: "#059669" }}>
                  {masteredCount}
                </span>
              </div>
              <div className={styles.sideStatsRow}>
                <span>Chưa thuộc:</span>
                <span className={styles.sideStatsNumber} style={{ color: "#ef4444" }}>
                  {unmasteredCount}
                </span>
              </div>
              {notStudiedCount > 0 && (
                <div className={styles.sideStatsRow}>
                  <span>Chưa học:</span>
                  <span className={styles.sideStatsNumber} style={{ color: "#64748b" }}>
                    {notStudiedCount}
                  </span>
                </div>
              )}

              <div className={styles.sideProgressBar}>
                <div
                  className={styles.sideProgressFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <button className={styles.sideResetBtn} onClick={onResetProgress}>
                <RotateCcwIcon size={14} /> Đặt lại tiến độ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.sideMenuTitle}>Chế độ học</div>

            <button
              className={`${styles.sideMenuItem} ${
                studyMode === "flashcard" ? styles.sideMenuItemActive : ""
              }`}
              onClick={() => {
                setStudyMode("flashcard");
                onClose();
              }}
            >
              <div className={styles.sideMenuLabelBox}>
                <CardsIcon size={20} />
                <span>Thẻ Flashcard</span>
              </div>
            </button>

            <button
              className={`${styles.sideMenuItem} ${
                studyMode === "list" ? styles.sideMenuItemActive : ""
              }`}
              onClick={() => {
                setStudyMode("list");
                onClose();
              }}
            >
              <div className={styles.sideMenuLabelBox}>
                <ListIcon size={20} />
                <span>Danh sách từ</span>
              </div>
              <span className={styles.sideMenuBadge}>({totalWords})</span>
            </button>

            <div className={styles.sideMenuDivider} />

            <div className={styles.sideStatsBox}>
              <div className={styles.sideStatsTitle}>Tiến độ chủ đề</div>
              <div className={styles.sideStatsRow}>
                <span>Tổng số từ:</span>
                <span className={styles.sideStatsNumber}>{totalWords}</span>
              </div>
              <div className={styles.sideStatsRow}>
                <span>Đã thuộc:</span>
                <span className={styles.sideStatsNumber} style={{ color: "#059669" }}>
                  {masteredCount}
                </span>
              </div>
              <div className={styles.sideStatsRow}>
                <span>Chưa thuộc:</span>
                <span className={styles.sideStatsNumber} style={{ color: "#ef4444" }}>
                  {unmasteredCount}
                </span>
              </div>
              {notStudiedCount > 0 && (
                <div className={styles.sideStatsRow}>
                  <span>Chưa học:</span>
                  <span className={styles.sideStatsNumber} style={{ color: "#64748b" }}>
                    {notStudiedCount}
                  </span>
                </div>
              )}

              <div className={styles.sideProgressBar}>
                <div
                  className={styles.sideProgressFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <button className={styles.sideResetBtn} onClick={onResetProgress}>
                <RotateCcwIcon size={14} /> Đặt lại tiến độ
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
