import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="md:hidden flex flex-row fixed justify-between gap-4 pt-8 md:pt-16 px-4 md:px-0 items-baseline bg-slate-50 w-full z-50 opacity-90">
        <Link
          to="/"
          className="tracking-tighter text-sm font-mono font-semibold"
        >
          <img
            data-animate="reveal-1"
            className="w-16 h-16 rotate-y-90 opacity-0"
            src="/images/M.svg"
            alt="Mitch Creates Logo"
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
            className="w-16 h-16 rotate-y-90 opacity-0"
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
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Header;
