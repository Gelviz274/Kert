"use client";

import React from 'react';
import { Package } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsos-multiuso.json';

function BolsosMultiusoPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Bolsos Multiuso al Por Mayor</h2>
        <p className="leading-relaxed mb-4">Nuestra línea de bolsos multiuso está diseñada para quienes buscan versatilidad y amplitud. Ideales para viajes, dotación empresarial y actividades al aire libre. Fabricados con materiales resistentes como lona 840, lona Suiza PVC y lona Kodra, garantizando durabilidad en condiciones exigentes.</p>
        <p className="leading-relaxed mb-4">Disponibles en referencias como WEEKEND, MULTIBOLSILLOS y SHOPPER, con capacidades amplias, múltiples compartimientos y acabados premium. Pedido mínimo desde 120 unidades con personalización completa de marca.</p>
        <p className="leading-relaxed">Perfectos para campañas de marketing, kits de bienvenida, regalos corporativos y dotación de personal operativo. Contáctanos para una cotización personalizada.</p>
      </section>
    </>
  );
}

export default BolsosMultiusoPage;
