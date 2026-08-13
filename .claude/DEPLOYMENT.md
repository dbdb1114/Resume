# 배포 가이드 (GitHub Pages)

> 이 프로젝트는 **GitHub Pages + `gh-pages` 브랜치** 방식으로 호스팅된다.

## 1. 현재 호스팅 구조

```
GitHub 저장소: dbdb1114/Resume
├── main 브랜치       ← 소스코드 (개발/작업 브랜치)
└── gh-pages 브랜치   ← 빌드 산출물(dist)만 존재, GitHub Pages가 이 브랜치를 서빙
```

- **공개 URL**: https://dbdb1114.github.io/Resume
- **서빙 브랜치**: `gh-pages` (루트에 `index.html`, `assets/`, `my_image.png`, `.nojekyll` 존재)
- **`.nojekyll`**: Jekyll 처리를 건너뛰게 하는 마커(있음). `_` 로 시작하는 파일 등이 무시되지 않게 함.
- **base path**: 저장소가 사용자 루트가 아닌 `/Resume/` 하위이므로 `vite.config.ts`에 `base: '/Resume/'` 설정됨. 이게 없으면 배포 시 asset 경로가 깨진다.

### 배포 파이프라인 (`package.json`)
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",   // deploy 전에 자동 실행됨
  "deploy": "gh-pages -d dist"     // dist/ 를 gh-pages 브랜치로 푸시
}
```
`gh-pages -d dist`는 `dist/` 폴더 내용을 `gh-pages` 브랜치에 커밋/푸시한다. CI 없이 **로컬에서 수동 배포**하는 구조.

## 2. 배포 방법 (실제 절차)

```bash
# 1. 의존성 설치 (최초 1회 또는 package.json 변경 시)
npm install

# 2. 로컬 확인 (선택) — http://localhost:3000
npm run dev

# 3. 배포 — build + gh-pages 푸시가 한 번에 실행됨
npm run deploy
```

`npm run deploy` 실행 시 내부적으로:
1. `predeploy` → `vite build` → `dist/` 생성
2. `deploy` → `gh-pages -d dist` → `gh-pages` 브랜치에 강제 푸시
3. 수 분 내 https://dbdb1114.github.io/Resume 반영

> ⚠️ **소스 커밋과 배포는 별개다.** `npm run deploy`는 `dist`만 `gh-pages`로 보낸다. `main`의 소스 변경은 별도로 `git add/commit/push` 해야 저장소에 남는다.

## 3. ⚠️ 현재 상태 점검 결과

- `main` 최신 커밋: **2026-01-18**
- `gh-pages` 최신 커밋: **2025-12-19**

즉, **배포본(gh-pages)이 소스(main)보다 뒤처져 있다.** main에 반영된 최근 변경(자격증명/날짜 수정, Portfolio 링크 추가, PDF 레이아웃 등)이 아직 실제 사이트에 배포되지 않았을 가능성이 높다. → 다음 배포 시 `npm run deploy` 한 번 실행하면 동기화된다.

## 4. 최초 GitHub Pages 설정 (참고)

이미 동작 중이라 재설정 불필요하지만, 저장소를 새로 팔 경우:
1. GitHub 저장소 → **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages` / `/ (root)` 선택 후 Save
4. `homepage`(package.json) + `base`(vite.config.ts)를 `https://<user>.github.io/<repo>` / `/<repo>/` 형식으로 맞춤

## 5. 향후 개선 옵션 (선택)

- **GitHub Actions 자동 배포**: main에 push하면 자동으로 build → 배포되도록 워크플로 추가하면 수동 `npm run deploy` 불필요 + main/gh-pages 불일치 방지. (`actions/deploy-pages` 또는 `peaceiris/actions-gh-pages`)
- **커스텀 도메인**: Settings → Pages → Custom domain + `public/CNAME` 파일 추가.
- **배포 전 체크리스트**: ① 소스 커밋/푸시 완료 → ② `npm run deploy` → ③ 시크릿 창에서 실제 URL 확인(캐시 회피).

## 6. 배포 시 주의사항 요약

| 항목 | 주의점 |
|------|--------|
| base 경로 | 저장소명 변경 시 `vite.config.ts` base + `package.json` homepage 동시 수정 |
| 소스 vs 배포 | `npm run deploy`는 dist만 배포. main 소스 push는 별도 |
| SPA 라우팅 | 현재 라우터 없음(단일 페이지). 라우터 추가 시 GH Pages는 404 fallback 필요 |
| 캐시 | 배포 후 반영 확인은 시크릿 창 권장 |
| 이미지 | 프로필 이미지가 GitHub raw URL 참조 — 저장소/경로 변경 시 깨짐 |
