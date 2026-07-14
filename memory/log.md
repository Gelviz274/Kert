---
tags: [memoria/log]
date: 2026-07-13
tipo: log
---

# 📋 Log de operaciones

Registro cronológico de todo lo que ocurre en el proyecto. Cada entrada usa el formato `## [YYYY-MM-DD] tipo | Título` para permitir grep con herramientas Unix.

---

## [2026-07-13] schema | Integración del patrón LLM Wiki

**Operación**: Incorporación del patrón LLM Wiki a la memoria del proyecto.
**Wiki afectado**: AGENTS.md, _index.md, log.md (creado), llm-wiki.md (creado).
**Resultado**: La memoria ahora sigue explícitamente el patrón de tres capas (raw sources / wiki / schema) con operaciones formalizadas (ingest / query / lint).

## [2026-07-13] fix | Estandarización del dominio a www.creacionkert.com

**Operación**: Corrección de 34 errores SEMrush (17 hreflang redirect 308 + 17 sitemap redirect).
**Archivos**: 21 archivos JSX/JS modificados con `replaceAll`.
**Wiki afectado**: ADR nuevo, error documentado, sesión archivada, log creado.
**Resultado**: `pnpm build` exitoso. Pendiente deploy y verificación SEMrush.

**Archivos del wiki modificados**:
- `decisions/dominio-canonico-www-2026-07-13.md` — nuevo ADR
- `sessions/current.md` — sesión activa actualizada
- `sessions/2026-06-14.md` — sesión anterior archivada
- `learned/errores.md` — nuevo error registrado
- `tasks/current.md` — tarea marcada como completada
- `llm-wiki.md` — nuevo documento de referencia

## [2026-06-14] feat | SEO optimization integral

**Operación**: Corrección de 17 errores SEMrush, mejora de keywords y contenido on-page.
**Archivos**: 30+ archivos modificados (layouts, metadata, JSON-LD, sitemap).
**Wiki afectado**: sessions/2026-06-14.md (archivada), tasks/current.md, _index.md.
**Resultado**: Sitemap corregido, hreflang agregado, FAQPage JSON-LD, keywords long-tail, meta descriptions mejoradas. Pendiente verificar SEMrush.

## [2026-06-13] feat | Rediseño UI de materiales + auditoría general

**Operación**: Corrección de animaciones, hover, progress bar en /materiales + auditoría de 63 archivos fuente.
**Archivos**: app/materiales/page.jsx, AGENTS.md, memory/*.
**Wiki afectado**: audit/revision-general-2026-06-13.md (nuevo), decisions/auditoria-codigo-2026-06-13.md (nuevo), decisions/pagina-materiales-2026-06-13.md (nuevo), learned/errores.md (+4), tasks/current.md, _index.md.
**Resultado**: Auditoría completa con 3 issues críticos, 5 medios, 2 bajos documentados. 11 reglas nuevas en AGENTS.md.
