---
tags: [memoria/sesion]
date: 2026-07-13
tipo: sesion
estado: activa
---

# Sesión actual

**Fecha**: 2026-07-13
**Rama**: `fix/dominio-www-unificado`
**Objetivo**: Corregir errores SEMrush de "Hreflang redirect (308)" y "Sitemap Redirect" unificando todas las URLs del dominio a `www.creacionkert.com`.

---

## Resumen

### Problema
SEMrush reportó 34 errores:
- **17 "Hreflang redirect (308)"** — los tags hreflang apuntaban a `creacionkert.com` (sin www) que redirect 308 a `www.creacionkert.com`
- **17 "Sitemap Redirect"** — el sitemap generaba URLs sin www que redirigían

Causa raíz: todo el sitio usaba `https://creacionkert.com` (sin www) en canónicos, OG, JSON-LD, breadcrumbs y sitemap, pero el dominio con www es el que sirve el contenido (redirect 308 de Vercel de no-www → www).

### Cambios realizados
Se aplicó `replaceAll` de `https://creacionkert.com` → `https://www.creacionkert.com` en **21 archivos**:

| Categoría | Archivos |
|-----------|----------|
| Root layout | `app/layout.jsx` |
| Colección | `app/coleccion/layout.jsx` |
| Categorías (x7) | `maletas/`, `rinoneras/`, `bolsos/`, `bolsos-multiuso/`, `bolsas-cambrel/`, `bolsas-tela/`, `otros/` |
| Productos (x7) | `*/[name-title]/page.jsx` |
| Otras páginas | `contacto/`, `materiales/`, `sobre-nosotros/`, `politica-de-privacidad/`, `terminos-y-condiciones/` |
| Sitemap | `app/sitemap.js` |

### Verificación
- `pnpm build` → compilación exitosa, 0 errores
- `rg "https://creacionkert\.com"` → 0 ocurrencias restantes sin www

## Pendiente
- Hacer deploy a producción
- Verificar en SEMrush que los errores se resolvieron
- Preguntar antes de hacer merge a `main`

---
**Sesiones anteriores**: [[2026-06-14|SEO integral (2026-06-14)]] · [[2026-06-13|Rediseño materiales + auditoría (2026-06-13)]]
