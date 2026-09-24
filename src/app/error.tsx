"use client"; // Los límites de error deben ser componentes de cliente.

import { useEffect } from "react";

export default function ErrorPagina({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Conectar aquí el servicio de monitoreo de errores (metodología, capítulo 8).
    console.error(error);
  }, [error]);

  return (
    <main
      id="contenido"
      className="mx-auto flex max-w-xl flex-1 flex-col justify-center gap-4 px-6 py-24"
    >
      <h1 className="text-2xl font-semibold">Algo salió mal</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        No pudimos cargar esta sección. Puedes intentarlo de nuevo.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="self-start rounded-md bg-foreground px-4 py-2 font-medium text-background"
      >
        Reintentar
      </button>
    </main>
  );
}
