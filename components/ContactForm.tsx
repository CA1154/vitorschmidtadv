"use client";

import { useState } from "react";

export default function ContactForm() {
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const telefone = (form.elements.namedItem("telefone") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Novo contato pelo site — ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`
    );
    window.location.href = `mailto:vitor.schmidt@tsp.adv.br?subject=${subject}&body=${body}`;
    setNote("Abrindo seu aplicativo de e-mail para enviar a mensagem ao Vitor...");
  }

  return (
    <form className="contato-form" onSubmit={handleSubmit}>
      <label htmlFor="nome">NOME COMPLETO</label>
      <input type="text" id="nome" name="nome" required />

      <label htmlFor="email">E-MAIL</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="telefone">TELEFONE / WHATSAPP</label>
      <input type="tel" id="telefone" name="telefone" required />

      <label htmlFor="mensagem">MENSAGEM / NECESSIDADE JURÍDICA</label>
      <textarea id="mensagem" name="mensagem" rows={5} required />

      <button type="submit" className="btn btn-navy full-width">
        ENVIAR MENSAGEM
      </button>
      <p className="form-note">{note}</p>
    </form>
  );
}
