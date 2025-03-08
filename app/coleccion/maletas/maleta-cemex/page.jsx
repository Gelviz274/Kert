"use client";

import React, { useState } from "react";
import { Backpack, Ruler, Info, DollarSign } from "lucide-react";
import Image from "next/image";


const bags = [
  {
    id: 1,
    name: "Maleta Cemex",
    category: "Maletas",
    icon: <Backpack className="w-6 h-6" />,
    dimensions: {
      height: 45,
      width: 30,
      depth: 18,
    },
    material: "Lona impermeable",
    specifications: [
      "Cuatro compartimientos con cierres reforzados",
      "Bolsillo secreto antirrobo en la parte trasera",
      'Espacio acolchonado para portátil de hasta 16"',
      "Reatas ajustables y acolchadas con ventilación",
      "Diseño ergonómico con refuerzos laterales",
    ],
    price: 40000,
    minOrder: 250,
    maxOrder: 700,
    images: [
      "/Productos/maleta-cemex.jpg",
      "/Productos/maleta-cemex-derecha.webp",
      "/Productos/maleta-cemex-atras.webp",
      "/Productos/maleta-cemex-izquierda.webp",
    ],
  },
];

function App() {
  const [selectedBag] = useState(bags[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={selectedBag.images[selectedImage]}
                alt={selectedBag.name}
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {selectedBag.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-[#FFCF00]" : ""
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
              <h2 className="text-3xl font-bold text-[#0C0844]">
                {selectedBag.name}
              </h2>
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
                  <p className="font-semibold">
                    {selectedBag.dimensions.height} cm
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Ancho</p>
                  <p className="font-semibold">
                    {selectedBag.dimensions.width} cm
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Profundidad</p>
                  <p className="font-semibold">
                    {selectedBag.dimensions.depth} cm
                  </p>
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

            {/* Price */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <DollarSign className="text-[#0C0844]" />
                Precio Unitario
              </h3>
              <p className="text-xl font-bold text-gray-800">
                ${selectedBag.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Para pedidos entre {selectedBag.minOrder.toLocaleString()} a{" "}
                {selectedBag.maxOrder.toLocaleString()}
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#FFCF00] p-4 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold text-[#0C0844] mb-3">
                ¿Quieres hacer un pedido?
              </p>
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
