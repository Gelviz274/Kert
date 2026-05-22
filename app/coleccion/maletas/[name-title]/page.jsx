import React from "react";
import ProductClient from "@/components/ProductClient";
import maletasData from "../data/maletas.json";

export async function generateMetadata({ params }) {
  const nameTitle = (await params)['name-title'];
  const maleta = maletasData.maletas.find(m => m['name-title'] === nameTitle);
  return {
    title: maleta ? `${maleta.name} | Kert S.A.S - Maletas al Por Mayor` : 'Maleta no encontrada',
    description: maleta ? `Detalles de ${maleta.name} - ${maleta.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Maleta no encontrada',
    alternates: {
      canonical: `https://creacionkert.com/coleccion/maletas/${nameTitle}`,
    }
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

  return <ProductClient product={maleta} iconName="backpack" />;
}
