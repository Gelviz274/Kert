"use client";

import React from 'react';
import { Backpack } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import maletasData from './data/maletas.json';

function MaletasPage() {
  return (
    <CategoryListing
      data={maletasData.maletas}
      title="Colección de Maletas"
      description="Descubre nuestra exclusiva selección de maletas diseñadas para combinar estilo, durabilidad y funcionalidad."
      icon={Backpack}
      slug="maletas"
      searchPlaceholder="Buscar maletas por nombre..."
      searchNotFound="No se encontraron maletas que coincidan con tu búsqueda."
      sectionTitle="Nuestras Maletas"
    />
  );
}

export default MaletasPage;
