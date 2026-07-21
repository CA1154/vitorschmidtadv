"use client";

import { useState } from "react";
import Link from "next/link";
import { togglePublish } from "@/app/admin/actions";
import DeleteArticleButton from "@/components/DeleteArticleButton";
import type { Article } from "@/lib/supabase/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR");
}

export default function AdminArticlesTable({ articles }: { articles: Article[] }) {
  const [tab, setTab] = useState<"published" | "draft">("published");

  const published = articles.filter((a) => a.published);
  const drafts = articles.filter((a) => !a.published);
  const visible = tab === "published" ? published : drafts;

  return (
    <div>
      <div className="admin-tabs">
        <button
          type="button"
          className={`admin-tab ${tab === "published" ? "admin-tab-active" : ""}`}
          onClick={() => setTab("published")}
        >
          Publicados ({published.length})
        </button>
        <button
          type="button"
          className={`admin-tab ${tab === "draft" ? "admin-tab-active" : ""}`}
          onClick={() => setTab("draft")}
        >
          Rascunhos ({drafts.length})
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="admin-empty">
          {tab === "published"
            ? "Nenhum artigo publicado ainda."
            : "Nenhum rascunho no momento."}
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Status</th>
              <th>Visualizações</th>
              <th>Criado em</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>
                  <span className={`badge ${article.published ? "badge-published" : "badge-draft"}`}>
                    {article.published ? "Publicado" : "Rascunho"}
                  </span>
                </td>
                <td>{article.views ?? 0}</td>
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
