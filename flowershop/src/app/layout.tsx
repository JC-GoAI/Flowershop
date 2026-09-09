import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_TC } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: {
    default: "LEELY — 今日一束，剛剛好。",
    template: "%s · LEELY",
  },
  description:
    "Leely 花室。浪漫極簡日系花束，香港 WhatsApp 訂花。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-HK"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
