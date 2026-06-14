import React from "react";
import { ShoppingBag } from "lucide-react";
import NavProduct from "@/components/navproduct";
import data from "./data/bolsas-cambrel.json";

const bags = data.productos.map(producto => ({
  id: producto.id,
  name: producto.name,
  category: producto.category,
  icon: <ShoppingBag className="w-6 h-6" />,
  direccion: `/coleccion/bolsas-cambrel/${producto["name-title"]}`
}));

export const metadata = {
  title: "Bolsas en Cambrel | Kert S.A.S - Catálogo al Por Mayor",
  description: "Descubre nuestra línea de bolsas en cambrel al por mayor. Ideales para eventos, ferias y uso promocional.",
  keywords: "bolsas en cambrel al por mayor, bolsas cambrel promocionales, bolsas para ferias Colombia, fabricante bolsas cambrel, bolsas publicitarias cambrel, bolsos de cambrel personalizados, bolsas evento por mayor",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsas-cambrel",
  },
  openGraph: {
    title: "Bolsas en Cambrel | Kert S.A.S - Catálogo al Por Mayor",
    description: "Descubre nuestra línea de bolsas en cambrel al por mayor. Ideales para eventos, ferias y uso promocional.",
    url: "https://creacionkert.com/coleccion/bolsas-cambrel",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bolsas en cambrel al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolsas en Cambrel | Kert S.A.S - Catálogo al Por Mayor",
    description: "Descubre nuestra línea de bolsas en cambrel al por mayor. Ideales para eventos, ferias y uso promocional.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

export default function BolsasCambrelLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}
