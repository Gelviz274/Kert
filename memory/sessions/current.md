# Sesión actual

**Fecha**: 2026-06-14
**Rama**: `feat/material-button-producto`
**Objetivo**: Agregar botón de acceso al catálogo de materiales desde la página de detalle de producto.

---

## Resumen

- Creada rama `feat/material-button-producto` desde `main`
- Modificado `components/ProductClient.jsx`:
  - Agregados imports: `Link` (next/link), `Layers` y `ArrowRight` (lucide-react)
  - Reemplazada sección de Material (que renderizaba `product.material` como undefined) por una tarjeta atractiva con:
    - Barra superior con gradiente azul
    - Icono `Layers` en contenedor circular con ring
    - Badge "Materiales e Insumos"
    - Texto descriptivo sobre el catálogo técnico
    - Botón "Catálogo de materiales" → `/materiales` con hover scale y animación de flecha
    - Animación Framer Motion consistente con el banner de personalización

## Archivos modificados/creados

- `components/ProductClient.jsx` — Nueva tarjeta de materiales con CTA
- `.opencode/opencode.json` — Nuevo, con `instructions: ["AGENTS.md"]`
- `AGENTS.md` — Banner de instrucción obligatoria + protocolo de inicio elevado al inicio
- `memory/sessions/current.md` — Este archivo
- `memory/sessions/2026-06-13.md` — Archivada sesión anterior

---

## Pendiente

- Preguntar antes de hacer merge a `main`
