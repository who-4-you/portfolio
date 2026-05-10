import Image from "next/image";

const products = [
  {
    title: "ポートフォリオサイト",
    category: "Web",
    description:
      "自身の紹介と制作物をまとめたレスポンシブ対応のシングルページサイトです。",
    href: "#top",
  },
  {
    title: "UIコンセプト",
    category: "Design",
    description:
      "アプリ画面のワイヤーフレームとカラーパレット案。ユーザー導線を意識したレイアウト研究。",
    href: "#",
  },
  {
    title: "ランディングページ案",
    category: "Web",
    description:
      "サービス紹介向けのヒーロー・特徴セクション構成のモックアップ。",
    href: "#",
  },
];

export default function Home() {
  return (
    <>
      <section
        id="top"
        className="border-b border-zinc-200 bg-white scroll-mt-14"
      >
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
          <div className="mx-auto w-full max-w-lg md:mx-0 md:max-w-xl">
            <Image
              src="/images/LiT_名刺.png"
              alt="藤森悠太のプロフィール写真"
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 100vw, 480px"
              priority
              className="h-auto w-full rounded-2xl shadow-lg ring-1 ring-zinc-200/80"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
              Overview
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              藤森 悠太
            </h1>
            <p className="mt-2 text-lg text-zinc-600">
              青山学院大学 理工学部情報テクノロジー学科
            </p>
            <p className="mt-8 text-base leading-relaxed text-zinc-600">
              Web とデザインを通じて、使いやすさと印象に残る体験をつくりたいと考えています。
              学びながら作品を積み重ね、このサイトで制作の記録とスキルを共有します。
            </p>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="scroll-mt-14 border-b border-zinc-200 bg-zinc-50 px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 md:text-left">
            Product
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600 md:mx-0 md:text-left">
            制作したウェブページやデザインの一部を紹介します（内容は随時更新できます）。
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-600">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  詳しく見る
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="career"
        className="scroll-mt-14 border-b border-zinc-200 bg-white px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 md:text-left">
            Career
          </h2>
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                基本情報
              </h3>
              <dl className="mt-4 space-y-2 text-zinc-700">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 text-zinc-500 sm:w-24">氏名</dt>
                  <dd className="font-medium text-zinc-900">藤森 悠太</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 text-zinc-500 sm:w-24">所属</dt>
                  <dd>青山学院大学 理工学部情報テクノロジー学科</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                経歴
              </h3>
              <ul className="mt-4 space-y-6 border-l-2 border-indigo-200 pl-6">
                <li className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-500" />
                  <p className="font-medium text-zinc-900">2024年</p>
                  <p className="mt-1 text-zinc-600">諏訪清陵高等学校 卒業</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-500" />
                  <p className="font-medium text-zinc-900">2024年</p>
                  <p className="mt-1 text-zinc-600">
                    青山学院大学 理工学部情報テクノロジー学科 入学
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-14 bg-zinc-50 px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Contact
          </h2>
          <p className="mt-3 text-zinc-600">
            SNS からお気軽にフォロー・ご連絡ください。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="https://www.instagram.com/f_y4q/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white"
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
                <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Instagram
                </span>
                <span className="text-base font-semibold text-zinc-900">
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
