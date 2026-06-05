export const metadata = {
  title: "GlobalBridge | Contact",
  description:
    "Contact GlobalBridge for partnership, export support, or community collaboration in Rwanda.",
  openGraph: {
    title: "GlobalBridge | Contact",
    description:
      "Contact GlobalBridge for partnership, export support, or community collaboration in Rwanda.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <article className="rounded-3xl bg-white px-8 py-10 shadow-sm shadow-slate-900/5">
        <h1 className="text-3xl font-semibold text-slate-900">Contact GlobalBridge</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Reach out to our team for partnership inquiries, community questions, or
          support for Rwandan businesses expanding toward global markets.
        </p>

        <form method="post" action="/contact" className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-700/20 transition hover:bg-cyan-800"
          >
            Send message to GlobalBridge
          </button>
        </form>
      </article>
    </section>
  );
}
