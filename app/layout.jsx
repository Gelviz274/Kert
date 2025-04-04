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

export const metadata = {
  title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
  description:
    "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia. Calidad premium, precios competitivos y pedidos mínimos accesibles.",
  keywords:
    "maletas al por mayor, fabricante de maletas, maletas promocionales, maletas corporativas, mochilas al por mayor, accesorios de viaje, producción de maletas, Colombia, maletas personalizadas, maletas publicitarias",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="CNOPBrrmzN2I9WHIMN-XW5mT6WdZ4i6LgzqB39MeJ38"
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
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5Q54M6CDKM');`}
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
