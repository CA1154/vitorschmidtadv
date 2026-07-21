import Link from "next/link";
import type { Article } from "@/lib/supabase/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/artigos/${article.slug}`} className="article-card reveal">
      <div className="article-card-cover">
        {article.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.cover_image_url} alt={article.title} />
        )}
      </div>
      <div className="article-card-body">
        <p className="article-card-date">{formatDate(article.created_at)}</p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
}
