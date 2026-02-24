"use client";

import { motion } from "motion/react";
import Image from "next/image";
import styles from "@/app/home.module.css";

/* ── 상단: MEAN 이미지 두 장 가로 나란히 (Figma 302:693 + 304:737) ── */
export default function MeanCardRow() {
  return (
    <div className={styles.meanRow}>
      <motion.div
        className={styles.meanImgWrap}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/portfolio/mean-card-1.png"
          alt="MEAN 컴포지션 좌측"
          fill
          className={styles.meanImg}
          sizes="50vw"
        />
      </motion.div>
      <motion.div
        className={styles.meanImgWrap}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/portfolio/mean-card-2.png"
          alt="MEAN 컴포지션 우측"
          fill
          className={styles.meanImg}
          sizes="50vw"
        />
      </motion.div>
    </div>
  );
}
