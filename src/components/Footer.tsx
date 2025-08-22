import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" flex flex-row justify-between gap-4 pb-4 pt-4 md:pt-8 px-4 md:px-0 border-t border-slate-200">
      <p className="text-center text-sm">
        &copy; 2024 - {new Date().getFullYear()} Mitch Creates
      </p>
      <a href="https://github.com/Mitch-creates" className="text-sm">
        <FaGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;
