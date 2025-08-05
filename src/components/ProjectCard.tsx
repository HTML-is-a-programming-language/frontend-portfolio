import { Project } from "@/types/project";

export default function ProjectCard({ title, description, tags, github, demo }: Project) {
  return (
    <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-md dark:shadow-zinc-900 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-zinc-800">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-300 mt-2 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm mb-4">
        {tags.map((tag: string) => (
          <li key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-600 text-zinc-800 dark:text-white rounded-full">
            #{tag}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <a href={github} target="_blank" className="text-blue-500 dark:text-blue-300 underline text-sm">GitHub</a>
        {demo && (
          <a href={demo} target="_blank" className="text-blue-500 dark:text-blue-300 underline text-sm">Demo</a>
        )}
      </div>
    </div>
  );
}
