import { orderMessage, whatsappUrl } from "../lib/site";

type Props = {
  name: string;
  price: number;
  className?: string;
  children?: string;
};

export function WhatsAppButton({
  name,
  price,
  className = "",
  children = "WhatsApp 訂呢束",
}: Props) {
  return (
    <a
      href={whatsappUrl(orderMessage(name, price))}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-muted px-6 py-3 text-sm tracking-wide text-cream transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
