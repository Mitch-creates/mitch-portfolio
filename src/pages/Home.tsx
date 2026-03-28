import { Link } from "react-router-dom";
import { DATA } from "../constants/types";
import VideoModal from "../components/VideoModal";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <main className="px-4 md:px-0 pt-[20vh]">
      {/* Hero Section */}
      <section className="mb-16 pb-16 border-b border-slate-300">
        <h1 className=" text-3xl md:text-4xl font-semibold text-slate-900">
          Moin, I'm Michiel
        </h1>
        <span className="block text-xl md:text-2xl font-normal text-slate-600 pb-10">
          A Developer from Belgium based in Hamburg.
        </span>

        <p className="pb-4 md:pt-0 pt-10 text-lg text-slate-900">
          Curiosity-fueled developer blending creativity and modern technologies
          to build meaningful digital experiences.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer"
        >
          Learn more
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </section>
      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 tracking-tighter">
          Personal Projects.
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Below is a selection of some of my projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-6">
          {DATA.projects
            .filter((project) => project.featured)
            .map((project) => {
              const liveLink = project.links?.find(
                (link) => link.label === "Live",
              )?.href;

              const cardContent = (
                <>
                  <div className="relative rounded-xl mb-4 aspect-video overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover rounded-xl shadow-xl"
                      src={project.image || "/images/coming_soon.jpg"}
                      alt={`${project.title} Thumbnail`}
                      width="450"
                      height="240"
                      data-nimg="1"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs text-slate-400 px-1 py-0.5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </>
              );

              if (liveLink) {
                return (
                  <a
                    key={project.title}
                    className="flex flex-col justify-start transition-all duration-200 bg-slate-100 hover:bg-slate-200 hover:shadow-lg hover:-translate-y-1 rounded-xl p-6 cursor-pointer border border-transparent hover:border-slate-300"
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                );
              }

              if (project.hasDemo && project.demoPath) {
                return (
                  <button
                    key={project.title}
                    type="button"
                    className="text-left flex flex-col justify-start transition-all duration-200 bg-slate-100 hover:bg-slate-200 hover:shadow-lg hover:-translate-y-1 rounded-xl p-6 cursor-pointer border border-transparent hover:border-slate-300"
                    onClick={() => setActiveVideo(project.demoPath ?? null)}
                  >
                    {cardContent}
                  </button>
                );
              }

              return (
                <div
                  key={project.title}
                  className="flex flex-col justify-start bg-slate-100 rounded-xl p-6 border border-slate-200"
                >
                  {cardContent}
                </div>
              );
            })}
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer"
        >
          View all projects
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoSrc={activeVideo || ""}
      />
    </main>
  );
}

export default Home;
