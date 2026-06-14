"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import data from './data/bolsas-cambrel.json';

function BolsasCambrelPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Bolsas en Cambrel al Por Mayor</h2>
        <p className="leading-relaxed mb-4">Las bolsas en cambrel de Kert S.A.S son la solución ideal para ferias comerciales, eventos promocionales y campañas de marketing. El cambrel es un material liviano pero resistente que permite imprimir diseños llamativos con colores vibrantes, perfecto para merchandise y regalos corporativos.</p>
        <p className="leading-relaxed mb-4">Fabricamos bolsas en cambrel de alta calidad con costuras reforzadas y acabados profesionales. Pedido mínimo desde 300 unidades con personalización gráfica total. Ideales para congresos, lanzamientos de producto y eventos masivos.</p>
        <p className="leading-relaxed">Solicita tu cotización y descubre por qué somos el fabricante preferido de bolsas promocionales en Colombia. Envíos a nivel nacional con tiempos de entrega garantizados.</p>
      </section>
    </>
  );
}

export default BolsasCambrelPage;
