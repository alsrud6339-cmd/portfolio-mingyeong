"use client";

import styles from "@/app/home.module.css";

interface SectionBarProps {
  /** github URL 대신 표시할 텍스트 (일부 푸터바는 이메일, 일부는 GitHub) */
  variant?: "github" | "email";
}

/**
 * 섹션별 하단 고정 바 (sticky; bottom: 0)
 * 부모 섹션 범위 내에서만 고정됨 — About, Footer 섹션 내부에 배치
 * PARK MIN GYEONG / resume / info / 링크 / ©2026
 */
export default function SectionBar({ variant = "email" }: SectionBarProps) {
  return (
    <div className={styles.footerBar}>
      <span>PARK MIN GYEONG</span>

      {/* ── PDF 링크 (다른 텍스트들과 동일한 위상으로 배치하여 폰트 크기 통일) ── */}
      <a
        href="/assets/pdf/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[#DCFADA]"
      >
        resume
      </a>
      <a
        href="/assets/pdf/info.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[#DCFADA]"
      >
        info
      </a>

      {variant === "github" ? (
        <a
          href="https://github.com/alsrud6339-cmd"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          https://github.com/alsrud6339-cmd
        </a>
      ) : (
        <span>alsrud6339@gmail.com</span>
      )}

      <span>©2026</span>
    </div>
  );
}
