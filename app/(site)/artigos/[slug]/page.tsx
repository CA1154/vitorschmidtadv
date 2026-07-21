import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify";
import { createClient } from "@/lib/supabase/server";
import type { Article } from "@/lib/supabase/types";

export const revalidate = 0;

const WHATSAPP_LINK =
  "https://wa.me/5519998624510?text=Ol%C3%A1%2C%20Vitor!%20Vim%20do%20artigo%20do%20site%20e%20gostaria%20de%20conversar.";

async function getArticle(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  return data as Article | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Vitor Schmidt — TSP Sociedade de Advogados`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.cover_image_url ? [article.cover_image_url] : [],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const supabase = await createClient();
  supabase.rpc("increment_article_views", { article_slug: slug }).then(() => {});

  const cleanContent = DOMPurify.sanitize(article.content);

  return (
    <article className="article-detail">
      <div className="container">
        <p className="article-detail-date">{formatDate(article.created_at)}</p>
        <h1>{article.title}</h1>
      </div>

      {article.cover_image_url && (
        <div className="container">
          <div className="article-detail-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.cover_image_url} alt={article.title} />
          </div>
        </div>
      )}

      <div className="container">
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        <div className="article-cta reveal">
          <p>Precisa de orientação jurídica sobre esse assunto? Fale direto com o Vitor.</p>
          <a href={WHATSAPP_LINK} className="btn btn-gold" target="_blank" rel="noopener">
            ENTRE EM CONTATO
          </a>
        </div>
      </div>
    </article>
  );
}
