"use client";

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="admin-content">
      <div className="admin-error-boundary">
        <h1>Não foi possível carregar essa página</h1>
        <p>
          Provavelmente uma instabilidade temporária de conexão com o banco de dados.
          Tente novamente em alguns segundos.
        </p>
        <button type="button" className="btn btn-navy" onClick={() => reset()}>
          TENTAR NOVAMENTE
        </button>
      </div>
    </div>
  );
}
