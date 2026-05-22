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
};

export default function BolsosLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}
