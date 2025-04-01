import React from "react";
import { Backpack, Ruler, Info, ShoppingBag } from "lucide-react";
import Image from "next/image";
import maletasData from "../data/maletas.json";
import MaletaClient from "./MaletaClient";

export async function generateMetadata({ params }) {
  const nameTitle = (await params)['name-title'];
  const maleta = maletasData.maletas.find(m => m['name-title'] === nameTitle);
  return {
    title: maleta ? `${maleta.name} | Kert S.A.S` : 'Maleta no encontrada',
    description: maleta ? `Detalles de ${maleta.name} - ${maleta.category}` : 'Maleta no encontrada'
  };
}

export default async function MaletaPage({ params }) {
  const nameTitle = (await params)['name-title'];
  const maleta = maletasData.maletas.find(m => m['name-title'] === nameTitle);

  if (!maleta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Maleta no encontrada</h2>
        </div>
      </div>
    );
  }

  return <MaletaClient maleta={maleta} />;
} 