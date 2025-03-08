import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import NavProduct from "@/components/navproduct";

const bags = [
  {
    id: 1,
    name: "Riñonera Anebre",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    direccion: "/coleccion/rinoneras/anebre",
  },
  {
    id: 2,
    name: "Riñonera Auricular",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    direccion: "/coleccion/rinoneras/auricular",
  },
  {
    id: 3,
    name: "Riñonera Etib",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    direccion: "/coleccion/rinoneras/etib",
  },
  {
    id: 4,
    name: "Riñonera Olimpica",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    direccion: "/coleccion/rinoneras/olimpica",
  },
];
function Layout({ children }) {
  return (
    <div>
      <NavProduct bags={bags} />
      {children}
    </div>
  );
}

export default Layout;
