"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsas-tela.json';

function BolsasTelaPage() {
  return (
    <CategoryListing
      data={data.productos}
      title="Bolsas en Tela"
      description="Descubre nuestra línea de bolsas en tela, diseñadas para uso diario, dotación y promociones."
      icon={ShoppingBag}
      slug="bolsas-tela"
      searchPlaceholder="Buscar bolsas por nombre..."
      searchNotFound="No se encontraron bolsas que coincidan con tu búsqueda."
      sectionTitle="Nuestras Bolsas en Tela"
    />
  );
}

export default BolsasTelaPage;
