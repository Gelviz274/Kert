import Script from "next/script"

export const viewport = {
  themeColor: "#0c0844",
}

export const metadata = {
  title: "Materiales e Insumos | Kert S.A.S - Catálogo Técnico para Fabricación",
  description: "Conoce todos los materiales, lonas, cremalleras, herrajes y acolchados que Kert S.A.S utiliza en la fabricación de maletas, morrales y accesorios al por mayor en Colombia.",
  keywords: "lonas para maletas Colombia, materiales marroquinería, cremalleras para maletas, herrajes marroquinería, lona Oxford, lona PVC, lona 840, espumas Yumbolon, proveedor insumos maletas, fabricación maletas materiales, telas para morrales, acolchados maletas",
  alternates: {
    canonical: "https://www.creacionkert.com/materiales",
  },
  openGraph: {
    title: "Materiales e Insumos | Kert S.A.S - Catálogo Técnico",
    description: "Explora nuestro catálogo técnico de materiales: lonas, cremalleras, herrajes y más. Fabricación de maletas al por mayor en Colombia.",
    url: "https://www.creacionkert.com/materiales",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://www.creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catálogo de Materiales - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Materiales e Insumos | Kert S.A.S - Catálogo Técnico",
    description: "Explora nuestro catálogo técnico de materiales: lonas, cremalleras, herrajes y más.",
    images: ["https://www.creacionkert.com/og-image.jpg"],
  },
}

export default function MaterialesLayout({ children }) {
  return (
    <>
      <Script
        id="schema-materiales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Catálogo de Materiales e Insumos",
            "description": "Catálogo técnico de materiales, lonas, cremalleras, herrajes, mallas y espumas para fabricación de maletas y accesorios.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Kert S.A.S",
              "url": "https://www.creacionkert.com"
            }
          })
        }}
      />
      {children}
    </>
  )
}
