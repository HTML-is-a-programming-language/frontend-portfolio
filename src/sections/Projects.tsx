import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container min-h-[calc(100dvh-150px)] lg:snap-start"
    >
      <SectionTitle>📁 프로젝트</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
