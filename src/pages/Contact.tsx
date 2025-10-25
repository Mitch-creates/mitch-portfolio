function Contact() {
  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        Contact.
      </h1>
      <p className="text-lg text-slate-900 mb-4">
        I'm always open to discussing new projects or opportunities. Feel free
        to reach out with any of the following methods.
      </p>
      <div className="md:grid-cols-2 grid-cols-1 gap-8">
        <div className="mb-4 flex flex-col">
          <h2 className="font-semibold text-lg tracking-tight text-slate-900">
            LinkedIn
          </h2>
          <a
            className="text-slate-700 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer inline-block w-fit underline md:no-underline"
            href="https://www.linkedin.com/in/michiel-van-de-vyver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/michiel-van-de-vyver
          </a>
        </div>
        <div className="mb-4 flex flex-col">
          <h2 className="font-semibold text-lg tracking-tight text-slate-900">
            Twitter
          </h2>
          <a
            className="text-slate-700 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer inline-block w-fit underline md:no-underline"
            href="https://twitter.com/_mitchcreates"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_mitchcreates
          </a>
        </div>
        <div className="mb-4 flex flex-col">
          <h2 className="font-semibold text-lg tracking-tight text-slate-900">
            Email
          </h2>
          <a
            className="text-slate-700 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer inline-block w-fit underline md:no-underline"
            href="mailto:mitchcreates.contact@gmail.com"
          >
            mitchcreates.contact@gmail.com
          </a>
        </div>
        <div className="mb-4 flex flex-col">
          <h2 className="font-semibold text-lg tracking-tight text-slate-900">
            GitHub
          </h2>
          <a
            className="text-slate-700 hover:bg-brand-green hover:text-brand-pink transition-colors duration-200 cursor-pointer inline-block w-fit underline md:no-underline"
            href="https://github.com/mitch-creates"
            target="_blank"
            rel="noopener noreferrer"
          >
            git/mitchcreates
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
