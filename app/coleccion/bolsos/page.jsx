"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsos.json';

function BolsosPage() {
  return (
    <CategoryListing
      data={data.productos}
      title="Bolsos"
      description="Descubre nuestra exclusiva selección de bolsos diseñados para combinar estilo, funcionalidad y calidad."
      icon={Briefcase}
      slug="bolsos"
      searchPlaceholder="Buscar bolsos por nombre..."
      searchNotFound="No se encontraron bolsos que coincidan con tu búsqueda."
      sectionTitle="Nuestros Bolsos"
    />
  );
}

export default BolsosPage;
