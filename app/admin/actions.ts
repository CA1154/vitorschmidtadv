"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DOMPurify from "isomorphic-dompurify";

const DIACRITICS_RE = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(input: string) {
  return input
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function ensureUniqueSlug(baseSlug: string, excludeId?: string) {
  const supabase = await createClient();
  let slug = slugify(baseSlug) || "artigo";
  let suffix = 1;

  while (true) {
    let query = supabase.from("articles").select("id").eq("slug", slug);
    if (excludeId) query = query.neq("id", excludeId);
    const { data } = await query.maybeSingle();
    if (!data) return slug;
    suffix += 1;
    slug = `${slugify(baseSlug)}-${suffix}`;
  }
}

export async function createArticle(formData: FormData) {
  const supabase = await createClient();
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = DOMPurify.sanitize(String(formData.get("content") ?? ""));
  const coverImageUrl = String(formData.get("cover_image_url") ?? "").trim() || null;
  const publish = formData.get("intent") === "publish";
  const requestedSlug = String(formData.get("slug") ?? "").trim() || title;

  if (!title) {
    redirect("/admin/novo?error=Título é obrigatório");
  }

  const slug = await ensureUniqueSlug(requestedSlug);

  const { error } = await supabase.from("articles").insert({
    title,
    slug,
    excerpt,
    content,
    cover_image_url: coverImageUrl,
    published: publish,
  });

  if (error) {
    redirect(`/admin/novo?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/admin");
  revalidatePath("/artigos");
  redirect("/admin");
}

export async function updateArticle(formData: FormData) {
  const supabase = await createClient();
  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = DOMPurify.sanitize(String(formData.get("content") ?? ""));
  const coverImageUrl = String(formData.get("cover_image_url") ?? "").trim() || null;
  const publish = formData.get("intent") === "publish";
  const requestedSlug = String(formData.get("slug") ?? "").trim() || title;

  if (!id || !title) {
    redirect(`/admin/${id}/editar?error=Título é obrigatório`);
  }

  const slug = await ensureUniqueSlug(requestedSlug, id);

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      slug,
      excerpt,
      content,
      cover_image_url: coverImageUrl,
      published: publish,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    redirect(`/admin/${id}/editar?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/admin");
  revalidatePath("/artigos");
  revalidatePath(`/artigos/${slug}`);
  redirect("/admin");
}

export async function deleteArticle(formData: FormData) {
  const supabase = await createClient();
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await supabase.from("articles").delete().eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/artigos");
}

export async function togglePublish(formData: FormData) {
  const supabase = await createClient();
  const id = String(formData.get("id") ?? "");
  const nextPublished = formData.get("next") === "true";
  if (!id) return;

  await supabase
    .from("articles")
    .update({ published: nextPublished, updated_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/artigos");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
