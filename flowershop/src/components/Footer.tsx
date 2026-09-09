import Link from "next/link";
import { generalWhatsAppMessage, site, whatsappUrl } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#e8dfd4] bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.28em] font-light">
            LEELY
          </p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
            浪漫極簡日系花室。少一點裝飾，多一點剛剛好的顏色。
          </p>
        </div>
        <div className="text-sm leading-8 text-muted">
          <p className="text-foreground tracking-wide">營業時間</p>
          <p>{site.hours}</p>
          <p>{site.cutoff}</p>
        </div>
        <div className="text-sm leading-8 text-muted">
          <p className="text-foreground tracking-wide">聯絡</p>
          <p>WhatsApp {site.whatsappDisplay}</p>
          <div className="mt-2 flex flex-col gap-1">
            <Link href="/bouquets" className="hover:text-foreground">
              本週花束
            </Link>
            <a
              href={whatsappUrl(generalWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              即時訂花
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-[#e8dfd4] py-5 text-center text-xs tracking-widest text-muted">
        © {new Date().getFullYear()} LEELY
      </p>
    </footer>
  );
}
