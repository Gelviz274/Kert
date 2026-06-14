"use client";

import React from 'react';
import { Backpack } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import maletasData from './data/maletas.json';

function MaletasPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Maletas al Por Mayor en Colombia</h2>
        <p className="leading-relaxed mb-4">Somos fabricantes de maletas en Colombia con más de 5 años de experiencia en el mercado. Ofrecemos maletas corporativas, ejecutivas y promocionales al por mayor con los más altos estándares de calidad. Trabajamos con más de 18 tipos de lona, cremalleras de alta resistencia y herrajes premium para garantizar la durabilidad de cada producto.</p>
        <p className="leading-relaxed mb-4">Nuestras maletas son ideales para dotación empresarial, regalos corporativos, campañas de marketing, eventos y ferias. Personalizamos cada pedido con el logo de tu empresa mediante bordados, estampados y serigrafía. El pedido mínimo es de 50 unidades y realizamos envíos a todo Colombia.</p>
        <p className="leading-relaxed">Contamos con referencias como COLOR BASIC, BLACK MEDIUM, COMPLEX, ALL-IN, TRAVEL LIGHT y EXPLORER, cada una diseñada para satisfacer necesidades específicas de viaje, trabajo y uso diario.</p>
      </section>
    </>
  );
}

export default MaletasPage;
