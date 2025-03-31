import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
  description: "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia. Calidad premium, precios competitivos y pedidos mínimos accesibles. Especialistas en producción de maletas promocionales y corporativas.",
  keywords: "maletas al por mayor, fabricante de maletas, maletas promocionales, maletas corporativas, mochilas al por mayor, accesorios de viaje, producción de maletas, Colombia, maletas personalizadas, maletas publicitarias",
  openGraph: {
    title: "Kert S.A.S | Fabricante de Maletas al Por Mayor en Colombia",
    description: "Fabricante líder de maletas, mochilas y accesorios al por mayor en Colombia. Calidad premium, precios competitivos y pedidos mínimos accesibles.",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${RobotoFont.variable} antialiased mt-[68px]`}>
        <Navbar />
        
          {children}
        
        <Footer />
        <div>
          <WhatsappButton
            message="¡Hola! Quisiera más información."
            phoneNumber="12345789"
          /></div>
      </body>
    </html>
  );
}
