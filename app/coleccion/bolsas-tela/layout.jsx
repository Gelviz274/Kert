import React from "react";
import { ShoppingBag } from "lucide-react";
import NavProduct from "@/components/navproduct";
import data from "./data/bolsas-tela.json";

const bags = data.productos.map(producto => ({
  id: producto.id,
  name: producto.name,
  category: producto.category,
  icon: <ShoppingBag className="w-6 h-6" />,
  direccion: `/coleccion/bolsas-tela/${producto["name-title"]}`
}));

export const metadata = {
  title: "Bolsas en Tela | Kert S.A.S - Catálogo al Por Mayor",
  description: "Descubre nuestra línea de bolsas en tela al por mayor. Diseños para uso diario, dotación y promociones.",
  keywords: "bolsas en tela al por mayor, bolsas de tela personalizadas, bolsas canvas Colombia, fabricante bolsas tela, bolsas ecológicas por mayor, shopper tela al por mayor, bolsa multiusos tela, dotación bolsas tela",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsas-tela",
  },
  openGraph: {
    title: "Bolsas en Tela | Kert S.A.S - Catálogo al Por Mayor",
    description: "Descubre nuestra línea de bolsas en tela al por mayor. Diseños para uso diario, dotación y promociones.",
    url: "https://creacionkert.com/coleccion/bolsas-tela",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bolsas en tela al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolsas en Tela | Kert S.A.S - Catálogo al Por Mayor",
    description: "Descubre nuestra línea de bolsas en tela al por mayor. Diseños para uso diario, dotación y promociones.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

export default function BolsasTelaLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}
