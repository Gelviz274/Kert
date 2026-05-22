"use client";

import React, { useState } from "react";
import { Ruler, Info, ShoppingBag, Backpack, Briefcase, Package } from "lucide-react";
import Image from "next/image";

const iconMap = {
  backpack: Backpack,
  briefcase: Briefcase,
  package: Package,
  shoppingBag: ShoppingBag,
};

function ProductClient({ product, iconName }) {
  const Icon = iconName ? iconMap[iconName] : null;
  const [selectedImage, setSelectedImage] = useState(0);

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
              <h2 className="text-3xl font-bold text-azul">
                {product.name}
              </h2>
              <p className="text-gray-600 flex items-center gap-2">
                {Icon && <Icon className="w-6 h-6" />}
                {product.category}
              </p>
            </div>

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
                onClick={() => window.open('https://wa.me/+573116095224', '_blank')}
                className="bg-azul hover:bg-azul/95 text-white px-6 py-2 rounded-full"
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
