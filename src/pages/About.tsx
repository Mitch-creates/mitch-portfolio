import { MdDownload } from "react-icons/md";

function About() {
  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        About.
      </h1>
      <div className="flex flex-col gap-6 mb-8">
        <p className="text-lg text-slate-900 leading-relaxed">
          I'm Michiel, a software developer driven by curiosity and creativity. I
          enjoy building innovative digital solutions and specialize in web
          development using React, TypeScript, and Next.js.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          I'm an easy-going and communicative person who values collaboration and
          clear communication. I value opportunities where I can bring my skills
          and my creativity together to contribute to meaningful products.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Alongside my personal projects, I've contributed to professional
          applications built with Angular and Java, earning my Oracle Certified
          Professional (OCP) certification along the way.
        </p>
      </div>

      <a
        href="/Documents/Michiel_Van_de_Vyver_English_Resume.pdf"
        download="Michiel_Van_de_Vyver_English_Resume.pdf"
        className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-green transition-colors duration-200 cursor-pointer mb-8 group"
      >
        <MdDownload className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" /> Download My CV
      </a>
    </div>
  );
}

export default About;
