import { skills } from "@/data/skills";
import SectionTitle from "@/components/SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container min-h-[calc(100dvh-73px)]"
    >
      <SectionTitle>🛠 기술 스택</SectionTitle>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white px-4 py-2 rounded-full text-sm sm:text-base"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
