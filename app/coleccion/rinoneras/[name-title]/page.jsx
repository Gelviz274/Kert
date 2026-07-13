import React from "react";
import Script from "next/script";
import ProductClient from "@/components/ProductClient";
import rinonerasData from "../data/rinoneras.json";

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const rinonera = rinonerasData.rinoneras.find(r => r['name-title'] === nameTitle);
  return {
    title: rinonera ? `${rinonera.name} | Kert S.A.S - Riñoneras al Por Mayor` : 'Riñonera no encontrada',
    description: rinonera ? `${rinonera.name} - ${rinonera.category} premium fabricada al por mayor en Colombia. Especificaciones técnicas, características, dimensiones y opciones de pedido mayorista con personalización.` : 'Riñonera no encontrada',
    keywords: rinonera ? `riñonera ${rinonera.name}, riñoneras al por mayor Colombia, riñonera corporativa personalizada, comprar riñonera ${rinonera.name}, fabricante riñoneras Bogotá, ${rinonera.category?.toLowerCase()} por mayor, cotizar riñoneras, riñonera promocional` : 'riñoneras',
    alternates: {
      canonical: `https://www.creacionkert.com/coleccion/rinoneras/${nameTitle}`,
    },
    openGraph: {
      title: rinonera ? `${rinonera.name} | Kert S.A.S - Riñoneras al Por Mayor` : 'Riñonera no encontrada',
      description: rinonera ? `Detalles de ${rinonera.name} - ${rinonera.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Riñonera no encontrada',
      url: `https://www.creacionkert.com/coleccion/rinoneras/${nameTitle}`,
      type: "website",
      locale: "es_CO",
      siteName: "Kert S.A.S",
      images: rinonera?.images?.[0] ? [{
        url: `https://www.creacionkert.com${rinonera.images[0]}`,
        width: 800,
        height: 600,
        alt: rinonera.name,
      }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: rinonera ? `${rinonera.name} | Kert S.A.S - Riñoneras al Por Mayor` : 'Riñonera no encontrada',
      description: rinonera ? `Detalles de ${rinonera.name} - ${rinonera.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Riñonera no encontrada',
      images: rinonera?.images?.[0] ? [`https://www.creacionkert.com${rinonera.images[0]}`] : [],
    },
  };
}

export default async function RinoneraPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const rinonera = rinonerasData.rinoneras.find(r => r['name-title'] === nameTitle);

  if (!rinonera) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Riñonera no encontrada</h2>
        </div>
      </div>
    );
  }

  const productImage = rinonera.images?.[0]
    ? `https://www.creacionkert.com${rinonera.images[0]}`
    : "https://www.creacionkert.com/og-image.jpg";

  return (
    <>
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": rinonera.name,
            "description": `Detalles de ${rinonera.name} - ${rinonera.category}. Especificaciones, características y opciones de pedido al por mayor.`,
            "image": productImage,
            "category": rinonera.category,
            "brand": { "@type": "Brand", "name": "Kert S.A.S" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "COP",
              "availability": "https://schema.org/InStock",
              "url": `https://www.creacionkert.com/coleccion/rinoneras/${nameTitle}`,
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
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.creacionkert.com" },
              { "@type": "ListItem", "position": 2, "name": "Colección", "item": "https://www.creacionkert.com/coleccion" },
              { "@type": "ListItem", "position": 3, "name": "Riñoneras", "item": "https://www.creacionkert.com/coleccion/rinoneras" },
              { "@type": "ListItem", "position": 4, "name": rinonera.name, "item": `https://www.creacionkert.com/coleccion/rinoneras/${nameTitle}` },
            ],
          }),
        }}
      />
      <ProductClient product={rinonera} iconName="backpack" />
    </>
  );
}
