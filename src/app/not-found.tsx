import Link from "next/link";

export default function NoEncontrado() {
  return (
    <main
      id="contenido"
      className="mx-auto flex max-w-xl flex-1 flex-col justify-center gap-4 px-6 py-24"
    >
      <h1 className="text-2xl font-semibold">No encontramos esta página</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Puede que el enlace haya cambiado o ya no exista.
      </p>
      <Link href="/" className="font-medium underline underline-offset-4">
        Volver al inicio
      </Link>
    </main>
  );
}
