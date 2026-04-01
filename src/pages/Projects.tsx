import { FaGithub } from "react-icons/fa";
import { DATA } from "../constants/types";
import { HiOutlineArrowRight } from "react-icons/hi";

const getLatestYear = (period?: string) => {
  if (!period) return Number.NEGATIVE_INFINITY;

  const years = period.match(/\d{4}/g);
  if (!years) return Number.NEGATIVE_INFINITY;

  return Math.max(...years.map(Number));
};

function Projects() {
  const sortedProjects = DATA.projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const yearDiff =
        getLatestYear(b.project.period) - getLatestYear(a.project.period);
      if (yearDiff !== 0) return yearDiff;
      return a.index - b.index;
    })
    .map(({ project }) => project);

  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        My projects.
      </h1>
      <div className="mt-8">
        {sortedProjects.map((project) => {
          const codeLink = project.links?.find(
            (link) => link.label === "Code",
          )?.href;
          const liveLink = project.links?.find(
            (link) => link.label === "Live",
          )?.href;

          return (
            <div key={project.title} className="mb-8 pb-8 border-b border-slate-200 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
                  {project.title}
                </h2>
                <span className="text-sm text-slate-400 font-mono">{project.period}</span>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-1.5 mr-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {codeLink && (
                  <a href={codeLink} target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <FaGithub className="w-5 h-5 text-slate-400 hover:text-brand-green transition-colors duration-200" />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    className="inline-flex items-center gap-1.5 text-brand-pink hover:text-brand-green transition-colors duration-200 text-sm group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <HiOutlineArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
