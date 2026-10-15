import React from "react";
import Link from "next/link";
import styles from "@/styles/Student.module.css";
import {
  ExamIcon,
  BookIcon,
  GrammarIcon,
  ClockIcon,
  BarChartIcon,
  UsersIcon,
  EditIcon,
} from "@/components/Icons";
import { ProgressSummary } from "@/data/seedData";

export default function StudentProgressOverview({
  progress,
}: {
  progress: ProgressSummary;
}) {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeaderWithHint}>
        <h2 className={styles.sectionHeading} style={{ marginBottom: 0 }}>
          Tổng Quan Tiến Độ
        </h2>
        <div className={styles.swipeHintBadge}>
          <span>Lướt để xem thêm</span>
          <span className={styles.swipeHintArrow}>→</span>
        </div>
      </div>

      <div className={styles.overviewGrid}>
        {/* Recent Exam */}
        <div className={styles.overviewCard}>
          <div>
            <div className={styles.cardTopRow}>
              <span className={styles.badgeBlue}>
                <ExamIcon
                  size={14}
                  style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
                />
                Đề thi vừa hoàn thành
              </span>
              <span className={styles.timeMuted}>
                <ClockIcon
                  size={13}
                  style={{ display: "inline", verticalAlign: "-1px", marginRight: "4px" }}
                />
                {progress.lastExam.completedAt}
              </span>
            </div>

            <h4 className={styles.cardTitle}>{progress.lastExam.title}</h4>

            <div className={styles.scoreDonutRow}>
              <div className={styles.donutCircle}>
                <div className={styles.donutScore}>{progress.lastExam.score}</div>
                <div className={styles.donutMax}>/{progress.lastExam.maxScore} điểm</div>
              </div>

              <div className={styles.scoreDetails}>
                <div className={styles.scoreRowTarget}>
                  Mục tiêu:{" "}
                  <strong style={{ color: "#0f172a" }}>
                    {progress.lastExam.targetScore} đ
                  </strong>
                </div>
                <div>
                  Khoảng cách:{" "}
                  <strong style={{ color: "#2563eb" }}>
                    +{progress.lastExam.pointsNeeded} đ cần đạt
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.btnCardBlue}>
            <BarChartIcon
              size={16}
              style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
            />
            Xem lại đáp án và lời giải
          </button>
        </div>

        {/* Recent Vocab */}
        <div className={styles.overviewCard}>
          <div>
            <div className={styles.cardTopRow}>
              <span className={styles.badgeGreen}>
                <BookIcon
                  size={14}
                  style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
                />
                Từ vựng vừa xong
              </span>
              <span className={styles.timeMuted}>
                <ClockIcon
                  size={13}
                  style={{ display: "inline", verticalAlign: "-1px", marginRight: "4px" }}
                />
                {progress.lastVocab.completedAt}
              </span>
            </div>

            <div className={styles.vocabRow}>
              <div className={styles.iconBoxGreen}>
                <UsersIcon size={22} color="#059669" />
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "4px",
                  }}
                >
                  {progress.lastVocab.title}
                </h4>
                <div className={styles.vocabSubTitle}>{progress.lastVocab.subTitle}</div>
              </div>
            </div>

            <div className={styles.progressBox}>
              <div className={styles.progressLabelRow}>
                <span style={{ color: "#475569" }}>Đã ghi nhớ:</span>
                <strong style={{ color: "#059669" }}>
                  {progress.lastVocab.memorizedCount} / {progress.lastVocab.totalCount} từ
                </strong>
              </div>
              <div className={styles.progressBarTrack}>
                <div
                  className={styles.progressBarFillGreen}
                  style={{
                    width: `${(progress.lastVocab.memorizedCount / progress.lastVocab.totalCount) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <Link
            href="/vocabulary"
            className={styles.btnCardGreenOutline}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            + Học chủ đề mới
          </Link>
        </div>

        {/* Recent Grammar */}
        <div className={styles.overviewCard}>
          <div>
            <div className={styles.cardTopRow}>
              <span className={styles.badgeAmber}>
                <GrammarIcon
                  size={14}
                  style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
                />
                Ngữ pháp vừa học
              </span>
              <span className={styles.timeMuted}>
                <ClockIcon
                  size={13}
                  style={{ display: "inline", verticalAlign: "-1px", marginRight: "4px" }}
                />
                {progress.lastGrammar.studiedAt}
              </span>
            </div>

            <div className={styles.grammarCenter}>
              <div className={styles.grammarIconCircle}>
                <GrammarIcon size={26} color="#d97706" />
              </div>
              <h4 className={styles.grammarTitle}>{progress.lastGrammar.title}</h4>
            </div>
          </div>

          <button className={styles.btnCardAmberOutline}>
            <EditIcon
              size={16}
              style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
            />
            Làm bài tập củng cố
          </button>
        </div>
      </div>
    </section>
  );
}
