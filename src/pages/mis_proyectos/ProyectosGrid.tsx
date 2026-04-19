import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS, type PortfolioProject } from "./projects.data";

function ProjectCard({
  project,
  onSelect,
  large = false,
}: {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
  large?: boolean;
}) {
  const imagePositionClass =
    project.imagePosition === "top"
      ? "object-top"
      : project.imagePosition === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <button
      key={project.id}
      onClick={() => onSelect(project)}
      className="group overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/40 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_36px_rgba(56,189,248,0.22)]"
    >
      <div className={`${large ? "aspect-[16/9]" : "aspect-[4/3]"} w-full overflow-hidden bg-slate-950/85`}>
        <img
          src={project.logo}
          alt={`Logo del proyecto ${project.name}`}
          className={`h-full w-full object-cover ${imagePositionClass} transition-transform duration-500 group-hover:scale-105`}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className={`${large ? "text-xl" : "text-lg"} font-semibold text-white`}>{project.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function ProyectosGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const regularProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <>
      {featuredProjects.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300">Destacados</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} large />
            ))}
          </div>
        </section>
      )}

      {regularProjects.length > 0 && (
        <section className="mt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300">Mas Proyectos</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </section>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
