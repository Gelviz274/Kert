"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import CategoryListing from '@/components/CategoryListing';
import OtrosProductos from './data/OtrosProductos.json';

function OtrosPage() {
  return (
    <>
      <CategoryListing
        data={OtrosProductos.productos}
        title="Otros Productos"
        description="Descubre nuestra selección de productos adicionales diseñados para complementar tu negocio."
        icon={Briefcase}
        slug="otros"
        searchPlaceholder="Buscar productos por nombre..."
        searchNotFound="No se encontraron productos que coincidan con tu búsqueda."
        sectionTitle="Nuestros Productos"
      />
      <section className="max-w-5xl mx-auto px-4 py-16 text-gray-700">
        <h2 className="text-2xl font-bold text-azul mb-4">Productos Complementarios al Por Mayor</h2>
        <p className="leading-relaxed mb-4">En Kert S.A.S también fabricamos una línea de productos especializados que complementan nuestra oferta principal. Incluimos botiquines tácticos funcionales, pierneras y accesorios diseñados para necesidades específicas de los sectores de seguridad, salud y emergencias.</p>
        <p className="leading-relaxed mb-4">Cada producto está fabricado con materiales de alta resistencia como lona HTR, lona Oxford y lona Morral PU, garantizando durabilidad en condiciones exigentes. Ideales para dotación de personal operativo, brigadas de emergencia y fuerzas de seguridad.</p>
        <p className="leading-relaxed">Personalizamos cada pedido con las especificaciones de tu organización. Pedido mínimo desde 50 unidades. Contáctanos para recibir asesoría especializada y cotización personalizada.</p>
      </section>
    </>
  );
}

export default OtrosPage;
