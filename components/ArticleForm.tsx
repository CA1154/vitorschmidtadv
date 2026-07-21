"use client";

import { useState } from "react";
import ArticleEditor from "./ArticleEditor";
import ImageUploadField from "./ImageUploadField";
import type { Article } from "@/lib/supabase/types";

const DIACRITICS_RE = new RegExp("[\\u0300-\\u036f]", "g");

type Props = {
  action: (formData: FormData) => void;
  article?: Article;
  error?: string;
};

export default function ArticleForm({ action, article, error }: Props) {
  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!article);
  const [content, setContent] = useState(article?.content ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(article?.cover_image_url ?? "");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(
        value
          .toLowerCase()
          .normalize("NFD")
          .replace(DIACRITICS_RE, "")
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-")
      );
    }
  }

  return (
    <form action={action} className="admin-form">
      {error && <div className="admin-error">{error}</div>}
      {article && <input type="hidden" name="id" value={article.id} />}
      <input type="hidden" name="content" value={content} />
      <input type="hidden" name="cover_image_url" value={coverImageUrl} />

      <label htmlFor="title">Título</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
        required
      />

      <label htmlFor="slug">Endereço do artigo (slug)</label>
      <input
        type="text"
        id="slug"
        name="slug"
        value={slug}
        onChange={(e) => {
          setSlugTouched(true);
          setSlug(e.target.value);
        }}
      />
      <p className="admin-form-hint">tspadvogados.com.br/artigos/{slug || "seu-artigo"}</p>

      <label htmlFor="excerpt">Resumo (aparece na listagem)</label>
      <textarea id="excerpt" name="excerpt" rows={3} defaultValue={article?.excerpt ?? ""} required />

      <label>Imagem de capa</label>
      <ImageUploadField value={coverImageUrl} onChange={setCoverImageUrl} />

      <label>Conteúdo</label>
      <ArticleEditor initialContent={content} onChange={setContent} />

      <div className="admin-form-actions">
        <button type="submit" name="intent" value="draft" className="btn btn-navy">
          SALVAR COMO RASCUNHO
        </button>
        <button type="submit" name="intent" value="publish" className="btn btn-gold">
          {article?.published ? "SALVAR E MANTER PUBLICADO" : "PUBLICAR"}
        </button>
      </div>
    </form>
  );
}
