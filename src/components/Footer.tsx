import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <div className={styles.brandTitle}>
              TOEIC<span className={styles.brandTitleAccent}>GREEN</span>
            </div>
            <div className={styles.brandSub}>LUYỆN THI THÔNG MINH</div>
          </div>
        </div>

        <p className={styles.description}>
          Nền tảng học và luyện thi TOEIC trực tuyến hàng đầu, cung cấp kho đề thi chuẩn cấu trúc ETS, phương pháp học từ vựng thông minh và phân tích chi tiết lộ trình học tập.
        </p>

        <div className={styles.bottomBar}>
          <div>
            © 2026 <strong className={styles.copyrightBrand}>TOEIC Green</strong>. Mọi quyền được bảo lưu. Thiết kế dành cho học viên ôn thi TOEIC.
          </div>
          <div className={styles.links}>
            <Link href="#" className={styles.linkItem}>
              Điều khoản sử dụng
            </Link>
            <span className={styles.separator}>•</span>
            <Link href="#" className={styles.linkItem}>
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
