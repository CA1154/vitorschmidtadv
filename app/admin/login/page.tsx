"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "recover">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("E-mail ou senha inválidos.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  async function handleRecover(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNotice("");
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError("Não foi possível enviar o link. Confira o e-mail e tente novamente.");
      return;
    }
    setNotice("Enviamos um link de recuperação para o seu e-mail.");
  }

  return (
    <div className="admin-login">
      <div className="admin-login-logo">
        <Image
          src="/images/logo-tsp-branco-trim.png"
          alt="TSP Sociedade de Advogados"
          width={1401}
          height={460}
          unoptimized
          priority
        />
      </div>
      <div className="admin-login-box">
        {mode === "login" ? (
          <>
            <h1>Área do Administrador</h1>
            <p>Entre com seu e-mail e senha para gerenciar os artigos.</p>
            {error && <div className="admin-error">{error}</div>}
            <form onSubmit={handleSubmit} className="admin-form" style={{ padding: 0, border: "none" }}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="admin-form-actions">
                <button type="submit" className="btn btn-navy full-width" disabled={loading}>
                  {loading ? "ENTRANDO..." : "ENTRAR"}
                </button>
              </div>
            </form>
            <button
              type="button"
              className="admin-login-link"
              onClick={() => {
                setMode("recover");
                setError("");
                setNotice("");
              }}
            >
              Esqueci minha senha
            </button>
          </>
        ) : (
          <>
            <h1>Recuperar senha</h1>
            <p>Informe seu e-mail para receber um link de recuperação.</p>
            {error && <div className="admin-error">{error}</div>}
            {notice && <p className="admin-login-notice">{notice}</p>}
            <form onSubmit={handleRecover} className="admin-form" style={{ padding: 0, border: "none" }}>
              <label htmlFor="recover-email">E-mail</label>
              <input
                type="email"
                id="recover-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="admin-form-actions">
                <button type="submit" className="btn btn-navy full-width" disabled={loading}>
                  {loading ? "ENVIANDO..." : "ENVIAR LINK DE RECUPERAÇÃO"}
                </button>
              </div>
            </form>
            <button
              type="button"
              className="admin-login-link"
              onClick={() => {
                setMode("login");
                setError("");
                setNotice("");
              }}
            >
              Voltar para o login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
