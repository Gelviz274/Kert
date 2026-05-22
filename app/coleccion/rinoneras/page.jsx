"use client";

import React from 'react';
import { Backpack } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import rinonerasData from './data/rinoneras.json';

function RinonerasPage() {
  return (
    <CategoryListing
      data={rinonerasData.rinoneras}
      title="Colección de Riñoneras"
      description="Descubre nuestra exclusiva selección de riñoneras diseñadas para combinar estilo, durabilidad y funcionalidad."
      icon={Backpack}
      slug="rinoneras"
      searchPlaceholder="Buscar riñoneras por nombre..."
      searchNotFound="No se encontraron riñoneras que coincidan con tu búsqueda."
      sectionTitle="Nuestras Riñoneras"
    />
  );
}

export default RinonerasPage;
