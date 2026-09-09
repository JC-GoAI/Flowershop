export const site = {
  name: "LEELY",
  tagline: "今日一束，剛剛好。",
  whatsappE164: "85290000000",
  whatsappDisplay: "+852 9000 0000",
  hours: "每日 10:00–19:00",
  cutoff: "即日送貨請於下午 2 時前落單",
  instagram: "https://instagram.com/leely",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(name: string, price: number) {
  return `你好，我想訂 Leely「${name}」（HK$${price}）。`;
}

export function generalWhatsAppMessage() {
  return "你好，我想向 Leely 訂花，想了解本週花束同送貨安排。";
}
