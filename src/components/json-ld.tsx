// Datos estructurados schema.org (JSON-LD).
// Se escapa "<" para evitar inyección de HTML, como indica la guía de Next.js.
export function serializarJsonLd(datos: Record<string, unknown>): string {
  return JSON.stringify(datos).replace(/</g, "\\u003c");
}

export function JsonLd({ datos }: { datos: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializarJsonLd(datos) }}
    />
  );
}
