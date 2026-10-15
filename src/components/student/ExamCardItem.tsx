import React from "react";
import styles from "@/styles/Student.module.css";
import {
  ClockIcon,
  HelpCircleIcon,
  UsersIcon,
  RotateCcwIcon,
  FileTextIcon,
  EditIcon,
} from "@/components/Icons";
import { ExamItem } from "@/data/seedData";

export default function ExamCardItem({ exam }: { exam: ExamItem }) {
  const isCompleted = exam.status === "completed";
  const isInProgress = exam.status === "in_progress";

  return (
    <div className={styles.examCard}>
      <div>
        <div className={styles.badgesRow}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span className={styles.badgeGreenSoft}>{exam.badgeType}</span>
            <span className={styles.badgeMutedSoft}>{exam.category}</span>
          </div>

          {exam.scoreBadge && (
            <span
              className={
                isCompleted
                  ? styles.scoreStatusBadgeGreen
                  : styles.scoreStatusBadgeAmber
              }
            >
              {exam.scoreBadge}
            </span>
          )}
        </div>

        <h3 className={styles.itemHeading}>{exam.title}</h3>
        <p className={styles.itemDesc}>{exam.description}</p>

        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.78rem",
              color: "#64748b",
              marginBottom: "6px",
            }}
          >
            <span>{isCompleted ? "Kết quả:" : "Tiến độ làm bài:"}</span>
            <span
              style={{
                fontWeight: 600,
                color: isCompleted ? "#059669" : "#0f172a",
              }}
            >
              {isCompleted ? "Đã hoàn thành 100%" : `${exam.progressPercent}%`}
            </span>
          </div>
          <div className={styles.progressBarThin}>
            <div
              style={{
                width: `${exam.progressPercent}%`,
                height: "100%",
                backgroundColor: isCompleted ? "#059669" : "#f59e0b",
              }}
            />
          </div>
        </div>

        <div className={styles.metaRow}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <ClockIcon size={14} /> {exam.durationMinutes} phút
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <HelpCircleIcon size={14} /> {exam.totalQuestions} câu
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <UsersIcon size={14} /> {exam.attemptCount}
          </span>
        </div>
      </div>

      <div className={styles.cardActionRow}>
        {isCompleted && (
          <>
            <button className={styles.btnSecondaryOutline}>
              <RotateCcwIcon
                size={15}
                style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
              />
              Làm lại
            </button>
            <button className={styles.btnSquareIconGreen}>
              <FileTextIcon size={16} color="#ffffff" />
            </button>
          </>
        )}

        {isInProgress && (
          <>
            <button className={styles.btnPrimaryAmber}>
              Làm tiếp ({exam.currentQuestion}/200)
            </button>
            <button className={styles.btnSquareIcon}>
              <HelpCircleIcon size={16} />
            </button>
          </>
        )}

        {exam.status === "not_started" && (
          <>
            <button className={styles.btnPrimaryGreen}>
              <EditIcon
                size={15}
                style={{ display: "inline", verticalAlign: "-2px", marginRight: "6px" }}
              />
              Làm bài
            </button>
            <button className={styles.btnSquareIcon}>
              <HelpCircleIcon size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
