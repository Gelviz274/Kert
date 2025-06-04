import React from 'react';
import OtrosProductos from '../data/OtrosProductos.json';
import OtroClient from './OtroClient';

export async function generateMetadata({ params }) {
  const producto = OtrosProductos.productos.find(
    (p) => p["name-title"] === params["name-title"]
  );

  return {
    title: producto ? `${producto.name} | Kert S.A.S` : 'Producto no encontrado',
    description: producto ? producto.description : 'Producto no encontrado',
  };
}

export default function OtroPage({ params }) {
  const producto = OtrosProductos.productos.find(
    (p) => p["name-title"] === params["name-title"]
  );

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return <OtroClient producto={producto} />;
} 