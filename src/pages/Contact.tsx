function Contact() {
  const contacts = [
    {
      label: "LinkedIn",
      value: "in/michiel-van-de-vyver",
      href: "https://www.linkedin.com/in/michiel-van-de-vyver/",
    },
    {
      label: "Twitter",
      value: "@_mitchcreates",
      href: "https://twitter.com/_mitchcreates",
    },
    {
      label: "Email",
      value: "mitchcreates.contact@gmail.com",
      href: "mailto:mitchcreates.contact@gmail.com",
    },
    {
      label: "GitHub",
      value: "git/mitchcreates",
      href: "https://github.com/mitch-creates",
    },
  ];

  return (
    <div className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        Contact.
      </h1>
      <p className="text-lg text-slate-900 mb-8">
        I'm always open to discussing new projects or opportunities. Feel free
        to reach out with any of the following methods.
      </p>
      <ul className="flex flex-col divide-y divide-slate-200">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between py-4 gap-4 hover:bg-slate-100/60 -mx-2 px-2 rounded-lg transition-colors duration-200"
            >
              <span className="font-semibold text-base tracking-tight text-slate-900 group-hover:text-brand-pink transition-colors duration-200">
                {contact.label}
              </span>
              <span className="text-sm text-brand-pink group-hover:text-brand-green transition-colors duration-200 text-right">
                {contact.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;