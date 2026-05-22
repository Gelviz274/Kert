import Script from "next/script";

export const viewport = {
  themeColor: "#0c0844",
};

export const metadata = {
  title: "Colección | Kert S.A.S - Catálogo de Productos al Por Mayor",
  description: "Explora nuestra colección de maletas, mochilas, riñoneras y accesorios al por mayor. Productos de alta calidad para distribuidores y mayoristas en Colombia.",
  keywords: "catálogo de maletas, maletas por mayor, mochilas mayoristas, riñoneras por mayor, accesorios de viaje Colombia, bolsos corporativos, maletas empresariales",
  alternates: {
    canonical: "https://creacionkert.com/coleccion",
  },
  openGraph: {
    title: "Colección | Kert S.A.S - Catálogo de Productos al Por Mayor",
    description: "Explora nuestra colección de maletas, mochilas, riñoneras y accesorios al por mayor en Colombia.",
    url: "https://creacionkert.com/coleccion",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colección de productos al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colección | Kert S.A.S - Catálogo de Productos al Por Mayor",
    description: "Explora nuestra colección de maletas, mochilas, riñoneras y accesorios al por mayor en Colombia.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

const categories = [
  { name: "Maletas", slug: "maletas", image: "https://creacionkert.com/productos/isabel/bolso-azul-rojo.jpg" },
  { name: "Riñoneras", slug: "rinoneras", image: "https://creacionkert.com/productos/rinonera-olimpica.jpg" },
  { name: "Bolsos", slug: "bolsos", image: "https://creacionkert.com/productos/bolsos/cross/01.webp" },
  { name: "Bolsos Multiuso", slug: "bolsos-multiuso", image: "https://creacionkert.com/productos/bolsos-multiuso/shopper/01.webp" },
  { name: "Bolsas en Cambrel", slug: "bolsas-cambrel", image: "https://creacionkert.com/productos/bolsas-cambrel/cambrel-basic/01.webp" },
  { name: "Bolsas en Tela", slug: "bolsas-tela", image: "https://creacionkert.com/productos/bolsas-tela/canvas-classic/01.webp" },
  { name: "Otros Productos", slug: "otros", image: "https://creacionkert.com/productos/botiquin-cruz-roja.jpg" },
];

export default function ColeccionLayout({ children }) {
  return (
    <>
      <Script
        id="schema-collection-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": categories.map((cat, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": cat.name,
                "description": `${cat.name} de alta calidad para distribución al por mayor`,
                "url": `https://creacionkert.com/coleccion/${cat.slug}`,
                "image": cat.image,
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "COP",
                  "availability": "https://schema.org/InStock",
                  "priceValidUntil": new Date(new Date().getFullYear(), 11, 31).toISOString().split("T")[0]
                }
              }
            }))
          })
        }}
      />
      {children}
    </>
  );
} 