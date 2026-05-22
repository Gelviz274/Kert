import React from "react";
import { Package } from "lucide-react";
import NavProduct from "@/components/navproduct";
import data from "./data/bolsos-multiuso.json";

const bags = data.productos.map(producto => ({
  id: producto.id,
  name: producto.name,
  category: producto.category,
  icon: <Package className="w-6 h-6" />,
  direccion: `/coleccion/bolsos-multiuso/${producto["name-title"]}`
}));

export const metadata = {
  title: "Bolsos Multiuso | Kert S.A.S - Catálogo al Por Mayor",
  description: "Descubre nuestra línea de bolsos multiuso al por mayor. Versátiles y funcionales para viaje, dotación y uso diario.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsos-multiuso",
  },
};

export default function BolsosMultiusoLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}
