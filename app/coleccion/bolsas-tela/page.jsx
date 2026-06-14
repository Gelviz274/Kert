"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsas-tela.json';

function BolsasTelaPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Bolsas en Tela al Por Mayor</h2>
        <p className="leading-relaxed mb-4">Nuestras bolsas en tela combinan elegancia y durabilidad en materiales textiles de alta calidad. Ideales para dotación empresarial, ferias ecológicas, campañas de concientización y uso diario. Fabricadas en Canvas Clásico, Shopper Premium y Multiusos, con materiales resistentes y acabados cuidados.</p>
        <p className="leading-relaxed mb-4">Perfectas para supermercados, tiendas de moda, ferias artesanales y eventos sostenibles. Personalizables con bordados, serigrafía o estampados. Pedido mínimo desde 150 unidades con envíos a todo Colombia.</p>
        <p className="leading-relaxed">Todas nuestras bolsas en tela pasan por rigurosos controles de calidad para asegurar la mejor experiencia a tus clientes. Contáctanos para conocer nuestras referencias y solicitar una cotización.</p>
      </section>
    </>
  );
}

export default BolsasTelaPage;
