import React from "react";
import { Backpack } from "lucide-react";
import NavProduct from "@/components/navproduct";
import rinonerasData from "./data/rinoneras.json";

const bags = rinonerasData.rinoneras.map(rinonera => ({
  id: rinonera.id,
  name: rinonera.name,
  category: rinonera.category,
  icon: <Backpack className="w-6 h-6" />,
  direccion: `/coleccion/rinoneras/${rinonera["name-title"]}`
}));

export const metadata = {
  title: "Riñoneras | Kert S.A.S - Catálogo de Riñoneras al Por Mayor",
  description: "Descubre nuestra línea de riñoneras al por mayor. Diseños modernos, materiales duraderos y precios competitivos para distribuidores.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/rinoneras",
  },
};

export default function RinonerasLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}
