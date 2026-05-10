const navItems = [
  { href: "#top", label: "Top" },
  { href: "#product", label: "Product" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-felt-deep/95 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-display shrink-0 text-sm font-semibold tracking-[0.12em] text-paper"
        >
          <span className="text-gold">♠</span> Yuta Fujimori
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm tracking-wide text-paper/75 transition-colors hover:text-gold"
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
