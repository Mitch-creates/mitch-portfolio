import { useAnimate } from "framer-motion";
import type React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [scope, animate] = useAnimate();

  const handleLogoClick = async (e: React.MouseEvent<HTMLImageElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      animate(".logo-nav", { rotateY: 90 }, { duration: 0.3, ease: "easeIn" });
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        animate(
          ".logo-nav",
          { rotateY: 0 },
          { duration: 0.3, ease: "easeOut" }
        );
      }, 300);
    }
  };
  return (
    <div ref={scope}>
      <header className="md:hidden flex flex-row fixed justify-between gap-4 pt-8 md:pt-16 px-4 md:px-0 items-baseline bg-slate-50 w-full z-50 opacity-90">
        <Link
          to="/"
          className="tracking-tighter text-sm font-mono font-semibold"
        >
          <img
            data-animate="reveal-1"
            className="logo-nav w-16 h-16 rotate-y-90 opacity-0"
            style={{ transformStyle: "preserve-3d" }}
            onClick={handleLogoClick}
            src="/images/M.svg"
            alt="Mitch-Creates Logo"
          />
        </Link>
        <nav className="flex gap-4 items-end">
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/about"
          >
            About
          </Link>
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>

      <aside className="hidden fixed md:block top-12 left-12 h-screen w-64">
        <Link
          to="/"
          className="flex tracking-tighter text-sm font-mono font-semibold mb-16"
        >
          <img
            data-animate="reveal-1"
            className="logo-nav w-16 h-16 rotate-y-90 opacity-0"
            style={{ transformStyle: "preserve-3d" }}
            onClick={handleLogoClick}
            src="/images/M.svg"
            alt="Mitch Creates Logo"
          />
        </Link>
        <nav className="flex flex-col gap-2 flex-1 justify-center">
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/about"
          >
            About
          </Link>
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="tracking-tighter text-slate-950 text-sm font-mono font-semibold"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default Header;
