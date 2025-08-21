import React from "react";
import { Social, Project } from "../constants/types";
import { Mail, Github } from "lucide-react";

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
  return <div></div>;
}

export default Home;
