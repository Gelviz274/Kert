import React from "react";
import rinonerasData from "../data/rinoneras.json";
import RinoClient from "./RinoClient";

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const rinonera = rinonerasData.rinoneras.find(r => r['name-title'] === nameTitle);
  return {
    title: rinonera ? `${rinonera.name} | Kert S.A.S - Riñoneras al Por Mayor` : 'Riñonera no encontrada',
    description: rinonera ? `Detalles de ${rinonera.name} - ${rinonera.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Riñonera no encontrada',
    alternates: {
      canonical: `https://creacionkert.com/coleccion/rinoneras/${nameTitle}`,
    }
  };
}

export default async function RinoneraPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const rinonera = rinonerasData.rinoneras.find(r => r['name-title'] === nameTitle);

  if (!rinonera) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Riñonera no encontrada</h2>
        </div>
      </div>
    );
  }

  return <RinoClient rinonera={rinonera} />;
} 