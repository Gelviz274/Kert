import React from 'react';

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
  },
};

export default function ColeccionLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "Riñoneras",
                  "description": "Riñoneras de alta calidad para distribución al por mayor",
                  "url": "https://creacionkert.com/coleccion/rinoneras",
                  "image": "https://creacionkert.com/Productos/rinonera-olimpica.jpg"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "Maletas",
                  "description": "Maletas de alta calidad para distribución al por mayor",
                  "url": "https://creacionkert.com/coleccion/maletas",
                  "image": "https://creacionkert.com/Productos/Bolso-azul-rojo.jpg"
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
} 