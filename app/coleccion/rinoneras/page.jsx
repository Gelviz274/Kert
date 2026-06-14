"use client";

import React from 'react';
import { Backpack } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import rinonerasData from './data/rinoneras.json';

function RinonerasPage() {
  return (
    <>
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
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Riñoneras al Por Mayor en Colombia</h2>
        <p className="leading-relaxed mb-4">Fabricamos riñoneras al por mayor en Colombia con materiales de alta resistencia como lona Oxford, lona Nigeria y lona HTR. Nuestras riñoneras son ideales para eventos, campañas promocionales, dotación empresarial y venta al detal. El pedido mínimo es de 150 unidades con personalización disponible en bordado y estampado.</p>
        <p className="leading-relaxed mb-4">Contamos con diseños modernos y funcionales con múltiples compartimientos, cremalleras de seguridad y ajustes ergonómicos. Perfectas para ferias, conciertos, eventos deportivos y uso diario. Realizamos envíos a todo Colombia con tiempos de entrega optimizados.</p>
        <p className="leading-relaxed">Todas nuestras riñoneras pasan por controles de calidad exhaustivos para garantizar la satisfacción de tus clientes. Solicita tu cotización personalizada sin compromiso.</p>
      </section>
    </>
  );
}

export default RinonerasPage;
