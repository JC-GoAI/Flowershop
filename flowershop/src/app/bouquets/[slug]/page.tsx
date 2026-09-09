import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "../../../components/WhatsAppButton";
import { bouquets, getBouquet } from "../../../data/bouquets";
import { site } from "../../../lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bouquets.map((bouquet) => ({ slug: bouquet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bouquet = getBouquet(slug);
  if (!bouquet) return { title: "花束" };
  return { title: bouquet.name, description: bouquet.poetic };
}

export default async function BouquetDetailPage({ params }: Props) {
  const { slug } = await params;
  const bouquet = getBouquet(slug);
  if (!bouquet) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-paper">
        <Image
          src={bouquet.image}
          alt={bouquet.name}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Link href="/bouquets" className="text-xs tracking-[0.25em] text-muted">
          ← 全部花束
        </Link>
        <h1 className="mt-4 font-display text-5xl font-light">{bouquet.name}</h1>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
          {bouquet.nameEn}
        </p>
        <p className="mt-6 text-lg leading-8">{bouquet.poetic}</p>
        <p className="mt-4 font-display text-3xl font-light">HK${bouquet.price}</p>
        <dl className="mt-8 space-y-3 text-sm leading-7 text-muted">
          <div>
            <dt className="text-foreground">場合</dt>
            <dd>{bouquet.occasion}</dd>
          </div>
          <div>
            <dt className="text-foreground">花材</dt>
            <dd>{bouquet.stems}</dd>
          </div>
          <div>
            <dt className="text-foreground">包裝</dt>
            <dd>{bouquet.wrapping}</dd>
          </div>
          <div>
            <dt className="text-foreground">尺寸</dt>
            <dd>{bouquet.size}</dd>
          </div>
          <div>
            <dt className="text-foreground">保養</dt>
            <dd>{bouquet.care}</dd>
          </div>
          <div>
            <dt className="text-foreground">截單</dt>
            <dd>{site.cutoff} 可加手寫卡，WhatsApp 告訴我們字句即可。</dd>
          </div>
        </dl>
        <WhatsAppButton
          name={bouquet.name}
          price={bouquet.price}
          className="mt-10 w-full md:w-auto"
        />
      </div>
    </div>
  );
}
