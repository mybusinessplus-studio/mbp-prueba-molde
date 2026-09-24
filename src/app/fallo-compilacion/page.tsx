"use client";

// Fallo provocado: Next.js no permite exportar metadata desde un componente de cliente.
export const metadata = { title: "Fallo de compilación" };

export default function Pagina() {
  return (
    <main id="contenido">
      <h1>Fallo de compilación</h1>
    </main>
  );
}
