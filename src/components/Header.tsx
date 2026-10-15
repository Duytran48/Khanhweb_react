'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Header.module.css';
import { HomeIcon, ExamIcon, BookIcon, GrammarIcon } from '@/components/Icons';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'trang-chu', label: 'Trang chủ', icon: <HomeIcon size={17} />, href: '/' },
  { id: 'de-thi', label: 'Đề thi', icon: <ExamIcon size={17} />, href: '/#de-thi' },
  { id: 'tu-vung', label: 'Từ vựng', icon: <BookIcon size={17} />, href: '/vocabulary' },
  { id: 'ngu-phap', label: 'Ngữ pháp', icon: <GrammarIcon size={17} />, href: '/#ngu-phap' },
];

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('trang-chu');

  useEffect(() => {
    if (pathname.startsWith('/vocabulary')) {
      setActiveTab('tu-vung');
    } else {
      setActiveTab('trang-chu');
    }
  }, [pathname]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const updateIndicator = (tabId: string) => {
    const currentTabEl = tabRefs.current[tabId];
    if (currentTabEl) {
      setIndicatorStyle({
        left: currentTabEl.offsetLeft,
        width: currentTabEl.offsetWidth,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeTab);

    const handleResize = () => {
      updateIndicator(activeTab);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <div className={styles.logoTitle}>
              TOEIC<span className={styles.logoTitleAccent}>GREEN</span>
            </div>
            <div className={styles.logoSub}>Mastery Learning</div>
          </div>
        </Link>

        {/* Navigation */}
        <div className={styles.navWrapper}>
          <nav className={styles.navContainer}>

            <div
              className={styles.slidingIndicator}
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  ref={(el) => {
                    tabRefs.current[item.id] = el;
                  }}
                  onClick={() => {
                    setActiveTab(item.id);
                    updateIndicator(item.id);
                  }}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Auth */}
        <div className={styles.actionsContainer}>
          <button className={styles.btnLogin}>
            Đăng nhập
          </button>

          <button className={styles.btnRegister}>
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}
