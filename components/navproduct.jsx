"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const route_excuide = [
  "/coleccion/maletas",
  "/coleccion/rinoneras",
  "/coleccion/bolsas-cambrel",
  "/coleccion/bolsas-tela",
  "/coleccion/bolsos",
  "/coleccion/bolsos-multiuso",
  "/coleccion/otros",
];

function NavProduct({ bags }) {
  const router = useRouter();
  const pathname = usePathname();
  
 // Verifica si la ruta actual está en la lista de rutas a excluir 
  if (route_excuide.includes(pathname)) {
    return null;
  }
  return (
    <div className="container mx-auto px-4">
      <div className="flex overflow-x-auto py-4 gap-4">
        {bags.map((bag) => (
          <button
            key={bag.id}
            onClick={() => router.push(bag.direccion)}
            className="flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {bag.icon}
            <span className="ml-2">{bag.nombre || bag.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavProduct;
