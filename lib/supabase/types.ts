export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type ArticleInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  published: boolean;
};
