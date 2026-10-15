"use client";

import React, { useState, useMemo } from "react";
import styles from "@/styles/Student.module.css";
import {
  seedUserData,
  seedProgress,
  seedExamList,
  seedVocabList,
} from "@/data/seedData";
import StudentHero from "@/components/student/StudentHero";
import StudentProgressOverview from "@/components/student/StudentProgressOverview";
import ExamCardItem from "@/components/student/ExamCardItem";
import VocabCardItem from "@/components/student/VocabCardItem";

const EXAM_CATEGORIES = [
  { id: "all", label: "Tất cả bộ đề" },
  { id: "ETS", label: "ETS" },
  { id: "HACKER", label: "HACKER" },
  { id: "BIG STEP", label: "BIG STEP" },
  { id: "ECONOMY", label: "ECONOMY" },
] as const;

export default function StudentDashboardPage() {
  const [selectedExamCategory, setSelectedExamCategory] = useState<string>("all");
  const [examStatusFilter, setExamStatusFilter] = useState<string>("all");
  const [vocabStatusFilter, setVocabStatusFilter] = useState<string>("all");

  const examCounts = useMemo(() => {
    let completed = 0;
    let inProgress = 0;
    for (const exam of seedExamList) {
      if (exam.status === "completed") completed++;
      else if (exam.status === "in_progress") inProgress++;
    }
    return { all: seedExamList.length, completed, inProgress };
  }, []);

  const vocabCounts = useMemo(() => {
    let completed = 0;
    let inProgress = 0;
    for (const v of seedVocabList) {
      if (v.status === "completed") completed++;
      else if (v.status === "in_progress") inProgress++;
    }
    return { all: seedVocabList.length, completed, inProgress };
  }, []);

  const filteredExams = useMemo(() => {
    return seedExamList.filter((exam) => {
      const matchCategory =
        selectedExamCategory === "all" || exam.category === selectedExamCategory;
      const matchStatus =
        examStatusFilter === "all" || exam.status === examStatusFilter;
      return matchCategory && matchStatus;
    });
  }, [selectedExamCategory, examStatusFilter]);

  const filteredVocab = useMemo(() => {
    return seedVocabList.filter((v) => {
      if (vocabStatusFilter === "all") return true;
      return v.status === vocabStatusFilter;
    });
  }, [vocabStatusFilter]);

  return (
    <>
      <StudentHero user={seedUserData} />

      <StudentProgressOverview progress={seedProgress} />

      {/* Exam Library */}
      <section id="de-thi" className={styles.sectionBlock}>
        <div className={styles.headerWithFilters}>
          <div className={styles.sectionHeaderWithHint}>
            <h2 className={styles.sectionHeading} style={{ marginBottom: 0 }}>
              Thư Viện Đề Thi
            </h2>
            <div className={styles.swipeHintBadge}>
              <span>Lướt để xem thêm</span>
              <span className={styles.swipeHintArrow}>→</span>
            </div>
          </div>

          <div className={styles.statusFilterGroup}>
            <button
              onClick={() => setExamStatusFilter("all")}
              className={`${styles.filterPill} ${
                examStatusFilter === "all"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Tất cả ({examCounts.all})
            </button>
            <button
              onClick={() => setExamStatusFilter("completed")}
              className={`${styles.filterPill} ${
                examStatusFilter === "completed"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Đã hoàn thành ({examCounts.completed})
            </button>
            <button
              onClick={() => setExamStatusFilter("in_progress")}
              className={`${styles.filterPill} ${
                examStatusFilter === "in_progress"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Đang làm dở ({examCounts.inProgress})
            </button>
          </div>
        </div>

        <div className={styles.categoryGroup}>
          <span className={styles.categoryLabel}>Bộ đề:</span>
          {EXAM_CATEGORIES.map(({ id, label }) => {
            const isSelected = selectedExamCategory === id;
            return (
              <button
                key={id}
                onClick={() => setSelectedExamCategory(id)}
                className={`${styles.categoryBtn} ${
                  isSelected
                    ? styles.categoryBtnActive
                    : styles.categoryBtnInactive
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className={styles.cardsGrid}>
          {filteredExams.map((exam) => (
            <ExamCardItem key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      {/* Vocabulary Topics */}
      <section id="tu-vung" className={styles.sectionBlock}>
        <div className={styles.headerWithFilters}>
          <div className={styles.sectionHeaderWithHint}>
            <h2 className={styles.sectionHeading} style={{ marginBottom: 0 }}>
              Chủ Đề Từ Vựng Đã Học
            </h2>
            <div className={styles.swipeHintBadge}>
              <span>Lướt để xem thêm</span>
              <span className={styles.swipeHintArrow}>→</span>
            </div>
          </div>

          <div className={styles.statusFilterGroup}>
            <button
              onClick={() => setVocabStatusFilter("all")}
              className={`${styles.filterPill} ${
                vocabStatusFilter === "all"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Tất cả ({vocabCounts.all})
            </button>
            <button
              onClick={() => setVocabStatusFilter("completed")}
              className={`${styles.filterPill} ${
                vocabStatusFilter === "completed"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Đã thuộc hết ({vocabCounts.completed})
            </button>
            <button
              onClick={() => setVocabStatusFilter("in_progress")}
              className={`${styles.filterPill} ${
                vocabStatusFilter === "in_progress"
                  ? styles.filterPillActive
                  : styles.filterPillInactive
              }`}
            >
              Đang học dở ({vocabCounts.inProgress})
            </button>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {filteredVocab.map((topic) => (
            <VocabCardItem key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </>
  );
}
