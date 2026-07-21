import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Artigos | Vitor Schmidt — TSP Sociedade de Advogados",
  description:
    "Artigos sobre direito empresarial, contratos, societário e planejamento sucessório por Vitor Santos Schmidt.",
};

export const revalidate = 0;

export default async function ArtigosPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  const articles = (data ?? []) as Article[];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Artigos</h1>
          <p>
            Análises sobre direito empresarial, contratos, societário e planejamento
            patrimonial.
          </p>
        </div>
      </section>

      <div className="container">
        {articles.length === 0 ? (
          <div className="artigos-empty">
            <p>Nenhum artigo publicado ainda. Volte em breve.</p>
          </div>
        ) : (
          <div className="artigos-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
