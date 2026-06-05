export const metadata = {
  title: "GlobalBridge | Community",
  description:
    "Discover community groups and boards that connect Rwandan professionals, creatives, and exporters.",
  openGraph: {
    title: "GlobalBridge | Community",
    description:
      "Discover community groups and boards that connect Rwandan professionals, creatives, and exporters.",
    type: "website",
  },
};

const communityGroups = [
  {
    title: "Export Collaboration Board",
    details:
      "Join a forum where exporters, logistics partners, and buyers discuss opportunities for Rwandan goods.",
  },
  {
    title: "Creative Industries Group",
    details:
      "Share design ideas, storytelling methods, and artisan collaborations for local brands.",
  },
  {
    title: "Digital Growth Circle",
    details:
      "Connect with digital marketers, tech founders, and service providers focused on Rwanda’s scaling startups.",
  },
];

export default function CommunityPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 space-y-10">
      <article className="rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h1 className="text-3xl font-semibold text-slate-900">Community boards and groups</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          GlobalBridge hosts active groups for professionals, exporters, mentors, and
          community leaders who are shaping Rwanda’s future in global trade.
        </p>
      </article>

      <section id="community" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {communityGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <h2 className="text-xl font-semibold text-slate-900">{group.title}</h2>
            <p className="mt-3 text-slate-600">{group.details}</p>
          </article>
        ))}
      </section>

      <section id="groups" className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-slate-900">How to join</h2>
        <p className="mt-4 text-slate-700 leading-8">
          Select a board that matches your interest, connect with local experts, and
          share progress reports from your business, organization, or community
          initiative.
        </p>
      </section>
    </section>
  );
}
