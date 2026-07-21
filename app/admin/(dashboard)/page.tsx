import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { togglePublish } from "@/app/admin/actions";
import DeleteArticleButton from "@/components/DeleteArticleButton";
import type { Article } from "@/lib/supabase/types";

export const revalidate = 0;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR");
}

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  const articles = (data ?? []) as Article[];

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Artigos</h1>
        <Link href="/admin/novo" className="btn btn-gold btn-small">
          NOVO ARTIGO
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="admin-empty">Você ainda não escreveu nenhum artigo.</div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Status</th>
              <th>Criado em</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>
                  <span className={`badge ${article.published ? "badge-published" : "badge-draft"}`}>
                    {article.published ? "Publicado" : "Rascunho"}
                  </span>
                </td>
                <td>{formatDate(article.created_at)}</td>
                <td>
                  <div className="row-actions">
                    <Link href={`/admin/${article.id}/editar`}>Editar</Link>
                    <form action={togglePublish}>
                      <input type="hidden" name="id" value={article.id} />
                      <input type="hidden" name="next" value={(!article.published).toString()} />
                      <button type="submit">
                        {article.published ? "Despublicar" : "Publicar"}
                      </button>
                    </form>
                    <DeleteArticleButton id={article.id} title={article.title} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
