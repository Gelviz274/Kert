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
  alternates: {
    canonical: "https://creacionkert.com/coleccion/bolsas-tela",
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
