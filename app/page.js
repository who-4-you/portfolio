import Image from "next/image";

const products = [
  {
    title: "ポートフォリオサイト",
    category: "Web",
    description:
      "自身の紹介と制作物をまとめたレスポンシブ対応のシングルページサイトです。",
    href: "#top",
    external: false,
  },
  {
    title: "羊肉倶楽部 -hitsuji club-",
    category: "Web",
    description:
      "生ラム・ジンギスカン専門店のサイト。こだわり・お品書き・空間と料理・ご予約までを紹介しています。",
    href: "https://who-4-you.github.io/hitsuji-club/",
    external: true,
  },
  {
    title: "UIコンセプト",
    category: "Design",
    description:
      "アプリ画面のワイヤーフレームとカラーパレット案。ユーザー導線を意識したレイアウト研究。",
    href: "#",
    external: false,
  },
  {
    title: "ランディングページ案",
    category: "Web",
    description:
      "サービス紹介向けのヒーロー・特徴セクション構成のモックアップ。",
    href: "#",
    external: false,
  },
];

export default function Home() {
  return (
    <>
      <section
        id="top"
        className="scroll-mt-14 border-b border-ink/10 bg-paper"
      >
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="pointer-events-none absolute left-4 top-12 text-[10rem] font-display leading-none text-burgundy/[0.06] md:left-8">
            ♦
          </div>
          <div className="pointer-events-none absolute bottom-16 right-4 text-[8rem] font-display leading-none text-ink/[0.05] md:right-8">
            ♣
          </div>

          <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div className="relative mx-auto w-full max-w-lg md:mx-0 md:max-w-xl">
              <div
                className="absolute -inset-3 rounded-sm border border-gold/25 md:-inset-4"
                aria-hidden
              />
              <div
                className="absolute -inset-1 rounded-sm border border-ink/10 md:-inset-2"
                aria-hidden
              />
              <Image
                src="/images/LiT名刺.png"
                alt="藤森悠太のプロフィール写真"
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, 480px"
                priority
                className="relative z-10 h-auto w-full rounded-sm shadow-[0_25px_50px_-12px_rgba(26,23,22,0.25)] ring-1 ring-ink/10"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-burgundy">
                Overview
              </p>
              <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                藤森 悠太
              </h1>
              <p className="mt-3 text-lg text-ink-soft">
                青山学院大学 理工学部情報テクノロジー学科
              </p>
              <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-gold/50 to-transparent md:mx-0" />
              <p className="mt-8 text-base leading-relaxed text-ink-soft">
                Web とデザインを通じて、使いやすさと印象に残る体験をつくりたいと考えています。
                学びながら作品を積み重ね、このサイトで制作の記録とスキルを共有します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="scroll-mt-14 border-b border-ink/10 bg-paper-muted px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-ink md:text-left">
              Product
            </h2>
            <span className="font-display text-gold-dim" aria-hidden>
              ♠ ♥ ♦ ♣
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft md:mx-0 md:text-left">
            制作したウェブページやデザインの一部を紹介します（内容は随時更新できます）。
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <li
                key={item.title}
                className="group flex flex-col rounded-sm border border-ink/10 bg-paper p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-[0_20px_40px_-15px_rgba(26,23,22,0.12)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
                  {item.category}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-burgundy-deep transition-colors hover:text-burgundy"
                >
                  {item.external ? "サイトを開く" : "詳しく見る"}
                  <span aria-hidden className="text-gold">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="career"
        className="scroll-mt-14 border-b border-ink/10 bg-paper px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-ink md:text-left">
            Career
          </h2>
          <div className="mt-12 space-y-12">
            <div className="rounded-sm border border-ink/10 bg-paper-muted/50 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dim">
                基本情報
              </h3>
              <dl className="mt-6 space-y-4 text-ink-soft">
                <div className="flex flex-col gap-1 border-b border-ink/5 pb-4 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 font-medium text-ink sm:w-28">氏名</dt>
                  <dd className="font-display text-lg font-medium text-ink">
                    藤森 悠太
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-ink/5 pb-4 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 font-medium text-ink sm:w-28">所属</dt>
                  <dd>青山学院大学 理工学部情報テクノロジー学科</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 font-medium text-ink sm:w-28">サークル</dt>
                  <dd>青山スカッシュラケット愛好会 40期 副代表</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dim">
                経歴
              </h3>
              <ul className="relative mt-6 space-y-8 border-l border-gold/40 pl-8">
                <li className="relative">
                  <span className="absolute -left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper bg-burgundy shadow-sm ring-2 ring-gold/30" />
                  <p className="font-display text-lg font-medium text-ink">2024年</p>
                  <p className="mt-1 text-ink-soft">諏訪清陵高等学校 卒業</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper bg-burgundy shadow-sm ring-2 ring-gold/30" />
                  <p className="font-display text-lg font-medium text-ink">2024年</p>
                  <p className="mt-1 text-ink-soft">
                    青山学院大学 理工学部情報テクノロジー学科 入学
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper bg-burgundy shadow-sm ring-2 ring-gold/30" />
                  <p className="font-display text-lg font-medium text-ink">2026年</p>
                  <p className="mt-1 text-ink-soft">
                    Life is Tech！Leaders に参加
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-14 border-t border-gold/10 bg-felt-deep px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper">
            Contact
          </h2>
          <p className="mt-4 text-paper/70">
            SNS からお気軽にフォロー・ご連絡ください。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="https://www.instagram.com/f_y4q/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-sm border border-gold/30 bg-felt px-6 py-4 text-left shadow-[inset_0_1px_0_0_rgba(201,166,107,0.12)] transition-all hover:border-gold/50 hover:bg-felt-deep"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-inner"
                aria-hidden
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Instagram
                </span>
                <span className="font-display text-lg font-semibold text-paper">
                  @f_y4q
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
