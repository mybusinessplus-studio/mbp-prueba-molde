# AGENTS.md — <nombre del proyecto>

Instrucciones para cualquier agente de IA o persona que trabaje en este repositorio.
Sigue la metodología del estudio: https://github.com/mybusinessplus-studio/metodologia (versión 1.0).

## Proyecto

- **Qué es:** <una frase>
- **Tipo:** <sitio público | app web con login | app móvil | automatización>
- **Brief:** [docs/brief.md](docs/brief.md) · **Diseño:** [docs/diseno.md](docs/diseno.md) · **Decisiones:** [docs/adr/](docs/adr/)

## Stack

Next.js 16 (App Router, `src/`), TypeScript estricto, Tailwind CSS 4, Supabase (`@supabase/ssr`),
Zod, Vitest + Testing Library + axe-core, Prettier + ESLint. Node 22 (`.nvmrc`).

## Comandos

- Instalar: `npm ci`
- Desarrollo local: `npm run dev`
- Todas las verificaciones (lo mismo que corre en GitHub): `npm run verificar`
- Por separado: `npm run format:check` · `npm run lint` · `npm run typecheck` · `npm test` · `npm run build`
- Dar formato: `npm run format`

## Estructura

- `src/app/` — rutas. `robots.ts` y `sitemap.ts` generan SEO técnico; `error.tsx`, `loading.tsx`, `not-found.tsx` cubren estados.
- `src/lib/sitio.ts` — nombre, descripción y URL del sitio (metadatos y schema.org).
- `src/lib/env.ts` — validación de variables de entorno con Zod.
- `src/lib/supabase/` — `cliente.ts` (navegador) y `servidor.ts` (servidor, `server-only`).
- `src/components/json-ld.tsx` — datos estructurados con escape seguro.
- `supabase/migrations/` — migraciones SQL versionadas.
- `next.config.ts` — cabeceras de seguridad (ver `docs/adr/0001`).

## Reglas obligatorias

1. **No programar sin brief y diseño aprobados.** Si falta información, preguntar antes de suponer.
2. **Tareas pequeñas**, cada una en su rama y _pull request_; mensajes según Conventional Commits.
3. **TypeScript estricto.** Validar toda entrada externa en el servidor con Zod.
4. **Seguridad:**
   - Permisos verificados en el servidor según la matriz de roles de `docs/diseno.md`.
   - Seguridad por filas (RLS) activa en toda tabla nueva, con sus políticas en la misma migración.
   - `SUPABASE_SECRET_KEY` solo en código de servidor; nunca en variables `NEXT_PUBLIC_`.
   - Cambios de base de datos solo por migraciones en `supabase/migrations/`.
   - Si se agrega un dominio externo (analítica, CDN, API), actualizar la CSP en `next.config.ts`.
5. **Interfaz:** tokens y componentes existentes; estados de carga, vacío, error y éxito;
   WCAG 2.2 AA; probar en 375 px; `id="contenido"` en el `<main>` de cada página (enlace "Saltar al contenido").
6. **Páginas públicas:** metadatos por página (`export const metadata` o `generateMetadata`),
   agregar la URL a `sitemap.ts` y datos estructurados con `<JsonLd>`.
7. **Decisiones difíciles de revertir** → crear una ADR en `docs/adr/`.
8. **Antes de dar una tarea por terminada**, `npm run verificar` en verde y la definición de terminado
   de `.github/pull_request_template.md` cumplida.
9. **No desactivar ni saltarse los controles automáticos.** Si uno falla, se corrige la causa.

## No tocar sin aprobación

- Configuración de autenticación y políticas RLS existentes.
- Workflows de `.github/` y cabeceras de seguridad.
- Datos de producción.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
