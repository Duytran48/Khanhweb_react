import React from "react";
import Link from "next/link";
import styles from "@/styles/Student.module.css";
import {
  CalendarIcon,
  FlameIcon,
  TargetIcon,
  TrophyIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { UserProfile } from "@/data/seedData";

export default function StudentHero({ user }: { user: UserProfile }) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroGrid}>
        <div className={styles.heroLeftContent}>
          <div>
            <div className={styles.dateBadge}>
              <CalendarIcon size={16} />
              <span>
                Hôm nay, {user.greetingDate} – Chúc bạn ngày mới vui vẻ!
              </span>
            </div>

            <h1 className={styles.heroHeading}>
              Xin chào,{" "}
              <span className={styles.heroHeadingAccent}>
                {user.name} ({user.role})
              </span>
              !
            </h1>

            <p className={styles.heroDescription}>
              Hãy duy trì chuỗi học tập hôm nay để sớm đạt mục tiêu{" "}
              <strong className={styles.heroHeadingAccent}>800+ TOEIC</strong>. Bạn có thể xem
              tổng quan tiến độ hoặc bắt đầu luyện đề bên dưới.
            </p>
          </div>

          <div className={styles.statList}>
            <div className={styles.statCard}>
              <div className={styles.statIconFlame}>
                <FlameIcon size={18} color="#d97706" />
              </div>
              <div>
                <div className={styles.statLabel}>Chuỗi học tập</div>
                <div className={styles.statValue}>
                  {user.streakDays} Ngày liên tiếp
                </div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconTarget}>
                <TargetIcon size={18} color="#059669" />
              </div>
              <div>
                <div className={styles.statLabel}>Mục tiêu</div>
                <div className={styles.statValue}>{user.targetScore}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.todayGoalCard}>
          <div className={styles.goalTrophyIcon}>
            <TrophyIcon size={30} color="#059669" />
          </div>

          <h3 className={styles.goalTitle}>Mục tiêu hôm nay</h3>
          <p className={styles.goalText}>{user.todayGoalText}</p>

          <Link href="#de-thi" className={styles.btnGoalAction}>
            <span>Đến danh sách đề</span>
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
