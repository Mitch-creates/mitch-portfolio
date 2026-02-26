import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pb-4 pt-4 md:pt-8 px-4 md:px-0 border-t border-slate-200">
      <div className="flex flex-col gap-3 md:gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs">
            &copy; 2024 - {new Date().getFullYear()} | Mitch Creates
          </p>
          <nav
            aria-label="Legal links"
            className="text-xs flex items-center gap-2"
          >
            <Link
              to="/legal-notice"
              className="hover:bg-brand-green hover:text-brand-pink transition-colors duration-200"
            >
              Legal Notice
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              to="/privacy-policy"
              className="hover:bg-brand-green hover:text-brand-pink transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="flex flex-row gap-4 md:justify-end">
          <a
            href="https://github.com/Mitch-creates"
            className="text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://x.com/_mitchcreates"
            className="text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
