# 🧠 Errores y aprendizajes

Registro de errores cometidos por la IA para no repetirlos. Cada entrada documenta qué pasó, por qué ocurrió y cómo evitarlo.

## Formato

```markdown
### YYYY-MM-DD — Título corto

**Error**: ¿Qué hice mal?
**Causa**: ¿Por qué ocurrió?
**Lección**: ¿Qué aprender para no repetirlo?
```

---

### 2026-06-13 — Font Roboto no aplicado al body

**Error**: En `globals.css` se definió `font-family: Arial, Helvetica, sans-serif` en el body, ignorando la variable `--font-roboto` importada desde `next/font/google`.
**Causa**: Se asumió que la variable CSS se aplicaba automáticamente al body, pero el `@layer base` o `body` explícito la sobrescribe.
**Lección**: Siempre verificar que la fuente importada con `next/font` se aplique explícitamente en el CSS del body usando `var(--font-*)`.

### 2026-06-13 — useEffect con dependencia array literal que cambia en cada render

**Error**: En `app/materiales/page.jsx`, el hook `useActiveSection` recibe `sectionIds` como dependencia del `useEffect`, pero `sectionIds` se crea como `categorias.map(c => c.id)` en el render, generando un nuevo array en cada ejecución y causando que el efecto se ejecute infinitamente.
**Causa**: No se consideró que los array literales son nuevas referencias en cada render.
**Lección**: Pasar dependencias a `useEffect` que sean estables (constantes fuera del componente, o encerradas en `useMemo`).

### 2026-06-13 — Código muerto no detectado (galery.jsx, SEOLink.jsx)

**Error**: Dos componentes completos (`components/galery.jsx` y `components/SEOLink.jsx`) nunca se importan en ningún archivo del proyecto, pero se mantienen en el codebase.
**Causa**: No se revisó si los componentes creados tenían consumidores reales.
**Lección**: Verificar imports reales antes de dar por terminado un componente. Incluir búsqueda de imports en el checklist de finalización.

### 2026-06-13 — Layout de colección con URLs absolutas a imágenes inexistentes

**Error**: En `app/coleccion/layout.jsx` se usaron URLs hardcodeadas como `https://creacionkert.com/productos/isabel/bolso-azul-rojo.jpg` en los metadatos JSON-LD, que no existen en el filesystem ni mapean a rutas reales de productos.
**Causa**: Se copiaron rutas de ejemplo sin verificar su existencia real en `/public/productos/`.
**Lección**: No hardcodear URLs absolutas en layouts; usar rutas relativas verificadas o imágenes placeholder genéricas.
