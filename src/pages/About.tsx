import { MdDownload } from "react-icons/md";

function About() {
  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        About
      </h1>
      <p className="text-lg text-slate-900 mb-4">
        I'm Michiel, a software engineer with a passion for building innovative
        solutions. I specialize in web development, particularly with React and
        Node.js.
      </p>
      <p className="text-lg text-slate-900 mb-8">
        My journey in tech started in 2020 with a fascination for how things
        work, leading me to explore various programming languages and
        frameworks. I enjoy tackling complex problems and turning ideas into
        reality.
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
