export type Skill = {
  name: string;
  level: number;
  category: "Frontend" | "Styling" | "Tooling" | "Versioning";
  lastUsed: string;
  usedIn?: string;
};

export const skillsPro: Skill[] = [
  { name: "React",      level: 78, category: "Frontend",  lastUsed: "2025-08-24", usedIn: "/projects#react-app" },
  { name: "Next.js",    level: 72, category: "Frontend",  lastUsed: "2025-08-24", usedIn: "/projects#portfolio" },
  { name: "TypeScript", level: 70, category: "Frontend",  lastUsed: "2025-08-23", usedIn: "/projects#ts-refactor" },

  { name: "Tailwind CSS", level: 82, category: "Styling", lastUsed: "2025-08-24", usedIn: "/projects#portfolio" },
  { name: "HTML",         level: 90, category: "Styling", lastUsed: "2025-08-18" },
  { name: "CSS",          level: 88, category: "Styling", lastUsed: "2025-08-18" },

  { name: "Git",    level: 65, category: "Versioning", lastUsed: "2025-08-24" },
  { name: "GitHub", level: 65, category: "Versioning", lastUsed: "2025-08-24" },

  { name: "npm",             level: 70, category: "Tooling", lastUsed: "2025-08-24", usedIn: "/projects#portfolio" },
  { name: "ESLint",          level: 80, category: "Tooling", lastUsed: "2025-08-24", usedIn: "/projects#ts-refactor" },
  { name: "Prettier",        level: 85, category: "Tooling", lastUsed: "2025-08-24", usedIn: "/projects#ts-refactor" },
  { name: "Vercel",          level: 75, category: "Tooling", lastUsed: "2025-08-24", usedIn: "/projects#portfolio" },
  { name: "GitHub Actions",  level: 58, category: "Tooling", lastUsed: "2025-08-10", usedIn: "/projects#ci-cd" },
];
