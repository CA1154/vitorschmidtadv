export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} TSP Sociedade de Advogados. Vitor Santos Schmidt —
          Advogado Cível e Empresarial.
        </p>
        <p className="footer-tag">Tradição em evoluir.</p>
      </div>
    </footer>
  );
}
