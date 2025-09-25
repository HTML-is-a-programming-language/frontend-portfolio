import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "React 블로그 프로젝트",
    description:
        "React와 Firebase(Firestore)를 사용해 카테고리 기반 글쓰기/목록/정렬 UI를 구현하고 GitHub Pages로 배포한 학습형 블로그",
    tags: ["React", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/HTML-is-a-programming-language/blog",
    demo: "https://html-is-a-programming-language.github.io/blog/",
    cover: "/thumbs/react-blog.png",
    highlights: ["카테고리 탭/필터", "모달 글쓰기 UI", "최신순 정렬", "GitHub Pages 배포"],
    metrics: [
        { label: "Categories", value: "5" },
        { label: "Deploy", value: "GitHub Pages" }
    ],
    date: "2025-03-13",
    score: 70,
    caseStudy: {
        problem: "정적 페이지 구조에서 글 분류/정렬/작성 흐름을 반복 구현하기 비효율적",
        approach: [
            "컴포넌트 기반으로 목록/카테고리 탭/글쓰기 모달을 분리 설계",
            "Firebase Firestore에 컬렉션 저장(카테고리·제목·내용·작성시각) 및 쿼리(orderBy, where)로 목록/정렬",
            "CSS로 반응형 레이아웃과 리스트형 UI 구성",
            "GitHub Pages를 통해 정적 배포"
        ],
        result: [
            "카테고리 필터와 최신순 정렬로 탐색 흐름 개선",
            "모달 글쓰기로 작성 단계 단순화",
            "Firebase 연동 경험 및 GitHub Pages 배포 경험 축적"
        ],
        roleStack: "개발 100% · React, Firebase(Firestore), CSS, GitHub Pages"
    }
  },
];
