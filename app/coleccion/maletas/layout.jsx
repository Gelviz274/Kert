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

function Layout({ children }) {
  return (
    <div>
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}

export default Layout;
