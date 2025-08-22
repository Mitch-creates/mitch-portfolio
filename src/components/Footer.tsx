import { FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" flex flex-row justify-between gap-4 pb-4 pt-4 md:pt-8 px-4 md:px-0 border-t border-slate-200">
      <p className="text-center text-xs">
        &copy; 2024 - {new Date().getFullYear()} | Mitch Creates
      </p>
      <div className="flex flex-row gap-4">
        <a href="https://github.com/Mitch-creates" className="text-sm">
          <FaGithub size={16} />
        </a>
        <a href="https://x.com/_mitchcreates" className="text-sm">
          <FaTwitter size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
