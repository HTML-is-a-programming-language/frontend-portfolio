import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">📁 프로젝트</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
</section>
  );
}
