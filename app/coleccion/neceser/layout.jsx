import React from "react";
import { Briefcase } from "lucide-react";
import NavProduct from "@/components/navproduct";
import neceserData from "./data/neceser.json";

const bags = neceserData.necesers.map(neceser => ({
  id: neceser.id,
  name: neceser.name,
  category: neceser.category,
  icon: <Briefcase className="w-6 h-6" />,
  direccion: `/coleccion/neceser/${neceser["name-title"]}`
}));

export const metadata = {
  title: "Neceseres | Kert S.A.S - Catálogo de Neceseres al Por Mayor",
  description: "Descubre nuestra línea de neceseres al por mayor. Diseños modernos, materiales duraderos y precios competitivos para distribuidores.",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/neceser",
  },
};

export default function NecesersLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  );
}
