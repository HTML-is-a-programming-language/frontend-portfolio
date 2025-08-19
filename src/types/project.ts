export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  cover?: string; // /thumbs/xxx.webp
  highlights?: string[]; // 핵심 포인트
  metrics?: { label: string; value: string }[]; // 간단 지표
  date?: string; // ISO (정렬용)
  score?: number; // 인기/성과 정렬용
  // (원하면 caseStudy도 아래처럼 확장 가능)
  caseStudy?: {
    problem?: string;
    approach?: string[];
    result?: string[];
    roleStack?: string;
  };
};
