# Changelog

모든 주요 변경사항을 기록합니다.
이 파일은 [Keep a Changelog](https://keepachangelog.com/) 가이드라인을 따릅니다.

### Added

- 새로 추가한 기능이나 컴포넌트
- 예: `ProjectCard` 컴포넌트 생성

### Changed

- 기존 기능을 수정하거나 리팩토링한 내역
- 예: `Header` 컴포넌트 스타일 조정

### Fixed

- 버그 수정 내역
- 예: 모바일 네비게이션 햄버거 메뉴 토글 버그 해결

### Removed

- 제거한 기능이나 파일
- 예: 사용하지 않는 `LegacyButton` 컴포넌트 삭제

## [Unreleased]

- Tailwind CSS, ESLint/Prettier 등 기본 개발 환경 설정

---

## [1.0.0] – 2025-06-25

### Added

- Next.js TypeScript 프로젝트 초기화 (`npx create-next-app --typescript`)
- Git 리포지토리 초기화 및 GitHub 원격 설정(SSH)
- Vercel 자동 배포 연동
- `Header` 컴포넌트 추가
- `tsconfig.json`에 `@/*` 경로 별칭 설정

### Fixed

- Git 커밋 초기화 이슈 해결(Windows CRLF 경고)
- `@headlessui/react`·`@heroicons/react` 모듈 인식 오류 해결

## [1.0.1] – 2025-06-26

### Added (Blog)

- MDX 기반 자체 블로그 기능 추가
  - `posts/*.mdx` 콘텐츠 디렉토리 구성
  - `lib/posts.ts`: `getAllPostsMeta`, `getPostBySlug` 유틸 함수 작성
  - `/pages/blog/index.tsx`: 블로그 리스트 페이지 구현
  - `/pages/blog/[slug].tsx`: 동적 포스트 페이지 구현
  - `MDXComponents`로 이미지·링크·코드 블록 커스터마이징
  - Tailwind Typography(`prose`) 통합 스타일링
