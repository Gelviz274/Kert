import React from "react";
import Script from "next/script";
import ProductClient from "@/components/ProductClient";
import data from "../data/bolsos.json";

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = data.productos.find(p => p['name-title'] === nameTitle);
  return {
    title: producto ? `${producto.name} | Kert S.A.S - Bolsos al Por Mayor` : 'Producto no encontrado',
    description: producto ? `${producto.name} - ${producto.category} premium fabricado al por mayor en Colombia. Especificaciones técnicas, características, dimensiones y opciones de pedido mayorista con personalización.` : 'Producto no encontrado',
    keywords: producto ? `bolso ${producto.name}, bolsos al por mayor Colombia, bolso corporativo personalizado, comprar bolso ${producto.name}, fabricante bolsos Bogotá, bolso ejecutivo Colombia, ${producto.category?.toLowerCase()} por mayor, cotizar bolsos` : 'bolsos',
    alternates: {
      canonical: `https://www.creacionkert.com/coleccion/bolsos/${nameTitle}`,
    },
    openGraph: {
      title: producto ? `${producto.name} | Kert S.A.S - Bolsos al Por Mayor` : 'Producto no encontrado',
      description: producto ? `Detalles de ${producto.name} - ${producto.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Producto no encontrado',
      url: `https://www.creacionkert.com/coleccion/bolsos/${nameTitle}`,
      type: "website",
      locale: "es_CO",
      siteName: "Kert S.A.S",
      images: producto?.images?.[0] ? [{
        url: `https://www.creacionkert.com${producto.images[0]}`,
        width: 800,
        height: 600,
        alt: producto.name,
      }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: producto ? `${producto.name} | Kert S.A.S - Bolsos al Por Mayor` : 'Producto no encontrado',
      description: producto ? `Detalles de ${producto.name} - ${producto.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Producto no encontrado',
      images: producto?.images?.[0] ? [`https://www.creacionkert.com${producto.images[0]}`] : [],
    },
  };
}

export default async function BolsoPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = data.productos.find(p => p['name-title'] === nameTitle);

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Producto no encontrado</h2>
        </div>
      </div>
    );
  }

  const productImage = producto.images?.[0]
    ? `https://www.creacionkert.com${producto.images[0]}`
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
            "name": producto.name,
            "description": `Detalles de ${producto.name} - ${producto.category}. Especificaciones, características y opciones de pedido al por mayor.`,
            "image": productImage,
            "category": producto.category,
            "brand": { "@type": "Brand", "name": "Kert S.A.S" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "COP",
              "availability": "https://schema.org/InStock",
              "url": `https://www.creacionkert.com/coleccion/bolsos/${nameTitle}`,
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
              { "@type": "ListItem", "position": 3, "name": "Bolsos", "item": "https://www.creacionkert.com/coleccion/bolsos" },
              { "@type": "ListItem", "position": 4, "name": producto.name, "item": `https://www.creacionkert.com/coleccion/bolsos/${nameTitle}` },
            ],
          }),
        }}
      />
      <ProductClient product={producto} iconName="briefcase" />
    </>
  );
}
