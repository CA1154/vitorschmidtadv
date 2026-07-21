-- Cole este arquivo inteiro no SQL Editor do seu projeto Supabase e clique em "Run".

create extension if not exists "pgcrypto";

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  cover_image_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.articles enable row level security;

-- Visitantes (não logados) só podem ler artigos publicados
create policy "Público lê artigos publicados"
  on public.articles for select
  to anon
  using (published = true);

-- Usuários logados (o Vitor) podem ler, criar, editar e excluir tudo
create policy "Autenticado lê tudo"
  on public.articles for select
  to authenticated
  using (true);

create policy "Autenticado insere"
  on public.articles for insert
  to authenticated
  with check (true);

create policy "Autenticado atualiza"
  on public.articles for update
  to authenticated
  using (true)
  with check (true);

create policy "Autenticado exclui"
  on public.articles for delete
  to authenticated
  using (true);

-- Bucket de imagens de capa dos artigos
insert into storage.buckets (id, name, public)
values ('article-covers', 'article-covers', true)
on conflict (id) do nothing;

create policy "Público vê imagens de capa"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'article-covers');

create policy "Autenticado envia imagens de capa"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'article-covers');

create policy "Autenticado remove imagens de capa"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'article-covers');
