import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="px-4 md:px-0 pt-[20vh]">
      <section className="mb-16 pb-16 border-b border-slate-300">
        <p className="text-sm font-medium text-slate-600 mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-700 mb-6">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
