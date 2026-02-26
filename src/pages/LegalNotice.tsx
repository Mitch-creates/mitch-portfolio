function LegalNotice() {
  return (
    <main className="px-4 md:px-0 pt-[20vh]">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6 pb-8 border-b border-slate-200">
        Legal Notice.
      </h1>
      <p className="text-sm text-slate-600 mb-8">
        Information according to Section 5 German Telemedia Act (TMG)
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Service Provider
        </h2>
        <address className="not-italic text-slate-800 leading-7">
          Michiel Van de Vyver
          <br />
          c/o IP-Management #8874, Ludwig-Erhard-Str. 18
          <br />
          20459 Hamburg
          <br />
          Germany
        </address>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Contact</h2>
        <p className="text-slate-800">
          Email:{" "}
          <a
            className="underline hover:bg-brand-green hover:text-brand-pink transition-colors duration-200"
            href="mailto:mitchcreates.contact@gmail.com"
          >
            mitchcreates.contact@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Responsible for Content under Section 18 para. 2 MStV
        </h2>
        <p className="text-slate-800">
          Michiel Van de Vyver, address as stated above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          EU Dispute Resolution
        </h2>
        <p className="text-slate-800 mb-2">
          The European Commission provides a platform for online dispute
          resolution (ODR):
        </p>
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline break-all hover:bg-brand-green hover:text-brand-pink transition-colors duration-200"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        <p className="text-slate-800 mt-2">
          I am not obliged or willing to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Liability for Content
        </h2>
        <p className="text-slate-800">
          As a service provider, I am responsible for my own content on these
          pages according to general laws (Section 7 para. 1 TMG). According to
          Sections 8 to 10 TMG, I am not obliged to monitor transmitted or stored
          third-party information or investigate circumstances indicating illegal
          activity.
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Liability for Links
        </h2>
        <p className="text-slate-800">
          This website contains links to external third-party websites. I have no
          influence over the content of those websites and therefore cannot accept
          any liability for external content. The respective provider or operator
          is always responsible for linked pages.
        </p>
      </section>
    </main>
  );
}

export default LegalNotice;
