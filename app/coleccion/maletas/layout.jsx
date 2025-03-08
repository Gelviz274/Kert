import React from "react";
import { Backpack } from "lucide-react";
import NavProduct from "@/components/navproduct";

const bags = [
  {
    id: 1,
    name: "Bolso DHL",
    category: "Maletas",
    icon: <Backpack className="w-6 h-6" />,
    direccion: "/coleccion/maletas/bolso-dhl", 
  },
  {
    id: 2,
    name: "Maleta Cemex",
    category: "Maletas",
    icon: <Backpack className="w-6 h-6" />,
    direccion: "/coleccion/maletas/maleta-cemex", 
  },
  {
    id: 3,
    name: "Maleta Isabel",
    category: "Mochilas",
    icon: <Backpack className="w-6 h-6" />,
    direccion: "/coleccion/maletas/maleta-isabel",
  },
  {
    id: 4,
    name: "Mochila Save The Children",
    category: "Mochilas",
    icon: <Backpack className="w-6 h-6" />,
    direccion: "/coleccion/maletas/save-the-children",
  }
];
function Layout({ children }) {
  return (
    <div>
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}

export default Layout;
