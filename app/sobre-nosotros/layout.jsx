import React from 'react';

export const metadata = {
  title: "Sobre Nosotros | Kert S.A.S - Nuestra Historia y Valores",
  description: "Conoce la historia detrás de Kert S.A.S, nuestros valores y el equipo que hace posible ofrecer las mejores maletas y mochilas al por mayor en Colombia.",
  keywords: "fabricante maletas Colombia, historia Kert, valores empresa fabricación, equipo producción textil, industria maletas Colombia, fabricación bolsos",
  alternates: {
    canonical: "https://creacionkert.com/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Kert S.A.S - Nuestra Historia y Valores",
    description: "Conoce la historia detrás de Kert S.A.S, nuestros valores y el equipo que hace posible ofrecer las mejores maletas y mochilas al por mayor en Colombia.",
    url: "https://creacionkert.com/sobre-nosotros",
    type: "website",
  },
};

export default function SobreNosotrosLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Kert S.A.S",
              "description": "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia.",
              "foundingDate": "2015",
              "foundingLocation": "Colombia",
              "url": "https://creacionkert.com",
              "logo": "https://creacionkert.com/logo.png"
            }
          })
        }}
      />
      {children}
    </>
  );
} 