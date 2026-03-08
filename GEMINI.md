# 🌌 Antigravity Project Rules (Foundational Mandates)

이 파일의 지침은 모든 작업에서 절대적인 우선순위를 가집니다.

## 🚨 핵심 규칙 (Global Rules)

- **모든 코드 변경 시 반드시 한국어로 상세 주석을 작성하십시오.** (Write detailed comments in Korean for all code changes.)
- **CSS 주석 규칙**: 모든 CSS 속성/규칙에는 효과와 목적을 설명하는 한국어 주석을 반드시 작성합니다.
- **디자인 일관성**: 반드시 `globals.css`에 정의된 CSS 변수(`var(--home-*)`)를 사용하십시오.

## 📐 반응형 및 디자인 시스템 (1920px 기준)

- 모든 크기/위치는 Figma 1920px 기준으로 `vw` 변환 공식을 사용합니다.
- **공식**: `vw값 = Figma px값 / 1920 × 100`
- **폰트**: `clamp(최소px, 계산된vw, Figma원본px)` 형식을 사용합니다.
- **간격 시스템**:
  - `space-xs`: `clamp(8px, 0.73vw, 14px)` (14px)
  - `space-sm`: `clamp(10px, 1.04vw, 20px)` (20px)
  - `space-md`: `clamp(20px, 2.08vw, 40px)` (40px)
  - `space-lg`: `clamp(24px, 3.13vw, 60px)` (60px)
  - `space-xl`: `clamp(30px, 4.17vw, 80px)` (80px)

## 🖼 이미지 및 에셋 규칙

- **저장 경로**: `public/portfolio/`
- **Next.js Image 사용**:
  - 배경: `fill`, `priority` (LCP), `object-cover`
  - 고정 이미지: `width`, `height` 지정
  - 장식용 SVG: `<img>` 태그 사용 (alt="")

## 🛠 코드 컨벤션

- **파일명**: kebab-case (`hero-section.tsx`)
- **컴포넌트**: PascalCase (`HeroSection`)
- **애니메이션**: `motion/react`를 사용하며 `initial` → `whileInView` 패턴을 준수합니다.
- **Z-index**: 배경(0) < 콘텐츠(1) < 사진콜라주(1-8) < 사이드카드(10) 순서를 지킵니다.

---

_이 가이드는 `ANTIGRAVITY.md`를 기반으로 작성되었습니다. 모든 작업 시 이 규칙을 먼저 확인하고 준수하십시오._
