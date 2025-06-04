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
};

export default function OtrosLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  );
}
