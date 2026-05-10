export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-center text-sm text-zinc-600 sm:text-left">
          藤森悠太 — 青山学院大学 理工学部情報テクノロジー学科
        </p>
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Yuta Fujimori
        </p>
      </div>
    </footer>
  );
}
