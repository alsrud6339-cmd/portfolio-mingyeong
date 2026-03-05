"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/home.module.css";
import { meanCardData } from "./portfolio-data";

/* ── 상단: MEAN 이미지 두 장 가로 나란히 (하나의 섹션으로 취급) ── */
export default function MeanCard() {
  return (
    <section id="mean-girls" className="relative">
      {/* 전체 Row를 하나의 Link와 portfolioItem으로 감싸서 통합 호버 효과 적용 */}
      <Link href="/mean-girls" className={styles.portfolioItem}>
        <div className={styles.meanRow}>
          {meanCardData.map((card, i) => (
            <motion.div
              key={i}
              className={styles.meanImgWrap}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={1928}
                height={776}
                className={styles.meanImg}
                sizes="50vw"
              />
            </motion.div>
          ))}
        </div>

        {/* ── 통합 호버 오버레이: 두 이미지 전체를 덮음 ── */}
        <div className={styles.portfolioOverlay}>
          <span className={styles.viewMoreLabel}>VIEW MORE</span>
        </div>
      </Link>
    </section>
  );
}
