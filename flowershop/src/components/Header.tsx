"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { generalWhatsAppMessage, whatsappUrl } from "../lib/site";

const links = [
  { href: "/bouquets", label: "花束" },
  { href: "/about", label: "關於" },
  { href: "/delivery", label: "送貨" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8dfd4]/80 bg-[#faf7f2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-[1.35rem] font-light tracking-[0.35em] text-foreground"
        >
          LEELY
        </Link>
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(generalWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-muted px-4 py-2 text-cream transition-opacity hover:opacity-90"
          >
            WhatsApp 訂花
          </a>
        </nav>
        <button
          type="button"
          className="text-sm tracking-wide text-muted md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="選單"
        >
          {open ? "關閉" : "選單"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#e8dfd4] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm tracking-wide">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl(generalWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
            >
              WhatsApp 訂花
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
