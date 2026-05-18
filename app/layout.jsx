import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Script from "next/script";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0844",
};

export const metadata = {
  title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
  description:
    "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia. Calidad premium, precios competitivos y pedidos mínimos accesibles.",
  keywords:
    "maletas al por mayor, fabricante de maletas, maletas promocionales, maletas corporativas, mochilas al por mayor, accesorios de viaje, producción de maletas, Colombia, maletas personalizadas, maletas publicitarias, riñoneras mayoristas, bolsos empresariales",
  alternates: {
    canonical: "https://creacionkert.com",
  },
  openGraph: {
    title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
    description:
      "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia. Calidad premium, precios competitivos y pedidos mínimos accesibles.",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    url: "https://creacionkert.com",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kert S.A.S - Maletas al por mayor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
    description: "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="CNOPBrrmzN2I9WHIMN-XW5mT6WdZ4i6LgzqB39MeJ38"
        />
        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kert S.A.S" />
        {/* Datos estructurados JSON-LD para empresas locales */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kert S.A.S",
              "url": "https://creacionkert.com",
              "logo": "https://creacionkert.com/logo.png",
              "description": "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573213062852",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Colombia"
              }
            })
          }}
        />
      </head>

      <body className={`${RobotoFont.variable} antialiased mt-[68px]`}>
        {/* Google Tag Manager - Head */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NTNZD8WG');`}
        </Script>

        

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5Q54M6CDKM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5Q54M6CDKM');
          `}
        </Script>

        {/* Google Tag Manager - Body (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NTNZD8WG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />

        <div>

          <WhatsappButton
            message="¡Hola! Quisiera más información."
            phoneNumber="+573116095224"
          />
        </div>
      </body>
    </html>
  );
}
