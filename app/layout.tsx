import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vitor Schmidt | Advogado Cível e Empresarial — TSP Sociedade de Advogados",
  description:
    "Vitor Santos Schmidt, advogado cível e empresarial na TSP Sociedade de Advogados. Contratos, societário, planejamento sucessório, inventário e direito empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
