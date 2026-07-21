import ArticleForm from "@/components/ArticleForm";
import { createArticle } from "@/app/admin/actions";

export default async function NovoArtigoPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Novo artigo</h1>
      </div>
      <ArticleForm action={createArticle} error={error} />
    </div>
  );
}
