# mulkkachi 사이트 교체 가이드

이 폴더의 파일들을 `blue-bar` 저장소의 같은 경로에 그대로 덮어쓰면 새 디자인으로 교체됩니다.

## 1. 삭제할 것

- `src/pages/index.astro`, `about.astro` → 이 폴더의 새 버전으로 교체
- `src/pages/works/`, `src/pages/blog/`, `src/pages/city-question/` → 이 폴더의 새 버전으로 교체 (city-question은 `.md` 정적 페이지 대신 콘텐츠 컬렉션 구조로 바뀌었으니 기존 `city-question/city-as-question.md`는 삭제)
- `src/content/blog/first-post.md`, `second-post.md`, `third-post.md`, `markdown-style-guide.md`, `using-mdx.mdx` → 전부 삭제 (플레이스홀더였던 글)
- `src/content/timeline/` → 사용하지 않음, 삭제해도 무방
- `src/layouts/BlogPost.astro`, `src/components/MulkkachiHero.astro`, `src/components/HeaderLink.astro`, `src/components/FormattedDate.astro` → 더 이상 쓰지 않음, 삭제해도 무방
- `src/assets/` 안의 blog-placeholder 이미지들, `src/assets/fonts/` (Atkinson) → 삭제해도 무방
- `public/fonts/MulkkachiHandTest-Regular.woff2` → 삭제해도 무방 (Barlow Condensed/Barlow로 통일)

## 2. 이 폴더의 파일을 그대로 덮어쓰기

```
astro.config.mjs                          → 루트
src/consts.ts                             → src/consts.ts
src/content.config.ts                     → src/content.config.ts
src/styles/global.css                     → src/styles/global.css
src/components/Header.astro               → src/components/Header.astro
src/components/Footer.astro               → src/components/Footer.astro
src/components/BaseHead.astro             → src/components/BaseHead.astro
src/pages/index.astro                     → src/pages/index.astro
src/pages/about.astro                     → src/pages/about.astro
src/pages/works/index.astro               → src/pages/works/index.astro
src/pages/works/[slug].astro              → src/pages/works/[slug].astro
src/pages/blog/index.astro                → src/pages/blog/index.astro
src/pages/blog/[slug].astro               → src/pages/blog/[slug].astro (기존 [...slug].astro는 삭제)
src/pages/city-question/index.astro       → src/pages/city-question/index.astro
src/pages/city-question/[slug].astro      → src/pages/city-question/[slug].astro
src/content/works/*.md (5개)              → src/content/works/ (기존 5개 파일을 이 내용으로 교체)
src/content/blog/*.md (3개, 신규)         → src/content/blog/
src/content/city-question/*.md (2개, 신규)→ src/content/city-question/ (새 폴더)
public/images/**                          → public/images/ (신규 폴더, 전체 복사)
```

## 3. 주의할 것 — 영상 파일 1개는 직접 복사해야 합니다

창신동 스파이 찌디 웍스의 영상 파일은 파일명 인코딩 문제로 여기서 자동으로 옮기지 못했습니다.
`public/images/works/changsindong/hero.mp4` 자리에, 갖고 계신 "창신동스파이찌디" 영상 파일을 직접 이름을 `hero.mp4`로 바꿔서 넣어주세요.
(난곡사람 영상은 `public/images/works/nangok/hero.mp4`로 이미 포함되어 있습니다.)

## 4. 배포

파일을 옮긴 뒤 `npm install`, `npm run build`로 로컬에서 한 번 빌드 확인 후 커밋 + 푸시하면 Vercel이 자동 배포합니다.

## 5. 이후 게시물 추가 방법

- 웍스: `src/content/works/`에 `.md` 파일 하나 추가 (기존 파일 형식 그대로 복사해서 값만 바꾸면 됨)
- 웹진: `src/content/blog/`에 `.md` 파일 하나 추가 (`tag`는 LIFE·INFRA·DESIGN 중 하나)
- 도시질문: `src/content/city-question/`에 `.md` 파일 하나 추가

이미지는 `public/images/` 안에 원하는 폴더를 만들어 넣고, frontmatter에서 `/images/...` 경로로 지정하면 됩니다.
