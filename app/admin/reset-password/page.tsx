"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setReady(true);
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setError("Não foi possível atualizar a senha. Peça um novo link de recuperação.");
        return;
      }

      setDone(true);
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 1500);
    } catch {
      setError("Não foi possível conectar agora. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
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
        <h1>Nova senha</h1>
        {!ready && !done && (
          <p>Abra esta página a partir do link enviado por e-mail para continuar.</p>
        )}
        {ready && !done && (
          <>
            <p>Escolha uma nova senha para acessar a área do administrador.</p>
            {error && <div className="admin-error">{error}</div>}
            <form onSubmit={handleSubmit} className="admin-form" style={{ padding: 0, border: "none" }}>
              <label htmlFor="password">Nova senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="admin-form-actions">
                <button type="submit" className="btn btn-navy full-width" disabled={loading}>
                  {loading ? "SALVANDO..." : "SALVAR NOVA SENHA"}
                </button>
              </div>
            </form>
          </>
        )}
        {done && <p className="admin-login-notice">Senha atualizada! Entrando...</p>}
      </div>
    </div>
  );
}
