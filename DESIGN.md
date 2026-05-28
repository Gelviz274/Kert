---
name: Kert S.A.S
description: Catálogo B2B editorial de maletas y accesorios de viaje al por mayor en Colombia
colors:
  azul: "#0C0844"
  amarillo: "#FFCF00"
  coral: "#ff5a5f"
  azul-dark: "#05004c"
  azul-deepest: "#050422"
  background: "#ffffff"
  foreground: "#0a0a0a"
  card: "#ffffff"
  card-foreground: "#0a0a0a"
  primary: "#171717"
  primary-foreground: "#fafafa"
  secondary: "#f5f5f5"
  secondary-foreground: "#171717"
  muted: "#f5f5f5"
  muted-foreground: "#737373"
  accent: "#ff5a5f"
  accent-foreground: "#171717"
  destructive: "#dc2626"
  destructive-foreground: "#fafafa"
  border: "#e5e5e5"
  input: "#e5e5e5"
  ring: "#0a0a0a"
typography:
  display:
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.azul}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.azul}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  navbar:
    backgroundColor: "{colors.azul}"
    textColor: "#ffffff"
    padding: "16px 24px"
  footer:
    backgroundColor: "{colors.azul}"
    textColor: "#ffffff"
    padding: "48px 16px"
---

# Design System: Kert S.A.S

## 1. Overview

**Creative North Star: "The Editorial Workshop"**

Kert transmite la calidez de una fábrica que sabe hacer las cosas bien, combinada con la precisión visual de una revista de diseño. Cada página es una oportunidad de mostrar el producto como protagonista: fotografía de calidad, tipografía con presencia, y espacio generoso que deja respirar el contenido. El sitio no grita; comunica confianza a través de limpieza y estructura.

El diseño rechaza frontalmente la estética de "template genérico WordPress": no hay stock photos de gente sonriendo, no hay gradients púrpura, no hay glassmorphism decorativo. Cada elemento visual existe por una razón funcional. El color se usa con precisión, no por costumbre.

**Key Characteristics:**
- Fotografía de producto como protagonista absoluto
- Paleta de tres colores con roles claros y sin superposiciones
- Tipografía bold como herramienta de jerarquía, no decoración
- Espacio en blanco generoso que comunica premium
- Animaciones sutiles al servicio de la navegación, no del espectáculo

## 2. Colors

Paleta de tres colores con roles definidos: azul profundo como base de identidad, amarillo como acento funcional, coral como acento emocional.

### Primary
- **Deep Azul** (#0C0844): Color dominante de marca. Fondo del navbar, footer, secciones oscuras, gradientes. Texto en headings principales sobre fondos claros. El ancla visual del sitio.

### Secondary
- **Bright Amarillo** (#FFCF00): Acento funcional y de CTA. Botones primarios, highlights de texto, iconos destacados, bordes decorativos. El color de la acción: donde está el amarillo, hay algo que hacer.

### Tertiary
- **Coral** (#ff5a5f): Acento emocional y de urgencia. Menos frecuente que el amarillo. Usado para alertas, badges, acentos puntuales que necesitan romper el patrón azul-amarillo.

### Neutral
- **White** (#ffffff): Fondo principal de contenido.
- **Near-black** (#0a0a0a): Texto principal sobre fondos claros.
- **Gray-300** (#d4d4d4): Bordes, divisores, texto secundario en fondos oscuros.
- **Gray-500** (#737373): Texto muted, descripciones secundarias.

### Named Rules
**The 60-30-10 Rule.** Azul ocupa ~60% de la superficie (navbar, footer, secciones de fondo). Blanco ocupa ~30% (contenido, cards, espacios en blanco). Amarillo y coral comparten el ~10% restante (CTAs, acentos, highlights). El amarillo no compite con el azul; lo complementa con precisión quirúrgica.

## 3. Typography

**Display Font:** Roboto (Arial, Helvetica, sans-serif fallback)
**Body Font:** Roboto (Arial, Helvetica, sans-serif fallback)

**Character:** Roboto es una tipografía humanista-sans con geometría limpia. Comunica profesionalismo sin ser fría. En el contexto de Kert, funciona como una voz confiada: no necesita serif para parecer seria, no necesita display para llamar la atención. Su fuerza está en la consistencia.

### Hierarchy
- **Display** (700 weight, clamp(2.5rem, 5vw, 3.5rem), line-height 1.1): Títulos de hero sections, encabezados principales de página. Solo para las 2-3 frases más importantes de cada superficie.
- **Headline** (700 weight, 2rem-2.5rem, line-height 1.2): Títulos de sección. Identifican cada bloque de contenido.
- **Title** (600 weight, 1.25rem-1.5rem, line-height 1.3): Títulos de cards, subtítulos de sección, nombres de producto.
- **Body** (400 weight, 1rem, line-height 1.6): Texto corrido, descripciones, contenido editorial. Longitud máxima: 65-75ch por línea.
- **Label** (500 weight, 0.875rem, letter-spacing 0.02em): Botones, badges, etiquetas de navegación. Uso funcional, no decorativo.

### Named Rules
**The One Weight Rule.** Un peso por contexto, sin excepciones. Display y headline siempre 700. Body siempre 400. No hay pesos intermedios en un mismo nivel jerárquico. La jerarquía se logra con tamaño y espacio, no con variaciones de peso dentro de un mismo nivel.

## 4. Elevation

El sistema usa capas de profundidad combinando colores oscuros, gradientes sutiles y sombras moderadas. La profundidad se construye desde el color (azul → azul-dark → azul-deepest) y se refuerza con sombras cuando es necesario. Las superficies no son planas: tienen relieve intencional.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 4px 24px rgba(12, 8, 68, 0.12)`): Sombras difusas bajo cards en estado de reposo. Crean separación sutil del fondo.
- **Elevated** (`box-shadow: 0 10px 40px rgba(12, 8, 68, 0.18)`): Sombras bajo cards en hover o elementos interactivos. Señalan que algo está "arriba" del fondo.
- **Dramatic** (`box-shadow: 0 20px 60px rgba(12, 8, 68, 0.25)`): Sombras en elementos focalizados (modals, dropdowns). Máxima profundidad.

### Named Rules
**The Layered Depth Rule.** La profundidad se comunica en tres capas: (1) fondo de página en blanco, (2) secciones con fondo azul oscuro, (3) elementos interactivos con sombra. Cada capa se distingue por color, no solo por sombra. Las sombras refuerzan, no reemplazan, la diferenciación por color.

## 5. Components

### Buttons
- **Shape:** Full-rounded (border-radius 9999px). Silueta de "pill" que comunica amigabilidad sin perder seriedad.
- **Primary:** Background amarillo (#FFCF00), texto azul profundo (#0C0844), padding 16px 32px, font-weight 600. Transición suave en hover.
- **Hover / Focus:** Escala sutil (1.05) + sombra ambient. Focus-visible con ring de 2px en color azul.
- **Secondary / Ghost:** Bordes sutiles o transparentes con hover de fondo claro. Para acciones secundarias que no deben competir con el CTA principal.

### Cards
- **Corner Style:** Border-radius xl (16px). Esquinas redondeadas que comunican calidez sin ser infantiles.
- **Background:** Blanco puro (#ffffff) sobre fondos de sección azul. Contraste alto.
- **Shadow Strategy:** Ambient en reposo, Elevated en hover. Las cards nunca son planas; siempre tienen relieve mínimo.
- **Border:** Opcional. Cuando existe, 1px sólido en gray-300 para separación sutil.
- **Internal Padding:** 24px-32px. Espacio generoso que respira.

### Navigation (Navbar)
- **Style:** Fixed top, full-width, background azul profundo (#0C0844). Logo a la izquierda, menú horizontal en desktop, hamburger en mobile.
- **Typography:** Texto blanco, font-weight 500. Links con hover amarillo sutil.
- **Active/Hover:** Background transparente en hover. Transición de color suave (300ms).
- **Mobile:** Menú full-screen con fondo gradiente azul→azul-dark. Animación de entrada escalonada con framer-motion.

### Footer
- **Style:** Full-width, gradiente de azul (#0C0844) a azul-deepest (#050422). Tres columnas en desktop, una en mobile.
- **Typography:** Texto blanco/gris claro. Links con hover amarillo.
- **Sections:** Logo + descripción, Enlaces rápidos, Contacto (email, teléfono, WhatsApp).
- **Scroll-to-top:** Botón circular amarillo con ChevronUp, centrado en la unión header-body.

### Category Grid (Homepage)
- **Style:** Cards full-bleed con imagen de fondo, overlay gradiente azul→transparente en hover.
- **Behavior:** Imagen con scale 1.1 en hover, overlay aparece, texto y botón se deslizan hacia arriba.
- **Typography:** Título en amarillo bold, descripción en blanco. Botón "Explorar" pill amarillo.
- **Layout:** 3 columnas en desktop, 1 en mobile. Gap generoso (32px).

## 6. Do's and Don'ts

### Do:
- **Do** usar la paleta de tres colores con roles claros: azul = identidad, amarillo = acción, coral = urgencia.
- **Do** mantener el amarillo como color de CTA exclusivo. Cuando el usuario ve amarillo, sabe que hay algo clickeable.
- **Do** usar tipografía bold (700) solo para headings y display. El body siempre es regular (400).
- **Do** dar espacio generoso a cada sección. py-24 como mínimo para secciones de contenido.
- **Do** usar framer-motion para animaciones de entrada (scroll-reveal) y hover, nunca para animaciones de layout.
- **Do** mantener WhatsApp visible siempre. Es el canal de conversión primario.
- **Do** usar fotografía de producto real como protagonista. Las fotos venden, el diseño las enmarca.

### Don't:
- **Don't** usar gradientes de texto (`background-clip: text`). El texto es sólido, siempre.
- **Don't** usar glassmorphism, blur, ni backdrop-filter decorativo. La profundidad viene del color, no de filtros.
- **Don't** usar sombras en texto. Las sombras son para elevación de superficies, no para tipografía.
- **Don't** crear identical card grids. Cada categoría tiene su propia imagen y personalidad; no repetir el mismo layout vacío.
- **Don't** usar modals como primera opción de interacción. El path a WhatsApp debe ser directo, sin interstitials.
- **Don't** usar stock photos de gente sonriendo. El producto es el protagonista, no personas genéricas.
- **Don't** animar propiedades CSS de layout (width, height, padding). Solo transform y opacity.
- **Don't** usar `border-left` o `border-right` mayores a 1px como acento de color. Rewrite con background tints o nada.
- **Don't** usar dark mode por defecto. El sitio es light con secciones oscuras (azul) intencionales, no un tema oscuro global.
- **Don't** usar la palabra "incríble", "exceptional", "world-class" u otros superlativos genéricos en copy. El producto habla por sí solo.
