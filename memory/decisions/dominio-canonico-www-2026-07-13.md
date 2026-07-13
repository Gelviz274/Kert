---
tags: [memoria/decision]
date: 2026-07-13
tipo: decision
estado: implementada
---

# Estandarización del dominio canónico a `www.creacionkert.com`

**Fecha**: 2026-07-13
**Contexto**: SEMrush reportó 34 errores (17 "Hreflang redirect (308)" + 17 "Sitemap Redirect") porque todas las URLs absolutas del sitio apuntaban a `https://creacionkert.com` (sin www), pero el sitio tiene un redirect 308 permanente de no-www → www configurado en Vercel.

**Decisión**: Estandarizar todas las URLs absolutas del sitio a `https://www.creacionkert.com`:
- Sitemap (`BASE_URL` en `app/sitemap.js`)
- Canónicos (`alternates.canonical`) en todos los layouts
- OpenGraph (`og:url`, `og:image`)
- Twitter cards
- Hreflang tags (`<link rel="alternate">`)
- JSON-LD (Organization, Product, BreadcrumbList, ItemList, WebPage)
- URLs de imágenes de categoría en `app/coleccion/layout.jsx`

Se aplicó `replaceAll` en 21 archivos JSX/JS.

**Alternativas consideradas**:
- Cambiar el redirect de Vercel para que www redirija a no-www (descartado porque www ya tiene tracción en motores de búsqueda)
- Usar una constante `BASE_URL` centralizada (sería más limpio pero requiere refactor mayor — para una próxima iteración)

**Consecuencias**:
- Los 34 errores de SEMrush deberían resolverse al hacer deploy
- Consistencia: todas las URLs del sitio ahora usan www
- Se registra en [[../learned/errores|errores]] la lección para no repetir este problema en proyectos futuros
