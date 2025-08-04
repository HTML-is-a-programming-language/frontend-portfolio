export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  period?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "정보처리기사 실기 연습 웹앱",
    description:
      "정보처리기사 실기 시험 준비를 위한 웹 애플리케이션입니다. C언어 코드 편집, 채점 시스템, 해설 제공 기능을 제공합니다.",
    tags: ["Next.js", "TypeScript", "CodeMirror", "Tailwind CSS"],
    github: "https://github.com/your-id/exam-practice",
    demo: "https://exam-practice.vercel.app",
    period: "2025.07 - 2025.08",
    role: "전체 기획, 프론트엔드 구현, 배포",
  },
  {
    title: "미니 블로그 플랫폼",
    description:
      "MDX를 기반으로 글 작성이 가능한 블로그. SEO 최적화 및 다크모드 적용.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/your-id/mini-blog",
    demo: "https://mini-blog.vercel.app",
    period: "2025.06 - 2025.07",
    role: "전체 구현",
  },
];
