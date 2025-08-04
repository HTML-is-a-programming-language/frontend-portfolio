export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Style" | "Tool";
}

export const skills: Skill[] = [
  { name: "HTML", icon: "🔤", category: "Frontend" },
  { name: "CSS", icon: "🎨", category: "Style" },
  { name: "JavaScript", icon: "📜", category: "Frontend" },
  { name: "TypeScript", icon: "🌀", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "⏭️", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", category: "Style" },
  { name: "Git/GitHub", icon: "🔧", category: "Tool" },
];
