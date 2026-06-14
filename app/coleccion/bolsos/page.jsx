"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsos.json';

function BolsosPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Bolsos al Por Mayor en Colombia</h2>
        <p className="leading-relaxed mb-4">Somos fabricantes de bolsos en Colombia con diseños modernos y funcionales para distribuidores y mayoristas. Nuestra línea incluye City Bag, Cross Body, Executive y más, fabricados con lonas premium como Oxford, Ducati y Rombo. Cada bolso combina estilo contemporáneo con la durabilidad que exige el uso diario.</p>
        <p className="leading-relaxed mb-4">Ideal para tiendas de moda, boutiques, dotación empresarial y regalos corporativos. Personalizamos con tu marca mediante bordados, estampados o serigrafía. Pedido mínimo de 150 unidades con envíos a todo el territorio nacional.</p>
        <p className="leading-relaxed">Nuestros bolsos destacan por sus acabados premium, costuras reforzadas y herrajes de alta resistencia. Contáctanos para recibir asesoría personalizada y cotización sin compromiso.</p>
      </section>
    </>
  );
}

export default BolsosPage;
