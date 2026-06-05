export const metadata = {
  title: "GlobalBridge | About",
  description:
    "Learn about GlobalBridge’s mission, vision, and leadership for connecting Rwanda to global opportunity.",
  openGraph: {
    title: "GlobalBridge | About",
    description:
      "Learn about GlobalBridge’s mission, vision, and leadership for connecting Rwanda to global opportunity.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 space-y-16">
      <article id="mission" className="space-y-6 rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h1 className="text-3xl font-semibold text-slate-900">Mission</h1>
        <p className="text-lg leading-8 text-slate-700">
          GlobalBridge helps Rwanda’s entrepreneurs, farmers, creators, and small
          businesses connect with global customers, partners, and mentors through a
          reliable digital platform built for local success.
        </p>
      </article>

      <article id="vision" className="space-y-6 rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h2 className="text-3xl font-semibold text-slate-900">Vision</h2>
        <p className="text-lg leading-8 text-slate-700">
          We envision Rwanda as a thriving hub of innovation and trade where local
          ideas, products, and services travel freely to international markets,
          powered by connections, training, and shared opportunity.
        </p>
      </article>

      <article id="team" className="space-y-6 rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h2 className="text-3xl font-semibold text-slate-900">Team</h2>
        <p className="text-lg leading-8 text-slate-700">
          Our team includes local entrepreneurs, export advisors, product designers,
          and community leaders who know Rwanda’s strengths and global ambitions.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold text-slate-900">Arianna</p>
            <p className="mt-2 text-slate-600">Head of Partnerships focusing on trade and export support.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold text-slate-900">Jean-Pierre</p>
            <p className="mt-2 text-slate-600">Community director building mentorship groups and learning boards.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold text-slate-900">Fatima</p>
            <p className="mt-2 text-slate-600">Product lead creating tools for discovery, stories, and market readiness.</p>
          </div>
        </div>
      </article>
    </section>
  );
}
