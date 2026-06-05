export const metadata = {
  title: "GlobalBridge | Features",
  description:
    "See the platform features that support Rwandan entrepreneurs, exporters, and community collaboration.",
  openGraph: {
    title: "GlobalBridge | Features",
    description:
      "See the platform features that support Rwandan entrepreneurs, exporters, and community collaboration.",
    type: "website",
  },
};

const features = [
  {
    title: "Verified market listings",
    description:
      "Publish products, services, and export profiles to attract buyers across East Africa and beyond with trust and transparency.",
  },
  {
    title: "Community boards",
    description:
      "Participate in active groups for agriculture, tourism, creative industries, and digital startups.",
  },
  {
    title: "Mentor matching",
    description:
      "Connect with advisors for export planning, product design, logistics, and international business strategy.",
  },
  {
    title: "Local growth resources",
    description:
      "Access guides on funding, branding, compliance, and storytelling that help Rwandan brands scale globally.",
  },
  {
    title: "Event and trade updates",
    description:
      "Stay informed about trade visits, investor forums, and regional networking sessions relevant to Rwanda’s growth.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <article className="space-y-6 rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h1 className="text-3xl font-semibold text-slate-900">Platform features</h1>
        <p className="text-lg leading-8 text-slate-700">
          GlobalBridge delivers practical tools for commerce, collaboration, and
          community success across Rwanda’s fastest-growing sectors.
        </p>
      </article>

      <section id="features" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{feature.title}</h2>
            <p className="mt-3 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
