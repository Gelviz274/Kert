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
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsas-cambrel",
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
