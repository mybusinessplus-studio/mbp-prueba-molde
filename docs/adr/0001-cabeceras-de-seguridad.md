# 0001. Cabeceras de seguridad y CSP sin nonces por defecto

- **Fecha:** 2026-09-23
- **Estado:** aceptada

## Contexto

La metodología exige cabeceras de seguridad (CSP, HSTS, etc.). En Next.js, una CSP con _nonces_
obliga a renderizar cada página en el servidor en cada visita, lo que impide las páginas estáticas
y empeora rendimiento y costos. Fuente: guía "Content Security Policy" de la documentación de Next.js 16.

## Decisión

La plantilla configura las cabeceras en `next.config.ts` con una CSP **sin nonces**
(`script-src 'self' 'unsafe-inline'`), que es la opción documentada por Next.js para sitios estáticos.

## Alternativas consideradas

- CSP con nonces vía `proxy.ts` — más estricta, pero obliga a renderizado dinámico. Usar en apps con datos sensibles.
- Subresource Integrity (SRI) — experimental en Next.js 16; se revisará cuando sea estable.

## Consecuencias

Buena protección contra _clickjacking_, mezcla de contenido y carga de recursos de terceros.
La protección contra scripts en línea es menor: por eso toda entrada de usuario se valida y se escapa (capítulo 5).
Los proyectos con datos personales sensibles o pagos deben evaluar la CSP con nonces en su propia ADR.
