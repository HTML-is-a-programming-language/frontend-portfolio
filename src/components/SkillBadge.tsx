interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li className="bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white px-4 py-2 rounded-full text-sm sm:text-base">
      {skill}
    </li>
  );
}
