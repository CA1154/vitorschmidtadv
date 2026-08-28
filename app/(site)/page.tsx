import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AreasAccordion from "@/components/AreasAccordion";
import { AREAS } from "@/lib/areas";

const WHATSAPP_LINK =
  "https://wa.me/5519998624510?text=Ol%C3%A1%2C%20Vitor!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20uma%20quest%C3%A3o%20jur%C3%ADdica.";

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
              <p className="role">Advogado Cível e Empresarial.</p>
              <p className="hero-bio">
                Sócio do escritório especializado na área empresarial, contencioso cível,
                trabalhista e de recuperação estratégica de crédito, com forte atuação
                junto aos Tribunais Estaduais e Superiores.
              </p>
              <p className="hero-bio">
                Graduado em Direito pela Pontifícia Universidade Católica de Campinas
                (PUC – Campinas).
              </p>
              <p className="hero-bio">
                Especialização em Direito Processual Civil pela Pontifícia Universidade
                Católica de Campinas (PUC – Campinas).
              </p>
              <p className="hero-bio">Membro da Comissão de Processo Civil da OAB-Campinas.</p>
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
              Envie sua mensagem ou fale diretamente pelo WhatsApp.
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
