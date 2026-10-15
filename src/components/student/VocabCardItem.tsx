import React from "react";
import Link from "next/link";
import styles from "@/styles/Student.module.css";
import {
  FileTextIcon,
  DollarIcon,
  BriefcaseIcon,
  UsersIcon,
  PlaneIcon,
  PackageIcon,
  BookIcon,
  RotateCcwIcon,
} from "@/components/Icons";
import { VocabTopic } from "@/data/seedData";

const renderVocabIcon = (type: string) => {
  switch (type) {
    case "contract":
      return <FileTextIcon size={22} color="#059669" />;
    case "finance":
      return <DollarIcon size={22} color="#d97706" />;
    case "business":
      return <BriefcaseIcon size={22} color="#d97706" />;
    case "personnel":
      return <UsersIcon size={22} color="#059669" />;
    case "travel":
      return <PlaneIcon size={22} color="#64748b" />;
    case "shopping":
      return <PackageIcon size={22} color="#64748b" />;
    default:
      return <BookIcon size={22} color="#059669" />;
  }
};

export default function VocabCardItem({ topic }: { topic: VocabTopic }) {
  const isCompleted = topic.status === "completed";
  const isInProgress = topic.status === "in_progress";
  const progressPercent =
    topic.totalCount > 0
      ? Math.round((topic.memorizedCount / topic.totalCount) * 100)
      : 0;

  return (
    <div className={styles.vocabCard}>
      <div>
        <div className={styles.vocabTopRow}>
          <div
            className={styles.vocabIconBox}
            style={{
              backgroundColor: isCompleted
                ? "#ecfdf5"
                : isInProgress
                  ? "#fffbeb"
                  : "#f8fafc",
            }}
          >
            {renderVocabIcon(topic.iconType)}
          </div>

          <div style={{ textAlign: "right" }}>
            <span
              className={
                isCompleted
                  ? styles.scoreStatusBadgeGreen
                  : isInProgress
                    ? styles.scoreStatusBadgeAmber
                    : styles.badgeMutedSoft
              }
              style={{ display: "inline-block", marginBottom: "4px" }}
            >
              {isCompleted ? "Đã học xong" : isInProgress ? "Đang học" : "Chưa học"}
            </span>
            <div className={styles.targetLevelLabel}>{topic.targetLevel}</div>
          </div>
        </div>

        <h3 className={styles.itemHeading}>{topic.title}</h3>
        <p className={styles.itemDesc}>{topic.description}</p>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.78rem",
              color: "#64748b",
              marginBottom: "6px",
            }}
          >
            <span>Tiến độ từ vựng:</span>
            <strong style={{ color: "#0f172a" }}>
              {topic.memorizedCount}/{topic.totalCount} từ ({progressPercent}%)
            </strong>
          </div>
          <div className={styles.progressBarThin}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                backgroundColor: isCompleted ? "#059669" : "#f59e0b",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <Link
          href="/vocabulary"
          className={`${
            isCompleted
              ? styles.btnSecondaryOutline
              : isInProgress
                ? styles.btnPrimaryAmber
                : styles.btnPrimaryGreen
          } ${styles.btnFullWidth}`}
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          {isCompleted && (
            <>
              <RotateCcwIcon
                size={15}
                style={{
                  display: "inline",
                  verticalAlign: "-2px",
                  marginRight: "6px",
                }}
              />
              Ôn tập lại ({topic.totalCount} từ)
            </>
          )}
          {isInProgress && (
            <>Học tiếp ({topic.memorizedCount}/{topic.totalCount} từ)</>
          )}
          {topic.status === "not_started" && (
            <>
              <BookIcon
                size={15}
                style={{
                  display: "inline",
                  verticalAlign: "-2px",
                  marginRight: "6px",
                }}
              />
              Bắt đầu học
            </>
          )}
        </Link>
      </div>
    </div>
  );
}
