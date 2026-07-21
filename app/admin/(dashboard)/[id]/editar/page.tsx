import { notFound } from "next/navigation";
import ArticleForm from "@/components/ArticleForm";
import { updateArticle } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";
import type { Article } from "@/lib/supabase/types";

export default async function EditarArtigoPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;

  const supabase = await createClient();
  const { data } = await supabase.from("articles").select("*").eq("id", id).single();

  if (!data) notFound();

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Editar artigo</h1>
      </div>
      <ArticleForm action={updateArticle} article={data as Article} error={error} />
    </div>
  );
}
