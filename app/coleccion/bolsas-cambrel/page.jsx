"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsas-cambrel.json';

function BolsasCambrelPage() {
  return (
    <CategoryListing
      data={data.productos}
      title="Bolsas en Cambrel"
      description="Descubre nuestra línea de bolsas en cambrel, ideales para eventos, ferias y uso promocional."
      icon={ShoppingBag}
      slug="bolsas-cambrel"
      searchPlaceholder="Buscar bolsas por nombre..."
      searchNotFound="No se encontraron bolsas que coincidan con tu búsqueda."
      sectionTitle="Nuestras Bolsas en Cambrel"
    />
  );
}

export default BolsasCambrelPage;
