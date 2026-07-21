"use client";

import { deleteArticle } from "@/app/admin/actions";

export default function DeleteArticleButton({ id, title }: { id: string; title: string }) {
  return (
    <form
      action={deleteArticle}
      onSubmit={(e) => {
        if (!confirm(`Excluir o artigo "${title}"?`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="danger">
        Excluir
      </button>
    </form>
  );
}
