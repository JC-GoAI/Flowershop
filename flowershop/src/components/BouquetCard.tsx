import Image from "next/image";
import Link from "next/link";
import type { Bouquet } from "../data/bouquets";
import { WhatsAppButton } from "./WhatsAppButton";

export function BouquetCard({ bouquet }: { bouquet: Bouquet }) {
  return (
    <article className="group">
      <Link href={`/bouquets/${bouquet.slug}`} className="block overflow-hidden rounded-xl bg-paper">
        <div className="relative aspect-square">
          <Image
            src={bouquet.image}
            alt={bouquet.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <Link href={`/bouquets/${bouquet.slug}`}>
            <h3 className="font-display text-2xl font-light tracking-wide">
              {bouquet.name}
            </h3>
            <p className="mt-0.5 text-xs tracking-[0.18em] text-muted uppercase">
              {bouquet.nameEn}
            </p>
          </Link>
          <p className="text-sm text-muted">HK${bouquet.price}</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{bouquet.poetic}</p>
        <WhatsAppButton
          name={bouquet.name}
          price={bouquet.price}
          className="mt-4 w-full"
        />
      </div>
    </article>
  );
}
