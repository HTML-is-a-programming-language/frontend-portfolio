import { Project } from "@/data/projects";

export default function ProjectCard({ title, description, github }: Project) {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-600 hover:underline"
      >
        GitHub →
      </a>
    </div>
  );
}

