import { sitio } from "@/lib/sitio";

export default function Inicio() {
  return (
    <main
      id="contenido"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-24"
    >
      <h1 className="text-3xl font-semibold tracking-tight">{sitio.nombre}</h1>
      {/* Fallo provocado: segundo h1 en la página. */}
      <h1 className="text-xl">Segundo título</h1>
      <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
        Proyecto creado desde la plantilla del estudio. Antes de programar, completa{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-zinc-800">
          docs/brief.md
        </code>{" "}
        y{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-zinc-800">
          docs/diseno.md
        </code>
        .
      </p>
    </main>
  );
}
