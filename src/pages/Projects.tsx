import { FaGithub } from "react-icons/fa";
import { DATA } from "../constants/types";

function Projects() {
  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        My projects
      </h1>
      <div className="mt-8">
        {DATA.projects.map((project) => (
          <div key={project.title} className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {project.title} | {project.period}
            </h2>
            <p className="text-slate-700 mb-2">{project.description}</p>
            <div className="flex flex-row">
              <a
                href={
                  project.links?.find((link) => link.label === "Code")?.href
                }
              >
                <FaGithub size={20} />
              </a>
              {project.links?.find((link) => link.label === "Live") && (
                <a
                  href={
                    project.links?.find((link) => link.label === "Live")?.href
                  }
                  className="ml-4 text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
