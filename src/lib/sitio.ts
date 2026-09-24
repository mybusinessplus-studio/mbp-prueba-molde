// Datos del sitio usados en metadatos, SEO y datos estructurados.
// Completar al crear cada proyecto.
export const sitio = {
  nombre: "MBP Prueba del molde",
  descripcion:
    "Proyecto de prueba de MBP Studio para validar el molde web y sus controles automáticos de calidad en cada pull request.",
  // URL pública definitiva, sin barra final. En local se usa la de desarrollo.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  idioma: "es",
  locale: "es_EC",
  organizacion: {
    nombre: "MyBusinessPlus",
    logo: "/logo.svg",
  },
} as const;
