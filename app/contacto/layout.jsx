import React from 'react';

export const viewport = {
  themeColor: "#0c0844",
};

export const metadata = {
  title: "Contacto | Kert S.A.S - Hablemos de tu Proyecto",
  description: "Contáctanos para obtener información sobre pedidos al por mayor de maletas, mochilas y accesorios. Estamos listos para ayudarte con tu proyecto.",
  keywords: "contactar fabricante maletas Colombia, solicitar cotización maletas, pedido mayorista maletas, proveedor maletas Bogotá, cotizar bolsos al por mayor, contacto Kert S.A.S, WhatsApp fabricante maletas, teléfono fabrica maletas Colombia",
  alternates: {
    canonical: "https://creacionkert.com/contacto",
  },
  openGraph: {
    title: "Contacto | Kert S.A.S - Hablemos de tu Proyecto",
    description: "Contáctanos para obtener información sobre pedidos al por mayor de maletas, mochilas y accesorios. Estamos listos para ayudarte con tu proyecto.",
    url: "https://creacionkert.com/contacto",
    type: "website",
  },
};

export default function ContactoLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Kert S.A.S",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+573213062852",
                  "contactType": "customer service",
                  "areaServed": "CO",
                  "availableLanguage": "Spanish"
                }
              ],
              "email": "contacto@creacionkert.com"
            }
          })
        }}
      />
      {children}
    </>
  );
} 