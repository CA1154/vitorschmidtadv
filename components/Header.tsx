"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ whatsappLink }: { whatsappLink: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#areas", label: "Áreas de Atuação" },
    { href: "/artigos", label: "Artigos" },
    { href: "/#contato", label: "Contato" },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/images/logo-tsp-branco-trim.png"
            alt="TSP Sociedade de Advogados"
            width={1401}
            height={460}
            className="logo-img"
            unoptimized
            priority
          />
        </Link>
        <nav className={`nav ${open ? "nav-open" : ""}`} id="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a href={whatsappLink} className="btn btn-gold btn-small" target="_blank" rel="noopener">
          Entre em Contato
        </a>
        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
