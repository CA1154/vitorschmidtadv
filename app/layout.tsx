import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-5WT3ZV7V3F" />
    </html>
  );
}
