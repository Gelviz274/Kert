"use client";

import React, { useState } from 'react';
import { Backpack, Ruler, Info, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const bags = [
  {
    id: 1,
    name: "Bolso DHL",
    category: "Maletas",
    icon: <Backpack className="w-6 h-6" />,
    dimensions: {
      height: 40,
      width: 26,
      depth: 15
    },
    material: "H600",
    specifications: [
      "Cinco compartimientos, incluyendo bolsillo para portátil con velcro y organizador",
      "Cargadera con malla Sándwich y Yumbolon para mayor comodidad",
      "Reata de pulgada, cremallera y cierre #6",
      "Forro interno en Tifón para mayor durabilidad",
      "Morralera y puntillera en cuero"
    ],
    minOrder: 300,
    maxOrder: 800,
    images: [
      "/Productos/bolso-dhl.jpg",
      "/Productos/bolso-dhl-izquierda.jpg",
      "/Productos/bolso-dhl-cerca.jpg",
      "/Productos/bolso-dhl-atras.jpg",
    ]
  }
];

function App() {
  const [selectedBag] = useState(bags[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Product Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={selectedBag.images[selectedImage]}
                alt={selectedBag.name}
                width={1400}
                height={1400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {selectedBag.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-[#FFCF00]' : ''
                    }`}
                >
                  <img
                    src={image}
                    alt={`${selectedBag.name} vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0C0844]">{selectedBag.name}</h2>
              <p className="text-gray-600 flex items-center gap-2">
                {selectedBag.icon}
                {selectedBag.category}
              </p>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Ruler className="text-[#0C0844]" />
                Dimensiones
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Alto</p>
                  <p className="font-semibold">{selectedBag.dimensions.height} cm</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Ancho</p>
                  <p className="font-semibold">{selectedBag.dimensions.width} cm</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Profundidad</p>
                  <p className="font-semibold">{selectedBag.dimensions.depth} cm</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Info className="text-[#0C0844]" />
                Especificaciones
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {selectedBag.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Order Information */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <ShoppingBag className="text-[#0C0844]" />
                Información de Pedido
              </h3>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-center flex-1 border-r border-gray-200">
                  <p className="text-sm text-gray-600">Pedido Mínimo</p>
                  <p className="text-xl font-bold text-[#0C0844]">
                    {selectedBag.minOrder.toLocaleString()} unidades
                  </p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600">Pedido Máximo</p>
                  <p className="text-xl font-bold text-[#0C0844]">
                    {selectedBag.maxOrder.toLocaleString()} unidades
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#FFCF00] p-4 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold text-[#0C0844] mb-3">¿Quieres hacer un pedido?</p>
              <button className="bg-[#0C0844] hover:bg-azul/95 text-white px-6 py-2 rounded-full">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
