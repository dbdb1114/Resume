# 이력서(Resume) 프로젝트 분석

> 유정현 개인 이력서 웹사이트. Figma 디자인을 기반으로 코드화된 React SPA.

## 1. 개요

- **프로젝트명**: resume2 (`package.json` name)
- **목적**: 웹 개발자 유정현의 온라인 이력서 + PDF 출력
- **원본**: Figma 디자인 (`이력서 양식 만들기`)에서 코드 번들로 export
- **저장소**: https://github.com/dbdb1114/Resume
- **배포 URL**: https://dbdb1114.github.io/Resume (GitHub Pages, `homepage` 필드)

## 2. 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| 빌드/번들러 | Vite 6.3.5 + `@vitejs/plugin-react-swc` |
| 프레임워크 | React 18.3.1 (SPA, 라우터 없음) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS + shadcn/ui 스타일 컴포넌트 |
| UI 라이브러리 | Radix UI 전면 도입 (`src/components/ui/*`) |
| 애니메이션 | `motion` (framer-motion) |
| 테마 | 다크/라이트 직접 구현 (`document.documentElement.classList` + localStorage) |
| PDF 출력 | `react-to-print` + `window.print()` |
| 배포 | `gh-pages` npm 패키지 |

## 3. 디렉토리 구조

```
Resume/
├── index.html              # Vite 엔트리 (root div + main.tsx)
├── vite.config.ts          # base: '/Resume/', 별칭 다수, port 3000
├── package.json            # scripts: dev / build / predeploy / deploy
├── dist/                   # 빌드 산출물 (gh-pages 배포 대상)
├── public/my_image.png     # 프로필 이미지
└── src/
    ├── main.tsx            # createRoot 엔트리
    ├── App.tsx             # 레이아웃 + 테마토글 + 프린트 조립
    ├── index.css / styles/globals.css
    └── components/
        ├── ResumeHeader.tsx      # 프로필 사진, 이름, 연락처
        ├── AboutSection.tsx      # 소개
        ├── SkillsSection.tsx     # 기술 스택
        ├── EducationSection.tsx  # 교육 과정 + 자격증
        ├── ExperienceSection.tsx # 경력 (회사 3곳)
        ├── ProjectsSection.tsx   # 프로젝트 (4개)
        ├── ContactSection.tsx    # 연락처 (App.tsx에서 주석 처리됨)
        ├── ThemeToggle.tsx
        ├── ui/                    # shadcn/Radix 컴포넌트 모음
        └── figma/ImageWithFallback.tsx
```

## 4. 이력서 내용 (데이터 요약)

이력서 데이터는 각 컴포넌트 파일에 **하드코딩된 배열/JSX**로 존재. 별도 데이터 파일 없음.

### 인적사항 (`ResumeHeader.tsx`)
- 이름: 유정현 / 직무: 웹 개발자
- 이메일: dbdb1114@naver.com
- GitHub: https://github.com/dbdb1114
- Portfolio: https://dbdb1114.github.io/portpolio
- 위치: 경기도 성남시 중원구 하대원동
- 전화: 010-5421-5350
- 프로필 이미지: GitHub raw URL 참조 (`public/my_image.png?raw=true`)

### 기술 스택 (`SkillsSection.tsx`)
- 프론트엔드: Next, React, Markup, Recoil, Tailwind CSS, React Query
- 백엔드: Spring Boot, Spring WebFlux, PostgreSQL, MySQL, Redis
- 도구/기타: Git, Docker, nGrinder, Scouter
- 언어: Java, JavaScript, SQL

### 경력 (`ExperienceSection.tsx`) — 3개사
1. **제타럭스 시스템** / 웹 개발자 / 2024.07 – 2025.01
2. **소프트디비 코리아** / 웹 개발자(인턴) / 2023.09 – 2023.12
3. **주식회사 이상** / 웹 개발자(프리랜서) / 2023.03 – 2023.07

### 프로젝트 (`ProjectsSection.tsx`) — 4개
1. 한국사 능력 검정 시험 학습 서비스 (React/Next/TanStackQuery/Spring Boot/MySQL)
2. 공공기관 공간·데이터 관리 시스템 (VanillaJS/Java/Spring/MyBatis/PostgreSQL)
3. 콜센터 민원관리 웹 애플리케이션 UI/UX 개선 (Spring/jQuery/Oracle→MariaDB)
4. FEMS 공장 데이터 시각화 웹 시스템 (ChartJS/Thymeleaf/Java/Spring Boot)

### 교육/자격증 (`EducationSection.tsx`)
- 교육: Redis & MSA 활용 교육 (5개월) — WebFlux, Spring Cloud, MSA, JPA
- 자격증: 정보처리기사(2025.12), 컴퓨터활용능력 2급(2025.05)

## 5. 주요 동작 메커니즘

- **테마**: `App.tsx`에서 최초 렌더 시 localStorage `theme` 또는 OS `prefers-color-scheme`로 다크 여부 결정. 토글 시 `<html>`에 `dark` 클래스 토글 + localStorage 저장.
- **PDF 출력**: 화면 하단 "이력서 출력" 버튼 → `window.print()`. `@page { size: A4; margin: 0 }` 프린트 스타일 적용. (`useReactToPrint`도 설정돼 있으나 버튼은 `window.print()`를 직접 호출)
- **애니메이션**: 각 섹션이 `whileInView`로 스크롤 진입 시 페이드/슬라이드.

## 6. 수정 시 참고사항

- **이력서 내용 변경**: 해당 섹션 컴포넌트의 상단 배열/JSX를 직접 수정 (예: 경력 추가는 `ExperienceSection.tsx`의 `experiences` 배열).
- **base 경로**: `vite.config.ts`의 `base: '/Resume/'`는 GitHub Pages 서브경로 배포용. 저장소명이 바뀌면 이 값과 `package.json` `homepage`도 함께 수정 필요.
- **ContactSection**: 현재 `App.tsx`에서 주석 처리되어 렌더링되지 않음.
- 이메일 링크(`mailto:example@email.com`)와 전화 링크(`tel:010-1234-5678`)의 href가 표시 텍스트와 불일치 — 필요 시 수정 권장.
