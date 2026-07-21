-- Cole este arquivo no SQL Editor do seu projeto Supabase e clique em "Run".
-- Adiciona contador de visualizações aos artigos, com uma função seletiva
-- que permite incrementar o contador sem dar acesso de escrita total aos
-- visitantes do site (a policy de update continua restrita a authenticated).

alter table public.articles
  add column if not exists views integer not null default 0;

create or replace function public.increment_article_views(article_slug text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.articles
  set views = views + 1
  where slug = article_slug
    and published = true;
end;
$$;

grant execute on function public.increment_article_views(text) to anon, authenticated;
