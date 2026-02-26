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
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-dense mt-16 mb-6">
          {DATA.projects
            .filter((project) => project.featured)
            .map((project) => (
              <a
                key={project.title}
                className="flex flex-col justify-center transition-colors bg-slate-100 hover:bg-slate-200 rounded-xl p-8 cursor-pointer"
                href={
                  project.links?.[0]?.label === "Live"
                    ? project.links[0].href
                    : ""
                }
                onClick={(e) => {
                  if (project.hasDemo && project.demoPath) {
                    e.preventDefault();
                    setActiveVideo(project.demoPath);
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative rounded-xl mb-4 aspect-video overflow-hidden">
                  <img
                    loading="lazy"
                    className="object-cover rounded-xl bg-cover shadow-xl"
                    src={project.image || "/images/coming_soon.jpg"}
                    alt={`${project.title} Thumbnail`}
                    width="450"
                    height="240"
                    data-nimg="1"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <h3 className="text-sm text-slate-600">
                  {project.description}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs  text-slate-800 pr-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
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
