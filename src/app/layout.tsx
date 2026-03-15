import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Полянских Олеся — Исполнительный / Креативный продюсер",
  description:
    "Продюсирую визуальные проекты, которые запоминаются. Музыкальные клипы, рекламные съемки, digital-контент, fashion, подкасты и видеопродакшн.",
  keywords: [
    "продюсер",
    "креативный продюсер",
    "исполнительный продюсер",
    "музыкальные клипы",
    "рекламные съемки",
    "видеопродакшн",
    "Полянских Олеся",
  ],
  authors: [{ name: "Полянских Олеся Юрьевна" }],
  openGraph: {
    title: "Полянских Олеся — Исполнительный / Креативный продюсер",
    description:
      "Продюсирую визуальные проекты, которые запоминаются. Музыкальные клипы, рекламные съемки, digital-контент, fashion и видеопродакшн.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-primary text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
