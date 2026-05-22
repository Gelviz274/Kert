"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import OtrosProductos from './data/OtrosProductos.json';

function OtrosPage() {
  return (
    <CategoryListing
      data={OtrosProductos.productos}
      title="Otros Productos"
      description="Descubre nuestra selección de productos adicionales diseñados para complementar tu negocio."
      icon={Briefcase}
      slug="otros"
      searchPlaceholder="Buscar productos por nombre..."
      searchNotFound="No se encontraron productos que coincidan con tu búsqueda."
      sectionTitle="Nuestros Productos"
    />
  );
}

export default OtrosPage;
