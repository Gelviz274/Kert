import React from "react";
import neceserData from "../data/neceser.json";
import NecesClient from "./NecesClient";

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const neceser = neceserData.necesers.find(n => n['name-title'] === nameTitle);
  return {
    title: neceser ? `${neceser.name} | Kert S.A.S - Neceseres al Por Mayor` : 'Neceser no encontrado',
    description: neceser ? `Detalles de ${neceser.name} - ${neceser.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Neceser no encontrado',
    alternates: {
      canonical: `https://creacionkert.com/coleccion/neceser/${nameTitle}`,
    }
  };
}

export default async function NecesPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const neceser = neceserData.necesers.find(n => n['name-title'] === nameTitle);

  if (!neceser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Neceser no encontrado</h2>
        </div>
      </div>
    );
  }

  return <NecesClient neceser={neceser} />;
} 