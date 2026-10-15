import React from "react";
import styles from "@/styles/Vocabulary.module.css";
import {
  BookIcon,
  FileTextIcon,
  TargetIcon,
  ArrowRightIcon,
  EyeIcon,
  GamepadIcon,
  DollarIcon,
  BriefcaseIcon,
  UsersIcon,
  PlaneIcon,
  PackageIcon,
} from "@/components/Icons";
import {
  VocabTopic,
  ExamSeriesItem,
  ExamTestSet,
  seedExamSeriesList,
} from "@/data/seedData";

interface VocabCatalogViewProps {
  selectedCategory: "topic" | "part";
  setSelectedCategory: (cat: "topic" | "part") => void;
  catalogStatusFilter: string;
  setCatalogStatusFilter: (filter: string) => void;
  filteredTopics: (VocabTopic & { percent: number })[];
  topicCount: number;
  selectedSeries: ExamSeriesItem | null;
  setSelectedSeries: (series: ExamSeriesItem) => void;
  setSelectedTest: (test: ExamTestSet | null) => void;
  onSelectTopic: (topic: VocabTopic) => void;
  onStartLearnTest: (
    test: ExamTestSet,
    series: ExamSeriesItem | null,
    mode: "flashcard" | "list",
  ) => void;
}

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

export default function VocabCatalogView({
  selectedCategory,
  setSelectedCategory,
  catalogStatusFilter,
  setCatalogStatusFilter,
  filteredTopics,
  topicCount,
  selectedSeries,
  setSelectedSeries,
  setSelectedTest,
  onSelectTopic,
  onStartLearnTest,
}: VocabCatalogViewProps) {
  return (
    <div>
      <div className={styles.heroBanner}>
        <div>
          <h1 className={styles.pageTitle}>
            {selectedCategory === "topic"
              ? "Từ Vựng TOEIC Theo Chủ Đề"
              : "Từ Vựng Theo Từng Part Bộ Đề"}
          </h1>
          <p className={styles.pageSubtitle}>
            {selectedCategory === "topic"
              ? "Hệ thống 600 từ vựng cốt lõi thường xuất hiện nhất trong bài thi TOEIC thực tế, chia theo các ngữ cảnh kinh doanh, tài chính, hợp đồng và văn phòng."
              : "Từ vựng trích xuất trực tiếp từ các đề thi thật (ETS TOEIC, Hacker TOEIC), phân chia chi tiết theo từng Part (Part 1, 2, 5, 7) giúp tăng phản xạ làm bài thi."}
          </p>
        </div>

        <div className={styles.statsOverview}>
          <div className={styles.statBadge}>
            <div className={styles.statIconBox}>
              {selectedCategory === "topic" ? (
                <BookIcon size={22} />
              ) : (
                <FileTextIcon size={22} />
              )}
            </div>
            <div>
              <div className={styles.statNumber}>
                {selectedCategory === "topic"
                  ? filteredTopics.length
                  : seedExamSeriesList.length}
              </div>
              <div className={styles.statLabel}>
                {selectedCategory === "topic" ? "Chủ đề luyện" : "Bộ đề luyện thi"}
              </div>
            </div>
          </div>

          <div className={styles.statBadge}>
            <div className={styles.statIconBox}>
              <TargetIcon size={22} />
            </div>
            <div>
              <div className={styles.statNumber}>
                {selectedCategory === "topic" ? "600+" : "18 Đề thi"}
              </div>
              <div className={styles.statLabel}>
                {selectedCategory === "topic" ? "Từ vựng trọng tâm" : "Test 1 đến 6"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controlsBar}>
        <div className={styles.categoryPillsWrapper}>
          <button
            className={`${styles.categoryPillBtn} ${
              selectedCategory === "topic" ? styles.categoryPillBtnActive : ""
            }`}
            onClick={() => {
              setSelectedCategory("topic");
              setSelectedTest(null);
            }}
          >
            <BookIcon size={18} />
            <span>Theo chủ đề</span>
            <span className={styles.categoryPillBadge}>{topicCount}</span>
          </button>

          <button
            className={`${styles.categoryPillBtn} ${
              selectedCategory === "part" ? styles.categoryPillBtnActive : ""
            }`}
            onClick={() => {
              setSelectedCategory("part");
              if (!selectedSeries) {
                setSelectedSeries(seedExamSeriesList[0]);
              }
            }}
          >
            <FileTextIcon size={18} />
            <span>Theo Part (Bộ đề)</span>
            <span className={styles.categoryPillBadge}>
              {seedExamSeriesList.length} bộ đề
            </span>
          </button>
        </div>

        {selectedCategory === "topic" && (
          <div className={styles.filterTabs}>
            <button
              className={`${styles.filterBtn} ${
                catalogStatusFilter === "all"
                  ? styles.filterBtnActive
                  : styles.filterBtnInactive
              }`}
              onClick={() => setCatalogStatusFilter("all")}
            >
              Tất cả ({filteredTopics.length})
            </button>
            <button
              className={`${styles.filterBtn} ${
                catalogStatusFilter === "in_progress"
                  ? styles.filterBtnActive
                  : styles.filterBtnInactive
              }`}
              onClick={() => setCatalogStatusFilter("in_progress")}
            >
              Đang học
            </button>
            <button
              className={`${styles.filterBtn} ${
                catalogStatusFilter === "completed"
                  ? styles.filterBtnActive
                  : styles.filterBtnInactive
              }`}
              onClick={() => setCatalogStatusFilter("completed")}
            >
              Đã hoàn thành
            </button>
          </div>
        )}
      </div>

      {selectedCategory === "topic" && (
        <div className={styles.topicGrid}>
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className={styles.topicCard}
              onClick={() => onSelectTopic(topic)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <div className={styles.topicHeader}>
                  <div className={styles.topicIconBox}>
                    {getTopicIcon(topic.iconType)}
                  </div>
                  <span
                    className={
                      topic.status === "completed"
                        ? styles.badgeSuccess
                        : topic.status === "in_progress"
                          ? styles.badgeWarning
                          : styles.badgeDefault
                    }
                  >
                    {topic.status === "completed"
                      ? "Đã xong"
                      : topic.status === "in_progress"
                        ? "Đang học"
                        : "Chưa học"}
                  </span>
                </div>

                <h2 className={styles.topicTitle}>{topic.title}</h2>
                <p className={styles.topicDesc}>{topic.description}</p>
              </div>

              <div>
                <div className={styles.progressSection}>
                  <div className={styles.progressRow}>
                    <span>Đã thuộc:</span>
                    <strong>
                      {topic.memorizedCount}/{topic.totalCount} từ ({topic.percent}%)
                    </strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${topic.percent}%` }}
                    />
                  </div>
                </div>

                <button
                  className={`${styles.btnAction} ${
                    topic.status === "in_progress"
                      ? styles.btnActionPrimary
                      : styles.btnActionOutline
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTopic(topic);
                  }}
                >
                  Học chủ đề này <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCategory === "part" && (
        <div className={styles.drillDownSection}>
          <div className={styles.seriesFilterScrollBar}>
            {seedExamSeriesList.map((series) => {
              const isCurrent = selectedSeries?.id === series.id;
              return (
                <button
                  key={series.id}
                  className={`${styles.seriesFilterPill} ${
                    isCurrent ? styles.seriesFilterPillActive : ""
                  }`}
                  onClick={() => setSelectedSeries(series)}
                >
                  {series.shortLabel}
                </button>
              );
            })}
          </div>

          <div className={styles.screenshotTestsGrid}>
            {selectedSeries?.tests.map((test) => (
              <div key={test.id} className={styles.screenshotTestCard}>
                <div>
                  <span className={styles.screenshotTestTag}>
                    {selectedSeries.shortLabel}
                  </span>

                  <h3 className={styles.screenshotTestTitle}>{test.title}</h3>

                  <div className={styles.screenshotTestWordCount}>
                    {test.totalWords} từ vựng
                  </div>
                </div>

                <div className={styles.screenshotTestBtnRow}>
                  <button
                    className={styles.btnTestSecondary}
                    onClick={() => onStartLearnTest(test, selectedSeries, "list")}
                    title="Xem danh sách từ của đề này"
                  >
                    <EyeIcon size={16} /> Xem từ
                  </button>

                  <button
                    className={styles.btnTestSecondary}
                    onClick={() =>
                      onStartLearnTest(test, selectedSeries, "flashcard")
                    }
                    title="Học từ vựng dạng flashcard"
                  >
                    <BookIcon size={16} /> Học
                  </button>

                  <button
                    className={styles.btnTestSecondary}
                    onClick={() =>
                      onStartLearnTest(test, selectedSeries, "flashcard")
                    }
                    title="Luyện tập trắc nghiệm / game"
                  >
                    <GamepadIcon size={16} /> Chơi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
