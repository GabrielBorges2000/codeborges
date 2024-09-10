import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codeborges",
  description: `
  CODEBORGES - Desenvolvimento de Sistemas Personalizados

  Na CODEBORGES, somos especialistas em criar soluções tecnológicas sob medida para impulsionar o crescimento e a eficiência de negócios de todos os tamanhos. Combinamos conhecimento técnico avançado e inovação para atender às necessidades específicas de cada cliente. Oferecemos serviços de desenvolvimento web, aplicativos móveis, e integração de sistemas com foco em performance, escalabilidade e facilidade de uso. Conte conosco para transformar suas ideias em realidade com soluções que fazem a diferença.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        {children}
        <Analytics />
        <Toaster richColors />
      </body>
    </html>
  );
}
