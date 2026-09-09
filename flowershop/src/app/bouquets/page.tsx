import type { Metadata } from "next";
import { BouquetCard } from "../../components/BouquetCard";
import { bouquets } from "../../data/bouquets";

export const metadata: Metadata = {
  title: "本週花束",
};

export default function BouquetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p className="text-xs tracking-[0.3em] text-muted">BOUQUETS</p>
      <h1 className="mt-2 font-display text-5xl font-light">本週花束</h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
        六款柔和色束，包裝與貼紙都是 Leely 的樣子。點進詳情，或直接 WhatsApp 訂呢束。
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {bouquets.map((bouquet) => (
          <BouquetCard key={bouquet.slug} bouquet={bouquet} />
        ))}
      </div>
    </div>
  );
}
