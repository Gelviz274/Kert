---
tags: [memoria/auditoria]
date: 2026-06-13
tipo: auditoria
---

# Auditoría General del Proyecto — 2026-06-13

Revisión exhaustiva de todos los archivos, funciones, estilos, lógica de programación y lógica de negocio del sitio web Kert S.A.S.

---

## 1. Resumen Ejecutivo

| Métrica | Valor |
|---------|-------|
| Archivos fuente | 63 (JSX, JS, JSON, CSS, MJS) |
| Componentes custom | 12 |
| Componentes shadcn/ui | 5 |
| Páginas estáticas | 5 |
| Categorías de producto | 7 |
| Archivos JSON de datos | 7 |
| Código muerto | 2 componentes (`galery.jsx`, `SEOLink.jsx`) |
| Issues críticos | 3 |
| Issues medios | 5 |
| Issues bajos | 2 |

---

## 2. Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js | ^16.2.6 |
| UI | React | ^19.2.6 |
| Estilos | Tailwind CSS v4 (vía @tailwindcss/postcss) | ^4.3.0 |
| Animaciones | Framer Motion | ^12.38.0 |
| Iconos | Lucide React | ^1.14.0 |
| Carrusel | Embla Carousel | ^8.6.0 |
| Fuente | Roboto (next/font/google) | — |
| Componentes base | shadcn/ui (New York style, JSX) | — |
| Package Manager | pnpm | 11.5.1 |
| Despliegue | Vercel | — |

### Archivos de configuración

| Archivo | Propósito |
|---------|-----------|
| `next.config.mjs` | Headers de seguridad, redirects de producto |
| `postcss.config.mjs` | Plugin @tailwindcss/postcss |
| `jsconfig.json` | Path alias `@/*` |
| `components.json` | Config shadcn/ui (RSC, New York, baseColor neutral) |
| `vercel.json` | Config de deploy Vercel |
| `eslint.config.mjs` | Config ESLint (con error circular conocido) |

---

## 3. Arquitectura de Rutas

```
/                          → Home (page.jsx)
├── /coleccion             → Catálogo general
│   ├── /maletas           → Listado + /[name-title] (dinámica)
│   │   └── /ref-1-color-basic → Detalle producto (SSR metadata)
│   ├── /rinoneras         → Listado + /[name-title]
│   ├── /bolsos            → Listado + /[name-title]
│   ├── /bolsos-multiuso   → Listado + /[name-title]
│   ├── /bolsas-cambrel    → Listado + /[name-title]
│   ├── /bolsas-tela       → Listado + /[name-title]
│   └── /otros             → Listado + /[name-title]
├── /materiales            → Catálogo técnico de insumos
├── /contacto              → Página de contacto
├── /sobre-nosotros        → Historia, misión, valores
├── /politica-de-privacidad → Texto legal (SSR)
├── /terminos-y-condiciones → Texto legal (SSR)
└── 404                    → Página no encontrada (cliente)
```

### Patrón de páginas de producto

Cada categoría sigue exactamente el mismo patrón:

1. `layout.jsx` → SSR metadata + `NavProduct` con links a todos los productos de la categoría
2. `page.jsx` → `"use client"` que renderiza `CategoryListing` con datos del JSON
3. `[name-title]/page.jsx` → SSR con `generateMetadata()` + `ProductClient` componente cliente
4. `data/<categoria>.json` → Datos estructurados de productos

### ⚠️ Sitemap incompleto

`/materiales` no está incluido en `app/sitemap.js`.

---

## 4. Sistema de Diseño

### Colores (definidos en `globals.css` via `@theme`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-azul` | `#0C0844` | Fondo principal, headers |
| `--color-amarillo` | `#FFCF00` | CTAs, acentos (exclusivo, <10% diseño) |
| `--color-accent` | `#ff5a5f` | Coral, acentos secundarios |
| `--color-background` | HSL var | Fondo base (blanco) |
| `--color-foreground` | HSL var | Texto base |

### Tipografía

- **Fuente**: Roboto vía `next/font/google`
- **Variable CSS**: `--font-roboto`
- **⚠️ Bug**: `body` en `globals.css:92` usa `font-family: Arial, Helvetica, sans-serif` — nunca aplica `var(--font-roboto)`

### Animaciones custom

| Nombre | Propósito |
|--------|-----------|
| `float` | Flotación suave (ícono 404) |
| `fadeIn` | Fade + translateY entrada |
| `pulse-slow` | Pulse lento (decorativo) |
| `slideIn` | Slide lateral (no usado extensivamente) |

---

## 5. Problemas por Severidad

### 🔴 Críticos (prioridad inmediata)

#### 5.1 Font Roboto no aplicado al body
- **Archivo**: `app/globals.css:92`
- **Problema**: `body { font-family: Arial, Helvetica, sans-serif }` ignora la variable `--font-roboto`
- **Impacto**: Todo el sitio renderiza en Arial/Helvetica en lugar de Roboto
- **Solución**: Cambiar a `font-family: var(--font-roboto), Arial, Helvetica, sans-serif`

#### 5.2 Imágenes rotas en layout de colección
- **Archivo**: `app/coleccion/layout.jsx:39-46`
- **Problema**: URLs absolutas apuntando a `https://creacionkert.com/productos/...` que no existen en el filesystem
- **Impacto**: Structured data JSON-LD del ItemList referencia imágenes inexistentes
- **Nota**: Algunas rutas no existen ni siquiera en producción (`isabel/bolso-azul-rojo.jpg`)

#### 5.3 Código muerto
- **`components/galery.jsx`**: Componente completo de galería que nunca se importa
- **`components/SEOLink.jsx`**: Wrapper de Link con SEO que nunca se usa

---

### 🟡 Medios (próximo sprint)

#### 5.4 `useActiveSection` recrea efecto en cada render
- **Archivo**: `app/materiales/page.jsx:73-91`
- **Problema**: `sectionIds` se crea como nuevo array literal en cada render → el `useEffect` se ejecuta siempre
- **Solución**: Encerrar con `useMemo` o mover la constante fuera del componente

#### 5.5 Sitemap incompleto
- **Archivo**: `app/sitemap.js`
- **Problema**: Falta `/materiales`
- **Impacto**: Google no indexa la página de materiales

#### 5.6 Tres números telefónicos distintos sin contexto
- **`+57 321 306 2852`** → Teléfono ventas (contacto, footer)
- **`+57 311 609 5224`** → WhatsApp principal (todos los CTAs)
- **`+57 322 300 6013`** → Teléfono adicional (footer)
- **Problema**: El usuario no sabe cuál usar para qué propósito

#### 5.7 Contraste insuficiente
- `text-white/60` sobre `bg-azul (#0C0844)` → ratio ~3.8:1 (no cumple WCAG AA)
- `text-gray-400` sobre `bg-gray-50` → ilegible en cards
- `text-gray-300` sobre `bg-white/5` sobre fondo azul oscuro en cards de "más vendidos"

#### 5.8 Event listeners en Carrusel sin limpieza correcta
- **Archivo**: `components/Carrusel.jsx:69-80`
- **Problema**: La dependencia `[carouselRef.current]` no garantiza limpieza del listener anterior
- **Solución**: Usar ref para la función handleSelect o callback ref pattern

---

### 🟢 Bajos (nice to have)

#### 5.9 Typo `excuide` → `exclude`
- **Archivo**: `components/navproduct.jsx:6`
- **Variable**: `route_excuide`

#### 5.10 Duplicación de datos sectores
- **Archivos**: `app/materiales/page.jsx:58-63` y `components/SectorBanners.jsx:7-28`
- **Problema**: Mismos 4 sectores definidos en dos lugares distintos con descripciones ligeramente diferentes

---

## 6. Calidad de Código

### Patrones correctos

- ✅ Uso consistente de `"use client"` solo donde es necesario
- ✅ SSR con `generateMetadata()` para SEO en páginas de producto
- ✅ Datos estructurados JSON-LD en layouts
- ✅ Sistema de rutas dinámicas `[name-title]` bien implementado
- ✅ `next.config.mjs` con headers de seguridad (XSS, Content-Type, etc.)
- ✅ Iconos Lucide en lugar de emojis (después de refactor)

### Anti-patrones detectados

#### 6.1 Layouts de categoría duplican misma estructura
7 layouts (`maletas/layout.jsx`, `rinoneras/layout.jsx`, etc.) tienen exactamente la misma estructura:
- Import de datos JSON
- Map a `bags` array
- NavProduct
- Metadata

**Podría refactorizarse** a un layout compartido o HOF.

#### 6.2 `route_excuide` en NavProduct con lista hardcodeada
En lugar de excluir rutas, NavProduct podría recibir un prop `show` o usar lógica inversa.

#### 6.3 `CategoryListing` maneja `isLoading` falso
```js
useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 1000);
}, []);
```
El loader de 1 segundo es artificial — no hay fetch real. En Next.js con datos locales no debería haber "carga".

#### 6.4 Uso inconsistente de `<img>` vs `next/image`
- `Carrusel.jsx` usa `<img>` nativo (correcto para bg images dinámicas)
- `CategoryListing.jsx` usa `next/image` con `fill` (correcto)
- `galery.jsx` (muerto) también usa `<img>`

---

## 7. Lógica de Negocio

### Modelo de datos del producto

```json
{
  "id": "ref-1",
  "name": "COLOR BASIC",
  "name-title": "ref-1-color-basic",
  "category": "Maletas",
  "dimensions": { "height": 40, "width": 26, "depth": 15 },
  "specifications": ["..."],
  "minOrder": 300,
  "images": ["/productos/maletas/ref-1-color-basic/01.webp"]
}
```

### Lo que falta en el modelo

- **`price`**: No hay precios (B2B, "consultar")
- **`variants`**: No hay colores, materiales alternativos, tamaños
- **`stock`**: No hay inventario
- **`material`**: El campo existe en `ProductClient` pero no en los JSON — se renderiza undefined

### Flujo de compra actual

1. Usuario navega colección
2. Usuario ve producto → hace clic "Solicitar Cotización"
3. Se abre WhatsApp con mensaje predefinido
4. Venta se gestiona fuera del sitio

**No hay**: carrito, checkout, backend, autenticación, ni base de datos.

---

## 8. Componentes

### Componentes en uso

| Componente | Archivos que lo importan | Propósito |
|-----------|--------------------------|-----------|
| `Navbar` | `app/layout.jsx` | Navegación principal |
| `Footer` | `app/layout.jsx` | Footer con enlaces y contacto |
| `WhatsappButton` | `app/layout.jsx` | FAB de WhatsApp |
| `Carrusel` | `app/page.jsx` | Hero slider home |
| `CategoryListing` | `coleccion/*/page.jsx` | Grid de productos con búsqueda |
| `ProductClient` | `coleccion/*/[name-title]/page.jsx` | Detalle de producto |
| `NavProduct` | `coleccion/*/layout.jsx` | Navigation bar intra-categoría |
| `SectorBanners` | `app/page.jsx` | Sección de soluciones por sector |
| `testimonios` | `app/page.jsx` | Testimonios de clientes |

### Componentes no usados (código muerto)

| Componente | Último uso | Acción |
|-----------|-----------|--------|
| `galery.jsx` | Nunca | Eliminar |
| `SEOLink.jsx` | Nunca | Eliminar o integrar |

### Componentes shadcn/ui instalados

| Componente | Uso |
|-----------|-----|
| `button.jsx` | No usado directamente (se usan botones nativos con Tailwind) |
| `card.jsx` | Usado en `Carrusel.jsx` |
| `carousel.jsx` | Usado en `Carrusel.jsx` |
| `navigation-menu.jsx` | Usado en `Navbar.jsx` |
| `resizable.jsx` | No usado |

---

## 9. SEO y Metadatos

### Estado actual

| Página | title | description | OG | Twitter | JSON-LD | Sitemap |
|--------|-------|-------------|----|---------|---------|---------|
| / | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /coleccion | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /materiales | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| /contacto | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /sobre-nosotros | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /politica-de-privacidad | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| /terminos-y-condiciones | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |

### Problemas de metadatos en layouts de categoría

Los layouts de producto (rinoneras, bolsos, etc.) tienen `metadata` exportado pero los layouts hijos en Next.js **reemplazan** a los del layout padre. Como `coleccion/layout.jsx` también exporta metadata, hay que verificar el orden de prioridad.

---

## 10. Accesibilidad (WCAG 2.2)

### Problemas detectados

| Criterio | Problema | Ubicación |
|----------|----------|-----------|
| 1.4.3 Contraste mínimo (AA) | Texto white/60 sobre azul (#0C0844) | Home, colección, contacto |
| 1.4.3 Contraste mínimo (AA) | Texto gray-400 sobre gray-50 | Cards de producto |
| 2.1.1 Teclado | Sin skip-to-content link | Todas las páginas |
| 2.4.3 Foco | Menú móvil sin focus trap | Navbar |
| 1.1.1 Imágenes | Imágenes con alt descriptivo pero mejorable | Carrusel |

---

## 11. Recomendaciones Priorizadas

### Sprint 1 (inmediato)
1. Corregir font-family en body (Roboto)
2. Eliminar código muerto (`galery.jsx`, `SEOLink.jsx`)
3. Arreglar URLs de imágenes en layout de colección
4. Agregar `/materiales` al sitemap

### Sprint 2
5. Refactorizar `useActiveSection` con useMemo
6. Unificar sectores (materiales y SectorBanners) en un solo source of truth
7. Mejorar contrastes de texto
8. Corregir listeners de Carrusel

### Sprint 3
9. Refactorizar layouts duplicados de categoría
10. Agregar focus trap en menú móvil
11. Agregar skip-to-content link
12. Renombrar `route_excuide` → `route_exclude`
