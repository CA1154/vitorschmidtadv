import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import AdminArticlesTable from "@/components/AdminArticlesTable";
import type { Article } from "@/lib/supabase/types";

export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  const articles = (data ?? []) as Article[];
  const publishedCount = articles.filter((a) => a.published).length;
  const draftCount = articles.length - publishedCount;
  const totalViews = articles.reduce((sum, a) => sum + (a.views ?? 0), 0);

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Artigos</h1>
        <Link href="/admin/novo" className="btn btn-gold btn-small">
          NOVO ARTIGO
        </Link>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <span className="admin-stat-value">{publishedCount}</span>
          <span className="admin-stat-label">Publicados</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-value">{draftCount}</span>
          <span className="admin-stat-label">Rascunhos</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-value">{totalViews}</span>
          <span className="admin-stat-label">Visualizações no total</span>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="admin-empty">Você ainda não escreveu nenhum artigo.</div>
      ) : (
        <AdminArticlesTable articles={articles} />
      )}
    </div>
  );
}
