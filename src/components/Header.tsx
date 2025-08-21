import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex flex-row justify-between gap-4 pb-16 pt-8 md:pt-16 px-4 md:px-0">
        <Link
          to="/"
          className="tracking-tighter bg-pastel-blue text-sm font-mono font-semibold"
        >
          <h1 className=" text-xl">Mitch Creates</h1>
        </Link>
        <nav className="flex gap-4">
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
    </>
  );
}

export default Header;
