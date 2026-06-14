import React from "react";
import Script from "next/script";
import ProductClient from "@/components/ProductClient";
import maletasData from "../data/maletas.json";

export async function generateMetadata({ params }) {
  const nameTitle = (await params)['name-title'];
  const maleta = maletasData.maletas.find(m => m['name-title'] === nameTitle);
  return {
    title: maleta ? `${maleta.name} | Kert S.A.S - Maletas al Por Mayor` : 'Maleta no encontrada',
    description: maleta ? `${maleta.name} - ${maleta.category} premium fabricada al por mayor en Colombia. Especificaciones técnicas, características, dimensiones y opciones de pedido mayorista con personalización empresarial.` : 'Maleta no encontrada',
    keywords: maleta ? `maleta ${maleta.name}, maletas al por mayor Colombia, maleta corporativa personalizada, comprar maleta ${maleta.name}, fabricante maletas Bogotá, maleta ejecutiva Colombia, ${maleta.category?.toLowerCase()} por mayor, cotizar maleta, pedido mínimo maletas` : 'maletas',
    alternates: {
      canonical: `https://creacionkert.com/coleccion/maletas/${nameTitle}`,
    },
    openGraph: {
      title: maleta ? `${maleta.name} | Kert S.A.S - Maletas al Por Mayor` : 'Maleta no encontrada',
      description: maleta ? `Detalles de ${maleta.name} - ${maleta.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Maleta no encontrada',
      url: `https://creacionkert.com/coleccion/maletas/${nameTitle}`,
      type: "website",
      locale: "es_CO",
      siteName: "Kert S.A.S",
      images: maleta?.images?.[0] ? [{
        url: `https://creacionkert.com${maleta.images[0]}`,
        width: 800,
        height: 600,
        alt: maleta.name,
      }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: maleta ? `${maleta.name} | Kert S.A.S - Maletas al Por Mayor` : 'Maleta no encontrada',
      description: maleta ? `Detalles de ${maleta.name} - ${maleta.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Maleta no encontrada',
      images: maleta?.images?.[0] ? [`https://creacionkert.com${maleta.images[0]}`] : [],
    },
  };
}

export default async function MaletaPage({ params }) {
  const nameTitle = (await params)['name-title'];
  const maleta = maletasData.maletas.find(m => m['name-title'] === nameTitle);

  if (!maleta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Maleta no encontrada</h2>
        </div>
      </div>
    );
  }

  const productImage = maleta.images?.[0]
    ? `https://creacionkert.com${maleta.images[0]}`
    : "https://creacionkert.com/og-image.jpg";

  return (
    <>
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": maleta.name,
            "description": `Detalles de ${maleta.name} - ${maleta.category}. Especificaciones, características y opciones de pedido al por mayor.`,
            "image": productImage,
            "category": maleta.category,
            "brand": { "@type": "Brand", "name": "Kert S.A.S" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "COP",
              "availability": "https://schema.org/InStock",
              "url": `https://creacionkert.com/coleccion/maletas/${nameTitle}`,
            },
          }),
        }}
      />
      <Script
        id="schema-breadcrumb-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://creacionkert.com" },
              { "@type": "ListItem", "position": 2, "name": "Colección", "item": "https://creacionkert.com/coleccion" },
              { "@type": "ListItem", "position": 3, "name": "Maletas", "item": "https://creacionkert.com/coleccion/maletas" },
              { "@type": "ListItem", "position": 4, "name": maleta.name, "item": `https://creacionkert.com/coleccion/maletas/${nameTitle}` },
            ],
          }),
        }}
      />
      <ProductClient product={maleta} iconName="backpack" />
    </>
  );
}
