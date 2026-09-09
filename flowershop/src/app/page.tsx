import Image from "next/image";
import Link from "next/link";
import { BouquetCard } from "../components/BouquetCard";
import { bouquets, occasions } from "../data/bouquets";
import { generalWhatsAppMessage, site, whatsappUrl } from "../lib/site";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="text-xs tracking-[0.35em] text-muted">FLOWER ATELIER · HONG KONG</p>
          <h1 className="mt-5 font-display text-5xl font-light leading-tight tracking-wide md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-8 text-muted">
            Leely 以柔和色紙、細絲帶與自然光為花束留白。第一版以 WhatsApp 落單，把一束剛剛好的花送到你手上。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/bouquets"
              className="rounded-xl bg-muted px-6 py-3 text-sm tracking-wide text-cream transition-opacity hover:opacity-90"
            >
              睇本週花束
            </Link>
            <a
              href={whatsappUrl(generalWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3 text-sm tracking-wide text-muted ring-1 ring-[#d8cfc4] transition-colors hover:bg-paper"
            >
              WhatsApp 訂花
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/collage.jpg"
            alt="Leely 花束"
            width={1024}
            height={917}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted">THIS WEEK</p>
            <h2 className="mt-2 font-display text-4xl font-light">本週花束</h2>
          </div>
          <Link href="/bouquets" className="text-sm text-sage hover:text-foreground">
            全部花束
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {bouquets.map((bouquet) => (
            <BouquetCard key={bouquet.slug} bouquet={bouquet} />
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-xs tracking-[0.3em] text-muted">OCCASIONS</p>
          <h2 className="mt-2 font-display text-4xl font-light">按場合揀</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {occasions.map((item) => (
              <Link
                key={item.label}
                href="/bouquets"
                className="rounded-xl bg-cream/80 px-5 py-6 transition-transform hover:-translate-y-0.5"
              >
                <p className="font-display text-2xl font-light">{item.label}</p>
                <p className="mt-2 text-sm text-muted">{item.hint}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3 md:px-8">
        {[
          { title: "當日新鮮花材", body: "按週選花，色調柔和，不堆砌。" },
          { title: "香港送貨", body: "市區配送；截單時間清楚寫在每束花頁。" },
          { title: "手寫卡", body: "WhatsApp 告訴我們字句，我們代寫在卡片上。" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl px-1">
            <h3 className="font-display text-2xl font-light">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
