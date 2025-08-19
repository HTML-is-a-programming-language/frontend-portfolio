import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "검색 성능 개선 실험",
    description: "Next.js로 SSR 캐싱·이미지 최적화·코드 스플리팅을 적용해 초기 로딩 체감을 낮춘 프로젝트",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/yourname/search-perf",
    demo: "https://search-perf-demo.vercel.app",
    cover: "/thumbs/search-perf.webp",
    highlights: ["LCP -28%", "A11y 97점", "불필요 렌더 제거"],
    metrics: [
      { label: "LCP", value: "-28%" },
      { label: "A11y", value: "97" },
      { label: "Build", value: "-15%" },
    ],
    date: "2025-08-18",
    score: 82,
    caseStudy: {
      problem: "초기 로딩 지연으로 주요 콘텐츠 노출이 늦고 이탈률 증가",
      approach: [
        "이미지 AVIF/WebP, Next/Image 도입",
        "동적 import로 코드 스플리팅 & 지연 로딩",
        "SSR 캐싱과 불필요 렌더 제거",
        "키보드 내비게이션/ARIA 점검",
      ],
      result: ["LCP -28%", "접근성 97점", "컴포넌트 재사용성↑, 유지보수성↑"],
      roleStack: "개발 100% · Next.js, React, TypeScript, Tailwind",
    },
  },
];
