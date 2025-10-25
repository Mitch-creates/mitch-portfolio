import { MdDownload } from "react-icons/md";

function About() {
  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        About
      </h1>
      <p className="text-lg text-slate-900 mb-4">
        I'm Michiel, a software developer driven by curiosity and creativity. I
        enjoy building innovative digital solutions and specialize in web
        development using React, TypeScript, and Next.js.
      </p>
      <p className="text-lg text-slate-900 mb-8">
        I'm an easygoing and communicative person who values collaboration and
        clear communication. I'm currently looking for a new opportunity where I
        can bring my skills and creativity together to contribute to meaningful
        projects.
      </p>
      <p className="text-lg text-slate-900 mb-8">
        Alongside my personal projects, I’ve contributed to professional
        applications built with Angular and Java, earning my Oracle Certified
        Professional (OCP) certification in Java along the way.
      </p>

      <a
        href="/Documents/CV_Michiel_ENGLISH.pdf"
        download="Michiel_Van_de_Vyver_CV.pdf"
        className="inline-flex items-center gap-2 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer mb-8"
      >
        <MdDownload className="w-4 h-4" /> Download My CV
      </a>
    </div>
  );
}

export default About;
