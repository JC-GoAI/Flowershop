import type { Metadata } from "next";
import { generalWhatsAppMessage, site, whatsappUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "送貨同取貨",
};

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-xs tracking-[0.3em] text-muted">DELIVERY</p>
      <h1 className="mt-2 font-display text-5xl font-light">送貨同取貨</h1>
      <div className="mt-10 space-y-10 text-sm leading-8 text-muted">
        <section>
          <h2 className="font-display text-3xl font-light text-foreground">截單時間</h2>
          <p className="mt-3">{site.cutoff}（星期日及公眾假期或會提早，下單前 WhatsApp 確認最穩陣。）</p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-light text-foreground">送貨範圍</h2>
          <p className="mt-3">
            港島、九龍市區優先；新界部分地區可安排，運費於 WhatsApp 確認地址後告知。滿 HK$800 可享指定區域免運（試行）。
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-light text-foreground">取貨</h2>
          <p className="mt-3">
            工作室取貨時段稍後公布。若你希望自取，請於 WhatsApp 註明，我們會回覆可取時間。
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-light text-foreground">手寫卡</h2>
          <p className="mt-3">
            每束可加手寫卡，建議 40 字內。把收花人稱呼同句子一併傳給我們即可。
          </p>
        </section>
        <a
          href={whatsappUrl(generalWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-xl bg-muted px-6 py-3 text-cream"
        >
          WhatsApp 查詢送貨
        </a>
      </div>
    </div>
  );
}
