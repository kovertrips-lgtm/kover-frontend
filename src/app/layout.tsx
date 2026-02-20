import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KOVER — Авторские туры с душой",
    template: "%s | KOVER Travel",
  },
  description:
    "Авторские туры по всему миру: серфинг в Марокко, йога на Бали, яхтинг по Сардинии и Корсике. Небольшие группы, уникальные маршруты, незабываемые впечатления.",
  keywords: [
    "авторские туры",
    "путешествия",
    "серфинг Марокко",
    "йога Бали",
    "яхтинг Сардиния",
    "туры из Европы",
    "KOVER",
    "kover travel",
    "туры небольшие группы",
  ],
  authors: [{ name: "KOVER Travel" }],
  creator: "KOVER Travel",
  metadataBase: new URL("https://kover-frontend.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "KOVER Travel",
    title: "KOVER — Авторские туры с душой",
    description:
      "Серфинг, йога, яхтинг и настоящие приключения. Небольшие группы, уникальные маршруты.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOVER — Авторские туры с душой",
    description:
      "Серфинг, йога, яхтинг и настоящие приключения. Небольшие группы, уникальные маршруты.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
