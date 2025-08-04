import { skills } from "@/data/skills";
import SkillBadge from "@/components/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">🛠 기술 스택</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </ul>
    </section>
  );
}
