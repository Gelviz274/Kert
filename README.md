<p align="center">
  <img src="https://github.com/user-attachments/assets/4b901e8a-51a9-43ec-a3d6-ea07152c1007" alt="Logo de Kert" width="500"/>
</p>

<h1 align="center">🌐 Sitio Web de Kert S.A.S</h1>

<p align="center">
  <strong>Fabricante líder de maletas, mochilas, riñoneras y accesorios al por mayor en Colombia.</strong>
</p>

Sitio web corporativo y catálogo en línea de **Kert S.A.S**, construido con [Next.js](https://nextjs.org/) para mostrar su colección de productos, facilitar el contacto con mayoristas y distribuidores, y fortalecer su presencia digital con prácticas modernas de SEO, rendimiento y accesibilidad.

---

## 🧱 Stack Tecnológico

| Tecnología                                        | Versión  | Propósito                                                   |
| ------------------------------------------------- | -------- | ----------------------------------------------------------- |
| [Next.js](https://nextjs.org/)                    | ^16.2.6  | Framework React con App Router                              |
| [React](https://react.dev/)                       | ^19.2.6  | Librería de UI                                              |
| [Tailwind CSS](https://tailwindcss.com/)          | ^4.3.0   | Estilos utilitarios                                         |
| [shadcn/ui](https://ui.shadcn.com/)               | New York | Componentes de UI (card, carousel, button, navigation-menu) |
| [Framer Motion](https://www.framer.com/motion/)   | ^12.38.0 | Animaciones                                                 |
| [Embla Carousel](https://www.embla-carousel.com/) | ^8.6.0   | Carrusel de imágenes                                        |
| [Lucide](https://lucide.dev/)                     | ^1.14.0  | Iconos SVG                                                  |
| [pnpm](https://pnpm.io/)                          | 10.8.1   | Gestor de paquetes                                          |

---

## 📋 Requisitos Previos

- **Node.js** 18 o superior
- **pnpm** 10.8.1 o superior

```bash
# Instalar pnpm globalmente (si no lo tienes)
npm install -g pnpm@10.8.1
```

---

## 🚀 Instalación

```bash
pnpm install
```

## 🛠️ Scripts Disponibles

| Comando      | Descripción                                 |
| ------------ | ------------------------------------------- |
| `pnpm dev`   | Inicia servidor de desarrollo con Turbopack |
| `pnpm build` | Construye el sitio para producción          |
| `pnpm start` | Inicia el servidor de producción            |
| `pnpm lint`  | Ejecuta ESLint                              |

---

## 📂 Estructura del Proyecto

```
Kert/
├── app/                          # App Router de Next.js
│   ├── layout.jsx                # Layout raíz (metadatos, fuentes, GTM, GA, PWA)
│   ├── page.jsx                  # Página de inicio
│   ├── not-found.jsx             # Página 404 personalizada
│   ├── globals.css               # Tailwind v4, variables CSS, animaciones
│   ├── coleccion/                # Catálogo de productos
│   │   ├── page.jsx              # Landing de colección
│   │   ├── layout.jsx            # SEO + JSON-LD structured data
│   │   ├── maletas/              # Categoría maletas (7 productos)
│   │   │   ├── page.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── [name-title]/     # Página individual de producto
│   │   │   └── data/maletas.json
│   │   ├── rinoneras/            # Categoría riñoneras (4 productos)
│   │   │   ├── page.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── [name-title]/     # Página individual de producto
│   │   │   └── data/rinoneras.json
│   │   └── otros/                # Otros productos (2 productos)
│   │       ├── page.jsx
│   │       ├── layout.jsx
│   │       ├── [name-title]/     # Página individual de producto
│   │       └── data/OtrosProductos.json
│   ├── sobre-nosotros/           # Página institucional
│   ├── contacto/                 # Página de contacto
│   ├── terminos-y-condiciones/   # Términos legales
│   └── politica-de-privacidad/   # Política de privacidad
├── components/                   # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Carrusel.jsx
│   ├── testimonios.jsx
│   ├── galery.jsx
│   ├── navproduct.jsx
│   ├── WhatsappButton.jsx
│   ├── SEOLink.jsx
│   ├── icons.jsx
│   └── ui/                       # Componentes shadcn/ui
│       ├── button.jsx
│       ├── card.jsx
│       ├── carousel.jsx
│       ├── navigation-menu.jsx
│       └── resizable.jsx
├── public/                       # Archivos estáticos (imágenes, manifest.json)
├── lib/
│   └── utils.js                  # Función cn() con clsx + tailwind-merge
├── package.json
├── next.config.mjs
├── pnpm-workspace.yaml
├── components.json               # Configuración de shadcn/ui
├── jsconfig.json                 # Alias @/ para imports
├── eslint.config.mjs
├── postcss.config.mjs
└── vercel.json                   # Configuración de despliegue Vercel
```

---

## 🗺️ Sitemap — Rutas del Sitio

| Ruta                                | Descripción                                  |
| ----------------------------------- | -------------------------------------------- |
| `/`                                 | Inicio — Hero, categorías, testimonios       |
| `/coleccion`                        | Catálogo completo — categorías, más vendidos |
| `/coleccion/maletas`                | Categoría maletas                            |
| `/coleccion/maletas/[name-title]`   | Página individual de maleta                  |
| `/coleccion/rinoneras`              | Categoría riñoneras                          |
| `/coleccion/rinoneras/[name-title]` | Página individual de riñonera                |
| `/coleccion/otros`                  | Otros productos                              |
| `/coleccion/otros/[name-title]`     | Página individual de otro producto           |
| `/sobre-nosotros`                   | Información de la empresa                    |
| `/contacto`                         | Formulario y datos de contacto               |
| `/terminos-y-condiciones`           | Términos legales                             |
| `/politica-de-privacidad`           | Política de privacidad                       |

---

## 🎨 Branding y Diseño

| Elemento             | Valor                     |
| -------------------- | ------------------------- |
| **Color primario**   | `#0C0844` (azul Kert)     |
| **Color secundario** | `#FFCF00` (amarillo Kert) |
| **Color de acento**  | `#ff5a5f`                 |
| **Tipografía**       | Roboto (Google Fonts)     |
| **Estilo UI**        | shadcn/ui New York        |

El diseño sigue una paleta de colores corporativos azul y amarillo, con animaciones sutiles mediante Framer Motion y un enfoque mobile-first con Tailwind CSS v4.

---

## ✨ Funcionalidades Clave

- **SEO Completo** — Open Graph, Twitter Cards, meta tags, JSON-LD structured data (Organization, ItemList, Product)
- **PWA** — Manifest con iconos, theme color, shortcuts a catálogo y contacto
- **Analytics** — Google Tag Manager + Google Analytics 4
- **Catálogo Dinámico** — Productos cargados desde archivos JSON con páginas individuales por producto
- **WhatsApp Integration** — Botón flotante de contacto directo
- **Rendimiento** — Turbopack en desarrollo, optimización de imágenes (WebP/AVIF), fuentes optimizadas con `next/font`
- **Seguridad** — Headers HTTP: X-DNS-Prefetch-Control, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy
- **Responsive** — Diseño adaptable a todos los dispositivos

---

## 🚢 Despliegue

El sitio se despliega automáticamente en **Vercel**. Cada push a la rama principal dispara una nueva build.

```bash
# Comandos de build personalizados (definidos en vercel.json)
pnpm build    # next build
```

---

## 👥 Creadores

- **Juan David Gelviz Jaimes** — Desarrollador Web
- **Victoria Bayona Bernal** — Fotógrafa

---

## 📄 Licencia

© 2024 — 2026 Kert S.A.S. Todos los derechos reservados.
