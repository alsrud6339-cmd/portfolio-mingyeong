"use client";

import { Fragment } from "react";
import Link from "next/link";
import styles from "@/app/home.module.css";

// 네비게이션 양(Sheep) 아이콘 임포트
import navSheepImg from "../../shared/assets/nav-sheep.png";

/* ── 탭 타입 정의 ── */
interface NavTab {
  label: string;
  number: string;
  /** 홈 페이지에서 스크롤할 섹션 ID */
  targetId?: string;
  /** 서브 페이지로 이동할 경로 */
  href?: string;
  hasArchive?: boolean;
}

/* ── 홈 페이지 기본 탭 데이터 (Figma 460:140 매핑) ── */
const homeTabs: NavTab[] = [
  { label: "Mean Girls", number: "[1]", targetId: "works" },
  { label: "Travel zine", number: "[2]", targetId: "works" },
  { label: "Name Card", number: "[3]", targetId: "namecards" },
  { label: "Commissioned Work", number: "[4]", targetId: "works" },
  { label: "Contact", number: "[5]", targetId: "footer" },
];

/* ── 서브 페이지 공통 탭 데이터 ── */
export const subPageTabs: NavTab[] = [
  { label: "Mean Girls", number: "[1]", href: "/mean-girls" },
  { label: "Travel zine", number: "[2]", href: "/#works" },
  { label: "Name Card", number: "[3]", href: "/#namecards" },
  { label: "Commissioned Work", number: "[4]", href: "/#works" },
  { label: "Contact", number: "[5]", href: "/#footer" },
];

/* ── Props ── */
interface SectionNavProps {
  /** 커스텀 탭 배열 — 미지정 시 홈 탭 사용 */
  tabs?: NavTab[];
  /** 현재 활성 탭 라벨 — 하이라이트 표시 */
  activeTab?: string;
}

/**
 * 재사용 가능한 인페이지 네비게이션
 * - 홈: targetId로 스크롤 이동
 * - 서브페이지: href로 라우팅
 */
export default function SectionNav({ tabs = homeTabs, activeTab }: SectionNavProps) {
  /** 스크롤 이동 핸들러 */
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.inPageNav}>
      <div className={styles.navTabsRow}>
        {tabs.map((tab) => (
          <Fragment key={tab.label}>
            {tab.href ? (
              /* ── 라우팅 모드 (Link) ── */
              <Link
                href={tab.href}
                className={styles.navTab}
                style={activeTab === tab.label ? { color: "var(--home-text-green)" } : undefined}
              >
                <span className={styles.navTabTop}>
                  <span className={styles.navLabelText}>{tab.label}</span>
                  {tab.hasArchive && <span className={styles.navArchive}>(archive)</span>}
                </span>
                <span className={styles.navNumber}>{tab.number}</span>
              </Link>
            ) : (
              /* ── 스크롤 모드 (button) ── */
              <button
                className={styles.navTab}
                onClick={() => tab.targetId && handleScrollTo(tab.targetId)}
                type="button"
              >
                <span className={styles.navTabTop}>
                  <span className={styles.navLabelText}>{tab.label}</span>
                  {tab.hasArchive && <span className={styles.navArchive}>(archive)</span>}
                </span>
                <span className={styles.navNumber}>{tab.number}</span>
              </button>
            )}
          </Fragment>
        ))}

        {/* ── 양(Sheep) 아이콘: 절대 위치 배치 (Name Card와 겹침) ── */}
        <img src={navSheepImg.src} alt="" className={styles.navSheepIcon} />
      </div>
    </nav>
  );
}
