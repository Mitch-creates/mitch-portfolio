function PrivacyPolicy() {
  return (
    <main className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        Privacy Policy.
      </h1>
      <p className="text-sm text-slate-600 mb-8">Last updated: February 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          1. Data Controller
        </h2>
        <address className="not-italic text-slate-800 leading-7">
          Michiel Van de Vyver
          <br />
          c/o IP-Management #8874, Ludwig-Erhard-Str. 18
          <br />
          20459 Hamburg
          <br />
          Germany
          <br />
          Email:{" "}
          <a
            className="underline hover:bg-brand-green hover:text-brand-pink transition-colors duration-200"
            href="mailto:mitchcreates.contact@gmail.com"
          >
            mitchcreates.contact@gmail.com
          </a>
        </address>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          2. Hosting and Server Log Files
        </h2>
        <p className="text-slate-800 mb-2">
          This website is hosted via Netlify. When visiting the website,
          technically necessary data (for example IP address, timestamp, requested
          resource, and browser information) may be processed to enable operation,
          security, and delivery of the site.
        </p>
        <p className="text-slate-800">
          Legal basis: Article 6(1)(f) GDPR (legitimate interest in secure and
          stable website operation).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          3. Contact Requests
        </h2>
        <p className="text-slate-800 mb-2">
          If you contact me by email or via linked profiles, the data you provide
          will be processed to handle your request.
        </p>
        <p className="text-slate-800">
          Legal basis: Article 6(1)(b) GDPR (pre-contractual communication) and/or
          Article 6(1)(f) GDPR (general communication).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          4. External Links and Platforms
        </h2>
        <p className="text-slate-800">
          This website contains links to external services (for example GitHub, X,
          LinkedIn, and project demos). When you click those links, you leave this
          website. The respective operators are responsible for data processing on
          their own websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          5. Cookies, Tracking, and Analytics
        </h2>
        <p className="text-slate-800">
          This portfolio website currently does not use non-essential cookies,
          tracking, or analytics tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          6. Data Retention
        </h2>
        <p className="text-slate-800">
          Personal data is only stored for as long as necessary for the stated
          purposes or as required by legal retention obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          7. Your Rights
        </h2>
        <p className="text-slate-800 mb-2">
          Under the GDPR, you have the right to access (Art. 15), rectification
          (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data
          portability (Art. 20), and objection (Art. 21).
        </p>
        <p className="text-slate-800">
          You also have the right to lodge a complaint with a data protection
          supervisory authority (Art. 77 GDPR).
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          8. Updates to this Privacy Policy
        </h2>
        <p className="text-slate-800">
          I may update this privacy policy when needed so it remains aligned with
          current legal requirements.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
