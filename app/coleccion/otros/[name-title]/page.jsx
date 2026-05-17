import React from 'react';
import OtrosProductos from '../data/OtrosProductos.json';
import OtroClient from './OtroClient';

export async function generateMetadata({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = OtrosProductos.productos.find(
    (p) => p["name-title"] === nameTitle
  );

  return {
    title: producto ? `${producto.name} | Kert S.A.S` : 'Producto no encontrado',
    description: producto ? producto.description : 'Producto no encontrado',
  };
}

export default async function OtroPage({ params }) {
  const { 'name-title': nameTitle } = await params;
  const producto = OtrosProductos.productos.find(
    (p) => p["name-title"] === nameTitle
  );

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return <OtroClient producto={producto} />;
} 