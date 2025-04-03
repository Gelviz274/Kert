import React from "react";
import { Backpack } from "lucide-react";
import NavProduct from "@/components/navproduct";
import maletasData from "./data/maletas.json";

const bags = maletasData.maletas.map(maleta => ({
  id: maleta.id,
  name: maleta.name,
  category: maleta.category,
  icon: <Backpack className="w-6 h-6" />,
  direccion: `/coleccion/maletas/${maleta["name-title"]}`
}));

export const metadata = {
  title: "Maletas | Kert S.A.S - Catálogo de Maletas al Por Mayor",
  description: "Explora nuestra exclusiva colección de maletas al por mayor. Calidad premium, diseños modernos y materiales duraderos para distribuidores.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/maletas",
  },
};

export default function MaletasLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}
