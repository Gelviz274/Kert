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

function Layout({ children }) {
  return (
    <div>
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}

export default Layout;
