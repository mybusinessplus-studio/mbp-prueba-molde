# plantilla-web

Proyecto base del estudio para webs y apps web. Cumple la
[metodología v1.0](https://github.com/mybusinessplus-studio/metodologia) desde el primer día.

## Qué trae

| Área          | Incluido                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| Base          | Next.js 16, TypeScript estricto, Tailwind CSS 4                                 |
| Datos         | Supabase con clientes de navegador y servidor; ejemplo de migración con RLS     |
| Seguridad     | Cabeceras (CSP, HSTS, etc.), variables validadas con Zod, Gitleaks y Dependabot |
| SEO           | Metadatos, Open Graph, `robots.txt`, `sitemap.xml`, schema.org (JSON-LD)        |
| Accesibilidad | `lang="es"`, enlace "Saltar al contenido", prueba automática con axe-core       |
| Estados       | Páginas de carga, error y "no encontrado" en español                            |
| Calidad       | Formato, linter, tipos, pruebas y compilación en cada _pull request_            |
| Documentación | Brief, diseño, ADR y `AGENTS.md` (instrucciones para cualquier IA)              |

## Crear un proyecto nuevo

1. En GitHub: **Use this template → Create a new repository** en `mybusinessplus-studio`,
   con nombre `cliente-producto`.
2. Descargarlo en `~/MybusinessPlus_Local/Proyectos-dev/mybusinessplus-studio/`.
3. `npm ci` y copiar `.env.example` a `.env.local`.
4. Completar `src/lib/sitio.ts`, `AGENTS.md` (sección Proyecto), `docs/brief.md` y `docs/diseno.md`.
5. Borrar la migración de ejemplo cuando exista la primera real.

## Comandos

```bash
npm run dev        # desarrollo local en http://localhost:3000
npm run verificar  # todas las verificaciones, igual que en GitHub
```

## Cómo publicar

Conectar el repositorio a Vercel, cargar las variables de `.env.example` en el panel del proveedor
y definir `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.

## Restaurar un respaldo

Completar según el proveedor de base de datos del proyecto (metodología, capítulo 5.4).
