import { useEffect } from "react";
import type { PortfolioProject } from "./projects.data";

type ProjectModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const imagePositionClass =
    project.imagePosition === "top"
      ? "object-top"
      : project.imagePosition === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del proyecto ${project.name}`}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-cyan-300/30 bg-slate-900 p-6 shadow-[0_0_80px_rgba(56,189,248,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {project.role} · {project.status} · {project.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/15 px-3 py-1 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
            aria-label="Cerrar modal"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950/80">
          <img
            src={project.logo}
            alt={`Imagen del proyecto ${project.name}`}
            className={`h-full w-full object-cover ${imagePositionClass}`}
            loading="lazy"
          />
        </div>

        <div className="mt-5 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-cyan-300">Problema</p>
            <p className="mt-2 leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-cyan-300">Solucion</p>
            <p className="mt-2 leading-relaxed">{project.solution}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wider text-cyan-300">Impacto</p>
            <p className="mt-2 leading-relaxed">{project.impact}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wider text-cyan-300">Resumen</p>
            <p className="mt-2 leading-relaxed">{project.summary}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
