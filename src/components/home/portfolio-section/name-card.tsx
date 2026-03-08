"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";

/**
 * 명함 섹션 컴포넌트
 * 전체 영역을 하나의 단위로 묶어 통합 호버 효과(VIEW MORE)를 적용
 */
export default function NameCard() {
  const images = ["/portfolio/namecard1.png", "/portfolio/namecard2.png"];

  return (
    <section id="name-cards" className="relative">
      <Link href="/name-card" className={styles.portfolioItem}>
        <div className={styles.meanRow}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={styles.meanImgWrap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className={styles.nameCard}>
                <Image
                  src={src}
                  alt={`Name Card ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 통합 호버 오버레이 ── */}
        <div className={styles.portfolioOverlay}>
          <span className={styles.viewMoreLabel}>VIEW MORE</span>
        </div>
      </Link>
    </section>
  );
}
