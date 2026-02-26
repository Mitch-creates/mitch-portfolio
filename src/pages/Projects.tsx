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
            <div key={project.title} className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {project.title} | {project.period}
              </h2>
              <p className="text-slate-700 mb-2">{project.description}</p>
              <div className="flex flex-row">
                {codeLink && (
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-10 h-10 hover:text-brand-green pr-4" />
                  </a>
                )}
                {liveLink && (
                <a
                  href={liveLink}
                  className="inline-flex items-center gap-2 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <HiOutlineArrowRight className="w-4 h-4" />
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
