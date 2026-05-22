import React from "react";
import { Briefcase } from "lucide-react";
import NavProduct from "@/components/navproduct";
import OtrosProductos from "./data/OtrosProductos.json";

const productos = OtrosProductos.productos.map(producto => ({
  id: producto.id,
  name: producto.name,
  category: producto.category,
  icon: <Briefcase className="w-6 h-6" />,
  direccion: `/coleccion/otros/${producto["name-title"]}`
}));

export const metadata = {
  title: "Otros Productos | Kert S.A.S - Catálogo de Productos al Por Mayor",
  description: "Descubre nuestra línea de productos al por mayor. Diseños modernos, materiales duraderos y precios competitivos para distribuidores.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/otros",
  },
  openGraph: {
    title: "Otros Productos | Kert S.A.S - Catálogo de Productos al Por Mayor",
    description: "Descubre nuestra línea de productos al por mayor. Diseños modernos, materiales duraderos y precios competitivos para distribuidores.",
    url: "https://creacionkert.com/coleccion/otros",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Productos al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otros Productos | Kert S.A.S - Catálogo de Productos al Por Mayor",
    description: "Descubre nuestra línea de productos al por mayor. Diseños modernos, materiales duraderos y precios competitivos para distribuidores.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

export default function OtrosLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={productos} />
      {children}
    </div>
  );
}
