import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AREAS, getAreaBySlug } from "@/lib/areas";

export async function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `${area.title} | Vitor Schmidt — TSP Sociedade de Advogados`,
    description: area.heroSubtitle,
    openGraph: {
      title: `${area.title} | TSP Sociedade de Advogados`,
      description: area.heroSubtitle,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const waLinkForArea = `https://wa.me/5519998624510?text=${encodeURIComponent(
    `Olá, Vitor! Gostaria de falar sobre ${area.title}.`
  )}`;

  return (
    <>
      <section className="page-hero area-hero">
        <div className="container">
          <Link href="/#areas" className="area-back-link">
            ← Áreas de Atuação
          </Link>
          <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
          <h1>{area.heroHeadline}</h1>
          <p>{area.heroSubtitle}</p>
          <div className="hero-actions area-hero-actions">
            <a href={waLinkForArea} className="btn btn-gold" target="_blank" rel="noopener">
              FALAR COM O VITOR
            </a>
            <Link href="/#areas" className="btn btn-outline">
              VER OUTRAS ÁREAS
            </Link>
          </div>
        </div>
      </section>

      <section className="area-intro">
        <div className="container">
          <p>{area.details}</p>
        </div>
      </section>

      <section className="area-benefits">
        <div className="container">
          <p className="eyebrow eyebrow-dark">COMO POSSO AJUDAR</p>
          <h2 className="section-title">Benefícios de uma assessoria estratégica</h2>
          <ul className="area-benefits-list">
            {area.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="area-topics">
        <div className="container">
          <p className="eyebrow eyebrow-dark">O QUE ESTÁ INCLUÍDO</p>
          <h2 className="section-title">Frentes de atuação em {area.title}</h2>
          <div className="area-topics-grid">
            {area.topics.map((topic) => (
              <div className="area-topic-card" key={topic}>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h2>{area.closingCta}</h2>
          <a href={waLinkForArea} className="btn btn-gold" target="_blank" rel="noopener">
            FALAR COM O VITOR
          </a>
        </div>
      </section>
    </>
  );
}
