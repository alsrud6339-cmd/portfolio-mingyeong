"use client";

import { motion } from "motion/react";
import Image from "next/image";
import styles from "./book-society.module.css";
import SectionNav from "@/components/home/shared/section-nav";

// 이미지 자원들을 컴포넌트 내부에서 응집도 있게 관리하기 위해 임포트합니다.
import detailBgImg from "../shared/assets/detail-bg.png"; // 배경 이미지 임포트
import detailPhotoImg from "./assets/detail-photo.png"; // 상세 페이지 메인 사진 이미지 임포트

export default function BookSocietyDetail() {
  return (
    <div className={styles.page}>
      {/* ══════ 메인 카드 (Figma 437:418) ══════ */}
      <motion.div
        className={styles.card}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ══════ 네비게이션 — 카드 내부 ══════ */}
        <SectionNav variant="detail" activeTab="Book Society" />

        {/* ── 배경 이미지 — opacity 60% ── */}
        <div className={styles.bgImg}>
          <Image src={detailBgImg} alt="" fill priority className="object-cover" sizes="100vw" />
        </div>

        {/* ── 다크 오버레이 — 77% ── */}
        <div className={styles.overlay} />

        {/* ── "GIRL" 워터마크 (Figma 437:430) ── */}
        <p className={styles.workText}>WORK</p>

        {/* ══════ 좌측 텍스트 (Figma 437:434 등 — 다른 페이지와 위계 동기화) ══════ */}
        <motion.div
          className={styles.leftBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* 타이틀 (Oswald 30px) */}
          <p className={styles.txtTitle}>The Book Society Website Renewal (Partial Design)</p>

          {/* Editorial / Client Info */}
          <p className={styles.txtGreen18}>Editorial / Web UI Design</p>

          <p className={styles.txtGreen18} style={{ marginTop: "1.87vw" }}>
            The Book Society (Freelance / via Junosoft)
          </p>

          <p className={styles.txtGreen18} style={{ marginTop: "0.93vw" }}>
            2026.01.15 – 2026.01.31
          </p>

          {/* 본문 설명 */}
          <div className={styles.txtBody} style={{ marginTop: "0.47vw" }}>
            <p>
              <span className={styles.green}>The Book Society</span>는 서울 기반의 출판
              컬렉티브입니다.
            </p>
            <p>본 프로젝트는 웹사이트의 시각적 위계를 재정립하고,</p>
            <p>
              더 북 소사이어티만의 편집적 미학을 디지털 환경에 맞게 구현하는 것을 목표로 했습니다.
            </p>
          </div>

          {/* Design Focus */}
          <p className={styles.txtGreen18} style={{ marginTop: "1.4vw" }}>
            Design Focus
          </p>
          <ul className={styles.bullets}>
            <li>타이포그래피 중심의 강한 제목 구조 (Oswald / Bebas Neue)</li>
            <li>상단/중단/하단의 명확한 정보 위계 설계</li>
            <li>컬러를 통한 캐릭터 구분</li>
            <li>반복 구조를 활용한 시리즈화 가능성</li>
          </ul>

          {/* Contribution */}
          <p className={styles.txtGreen18} style={{ marginTop: "1.4vw" }}>
            Structure & Contribution
          </p>
          <ul className={styles.bullets}>
            <li>메인/서브 페이지 UI 디자인</li>
            <li>레이아웃 구조 설계</li>
            <li>콘텐츠 위계 정리</li>
            <li>타이포그래피 시스템 정리</li>
            <li>일부 페이지 리디자인 제안</li>
          </ul>
        </motion.div>

        {/* ══════ Typography 블록 (다른 페이지와 동기화) ══════ */}
        <motion.div
          className={styles.typographyBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className={styles.sectionLabel}>Typography</p>
          <p className={styles.rightBody}>
            <span className={styles.greenMedium}>OSWALD</span>와{" "}
            <span className={styles.greenMedium}>Bebas Neue</span>를 사용하여
            <br />
            강한 타이틀 중심 구조를 설계했습니다.
          </p>
        </motion.div>

        {/* ══════ Reflection 블록 (다른 페이지와 동기화) ══════ */}
        <motion.div
          className={styles.reflectionBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.sectionLabel}>Reflection</p>
          <p className={styles.rightBody}>
            이 프로젝트를 통해
            <br />
            출판물의 물리적 감각을 웹 레이아웃으로
            <br />
            치환하는 과정에서의 시각적 질서를 탐구했습니다.
          </p>
        </motion.div>

        {/* ══════ 우측 사진 영역 (Figma 437:448) ══════ */}
        <motion.div
          className={styles.rightBlock}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.photo}>
            {/* 임시 플레이스홀더: 사용자가 피그마에서 우측 영역 이미지를 추출해 교체해주어야 함 */}
            <Image
              src={detailPhotoImg}
              alt="The Book Society Website Renewal 프로젝트 메인 이미지"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
