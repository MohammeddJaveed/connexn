import Link from "next/link";

type Section = "home" | "connect" | "profile";

const links: { label: string; href: string; section: Section }[] = [
  { label: "Home", href: "/home", section: "home" },
  { label: "Connect", href: "/home/connect", section: "connect" },
  { label: "Profile", href: "/home/profile", section: "profile" },
];

export default function LeftBar({ active }: { active: Section }) {
  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-indigo-500 p-5 md:h-full md:w-64 md:border-b-0 md:border-r md:p-7">
      <Link href="/home" className="text-xl font-bold tracking-tight">
        Connexn
      </Link>
      <nav aria-label="Main navigation" className="mt-7 flex gap-2 md:flex-col">
        {links.map((link) => (
          <Link
            key={link.section}
            href={link.href}
            aria-current={active === link.section ? "page" : undefined}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              active === link.section
                ? "bg-slate-900 text-white"
                : "text-white hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
