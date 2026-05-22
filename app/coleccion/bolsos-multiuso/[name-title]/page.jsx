import React from "react";
import ProductClient from "@/components/ProductClient";
import data from "../data/bolsos-multiuso.json";

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = data.productos.find(p => p['name-title'] === nameTitle);
  return {
    title: producto ? `${producto.name} | Kert S.A.S - Bolsos Multiuso al Por Mayor` : 'Producto no encontrado',
    description: producto ? `Detalles de ${producto.name} - ${producto.category}. Especificaciones, características y opciones de pedido al por mayor.` : 'Producto no encontrado',
    alternates: {
      canonical: `https://creacionkert.com/coleccion/bolsos-multiuso/${nameTitle}`,
    }
  };
}

export default async function BolsoMultiusoPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = data.productos.find(p => p['name-title'] === nameTitle);

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-azul">Producto no encontrado</h2>
        </div>
      </div>
    );
  }

  return <ProductClient product={producto} iconName="package" />;
}
