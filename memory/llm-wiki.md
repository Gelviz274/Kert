---
tags: [memoria/referencia]
date: 2026-07-13
tipo: referencia
---

# LLM Wiki — Patrón de referencia

Documento original: https://github.com/anthropics/claude-code/discussions/68

Este archivo describe el patrón **LLM Wiki** que usamos para mantener la memoria del proyecto. La idea central: el LLM construye y mantiene un wiki persistente de archivos markdown, acumulando conocimiento sesión tras sesión en lugar de re-derivarlo desde cero.

## Las tres capas

| Capa | Descripción | En nuestro proyecto |
|------|-------------|-------------------|
| **Raw sources** | Documentos fuente inmutables | Código fuente, documentación externa |
| **The wiki** | Directorio de markdown generado por IA | `memory/` |
| **The schema** | Config que le dice a la IA cómo mantener el wiki | `AGENTS.md` |

## Operaciones

- **Ingest**: al agregar una fuente nueva, la IA la lee, la resume, actualiza índices y páginas relevantes, y registra en el log.
- **Query**: la IA busca en el wiki y sintetiza respuestas con citas. Las respuestas valiosas se archivan de vuelta al wiki.
- **Lint**: revisiones periódicas de salud del wiki: contradicciones, páginas huérfanas, enlaces rotos, oportunidades de mejora.

## Indexación y log

- `_index.md` → catálogo orientado a contenido (qué hay en el wiki)
- `log.md` → registro cronológico (qué pasó y cuándo)

Ver también: [[_index|Mapa del vault]], [[log|Log de operaciones]].
