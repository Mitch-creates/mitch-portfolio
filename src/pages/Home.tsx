import { Link } from "react-router-dom";
import type { Social, Project } from "../constants/types";
import { Mail, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const DATA = {
  name: "Michiel Van de Vyver",
  role: "Full‑stack developer",
  location: "Hamburg, Germany",
  email: "mitchcreates.contact@gmail.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Mitch-creates",
      icon: <Github className="h-4 w-4" />,
    },
    {
      label: "Email",
      href: "mailto:mitchcreates.contact@gmail.com",
      icon: <Mail className="h-4 w-4" />,
    },
  ] as Social[],

  projects: [
    {
      title: "Holiday Optimizer",
      description:
        "Web app that finds optimal 4–15 day holiday windows by combining public/company holidays with personal leave.",
      period: "2025",
      tags: ["React", "TypeScript", "Tailwind", "Postgres"],
      links: [
        { label: "Live", href: "https://holidayoptimizer.com/" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/holiday-hacker",
        },
      ],
      featured: true,
    },
    {
      title: "AI News Summarizer",
      description:
        "Automation that ingests newsletter emails (Gmail API), dedupes, summarizes with LLM, and generates Markdown posts for a Hugo/Netlify blog. Includes SQLite/Postgres persistence.",
      period: "2025",
      tags: ["Python", "LLM", "Automation", "Gmail API", "Markdown"],
      links: [
        { label: "Live", href: "https://weeklynews.dev" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/ai-news-summarizer",
        },
      ],
    },
    {
      title: "Learning app (Mobile)",
      description:
        "React Native/Expo MVP: take a photo, OCR the text, highlight parts to get explanations, translations, and TTS. Multi-language (EN/DE/NL/FR/ES).",
      period: "2025",
      tags: ["React Native", "Expo", "OCR", "TTS", "Node.js"],
      links: [
        {
          label: "Code",
          href: "https://github.com/yourhandle/read-and-explain",
        }, // TODO
      ],
      featured: true,
    },
  ] as Project[],
};

function Home() {
  return (
    <main className="font-roboto px-4 md:px-0">
      {/* Hero Section */}
      <section className="mb-16 pb-16 border-b border-slate-200">
        <h1 className="pb-4 text-3xl md:text-4xl font-semibold text-slate-900">
          Moin, I'm Michiel.
          <span className="block text-xl md:text-2xl text-pastel-blue font-normal text-slate-600">
            A Developer from Belgium based in Hamburg.
          </span>
        </h1>
        <p className="pb-4 text-lg text-slate-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <Link
          to="/about"
          className="bg-slate-950 text-white px-4 py-2 rounded-full
        hover:bg-slate-800 group inline-block"
        >
          Learn more
        </Link>
      </section>
      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 tracking-tighter">
          Personal Projects
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Below is a selection of some of my projects.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-dense mt-16 mb-6">
          <a
            className="flex flex-col justify-center transition-colors bg-slate-200 hover:bg-slate-300 rounded-xl p-8"
            href="https://google.com"
          >
            <div className="relative rounded-xl mb-4">
              <img
                loading="lazy"
                className="rounded-xl bg-cover"
                src="/images/coming_soon.jpg"
                alt="Project Thumbnail"
                width="450"
                height="240"
                data-nimg="1"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Project Title
            </h3>
            <h3 className="text-sm text-slate-600">Project Description</h3>
          </a>
          <a
            className="flex flex-col justify-center transition-colors bg-slate-200 hover:bg-slate-300 rounded-xl p-8"
            href="https://google.com"
          >
            <div className="relative rounded-xl mb-4">
              <img
                loading="lazy"
                className="rounded-xl bg-cover"
                src="/images/coming_soon.jpg"
                alt="Project Thumbnail"
                width="450"
                height="240"
                data-nimg="1"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Project Title
            </h3>
            <h3 className="text-sm text-slate-600">Project Description</h3>
          </a>
          <a
            className="flex flex-col justify-center transition-colors bg-slate-200 hover:bg-slate-300 rounded-xl p-8"
            href="https://google.com"
          >
            <div className="relative rounded-xl mb-4">
              <img
                loading="lazy"
                className="rounded-xl bg-cover"
                src="/images/coming_soon.jpg"
                alt="Project Thumbnail"
                width="450"
                height="240"
                data-nimg="1"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Project Title
            </h3>
            <h3 className="text-sm text-slate-600">Project Description</h3>
          </a>
          <a
            className="flex flex-col justify-center transition-colors bg-slate-200 hover:bg-slate-300 rounded-xl p-8"
            href="https://google.com"
          >
            <div className="relative rounded-xl mb-4">
              <img
                loading="lazy"
                className="rounded-xl bg-cover"
                src="/images/coming_soon.jpg"
                alt="Project Thumbnail"
                width="450"
                height="240"
                data-nimg="1"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Project Title
            </h3>
            <h3 className="text-sm text-slate-600">Project Description</h3>
          </a>
        </div>
        <Link
          to="/projects"
          className="bg-slate-950 text-white px-4 py-2 rounded-full
        hover:bg-slate-800 group inline-block"
        >
          View all projects
        </Link>
      </section>
    </main>
  );
}

export default Home;
