export const metadata = {
  title: "GlobalBridge | Home",
  description:
    "GlobalBridge connects Rwanda to the world with trusted business, community, and export support.",
  openGraph: {
    title: "GlobalBridge | Home",
    description:
      "GlobalBridge connects Rwanda to the world with trusted business, community, and export support.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <article id="hero" className="space-y-8 py-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-700">GlobalBridge</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Connecting Rwanda to the World
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            GlobalBridge helps Rwandan entrepreneurs, exporters, and communities
            build trusted relationships, discover new markets, and share local
            expertise with global partners.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/features"
            className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-700/20 transition hover:bg-cyan-800"
          >
            Explore platform features
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:text-cyan-700"
          >
            Contact the team
          </a>
        </div>
      </article>

      <section id="features" className="grid gap-6 py-12 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-xl font-semibold text-slate-900">Market Access</h2>
          <p className="mt-3 text-slate-600">
            Discover verified buyers, export support, and supply chain connections
            that make Rwanda’s products ready for international demand.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-xl font-semibold text-slate-900">Community Networks</h2>
          <p className="mt-3 text-slate-600">
            Join topic groups, mentorship circles, and forums for innovators,
            artisans, and business leaders across Rwanda and beyond.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-xl font-semibold text-slate-900">Local Growth Support</h2>
          <p className="mt-3 text-slate-600">
            Access guidance on funding, digital presence, logistics, and export
            readiness from trusted local experts.
          </p>
        </article>
      </section>

      <section id="cta" className="rounded-3xl border border-cyan-100 bg-cyan-50 p-10 text-slate-900">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Start building global connections today.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Use GlobalBridge to showcase your products, engage with new partners,
            and grow Rwanda’s presence in international markets.
          </p>
          <div className="mt-6">
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Discover community groups
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
