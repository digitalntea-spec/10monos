import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "10 Monos | Landing Pages, Automatización e IA para Empresas",
  description:
    "Creamos landing pages de alto impacto, automatizaciones inteligentes y sistemas digitales que convierten visitas en clientes.",
  keywords: [
    "landing page",
    "marketing digital",
    "automatizaciones",
    "CRM",
    "inteligencia artificial",
    "agencia digital argentina",
  ],
  openGraph: {
    title: "10 Monos | Landing Pages, Automatización e IA",
    description:
      "Convertimos visitas en clientes. Landing Pages, Automatización e IA para empresas argentinas.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased noise">{children}</body>
    </html>
  );
}
