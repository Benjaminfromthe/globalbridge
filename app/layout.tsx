import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobalBridge - Connecting Rwanda to the World",
  description:
    "GlobalBridge is a platform connecting Rwanda and Rwandans to global opportunities, communities, and partnerships.",
  openGraph: {
    title: "GlobalBridge - Connecting Rwanda to the World",
    description:
      "GlobalBridge is a platform connecting Rwanda and Rwandans to global opportunities, communities, and partnerships.",
    type: "website",
  },
  twitter: {
    title: "GlobalBridge - Connecting Rwanda to the World",
    description:
      "GlobalBridge is a platform connecting Rwanda and Rwandans to global opportunities, communities, and partnerships.",
    card: "summary_large_image",
  },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-slate-950">
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-700">
                  GlobalBridge
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Connecting Rwanda to the World
                </p>
              </div>
              <nav aria-label="Primary navigation">
                <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-700">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition hover:text-cyan-700">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600">
              <p>
                GlobalBridge connects Rwanda to international opportunity, strategic
                partnerships, and strong community networks.
              </p>
              <p className="mt-2">© {new Date().getFullYear()} GlobalBridge. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
