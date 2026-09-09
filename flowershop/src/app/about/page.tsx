import type { Metadata } from "next";
import Image from "next/image";
import { generalWhatsAppMessage, whatsappUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "關於花室",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p className="text-xs tracking-[0.3em] text-muted">ATELIER</p>
      <h1 className="mt-2 font-display text-5xl font-light">關於 Leely</h1>
      <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/collage.jpg"
            alt="Leely 花束作品"
            width={1024}
            height={917}
            className="h-auto w-full"
          />
        </div>
        <div className="max-w-lg text-sm leading-8 text-muted">
          <p>
            Leely 相信花不必喧嘩。我們用奶油色、霧藍、薄暮紫同橄欖綠，把一束花收進柔和的紙裡，再貼上細細的 serif 貼紙。
          </p>
          <p className="mt-5">
            花束都在自然光下完成：白牆、大理石桌、長絲帶。網站亦如是——留白、少字、讓花自己說話。
          </p>
          <p className="mt-5">
            第一版以 WhatsApp 落單。告訴我們場合、色調同想寫在卡片上的句子，我們會為你配一束剛剛好的花。
          </p>
          <a
            href={whatsappUrl(generalWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-muted px-6 py-3 text-cream"
          >
            同我們談談
          </a>
        </div>
      </div>
    </div>
  );
}
