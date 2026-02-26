type Link = { label: string; href: string };

type Project = {
  title: string;
  description: string;
  period?: string;
  tags: string[];
  links?: Link[];
  featured?: boolean;
  hasDemo?: boolean;
  demoPath?: string;
  image?: string;
};

export const DATA = {
  name: "Michiel Van de Vyver",
  role: "Full‑stack developer",
  location: "Hamburg, Germany",
  email: "mitchcreates.contact@gmail.com",
  projects: [
    {
      title: "AI News Summarizer",
      description: "Automated setup for summarizing news articles using LLM.",
      period: "2025",
      tags: ["Python", "LLM", "Automation", "Gmail API"],
      links: [
        { label: "Live", href: "https://weeklynews.dev" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/ai-news-summarizer",
        },
      ],
      featured: false,
      image: "/images/weeklynews.png",
    },
    {
      title: "Chatati",
      description:
        "Language exchange platform that helps people connect locally for real-world speaking practice.",
      period: "2025-2026",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Cloudflare R2",
        "Upstash Redis",
      ],
      links: [
        { label: "Live", href: "https://chatati.de" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/chatati",
        },
      ],
      featured: true,
      image: "/images/chatati.png",
    },
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
      image: "/images/holidayoptimizer.png",
    },
    {
      title: "Run 4 Charity",
      description:
        "An interactive benefit run website for cancer research for the team at Signify",
      period: "2025",
      tags: ["Typescript", "GSAP", "Tailwind", "Figma"],
      links: [
        { label: "Live", href: "https://run4charity.be" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/ktk-website",
        },
      ],
      featured: true,
      image: "/images/run4charity.png",
    },
    {
      title: "Learning app (Mobile)",
      description:
        "React Native/Expo MVP: take a photo, OCR the text, highlight parts to get explanations, translations, and TTS. This was built to aid me with learning German.",
      period: "2025",
      tags: ["React Native", "Expo", "OCR", "TTS", "Node.js"],
      links: [
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/learningapp",
        },
      ],
      featured: true,
      hasDemo: true,
      demoPath: "/videos/learningapp-demo.mp4",
      image: "/images/play-demo-learningapp.png",
    },

    // {
    //   title: "Blogging website",
    //   description:
    //     "A platform for sharing articles about reflection and self discovery. Made with Hugo.",
    //   period: "2024",
    //   tags: ["Hugo", "Javascript", "HTML", "CSS", "Writing", "Research"],
    //   links: [
    //     { label: "Live", href: "https://michielsblog.com" },
    //     {
    //       label: "Code",
    //       href: "https://github.com/Mitch-creates/Blog",
    //     },
    //   ],
    //   featured: true,
    //   image: "/images/michielsblog.png",
    // },
  ] as Project[],
};
