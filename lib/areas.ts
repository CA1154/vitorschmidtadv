export type AreaContent = {
  slug: string;
  title: string;
  text: string;
  details: string;
  heroHeadline: string;
  heroSubtitle: string;
  benefits: string[];
  topics: string[];
  closingCta: string;
};

export const AREAS: AreaContent[] = [
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    text: "Assessoria jurídica na estruturação, proteção e desenvolvimento de empresas. Contratos societários, reorganizações, holdings, governança corporativa e resolução de conflitos entre sócios.",
    details:
      "Atuação consultiva e contenciosa para empresas de todos os portes, com foco em prevenir litígios por meio de contratos e estruturas bem desenhadas. Inclui due diligence societária, reorganizações empresariais, governança corporativa, acordos de acionistas/quotistas e mediação de conflitos entre sócios antes que se tornem processos judiciais.",
    heroHeadline: "Segurança jurídica para sua empresa crescer sem sobressaltos",
    heroSubtitle:
      "Assessoria jurídica empresarial que antecipa riscos, protege o negócio e evita que conflitos societários virem processo.",
    benefits: [
      "Estruturas contratuais e societárias bem desenhadas, reduzindo o risco de litígios futuros",
      "Due diligence completa antes de fusões, aquisições ou entrada de novos sócios",
      "Mediação de conflitos entre sócios antes que cheguem à Justiça",
      "Governança corporativa alinhada ao tamanho e ao momento da empresa",
    ],
    topics: [
      "Due diligence societária",
      "Reorganizações empresariais e holdings",
      "Governança corporativa",
      "Acordos de acionistas e quotistas",
      "Mediação de conflitos entre sócios",
    ],
    closingCta: "Sua empresa precisa de segurança jurídica para crescer?",
  },
  {
    slug: "contratos",
    title: "Contratos",
    text: "Elaboração, revisão e gestão de contratos empresariais e civis. NDAs, instrumentos comerciais, imobiliários e parcerias complexas.",
    details:
      "Redação e revisão de contratos sob medida — comerciais, de prestação de serviços, parcerias, locação, compra e venda e NDAs — com atenção a cláusulas de risco, multas, garantias e foro. O objetivo é reduzir ambiguidades que geram disputas futuras e garantir que o contrato reflita exatamente o que foi negociado.",
    heroHeadline: "Contratos redigidos para proteger o que foi negociado",
    heroSubtitle:
      "Elaboração e revisão de contratos empresariais e civis, com atenção a cláusulas de risco, garantias e foro.",
    benefits: [
      "Cláusulas claras que reduzem ambiguidade e risco de disputa futura",
      "Revisão criteriosa antes de assinar qualquer contrato relevante",
      "Contratos sob medida para a realidade do seu negócio, não modelos genéricos",
      "Agilidade para não travar negociações em andamento",
    ],
    topics: [
      "Contratos comerciais e de prestação de serviços",
      "NDAs e acordos de confidencialidade",
      "Contratos de locação e compra e venda",
      "Parcerias e joint ventures",
      "Revisão de contratos já assinados",
    ],
    closingCta: "Precisa elaborar ou revisar um contrato com segurança?",
  },
  {
    slug: "societario",
    title: "Societário",
    text: "Assessoria completa nas relações societárias: constituição e dissolução de sociedades, alterações contratuais, acordo de sócios, conflitos societários e reestruturações empresariais.",
    details:
      "Da constituição à dissolução: elaboração e alteração de contratos sociais, acordos de sócios com regras claras de entrada e saída, resolução de impasses societários (inclusive dissoluções parciais) e reestruturações societárias para adequar a empresa a um novo momento — crescimento, sucessão ou reorganização de sócios.",
    heroHeadline: "Da constituição à reestruturação, sua sociedade em bases sólidas",
    heroSubtitle:
      "Assessoria completa nas relações entre sócios, do contrato social ao acordo de saída.",
    benefits: [
      "Contratos sociais e acordos de sócios com regras claras de entrada e saída",
      "Resolução de impasses societários antes que travem a operação",
      "Reestruturações societárias alinhadas ao momento da empresa",
      "Mais segurança jurídica nas decisões entre sócios",
    ],
    topics: [
      "Constituição e dissolução de sociedades",
      "Alterações contratuais",
      "Acordo de sócios e quotistas",
      "Dissolução parcial de sociedade",
      "Reestruturações societárias",
    ],
    closingCta: "Precisa organizar ou resolver uma questão entre sócios?",
  },
  {
    slug: "planejamento-sucessorio",
    title: "Planejamento Sucessório",
    text: "Estruturação jurídica da transmissão de patrimônio e negócios familiares, com foco na proteção de ativos, redução de conflitos e eficiência tributária. Holdings familiares, doações e testamentos.",
    details:
      "Planejamento antecipado de como o patrimônio e a empresa da família serão transmitidos, evitando disputas entre herdeiros e reduzindo a carga tributária da sucessão. Envolve a análise de holdings familiares, doações com reserva de usufruto, testamentos e outras estruturas adequadas à realidade de cada família.",
    heroHeadline: "Proteja seu patrimônio e evite conflitos entre herdeiros",
    heroSubtitle:
      "Planejamento sucessório estruturado para transmitir patrimônio e empresa familiar com eficiência tributária.",
    benefits: [
      "Redução da carga tributária na transmissão do patrimônio",
      "Menos espaço para disputas entre herdeiros no futuro",
      "Estruturas sob medida para a realidade de cada família",
      "Continuidade da empresa familiar preservada",
    ],
    topics: [
      "Holdings familiares",
      "Doações com reserva de usufruto",
      "Testamentos",
      "Planejamento patrimonial",
      "Sucessão de empresa familiar",
    ],
    closingCta: "Já pensou em como o seu patrimônio será transmitido?",
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    text: "Demandas cíveis estratégicas envolvendo responsabilidade civil, obrigações, conflitos imobiliários, execuções e litígios empresariais.",
    details:
      "Atuação em disputas cíveis complexas — responsabilidade civil, cobrança de dívidas, conflitos imobiliários e execuções — sempre com uma leitura estratégica do caso: quando vale a pena negociar e quando é preciso litigar até o fim.",
    heroHeadline: "Defesa estratégica em disputas cíveis complexas",
    heroSubtitle:
      "Atuação em responsabilidade civil, cobranças, conflitos imobiliários e execuções, com leitura estratégica de cada caso.",
    benefits: [
      "Avaliação honesta: quando negociar e quando litigar até o fim",
      "Atuação tanto na defesa quanto na cobrança de valores",
      "Experiência em conflitos imobiliários e execuções",
      "Acompanhamento em todas as fases do processo",
    ],
    topics: [
      "Responsabilidade civil",
      "Cobrança de dívidas",
      "Conflitos imobiliários",
      "Execuções",
      "Litígios empresariais",
    ],
    closingCta: "Está enfrentando uma disputa cível e precisa de orientação?",
  },
  {
    slug: "direito-do-agronegocio",
    title: "Direito do Agronegócio",
    text: "Atuação especializada no setor agropecuário: crédito rural, renegociação de dívidas, contratos agrícolas, CPR, garantias reais e regularização fundiária.",
    details:
      "Suporte jurídico a produtores e empresas rurais em operações de crédito rural, emissão e execução de CPR, contratos de parceria e arrendamento rural, renegociação de dívidas agrícolas e regularização fundiária — áreas com particularidades próprias que exigem conhecimento específico do setor.",
    heroHeadline: "Suporte jurídico especializado para quem produz",
    heroSubtitle:
      "Atuação no setor agropecuário: crédito rural, contratos agrícolas, CPR e regularização fundiária.",
    benefits: [
      "Conhecimento das particularidades do setor rural",
      "Apoio na renegociação de dívidas agrícolas",
      "Segurança em operações de crédito rural e CPR",
      "Regularização fundiária conduzida com atenção aos detalhes",
    ],
    topics: [
      "Crédito rural",
      "CPR — Cédula de Produto Rural",
      "Contratos de parceria e arrendamento rural",
      "Renegociação de dívidas agrícolas",
      "Regularização fundiária",
    ],
    closingCta: "Precisa de suporte jurídico para sua operação rural?",
  },
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    text: "Consultoria e contencioso tributário para pessoas físicas e jurídicas. Planejamento fiscal, defesa em autuações administrativas e judiciais, recuperação de créditos.",
    details:
      "Planejamento tributário preventivo para reduzir a carga fiscal dentro da legalidade, defesa em autuações e execuções fiscais nas esferas administrativa e judicial, e identificação de créditos tributários recuperáveis — sempre alinhado à realidade operacional do negócio.",
    heroHeadline: "Planejamento tributário e defesa contra autuações fiscais",
    heroSubtitle:
      "Consultoria e contencioso tributário para reduzir a carga fiscal dentro da legalidade e defender o seu negócio.",
    benefits: [
      "Planejamento fiscal preventivo, dentro da legalidade",
      "Defesa técnica em autuações administrativas e execuções fiscais",
      "Identificação de créditos tributários recuperáveis",
      "Estratégia alinhada à realidade operacional do negócio",
    ],
    topics: [
      "Planejamento tributário preventivo",
      "Defesa em autuações fiscais",
      "Execuções fiscais",
      "Recuperação de créditos tributários",
      "Consultoria tributária para pessoa física e jurídica",
    ],
    closingCta: "Recebeu uma autuação fiscal ou quer reduzir sua carga tributária?",
  },
  {
    slug: "trabalhista-para-empresa",
    title: "Trabalhista para Empresa",
    text: "Assessoria preventiva e contenciosa em relações trabalhistas empresariais. Gestão de passivo trabalhista, defesa em reclamações, contratos e compliance trabalhista.",
    details:
      "Atuação do lado da empresa: elaboração de contratos e políticas internas que reduzem o risco de passivo trabalhista, defesa em reclamações trabalhistas e orientação de compliance para manter a operação alinhada à legislação e evitar contingências futuras.",
    heroHeadline: "Proteja sua empresa de passivos trabalhistas",
    heroSubtitle:
      "Assessoria preventiva e contenciosa em relações trabalhistas, sempre do lado da empresa.",
    benefits: [
      "Contratos e políticas internas que reduzem risco de passivo trabalhista",
      "Defesa técnica em reclamações trabalhistas",
      "Compliance trabalhista alinhado à legislação",
      "Prevenção que evita contingências caras no futuro",
    ],
    topics: [
      "Defesa em reclamações trabalhistas",
      "Contratos de trabalho",
      "Políticas internas e compliance",
      "Gestão de passivo trabalhista",
      "Auditoria trabalhista preventiva",
    ],
    closingCta: "Sua empresa está protegida de riscos trabalhistas?",
  },
  {
    slug: "privacidade-de-dados-e-direito-digital",
    title: "Privacidade de Dados e Direito Digital",
    text: "Adequação à LGPD, governança de dados e assessoria jurídica em contratos e disputas envolvendo tecnologia, internet e ambientes digitais.",
    details:
      "Estruturação de programas de adequação à LGPD (mapeamento de dados, políticas de privacidade, bases legais de tratamento), assessoria em incidentes de segurança da informação, contratos de tecnologia e SaaS, e atuação em disputas envolvendo comércio eletrônico, marketplaces e responsabilidade civil no ambiente digital.",
    heroHeadline: "Adequação à LGPD e segurança jurídica no ambiente digital",
    heroSubtitle:
      "Governança de dados, contratos de tecnologia e defesa em disputas do comércio eletrônico.",
    benefits: [
      "Programa de adequação à LGPD sob medida para sua empresa",
      "Redução de risco em incidentes de segurança da informação",
      "Contratos de tecnologia e SaaS bem estruturados",
      "Atuação em disputas de comércio eletrônico e marketplaces",
    ],
    topics: [
      "Adequação à LGPD",
      "Mapeamento de dados e políticas de privacidade",
      "Contratos de tecnologia e SaaS",
      "Incidentes de segurança da informação",
      "Disputas em comércio eletrônico",
    ],
    closingCta: "Sua empresa já está adequada à LGPD?",
  },
];

export function getAreaBySlug(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}
