import React from "react";
import { Briefcase } from "lucide-react";
import NavProduct from "@/components/navproduct";
import data from "./data/bolsos.json";

const bags = data.productos.map(producto => ({
  id: producto.id,
  name: producto.name,
  category: producto.category,
  icon: <Briefcase className="w-6 h-6" />,
  direccion: `/coleccion/bolsos/${producto["name-title"]}`
}));

export const metadata = {
  title: "Bolsos | Kert S.A.S - Catálogo de Bolsos al Por Mayor",
  description: "Explora nuestra colección de bolsos al por mayor. Diseños modernos y funcionales para distribuidores.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsos",
  },
  openGraph: {
    title: "Bolsos | Kert S.A.S - Catálogo de Bolsos al Por Mayor",
    description: "Explora nuestra colección de bolsos al por mayor. Diseños modernos y funcionales para distribuidores.",
    url: "https://creacionkert.com/coleccion/bolsos",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bolsos al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolsos | Kert S.A.S - Catálogo de Bolsos al Por Mayor",
    description: "Explora nuestra colección de bolsos al por mayor. Diseños modernos y funcionales para distribuidores.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

export default function BolsosLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}
