import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_LINK =
  "https://wa.me/5519998624510?text=Ol%C3%A1%2C%20Vitor!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20uma%20quest%C3%A3o%20jur%C3%ADdica.";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header whatsappLink={WHATSAPP_LINK} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat whatsappLink={WHATSAPP_LINK} />
      <ScrollReveal />
    </>
  );
}
