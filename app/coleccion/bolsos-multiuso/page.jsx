"use client";

import React from 'react';
import { Package } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsos-multiuso.json';

function BolsosMultiusoPage() {
  return (
    <CategoryListing
      data={data.productos}
      title="Bolsos Multiuso"
      description="Descubre nuestra línea de bolsos multiuso, versátiles y funcionales para viaje, dotación y uso diario."
      icon={Package}
      slug="bolsos-multiuso"
      searchPlaceholder="Buscar bolsos por nombre..."
      searchNotFound="No se encontraron bolsos que coincidan con tu búsqueda."
      sectionTitle="Nuestros Bolsos Multiuso"
    />
  );
}

export default BolsosMultiusoPage;
