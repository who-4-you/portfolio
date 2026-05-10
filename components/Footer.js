export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-felt-deep">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-center text-sm text-paper/70 sm:text-left">
          <span className="text-burgundy" aria-hidden>
            ♥
          </span>{" "}
          藤森悠太 — 青山学院大学 理工学部情報テクノロジー学科
        </p>
        <p className="font-display text-sm text-gold-dim">
          © {new Date().getFullYear()} Yuta Fujimori
        </p>
      </div>
    </footer>
  );
}
