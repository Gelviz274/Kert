"use client";

import React, { useState } from "react";
import { Ruler, Info, ShoppingBag, Backpack, Briefcase, Package, Tag, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const iconMap = {
  backpack: Backpack,
  briefcase: Briefcase,
  package: Package,
  shoppingBag: ShoppingBag,
};

function ProductClient({ product, iconName }) {
  const Icon = iconName ? iconMap[iconName] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  const refNumber = product.id?.startsWith("ref-") ? product.id : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-amarillo" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-azul">
                  {product.name}
                </h2>
                {refNumber && (
                  <span className="inline-flex items-center gap-1.5 bg-azul text-amarillo px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    <Tag className="w-3.5 h-3.5" />
                    {refNumber.toUpperCase()}
                  </span>
                )}
              </div>
              <p className="text-gray-600 flex items-center gap-2">
                {Icon && <Icon className="w-6 h-6" />}
                {product.category}
              </p>
            </div>

            {/* Banner personalización - Soft UI */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-default overflow-hidden"
            >
              <div className="h-1.5 bg-linear-to-r from-amarillo via-amarillo/70 to-amarillo/20" />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-azul/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-azul/10">
                    <Sparkles className="w-5 h-5 text-azul" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-azul uppercase tracking-[0.08em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amarillo" />
                      Personalizable
                    </span>
                    <p className="text-gray-900 leading-relaxed font-medium">
                      Cada producto se fabrica a la medida de tu organización, con opciones de personalización en materiales, colores, dimensiones, compartimientos, bordados, estampados y acabados.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                <span className="font-semibold text-azul">Material:</span> {product.material}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Ruler className="text-azul" />
                Dimensiones
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Alto</p>
                  <p className="font-semibold">
                    {product.dimensions.height} cm
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Ancho</p>
                  <p className="font-semibold">
                    {product.dimensions.width} cm
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Profundidad</p>
                  <p className="font-semibold">
                    {product.dimensions.depth} cm
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Info className="text-azul" />
                Especificaciones
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <ShoppingBag className="text-azul" />
                Información de Pedido
              </h3>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600">Pedido Mínimo</p>
                  <p className="text-xl font-bold text-azul">
                    {product.minOrder.toLocaleString()} unidades
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amarillo p-4 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold text-azul mb-3">
                ¿Quieres hacer un pedido?
              </p>
              <button
                onClick={() => {
                  const productName = product.name;
                  const refStr = refNumber ? `${refNumber.toUpperCase()}` : null;
                  const message = refStr
                    ? `Hola Kert, me gustaría cotizar un pedido personalizado de ${productName} (Ref. ${refStr})`
                    : `Hola Kert, me gustaría cotizar un pedido personalizado de ${productName}`;
                  window.open(`https://wa.me/+573116095224?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-azul hover:bg-azul/95 text-white px-6 py-2 rounded-full cursor-pointer"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductClient;
