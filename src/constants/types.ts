type Link = { label: string; href: string };

type Project = {
  title: string;
  description: string;
  period?: string;
  tags: string[];
  links?: Link[];
  featured?: boolean;
  image?: string;
};

export const DATA = {
  name: "Michiel Van de Vyver",
  role: "Full‑stack developer",
  location: "Hamburg, Germany",
  email: "mitchcreates.contact@gmail.com",
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
      image: "/images/holidayoptimizer.png",
    },
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
      featured: true,
      image: "/images/weeklynews.png",
    },
    {
      title: "Learning app (Mobile)",
      description:
        "React Native/Expo MVP: take a photo, OCR the text, highlight parts to get explanations, translations, and TTS.",
      period: "2025",
      tags: ["React Native", "Expo", "OCR", "TTS", "Node.js"],
      links: [
        {
          label: "Code",
          href: "https://github.com/yourhandle/read-and-explain",
        }, // TODO
      ],
      featured: true,
      image: "/images/coming_soon.jpg",
    },
    {
      title: "Blogging website",
      description:
        "A platform for sharing articles about reflection and self discovery. Made with Hugo.",
      period: "2024",
      tags: ["Hugo", "Javascript", "HTML", "CSS", "Writing", "Research"],
      links: [
        { label: "Live", href: "https://michielsblog.com" },
        {
          label: "Code",
          href: "https://github.com/Mitch-creates/Blog",
        }, // TODO
      ],
      featured: true,
      image: "/images/michielsblog.png",
    },
  ] as Project[],
};
