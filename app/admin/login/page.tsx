"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  return (
    <div className="admin-login">
      <div className="admin-login-box">
        <h1>Área do Vitor</h1>
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
      </div>
    </div>
  );
}
