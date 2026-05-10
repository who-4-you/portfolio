const navItems = [
  { href: "#top", label: "Top" },
  { href: "#product", label: "Product" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-wide text-zinc-900"
        >
          Yuta Fujimori
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
