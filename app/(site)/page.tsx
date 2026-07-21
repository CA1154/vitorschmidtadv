import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AreasAccordion, { type Area } from "@/components/AreasAccordion";

const WHATSAPP_LINK =
  "https://wa.me/5519998624510?text=Ol%C3%A1%2C%20Vitor!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20uma%20quest%C3%A3o%20jur%C3%ADdica.";

const AREAS: Area[] = [
  {
    title: "Direito Empresarial",
    text: "Assessoria jurídica na estruturação, proteção e desenvolvimento de empresas. Contratos societários, reorganizações, holdings, governança corporativa e resolução de conflitos entre sócios.",
    details:
      "Atuação consultiva e contenciosa para empresas de todos os portes, com foco em prevenir litígios por meio de contratos e estruturas bem desenhadas. Inclui due diligence societária, reorganizações empresariais, governança corporativa, acordos de acionistas/quotistas e mediação de conflitos entre sócios antes que se tornem processos judiciais.",
  },
  {
    title: "Contratos",
    text: "Elaboração, revisão e gestão de contratos empresariais e civis. NDAs, instrumentos comerciais, imobiliários e parcerias complexas.",
    details:
      "Redação e revisão de contratos sob medida — comerciais, de prestação de serviços, parcerias, locação, compra e venda e NDAs — com atenção a cláusulas de risco, multas, garantias e foro. O objetivo é reduzir ambiguidades que geram disputas futuras e garantir que o contrato reflita exatamente o que foi negociado.",
  },
  {
    title: "Societário",
    text: "Assessoria completa nas relações societárias: constituição e dissolução de sociedades, alterações contratuais, acordo de sócios, conflitos societários e reestruturações empresariais.",
    details:
      "Da constituição à dissolução: elaboração e alteração de contratos sociais, acordos de sócios com regras claras de entrada e saída, resolução de impasses societários (inclusive dissoluções parciais) e reestruturações societárias para adequar a empresa a um novo momento — crescimento, sucessão ou reorganização de sócios.",
  },
  {
    title: "Planejamento Sucessório",
    text: "Estruturação jurídica da transmissão de patrimônio e negócios familiares, com foco na proteção de ativos, redução de conflitos e eficiência tributária. Holdings familiares, doações e testamentos.",
    details:
      "Planejamento antecipado de como o patrimônio e a empresa da família serão transmitidos, evitando disputas entre herdeiros e reduzindo a carga tributária da sucessão. Envolve a análise de holdings familiares, doações com reserva de usufruto, testamentos e outras estruturas adequadas à realidade de cada família.",
  },
  {
    title: "Direito Civil",
    text: "Demandas cíveis estratégicas envolvendo responsabilidade civil, obrigações, conflitos imobiliários, execuções e litígios empresariais.",
    details:
      "Atuação em disputas cíveis complexas — responsabilidade civil, cobrança de dívidas, conflitos imobiliários e execuções — sempre com uma leitura estratégica do caso: quando vale a pena negociar e quando é preciso litigar até o fim.",
  },
  {
    title: "Direito do Agronegócio",
    text: "Atuação especializada no setor agropecuário: crédito rural, renegociação de dívidas, contratos agrícolas, CPR, garantias reais e regularização fundiária.",
    details:
      "Suporte jurídico a produtores e empresas rurais em operações de crédito rural, emissão e execução de CPR, contratos de parceria e arrendamento rural, renegociação de dívidas agrícolas e regularização fundiária — áreas com particularidades próprias que exigem conhecimento específico do setor.",
  },
  {
    title: "Direito Tributário",
    text: "Consultoria e contencioso tributário para pessoas físicas e jurídicas. Planejamento fiscal, defesa em autuações administrativas e judiciais, recuperação de créditos.",
    details:
      "Planejamento tributário preventivo para reduzir a carga fiscal dentro da legalidade, defesa em autuações e execuções fiscais nas esferas administrativa e judicial, e identificação de créditos tributários recuperáveis — sempre alinhado à realidade operacional do negócio.",
  },
  {
    title: "Trabalhista para Empresa",
    text: "Assessoria preventiva e contenciosa em relações trabalhistas empresariais. Gestão de passivo trabalhista, defesa em reclamações, contratos e compliance trabalhista.",
    details:
      "Atuação do lado da empresa: elaboração de contratos e políticas internas que reduzem o risco de passivo trabalhista, defesa em reclamações trabalhistas e orientação de compliance para manter a operação alinhada à legislação e evitar contingências futuras.",
  },
  {
    title: "Privacidade de Dados e Direito Digital",
    text: "Adequação à LGPD, governança de dados e assessoria jurídica em contratos e disputas envolvendo tecnologia, internet e ambientes digitais.",
    details:
      "Estruturação de programas de adequação à LGPD (mapeamento de dados, políticas de privacidade, bases legais de tratamento), assessoria em incidentes de segurança da informação, contratos de tecnologia e SaaS, e atuação em disputas envolvendo comércio eletrônico, marketplaces e responsabilidade civil no ambiente digital.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Sócio</p>
              <h1>Vitor S. Schmidt</h1>
              <p className="hero-contact">
                <a href="mailto:vitor.schmidt@tsp.adv.br">vitor.schmidt@tsp.adv.br</a>
                {" | "}
                <a href="https://wa.me/5519998624510" target="_blank" rel="noopener">
                  +55 19 99862-4510
                </a>
              </p>
              <p className="hero-bio">
                Bacharel em Direito pela PUC Campinas, com especialização em Direito
                Processual Civil e membro da Comissão de Processo Civil da OAB-Campinas.
              </p>
              <p className="role">Advogado Cível e Empresarial.</p>
              <p className="hero-bio">
                Atuação ao lado de empresários, sócios e famílias que buscam{" "}
                <em className="hero-highlight">
                  segurança jurídica para o seu negócio e o seu patrimônio
                </em>
                .
              </p>
              <div className="hero-actions">
                <a href="#contato" className="btn btn-gold">
                  ENTRE EM CONTATO
                </a>
                <a href="#areas" className="btn btn-outline">
                  CONHECER ÁREAS DE ATUAÇÃO
                </a>
                <a
                  href="https://tsp.adv.br"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener"
                >
                  CONHEÇA O ESCRITÓRIO
                </a>
              </div>
            </div>
            <div className="hero-photo">
              <div className="photo-frame">
                <Image
                  src="/images/vitor.jpg"
                  alt="Vitor Santos Schmidt"
                  width={640}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="institucional">
        <div className="container institucional-inner reveal">
          <p className="eyebrow">O ESCRITÓRIO</p>
          <p className="institucional-text">
            Na TSP Sociedade de Advogados, compreendemos que, por trás de cada demanda
            jurídica, existem objetivos empresariais, interesses patrimoniais e projetos
            de vida que exigem atenção técnica e sensibilidade estratégica.
            Posicionamo-nos como parceiros dos nossos clientes, equilibrando o rigor
            técnico do Direito com a compreensão aprofundada dos negócios de cada um
            deles.
          </p>
          <p className="institucional-tag">Tradição em evoluir.</p>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="container">
          <p className="eyebrow eyebrow-dark center reveal">ÁREAS DE ATUAÇÃO</p>
          <h2 className="section-title center reveal">
            Conheça as áreas de atuação
          </h2>
          <AreasAccordion areas={AREAS} />
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner reveal">
          <h2>Precisa de segurança jurídica para o seu negócio ou patrimônio?</h2>
          <a href={WHATSAPP_LINK} className="btn btn-gold" target="_blank" rel="noopener">
            ENTRE EM CONTATO
          </a>
        </div>
      </section>

      <section className="contato" id="contato">
        <div className="container contato-grid">
          <div className="contato-info reveal">
            <p className="eyebrow">CONTATO</p>
            <h2>Entre em Contato</h2>
            <p className="contato-lead">
              Envie sua mensagem ou fale diretamente pelo WhatsApp. O atendimento é feito
              pelo próprio Vitor Santos Schmidt.
            </p>

            <div className="info-block">
              <h4>ENDEREÇO</h4>
              <p>
                Avenida Marquês de São Vicente, 446, CJ 1407
                <br />
                ED. New Worket Tower, Barra Funda
                <br />
                São Paulo/SP — CEP: 01139-000
              </p>
            </div>

            <div className="info-block">
              <h4>WHATSAPP / TELEFONE</h4>
              <p>
                <a href="https://wa.me/5519998624510" target="_blank" rel="noopener">
                  (19) 99862-4510
                </a>
              </p>
            </div>

            <div className="info-block">
              <h4>E-MAIL</h4>
              <p>
                <a href="mailto:vitor.schmidt@tsp.adv.br">vitor.schmidt@tsp.adv.br</a>
              </p>
            </div>

            <div className="socials">
              <a
                href="https://www.linkedin.com/company/tsp-sociedade-de-advogados/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/tsp.advogados/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
